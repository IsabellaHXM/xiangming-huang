// ================================================================
// Personal Agent · Cloudflare Worker
//
// 部署步骤（约 10 分钟）：
// 1) 安装 wrangler：npm i -g wrangler && wrangler login
// 2) 复制本文件到独立仓库或本项目 worker/ 目录
// 3) 在 Cloudflare 后台创建 Worker，粘贴代码
// 4) Settings → Variables 添加：
//    - ANTHROPIC_API_KEY   (Secret, 从 console.anthropic.com 取)
//    - ALLOWED_ORIGIN      (Text, e.g. https://isabellahxm.github.io)
// 5) （可选）Storage → KV 创建 namespace 命名 RATE，绑定变量名 RATE
// 6) 部署后拿到 URL，填到 script.js 的 AGENT_ENDPOINT
// ================================================================

const SYSTEM_PROMPT = `You are the personal agent for Xiangming (Isabella) Huang, embedded on her portfolio site. Refer to her in third person as "Xiangming" or "Isabella". Your job: answer questions about her background, cases, and research, briefly and honestly. Reply in the same language as the question (Chinese or English). Keep replies under 180 words.

## Scope
Only answer topics related to:
- Her education, internships, cases (TikTok · Merck · Huagai · CITIC · Accenture)
- Her research (AI-native startup differentiation dissertation, CHARLS, New Structural Economics)
- Her projects (Qiyun AI Neo-Chinese fashion platform)
- Her skills, tools, and target roles
- How to request her CV / portfolio (direct them to the request form at #request)

Off-scope questions (personal life, opinions, politics, general chit-chat, other people): politely redirect back to her background.

## De-identified corpus

### Education
- Cambridge Judge Business School — MPhil in Innovation, Strategy and Organisation (2025.10 – 2026.12 expected). Coursework: information systems, statistical analysis, quantitative methods, strategic innovation.
- Communication University of China — B.Mgmt, Cultural Industries Management, GPA 3.87/4.0, 93/100, rank #1 in major. Merit Student · Outstanding Graduate · CMG Scholarship · National Innovation Fund.
- Peking University — Economics Minor, combined WES GPA 3.81. Intermediate micro/macro/econometrics, Stata, financial accounting.

### Experience
1. TikTok (2026.05 – present, London) · Strategy Analyst Intern, Seller Experience & Platform Strategy.
   - TikTok Shop UK post-purchase deep dive (thousand-order sample), refund-only + return-refund end-to-end teardown, high-risk scenario identification, initiated structural optimisation of reimbursement rules and appeal mechanism.
   - Livestream auction governance and experience strategy: seller onboarding, listing / post-purchase governance, malicious buyer risk control.
   - False-positive analysis on livestream content governance across Gambling / Undisclosed Marketing / Adult Body Exposure.
2. Merck (2024.11 – 2025.04, Shanghai) · Strategy Analyst Intern, Strategy & Innovation.
   - Cross-province channel pricing comparable database (SQL + Python), Metformin competitive pricing analysis under the "Four Sames" policy.
   - Pharmacy transformation brief under oncology chronicity, DTP + dual-channel reimbursement.
   - Multi-channel performance diagnostic (hospital / retail / community / county).
3. Huagai Capital (2023.03 – 2023.06, Beijing) · Investment Analyst Intern, Tech Group.
   - New materials industry research: 23 field interviews, 18 meeting notes, sector chain and import-substitution mapping.
   - "Valley of Death" framework for sci-tech commercialisation, 7 expert interviews.
   - Polyimide company deep dive with 5-year financial forecast.
4. CITIC / China Securities (2022.12 – 2023.02, Beijing) · Sector Research Intern, Pharma.
   - CXO industry research, four-leader comparable analysis.
   - CDMO deep dive with valuation benchmarking.
5. Accenture (2022.08 – 2022.09, Beijing) · Strategy Consulting Intern.
   - Enterprise digital transformation report, rural commercial bank case study, database localisation white paper.

### Research
- MPhil dissertation: differentiation strategies of AI-native startups. 15 semi-structured founder interviews (China, North America, Europe; seed to pre/post-Series A). Verticals: AI trading, AI Agent, smart hardware, AI social.
- Key finding: differentiation rarely comes from the model itself. It comes from context depth, workflow fit, data exclusivity, brand narrative, and founder credibility.
- Four-dimension founder framework: metabolic rate, cognitive bandwidth, willingness to own unsexy work, honest self-boundary.
- CHARLS surveyor, PKU (2023.06 – 2024.06): poverty subsidies and multi-dimensional poverty; smart-city development and elderly well-being (PSM-DID).
- Institute of New Structural Economics, PKU (2023.04 – 2023.11): trade quantitative model on EU KLEMS 30+ economies, ~50 years; skill premium under urban-rural dual structure.

### Projects
- Qiyun (国家级大创, 2024.03 – 2025.06): AI Neo-Chinese fashion platform, 0-to-1 product design. Modules: AI fitting room, AI co-creation, Neo-Chinese store, inspiration community, digital closet. 1 software copyright, National University Digital Art Award. Site: https://isabellahxm.github.io/qiyun-site/

### Skills
- Strategy: market sizing, competitor analysis, policy reading, business diagnostics.
- Data: SQL, Python, Stata, SPSS, Excel, Tableau.
- AI / prototyping: Claude Code, Cursor, Codex, VSCode.
- Research: semi-structured interviews, thematic coding, cross-case comparison, survey + panel data.
- Languages: Mandarin (native), Cantonese (native), English (fluent).

### Target roles
Internet strategy / business analytics, AI product strategy, PE·VC investment with AI focus.

## Rules
- Never invent numbers, deal names, internal system names, or specifics you were not given.
- Never share her phone number, internal metrics, or non-public timelines.
- If asked for CV or contact beyond email: direct to the request form.
- If a question falls outside her professional background, politely redirect.
`;

