// ================================================================
// 国际化 · 中英双语文案 · 视角高亮变体
// ================================================================

const I18N_ZH = {
  'mark': '黄香铭',
  'nav.work': '案例',
  'nav.research': '研究',
  'nav.agent': 'Agent',
  'nav.request': '申请材料',

  'hero.eyebrow': '<a href="https://www.jbs.cam.ac.uk" target="_blank" rel="noopener">剑桥大学贾奇商学院</a> · MPhil 在读',
  'hero.title': '用数据讲清楚商业，把判断做成产品。',
  'hero.sub': '战略 · AI 产品 · 投资',
  'hero.name': '黄香铭',
  'hero.name.en': 'Xiangming Huang',

  'lens.prompt': '你在招聘 —',
  'lens.all': '通用视角',
  'lens.strategy': '互联网战略 / 商分',
  'lens.product': 'AI 产品策略',
  'lens.invest': '投资与行业研究',

  'cta.work': '查看精选案例',
  'cta.request': '申请完整简历',
  'cta.contact': '联系我',

  'about.label': '关于',
  'about.p1': '我在<a href="https://www.jbs.cam.ac.uk" target="_blank" rel="noopener"><em>剑桥大学贾奇商学院</em></a>攻读 Innovation, Strategy and Organisation MPhil，研究方向是信息系统。',
  'about.p2': '目前，我在伦敦 <em><a href="https://www.tiktok.com" target="_blank" rel="noopener">TikTok Shop</a></em> 做平台策略与商家体验分析。此前，我在 <em><a href="https://www.merckgroup.com" target="_blank" rel="noopener">Merck</a></em> 做渠道定价与业务诊断，在 <em><a href="https://www.hillhousecap.com" target="_blank" rel="noopener">华盖资本</a></em> 和 <em><a href="https://www.citicsecurities.com" target="_blank" rel="noopener">中信建投</a></em> 做投研分析，在 <em><a href="https://www.accenture.com" target="_blank" rel="noopener">Accenture</a></em> 做战略咨询。',
  'about.p3': '这些经历横跨咨询、投资与产品策略，但做的始终是同一件事：在模糊的业务问题里建立框架，用数据形成判断，再把判断变成能落地的策略或产品。',
  'about.p1.strategy': '我在<a href="https://www.jbs.cam.ac.uk" target="_blank" rel="noopener"><em>剑桥大学贾奇商学院</em></a>攻读 Innovation, Strategy and Organisation MPhil，研究方向是信息系统。我关心的问题是：<em>技术如何在组织中被理解、被采纳，并最终转化为可执行的策略</em>。',
  'about.p1.product': '我在<a href="https://www.jbs.cam.ac.uk" target="_blank" rel="noopener"><em>剑桥大学贾奇商学院</em></a>攻读 Innovation, Strategy and Organisation MPhil，研究方向是信息系统。我关心的问题是：<em>在共享大模型能力下，AI 产品如何建立差异化并跑到 PMF</em>。',
  'about.p1.invest': '我在<a href="https://www.jbs.cam.ac.uk" target="_blank" rel="noopener"><em>剑桥大学贾奇商学院</em></a>攻读 Innovation, Strategy and Organisation MPhil，研究方向是信息系统。我关心的问题是：<em>技术、组织与市场三者的耦合关系，如何决定一家公司值不值得投</em>。',

  'ink.eyebrow': '摘自 dissertation',
  'ink.quote': '当模型能力被共同拥有，差异化就不再关于模型本身——而关于场景的深度、工作流的贴合、数据的独占，以及叙述者是否可信。',
  'ink.cite': '——《AI-native 创业公司差异化策略》，<a href="https://www.jbs.cam.ac.uk" target="_blank" rel="noopener">剑桥大学</a>，2026',

  'work.label': '精选案例',
  'work.intro': '三个跨行业的案例，每个都以「问题 — 分析 — 产出 — 影响」四段拆解。当前视角下的重点已高亮。',

  'fold.problem': '问题',
  'fold.analysis': '分析',
  'fold.output': '产出',
  'fold.impact': '影响',

  'case.tt.tag': '互联网战略 · AI 产品',
  'case.tt.title': '案例 1 · TikTok Shop UK',
  'case.tt.role': '战略分析实习 · 伦敦',
  'case.tt.p': '英国站拍卖售后新政策上线后，团队需要判断 cancellation、refund-only、return & refund 三类逆向流程是否真正改善商家体验，并识别剩余争议来自规则覆盖、客服执行、策略配置，还是数据一致性。',
  'case.tt.p.strategy': '英国站拍卖售后新政策上线后，团队需要判断三类逆向流程是否真正改善商家体验，并区分争议究竟由规则覆盖、客服执行、策略配置还是数据一致性造成。',
  'case.tt.p.product': '新政策上线后，最难的问题变成：哪些问题真的被解决了，哪些只是换了形态。',
  'case.tt.a1': '基于大样本拍卖售后订单，对三类逆向流程做端到端拆解，覆盖审核、自动审批、平台仲裁、卖家申诉与赔付全链路。',
  'case.tt.a1.strategy': '基于大样本拍卖售后订单，对三类逆向流程做端到端拆解，覆盖审核、自动审批、平台仲裁、卖家申诉与赔付全链路。',
  'case.tt.a1.product': '把审核、自动审批、平台仲裁、卖家申诉与赔付看作一条产品链路，定位体验断点与决策不透明的场景。',
  'case.tt.a2': '通过路径分析与 case review 验证新政策的实际效果，定位仍存在体验争议的场景。',
  'case.tt.a3': '将剩余问题归因至四类：自动审批策略适配、客服执行、规则覆盖缺口与数据一致性。',
  'case.tt.o1': '输出拍卖售后体验深度诊断报告，提出售后规则、赔付机制与 CS SOP 的优化建议。',
  'case.tt.o2': '参与直播拍卖治理与体验策略，覆盖商家准入、发品治理、售后责任分配与恶意买家风险。',
  'case.tt.o3': '针对电商直播内容治理误伤开展专项分析，从策略、审核队列、复核机制与数据权限四层提出建议。',
  'case.tt.i': '诊断帮助团队区分「已被新政策解决的问题」与「仍需规则或流程优化的剩余问题」，为后续售后规则校验、赔付机制完善与仲裁流程优化提供优先级依据。',
  'case.tt.i.strategy': '诊断帮助团队区分已被新政策解决的问题与仍需规则或流程优化的剩余问题，为后续规则校验与仲裁流程优化提供优先级依据。',
  'case.tt.i.product': '诊断帮助团队区分已被新政策解决的问题与仍需规则或流程优化的剩余问题，并把机制解释能力视作治理产品的一项关键指标。',

  'case.mk.tag': '战略商分 · 行业研究',
  'case.mk.title': '案例 2 · Merck',
  'case.mk.role': '战略分析实习 · 上海',
  'case.mk.p': '同一盒药，跨省价差大到业务侧看不清成因。判断之前，先让价格变成可比的数据。',
  'case.mk.p.strategy': '医院端与零售端价格口径不一，跨省差异复杂，“四同”政策落地节奏不同进一步放大信息不对称，业务侧难以快速定位价格偏差成因。',
  'case.mk.p.invest': '从投资视角看，理解一家药企的真实健康度，需要穿透渠道结构与政策周期，而不是只看合并报表。',
  'case.mk.a1': '用 SQL 清洗医院端价格数据，用 Python 爬虫采集零售端价格，建成跨省可比价格数据库。',
  'case.mk.a2': '以 Metformin 为核心样本，比较竞品在不同省份、渠道与政策环境下的价格差异，并从政策、竞争格局与渠道结构解释价格偏差。',
  'case.mk.a3': '进一步拆解医院、零售、社区、县域四类渠道表现，量化增长驱动、结构性风险与区域差异。',
  'case.mk.o1': '输出跨省渠道定价与竞品分析报告。',
  'case.mk.o2': '形成多渠道业绩诊断，识别增长驱动、区域分化与业务风险。',
  'case.mk.o3': '围绕肿瘤慢病化趋势与药房转型，提出渠道策略与业务机会判断。',
  'case.mk.i': '相关分析支持战略创新团队年度渠道复盘、业务诊断与行业会议输出。',

  'case.hg.tag': '投资研究 · 产业分析',
  'case.hg.title': '案例 3 · Huagai Capital',
  'case.hg.role': '投资分析实习 · 北京',
  'case.hg.p': '新材料投资最难的判断在「死亡谷」：技术已经走出实验室，还没走进产线。',
  'case.hg.p.invest': '新材料投资最难的判断在「死亡谷」：技术已经走出实验室，还没走进产线。',
  'case.hg.a1': '23 场实地访谈，18 份纪要。梳理新材料产业链、下游应用、竞争格局与国产替代趋势，落成《新材料行业研究报告》与《新材料产业投资策略》。',
  'case.hg.a2': '独立完成一家聚酰亚胺企业的深度研究，用「死亡谷」框架从四个维度评估公司：技术成熟度、产业化路径、市场需求与变现能力，并构建五年财务预测模型。',
  'case.hg.a3': '从技术成熟度、产业化路径、市场需求与变现能力四个维度评估公司，构建 5 年财务预测模型。',
  'case.hg.o1': '《新材料行业研究报告》。',
  'case.hg.o2': '《新材料产业投资策略》。',
  'case.hg.o3': '《聚酰亚胺企业投资研究报告》。',
  'case.hg.i': '结论用于投资标的筛选与产业合作机会判断。',

  'research.label': '研究',
  'research.qtag': '研究问题',
  'research.q': '当大家都在谈论 AI-native 的时候，到底在谈论什么？',
  'research.method.title': '方法',
  'research.method': '基于对 15 位 AI-native 创始人的访谈（覆盖 AI 交易、AI Agent、智能硬件、AI-native 社交），我用企业材料分析、主题编码与跨案例比较来系统判断一家公司是否真的改变了场景、工作流与商业闭环。',
  'research.scope.title': '对象',
  'research.scope': 'AI 交易、AI Agent、智能硬件、AI-native 社交。',
  'research.finding.title': '核心发现',
  'research.finding': '我不认为 AI-native 只是「用了 AI 的产品」。真正值得判断的是：AI 是否改变了使用场景、工作流、数据积累方式，以及公司的商业闭环。',

  'fw.eyebrow': '从访谈中提炼',
  'fw.title': '创始人评估四维',
  'fw.1.name': '代谢速度',
  'fw.1.desc': '从收到信号到做出取舍的时间。',
  'fw.2.name': '认知带宽',
  'fw.2.desc': '同时容纳产品、组织、资本三层思考的能力。',
  'fw.3.name': '承接不性感环节的意愿',
  'fw.3.desc': '是否愿意长期做脏活、慢活、数据活。',
  'fw.4.name': '诚实的边界感',
  'fw.4.desc': '对自己不擅长的部分是否有清晰交代。',

  'research.more': '其他研究经历（CHARLS · 新结构经济学）',
  'research.charls.title': '中国健康与养老追踪调查（CHARLS）',
  'research.charls.body': ' · 北京大学 · 2023.06 – 2024.06。两篇研究：贫困补贴对中老年多维贫困的影响；智慧城市建设对中老年幸福感的影响。',
  'research.nse.title': '新结构经济学研究院',
  'research.nse.body': ' · 北京大学 · 2023.04 – 2023.11。用 STATA 测算 EU KLEMS 数据库中 30+ 国家近 50 年的劳动技能溢价数据，验证 H-O 理论在城乡二元结构下的预测偏误。',

  'proj.label': '项目',
  'proj.tag': '国家级大创项目 · 负责人 · 2024–2025',
  'proj.name': '旗韵 · AI 新中式穿搭平台',
  'proj.brief': '从 0 到 1 完成产品设计与 Demo 落地——用 Claude 和 VSCode 构建，现在还在线上运行。',
  'proj.output': '1 项软件著作权，全国高校数字艺术大赛获奖。',
  'proj.cta': '查看项目 →',

  'agent.label': '和我的 Agent 聊聊',
  'agent.intro': '这个 Agent 用我脱敏后的资料构建，可以回答关于我背景、案例与研究的问题。它同时是回答本身：一个 AI 产品能力的现场证明。',
  'agent.welcome': '你好。你可以问我关于她的背景、案例，或者 dissertation 的问题。',
  'agent.q1': '她适合什么岗位？',
  'agent.q2': 'TikTok 项目具体做了什么？',
  'agent.q3': 'dissertation 的核心发现是什么？',
  'agent.q4': '她的技术栈是什么？',
  'agent.placeholder': '输入你的问题（中英文均可）',
  'agent.privacy': '对话不会被存储。护栏：仅回答专业相关问题；每 IP 每小时 20 条。',
  'agent.followup': '如需完整简历，可在下方申请。',
  'agent.error': '连接暂时不通。你可以先看看下方的案例与研究，或直接申请简历。',
  'agent.notconfigured': '这个 Agent 还没接上后端。作者正在部署 Cloudflare Worker——很快就能对话了。同期你可以看下方的案例，或直接申请材料。',

  'tool.label': '方法与工具',
  'tool.strategy': '战略分析',
  'tool.strategy.list': '市场规模测算 · 竞品分析 · 政策分析 · 业务诊断',
  'tool.data': '数据与建模',
  'tool.ai': 'AI 与原型',
  'tool.research': '研究方法',
  'tool.research.list': '半结构化访谈 · 主题编码 · 跨案例比较 · 问卷与面板数据分析',
  'tool.lang': '语言',
  'tool.lang.list': '普通话 · 粤语 · 英语',

  'req.label': '申请材料',
  'req.intro': '完整简历与作品集按需分享。留下你的信息，我会在 24 小时内回复。',
  'req.cv.title': '完整简历（PDF）',
  'req.cv.desc': '中英双版，包含所有联系方式。',
  'req.pf.title': '作品集材料',
  'req.pf.desc': '实习产出脱敏样例 + 研究报告样例。',

  'col.qiyun': '旗韵项目',
  'col.london': '目前在伦敦',
  'col.credit': '本站由 Claude Code 构建 · 设计与文字均为原创 · © 2026 Xiangming Huang',

  'modal.s1.title': '你以什么身份申请？',
  'modal.s1.desc': '这有助于我判断合适的分享版本。',
  'modal.identity.company': '公司 / 团队',
  'modal.identity.company.sub': '代表公司需求',
  'modal.identity.personal': '个人',
  'modal.identity.personal.sub': '个人参考或交流',
  'modal.back': '← 返回',
  'modal.s2.title': '填写申请信息',
  'modal.s2.title.company': '请填写公司信息',
  'modal.s2.title.personal': '请填写个人信息',
  'modal.s2.desc': '我会在 24 小时内查看。',
  'modal.s3.title': '申请已提交',
  'modal.s3.desc': '感谢申请。我已收到请求，并会在 24 小时内查看。',
  'modal.s3.ok': '好的',
  'modal.material.portfolio': '申请 · 作品集材料',
  'modal.material.cv': '申请 · 完整简历',

  'form.company': '公司 / 团队名称 <em>*</em>',
  'form.company.ph': '例：TikTok / Anthropic / 高瓴资本',
  'form.name': '你的姓名 <em>*</em>',
  'form.name.ph': '真实姓名',
  'form.email': '联系邮箱 <em>*</em>',
  'form.email.ph': '用于接收材料',
  'form.role': '角色 / 岗位',
  'form.role.ph': '例：HR / 招聘经理 / 投资人 / 学生',
  'form.purpose': '申请用途 <em>*</em>',
  'form.purpose.ph': '简要说明用途，如：某岗位面试评估 / 项目合作参考',
  'form.submit': '提交申请',
  'form.sending': '发送中…',
  'form.material.portfolio': '作品集材料',
  'form.material.cv': '完整简历',
  'form.identity.company': '公司 / 团队',
  'form.identity.personal': '个人',
};

const I18N_EN = {
  'mark': 'Isabella Huang',
  'nav.work': 'Work',
  'nav.research': 'Research',
  'nav.agent': 'Agent',
  'nav.request': 'Request',

  'hero.eyebrow': '<a href="https://www.jbs.cam.ac.uk" target="_blank" rel="noopener">Cambridge Judge</a> · MPhil in progress',
  'hero.title': 'Make business legible with data. Turn judgment into product.',
  'hero.sub': 'Strategy · AI Product · Investment',
  'hero.name': 'Xiangming Huang',
  'hero.name.en': '黄香铭',

  'lens.prompt': "You're hiring for —",
  'lens.all': 'Any',
  'lens.strategy': 'Strategy / Biz Analytics',
  'lens.product': 'AI Product',
  'lens.invest': 'Investment / Sector Research',

  'cta.work': 'See selected work',
  'cta.request': 'Request full CV',
  'cta.contact': 'Get in touch',

  'about.label': 'About',
  'about.p1': 'I am pursuing an MPhil in Innovation, Strategy and Organisation at <a href="https://www.jbs.cam.ac.uk" target="_blank" rel="noopener"><em>Cambridge Judge Business School</em></a>, with a research focus on information systems.',
  'about.p2': 'Currently, I work on platform strategy and seller-experience analytics at <em><a href="https://www.tiktok.com" target="_blank" rel="noopener">TikTok Shop</a></em> in London. Previously, I worked on channel pricing and business diagnostics at <em><a href="https://www.merckgroup.com" target="_blank" rel="noopener">Merck</a></em>, investment research at <em><a href="https://www.hillhousecap.com" target="_blank" rel="noopener">Huagai Capital</a></em> and <em><a href="https://www.citicsecurities.com" target="_blank" rel="noopener">China Securities</a></em>, and strategy consulting at <em><a href="https://www.accenture.com" target="_blank" rel="noopener">Accenture</a></em>.',
  'about.p3': 'Across consulting, investment and e-commerce, the discipline is the same: frame an ambiguous business problem, build the analysis, form a judgment from data — then turn that judgment into a strategy or a product that ships.',
  'about.p1.strategy': 'I am pursuing an MPhil in Innovation, Strategy and Organisation at <a href="https://www.jbs.cam.ac.uk" target="_blank" rel="noopener"><em>Cambridge Judge Business School</em></a>, with a research focus on information systems. My core question: <em>how technology gets understood inside organisations, adopted, and eventually turned into an executable strategy</em>.',
  'about.p1.product': 'I am pursuing an MPhil in Innovation, Strategy and Organisation at <a href="https://www.jbs.cam.ac.uk" target="_blank" rel="noopener"><em>Cambridge Judge Business School</em></a>, with a research focus on information systems. My core question: <em>under shared foundation-model capability, how does an AI product build differentiation and reach PMF</em>.',
  'about.p1.invest': 'I am pursuing an MPhil in Innovation, Strategy and Organisation at <a href="https://www.jbs.cam.ac.uk" target="_blank" rel="noopener"><em>Cambridge Judge Business School</em></a>, with a research focus on information systems. My core question: <em>how the coupling of technology, organisation, and market decides whether a company is worth backing</em>.',

  'ink.eyebrow': 'From the dissertation',
  'ink.quote': 'When model capability is shared, differentiation is no longer about the model — it is about depth of context, fit of workflow, exclusivity of data, and the credibility of the person telling the story.',
  'ink.cite': '— From "Differentiation Strategies of AI-native Startups", <a href="https://www.jbs.cam.ac.uk" target="_blank" rel="noopener">Cambridge</a>, 2026',

  'work.label': 'Selected Work',
  'work.intro': 'Three case studies across industries, each unpacked in four folds: Problem — Analysis — Output — Impact. The lens you selected has highlighted what matters most.',

  'fold.problem': 'Problem',
  'fold.analysis': 'Analysis',
  'fold.output': 'Output',
  'fold.impact': 'Impact',

  'case.tt.tag': 'Strategy · AI Product',
  'case.tt.title': 'Case 1 · TikTok Shop UK',
  'case.tt.role': 'Strategy Analyst · London',
  'case.tt.p': 'After the rollout of a new auction aftersale policy in the UK, the team needed to understand whether cancellation, refund-only and return-and-refund flows were actually improving seller experience — and whether remaining disputes came from policy coverage, CS execution, strategy configuration, or data consistency.',
  'case.tt.p.strategy': 'After the rollout of a new auction aftersale policy in the UK, the team needed to understand whether the reverse flows were improving seller experience and whether remaining disputes came from policy coverage, CS execution, strategy configuration or data consistency.',
  'case.tt.p.product': 'After a new policy ships, the hard question changes: which problems are actually solved, and which have only changed shape.',
  'case.tt.a1': 'Mapped all three reverse flows end to end across a large auction aftersale sample, covering review, auto-approval, platform arbitration, seller appeal and compensation.',
  'case.tt.a1.strategy': 'Mapped all three reverse flows end to end across a large auction aftersale sample, covering review, auto-approval, platform arbitration, seller appeal and compensation.',
  'case.tt.a1.product': 'Treated review, auto-approval, arbitration, appeal and compensation as one product chain, locating experience breakpoints and points of decision opacity.',
  'case.tt.a2': 'Path analysis and case review validated the policy\'s actual effect and located the scenarios where seller-experience disputes persisted.',
  'case.tt.a3': 'Attributed remaining issues to four buckets: auto-approval strategy fit, CS execution, policy coverage gaps, and data consistency.',
  'case.tt.o1': 'Delivered an auction aftersale deep-dive, with recommendations on aftersale rules, compensation logic and CS SOP optimisation.',
  'case.tt.o2': 'Contributed to live-auction governance and experience strategy, covering seller entry, listing governance, aftersale liability and malicious-buyer risk.',
  'case.tt.o3': 'Ran a false-positive analysis of e-commerce live-content moderation, with recommendations across policy, review queues, re-check mechanisms and data access.',
  'case.tt.i': 'The diagnostic helped the team separate problems already resolved by the new policy from remaining rule and process gaps, providing prioritisation input for further work on aftersale rules, compensation logic and arbitration processes.',
  'case.tt.i.strategy': 'The diagnostic helped the team separate problems already resolved by the new policy from remaining rule and process gaps, providing prioritisation input for further work on aftersale rules and arbitration processes.',
  'case.tt.i.product': 'The diagnostic helped the team separate resolved issues from remaining gaps and positioned mechanism explainability as a core product metric for governance.',

  'case.mk.tag': 'Strategy · Sector Research',
  'case.mk.title': 'Case 2 · Merck',
  'case.mk.role': 'Strategy Analyst · Shanghai',
  'case.mk.p': 'The same drug, very different prices across provinces. Before any judgment, the prices had to become comparable data.',
  'case.mk.p.strategy': 'Hospital and retail prices followed different conventions across provinces, and the uneven rollout of the “Four Sames” policy widened the information gap. The business could not easily trace price deviations to causes.',
  'case.mk.p.invest': 'From an investment lens, understanding the real health of a pharma requires seeing through channel structure and policy cycles — not consolidated statements alone.',
  'case.mk.a1': 'Built a cross-province comparable-price database using SQL for hospital-side data cleaning and Python scrapers for retail-side price collection.',
  'case.mk.a2': 'Used Metformin as the core case for competitor pricing analysis, explaining price gaps through policy, competition and channel structure.',
  'case.mk.a3': 'Broke performance down across hospital, retail, community and county-level channels, quantifying growth drivers, regional divergence and structural risk.',
  'case.mk.o1': 'Delivered cross-province channel pricing and competitor analysis.',
  'case.mk.o2': 'Produced a multi-channel performance diagnostic covering growth drivers, regional differences and business risks.',
  'case.mk.o3': 'Developed pharmacy-transformation recommendations under the oncology chronic-care shift.',
  'case.mk.i': 'The analysis fed into the strategy and innovation team’s annual channel review, business diagnostics and conference outputs.',

  'case.hg.tag': 'Investment · Sector Research',
  'case.hg.title': 'Case 3 · Huagai Capital',
  'case.hg.role': 'Investment Analyst · Beijing',
  'case.hg.p': 'The hardest call in materials investing sits in the valley of death — past the lab, short of the production line.',
  'case.hg.p.invest': 'The hardest call in materials investing sits in the valley of death — past the lab, short of the production line.',
  'case.hg.a1': '23 site interviews, 18 memos. Mapped the value chain, downstream applications, competitive landscape and import-substitution dynamics into a sector report and an investment strategy paper.',
  'case.hg.a2': 'Completed an independent deep-dive on a polyimide manufacturer. Applied a four-factor valley-of-death assessment — technology readiness, path to scale, market demand and monetisation — and built a five-year financial model.',
  'case.hg.a3': 'Applied a four-factor valley-of-death assessment — technology readiness, path to scale, market demand and monetisation — and built a five-year financial model.',
  'case.hg.o1': 'New Materials Industry Research Report.',
  'case.hg.o2': 'New Materials Investment Strategy.',
  'case.hg.o3': 'Polyimide Company Investment Study.',
  'case.hg.i': 'Findings informed target screening and industrial-partnership decisions.',

  'research.label': 'Research',
  'research.qtag': 'Research Question',
  'research.q': 'When everyone claims to be AI-native, what are we actually talking about?',
  'research.method.title': 'Method',
  'research.method': 'From interviews with 15 AI-native founders — across AI trading, AI agents, intelligent hardware and AI-native social — I used company-material analysis, thematic coding and cross-case comparison to test whether a company truly changes the use case, workflow and commercial loop.',
  'research.scope.title': 'Scope',
  'research.scope': 'AI trading, AI agents, intelligent hardware, AI-native social.',
  'research.finding.title': 'Key Finding',
  'research.finding': 'To me, AI-native does not mean a product that uses AI. What is worth judging is whether AI changes the use case, the workflow, the way data compounds, and the commercial loop of the company.',

  'fw.eyebrow': 'Distilled from interviews',
  'fw.title': 'Four dimensions for evaluating founders',
  'fw.1.name': 'Metabolic rate',
  'fw.1.desc': 'Time from receiving a signal to making a trade-off.',
  'fw.2.name': 'Cognitive bandwidth',
  'fw.2.desc': 'Holding product, organisation and capital in mind simultaneously.',
  'fw.3.name': 'Willingness to own unsexy work',
  'fw.3.desc': 'Committing to the slow, dirty, data-shaped parts of the job.',
  'fw.4.name': 'Honest self-boundary',
  'fw.4.desc': 'Clarity about what one is not good at.',

  'research.more': 'Other research (CHARLS · New Structural Economics)',
  'research.charls.title': 'China Health and Retirement Longitudinal Study (CHARLS)',
  'research.charls.body': ' · Peking University · 2023.06 – 2024.06. Two studies: poverty subsidies and multi-dimensional poverty among the middle-aged and elderly; smart-city development and elderly well-being.',
  'research.nse.title': 'Institute of New Structural Economics',
  'research.nse.body': ' · Peking University · 2023.04 – 2023.11. Used STATA to compute skill premia across 30+ economies over ~50 years using EU KLEMS, showing prediction bias of H-O-based trade models under urban-rural dual structure.',

  'proj.label': 'Projects',
  'proj.tag': 'National Innovation Project · Lead · 2024–2025',
  'proj.name': 'Qiyun · AI Neo-Chinese Fashion Platform',
  'proj.brief': 'Product design and demo from zero to one — built with Claude and VSCode, still live.',
  'proj.output': 'One software copyright; national digital-art award.',
  'proj.cta': 'Visit project →',

  'agent.label': 'Chat with my agent',
  'agent.intro': 'Built on my anonymised materials, this agent answers questions about my background, cases and research. It is also the answer itself — a working proof of AI product capability.',
  'agent.welcome': 'Hi. You can ask about her background, the cases, or the dissertation.',
  'agent.q1': 'What roles is she a fit for?',
  'agent.q2': 'What exactly did she do at TikTok?',
  'agent.q3': 'What did the dissertation find?',
  'agent.q4': 'What is her technical stack?',
  'agent.placeholder': 'Ask a question (English or Chinese)',
  'agent.privacy': 'Conversations are not stored. Guardrails: professional topics only; 20 messages per IP per hour.',
  'agent.followup': 'If you need the full CV, request it below.',
  'agent.error': 'Connection is temporarily unavailable. Please browse the cases, or request materials directly.',
  'agent.notconfigured': "The agent's backend is not connected yet — the author is deploying a Cloudflare Worker. In the meantime, browse the cases or request materials.",

  'tool.label': 'Methods & Tools',
  'tool.strategy': 'Strategic analysis',
  'tool.strategy.list': 'Market sizing · Competitor analysis · Policy analysis · Business diagnostics',
  'tool.data': 'Data & modelling',
  'tool.ai': 'AI & prototyping',
  'tool.research': 'Research methods',
  'tool.research.list': 'Semi-structured interviews · Thematic coding · Cross-case comparison · Survey and panel-data analysis',
  'tool.lang': 'Languages',
  'tool.lang.list': 'Mandarin · Cantonese · English',

  'req.label': 'Request Materials',
  'req.intro': 'Full CV and portfolio are shared on request. Leave your details and I will reply within 24 hours.',
  'req.cv.title': 'Full CV (PDF)',
  'req.cv.desc': 'Bilingual, with all contact details.',
  'req.pf.title': 'Portfolio',
  'req.pf.desc': 'De-identified internship samples + research samples.',

  'col.qiyun': 'Qiyun project',
  'col.london': 'Currently in London',
  'col.credit': 'Built with Claude Code · Design and writing by Xiangming Huang · © 2026 Xiangming Huang',

  'modal.s1.title': 'Who are you requesting as?',
  'modal.s1.desc': 'This helps me pick the right version to share.',
  'modal.identity.company': 'Company / Team',
  'modal.identity.company.sub': 'On behalf of a company',
  'modal.identity.personal': 'Individual',
  'modal.identity.personal.sub': 'Personal reference or exchange',
  'modal.back': '← Back',
  'modal.s2.title': 'Request details',
  'modal.s2.title.company': 'Company details',
  'modal.s2.title.personal': 'Your details',
  'modal.s2.desc': "I'll review within 24 hours.",
  'modal.s3.title': 'Request submitted',
  'modal.s3.desc': 'Thank you for the request. I have received it and will review within 24 hours.',
  'modal.s3.ok': 'Got it',
  'modal.material.portfolio': 'Request · Portfolio',
  'modal.material.cv': 'Request · Full CV',

  'form.company': 'Company / Team <em>*</em>',
  'form.company.ph': 'e.g. TikTok / Anthropic / Hillhouse Capital',
  'form.name': 'Your name <em>*</em>',
  'form.name.ph': 'Full name',
  'form.email': 'Email <em>*</em>',
  'form.email.ph': 'To receive the materials',
  'form.role': 'Role',
  'form.role.ph': 'e.g. HR / Recruiter / Investor / Student',
  'form.purpose': 'Purpose <em>*</em>',
  'form.purpose.ph': 'A short reason, e.g. evaluation for role X / partnership reference',
  'form.submit': 'Submit request',
  'form.sending': 'Sending…',
  'form.material.portfolio': 'Portfolio',
  'form.material.cv': 'Full CV',
  'form.identity.company': 'Company / Team',
  'form.identity.personal': 'Individual',
};