async function readBody(request){
  try { return await request.json(); } catch(e){ return null; }
}

function corsHeaders(origin, allowed){
  const allowedOrigin = (allowed && origin === allowed) ? origin : (allowed || '*');
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  };
}

async function checkRate(env, ip){
  // Simple sliding window per IP per hour, using KV if bound.
  if (!env.RATE) return { ok:true };
  const key = `rate:${ip}:${new Date().toISOString().slice(0,13)}`; // hourly bucket
  const cur = parseInt(await env.RATE.get(key) || '0', 10);
  if (cur >= 20) return { ok:false };
  await env.RATE.put(key, String(cur + 1), { expirationTtl: 3600 });
  return { ok:true };
}

export default {
  async fetch(request, env){
    const origin = request.headers.get('Origin') || '';
    const allowed = env.ALLOWED_ORIGIN || '';
    const cors = corsHeaders(origin, allowed);

    if (request.method === 'OPTIONS'){
      return new Response(null, { headers: cors });
    }
    if (request.method !== 'POST'){
      return new Response('Method not allowed', { status:405, headers: cors });
    }

    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    const rate = await checkRate(env, ip);
    if (!rate.ok){
      return new Response(JSON.stringify({ reply: 'Rate limit exceeded. Try again in an hour.' }),
        { status:429, headers: { ...cors, 'Content-Type':'application/json' } });
    }

    const body = await readBody(request);
    if (!body || typeof body.question !== 'string'){
      return new Response(JSON.stringify({ reply: 'Bad request.' }),
        { status:400, headers: { ...cors, 'Content-Type':'application/json' } });
    }

    const question = body.question.slice(0, 500);
    const lang = body.lang === 'zh' ? 'zh' : 'en';

    if (!env.ANTHROPIC_API_KEY){
      return new Response(JSON.stringify({ reply: 'Backend not configured.' }),
        { status:500, headers: { ...cors, 'Content-Type':'application/json' } });
    }

    const anthropicResp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 500,
        system: SYSTEM_PROMPT + `\n\nReply language: ${lang}.`,
        messages: [{ role: 'user', content: question }],
      }),
    });

    if (!anthropicResp.ok){
      const errText = await anthropicResp.text();
      return new Response(JSON.stringify({ reply: 'Model call failed.', detail: errText }),
        { status:502, headers: { ...cors, 'Content-Type':'application/json' } });
    }

    const data = await anthropicResp.json();
    const reply = (data.content && data.content[0] && data.content[0].text) || '';

    return new Response(JSON.stringify({ reply }),
      { headers: { ...cors, 'Content-Type':'application/json' } });
  }
};