const I18N = { zh: I18N_ZH, en: I18N_EN };

// ================================================================
// Language + Lens state (URL-driven)
// ================================================================
const LANG_KEY = 'xm-lang';

function readQuery(){
  const q = new URLSearchParams(location.search);
  return { lang: q.get('lang'), lens: q.get('lens') };
}

function writeQuery(lang, lens){
  const q = new URLSearchParams(location.search);
  if (lang) q.set('lang', lang); else q.delete('lang');
  if (lens && lens !== 'all') q.set('lens', lens); else q.delete('lens');
  const s = q.toString();
  history.replaceState(null, '', s ? '?' + s + location.hash : location.pathname + location.hash);
}

function getLang(){
  const q = readQuery().lang;
  if (q === 'zh' || q === 'en') return q;
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === 'zh' || saved === 'en') return saved;
  return 'en';
}

function getLens(){
  const q = readQuery().lens;
  return ['strategy','product','invest'].includes(q) ? q : 'all';
}

function applyLang(lang){
  const dict = I18N[lang];
  if (!dict) return;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  localStorage.setItem(LANG_KEY, lang);
  window.__lang = lang;
  writeQuery(lang, getLens());
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

window.I18N = I18N;
window.getLang = getLang;
window.getLens = getLens;
window.applyLang = applyLang;
window.writeQuery = writeQuery;

