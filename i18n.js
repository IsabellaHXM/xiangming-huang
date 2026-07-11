// ================================================================
// 国际化 · 中英文文案
// ================================================================
const I18N = {
  zh: {
    'brand.name': '黄香铭',
    'nav.about': '简介',
    'nav.experience': '实习经历',
    'nav.research': '研究',
    'nav.projects': '项目',
    'nav.skills': '技能',
    'nav.apply': '申请材料',

    'hero.tag': 'Open to Full-Time · 2026 & 2027',
    'hero.name.cn': '黄香铭',
    'hero.name.en': 'Xiangming <em>Huang</em>',
    'hero.sub': '剑桥大学商学院 MPhil · 中国传媒大学 · 北京大学经济学辅修',
    'hero.scroll': '向下探索',

    'about.label': '01 · About',
    'about.title': '你好，我是香铭',
    'about.lead': '我是一名跨互联网、AI 与投资的战略与产品从业者，正在<b>剑桥大学贾奇商学院</b>攻读创新战略与组织学 MPhil。',
    'about.p1': '本科毕业于中国传媒大学（专业排名第一），并在北京大学完成经济学辅修。我关注的问题一直是：<b>技术如何被组织采纳、被用户接受、并最终转化为可持续的商业价值。</b>',
    'about.p2': '过去几年，我在 <b>TikTok</b> 拆解电商售后与直播治理策略、在 <b>Merck</b> 建立跨渠道价格与业绩诊断体系、在 <b>华盖资本</b> 与 <b>中信建投</b> 完成产业研究与投资标的深度分析，也在 <b>Accenture</b> 参与数字化转型咨询。同时，我基于 15 位 AI-native 创业者的一手访谈，正在完成关于 <b>AI 产品差异化叙事</b>的硕士论文。',
    'about.p3': '求职方向：<b>互联网战略 / 商分、AI 产品、AI 方向 PE·VC 投资</b>。我用数据讲清楚商业，用产品把想法落地。',
    'about.stat.internships': '段头部机构实习',
    'about.stat.interviews': '位 AI 创始人深访',
    'about.stat.schools': '所顶尖院校背景',
    'about.stat.rank': '本科专业排名',
    'about.tracks': '求职方向',
    'about.track.1': '互联网战略 / 商分',
    'about.track.2': 'AI 产品',
    'about.track.3': 'PE·VC（AI 方向）',

    'edu.label': '02 · Education',
    'edu.title': '教育背景',
    'edu.badge': '进行中',
    'edu.cam.school': '剑桥大学 · 贾奇商学院',
    'edu.cam.degree': 'MPhil in Innovation Strategy and Organisation',
    'edu.cam.courses': '相关课程：信息系统 · 统计分析 · 定量研究方法 · 战略创新',
    'edu.cuc.school': '中国传媒大学',
    'edu.cuc.degree': '管理学学士 · 文化产业管理',
    'edu.cuc.rank': '排名 <b>1</b>',
    'edu.cuc.honors': '校三好 · 优秀毕业生 · 央视总台奖学金 · 国家级大创基金',
    'edu.pku.school': '北京大学',
    'edu.pku.degree': '经济学辅修',
    'edu.pku.gpa': '主辅修合并 GPA WES：<b>3.81</b>',
    'edu.pku.courses': '中级微观 / 宏观 / 计量经济学 · Stata 数据分析 · 财务会计',

    'exp.label': '03 · Experience',
    'exp.title': '实习经历',
    'exp.sub': '点击每段经历展开完整产出与量化成果。',
    'exp.tt.time': '2026.05 – 至今 · 伦敦',
    'exp.tt.role': '战略分析实习生 · 商家体验与平台策略',
    'exp.tt.1': '<b>《TikTok Shop UK 售后体验专项分析》</b>：拆解仅退款 / 退货退款两类逆向流程中的审核、自动通过、平台仲裁、卖家申诉与赔付链路。基于 3,000+ 仅退款订单及 4,000+ 退货退款订单，量化订单分布、通过率、争议率与赔付情况，识别高风险售后场景，推动赔付规则校验与申诉机制优化方案立项。',
    'exp.tt.2': '<b>《直播拍卖治理与体验策略》</b>：围绕商家准入、发品 / 售后治理与恶意买家风控开展现状诊断，聚焦临时发品 GMV 占比快速提升、拍卖售后解决率低于大盘等问题，支持端到端治理策略设计、策略优先级判断与跨团队方案对齐。',
    'exp.tt.3': '<b>《电商直播内容治理误伤专项分析》</b>：针对 Gambling / Undisclosed Marketing / Adult Body Exposure 等治理场景开展 case 抽检与根因分析，输出电商直播识别策略、专审队列、复核机制与数据权限优化建议。',

    'exp.merck.time': '2024.11 – 2025.04 · 上海',
    'exp.merck.company': 'Merck 默克',
    'exp.merck.role': '战略分析实习生 · 战略创新部门',
    'exp.merck.1': '<b>《跨省渠道定价与竞品分析策略报告》</b>：通过 SQL 清洗内部数据库医院端价格，Python 爬虫采集零售端价格，建立跨省渠道可比价格数据库，结合「四同」价格政策解读价格差异成因，聚焦 Metformin 开展竞品定价策略分析。',
    'exp.merck.2': '<b>《肿瘤慢病化趋势下的药房转型建议》</b>：参与 2025 西鼎会专题筹备，梳理肿瘤慢病化趋势、医保双通道政策、DTP 药房发展及连锁药房盈利模式，提出药房服务、患者管理与渠道协同优化建议。',
    'exp.merck.3': '<b>《多渠道业绩诊断内部战略报告》</b>：拆解医院、零售、社区及县域多渠道表现，量化 YTD 与环比增速，识别增长驱动、结构性风险及区域差异。',

    'exp.huagai.time': '2023.03 – 2023.06 · 北京',
    'exp.huagai.company': '华盖资本',
    'exp.huagai.role': '投资分析实习生 · 科技组',
    'exp.huagai.1': '<b>《新材料行业研究报告》</b>：参与 23 场实地访谈，整理 18 份会议纪要，梳理新材料产业链、下游应用、竞争格局与国产替代趋势；用 Excel + Tableau 完成市场规模测算与可视化。',
    'exp.huagai.2': '<b>《新材料产业投资策略》</b>：应用「死亡谷」投资框架评估科技成果转化路径，通过 7 次专家访谈评估技术成熟度、产业化路径、市场需求与变现能力。',
    'exp.huagai.3': '<b>《某聚酰亚胺企业投资研究报告》</b>：独立完成公司深度研究，构建 5 年财务预测模型，评估成长性与盈利能力。',

    'exp.csc.time': '2022.12 – 2023.02 · 北京',
    'exp.csc.company': '中信建投证券',
    'exp.csc.role': '行业研究实习生 · 医药组',
    'exp.csc.1': '<b>《CXO 行业研究报告》</b>：Wind / iFinD 数据清洗，拆解 CXO 产业链，量化评估行业规模、业务逻辑与增长潜力；四大龙头可比分析。',
    'exp.csc.2': '<b>《CDMO 企业深度研究与估值对标》</b>：建立价值链分析模型 + 财务建模预测，横向估值对标评估商业模式可持续性与风险。',

    'exp.acc.time': '2022.08 – 2022.09 · 北京',
    'exp.acc.company': 'Accenture 埃森哲',
    'exp.acc.role': '战略咨询实习生',
    'exp.acc.1': '<b>《企业数字化转型报告》</b>：PEST 分析并对比国内外企业数字化转型，提出云计算、大数据驱动的战略转型路径。',
    'exp.acc.2': '<b>《农商银行数字化转型分析报告》</b>：主导案例研究，对比农商行与四大行，识别痛点并提出差异化数字转型突破口。',
    'exp.acc.3': '<b>《数据库国产化交付标准白皮书》</b>：负责「实施标准与路径」章节，总结数据库上云改造三阶段与「五步十阶」。',

    'res.label': '04 · Research',
    'res.title': '研究经历',
    'res.mphil.tag': 'MPhil Dissertation',
    'res.mphil.title': 'AI-native 初创公司差异化策略研究',
    'res.mphil.meta': '剑桥大学商学院 · 2026.02 – 2026.06',
    'res.mphil.p1': '半结构化访谈 + 企业材料分析 + 跨案例比较。基于 <b>15 位</b> AI-native 初创公司创始人的深度访谈，覆盖中国、北美、欧洲种子轮至 A 轮前后的企业。',
    'res.mphil.p2': '通过主题编码归纳产品定位与商业化叙事，拆解 AI 交易 / AI Agent / 智能硬件 / AI 社交等赛道的差异化逻辑，提炼在技术同质化环境下通过场景、数据、工作流、品牌与创始人背景构建竞争优势的策略路径。',
    'res.charls.tag': 'CHARLS 调查员',
    'res.charls.title': '中国健康与养老追踪调查',
    'res.charls.p1': '<b>《贫困补贴对中老年人多维贫困的影响》</b>：基于 CHARLS 横截面数据，A-F 方法构建多维贫困指数，STATA + Logit 模型。',
    'res.charls.p2': '<b>《智慧城市建设对中老年人幸福感的影响》</b>：五年 CHARLS + 城市宏观数据平衡面板，PSM-DID 模型验证。',
    'res.nse.tag': '科研助理',
    'res.nse.title': '新结构经济学研究院',
    'res.nse.p1': '<b>《贸易定量模型中发展中国家的技能溢价》</b>：以劳动报酬、就业人数与工作时间为核心构建定量模型，用 STATA 测算 EU KLEMS 数据库中 30+ 国家近 50 年的劳动技能溢价数据。',
    'res.nse.p2': '证明基于 Heckscher-Ohlin 理论的贸易量化模型的预测偏误，引入发展中国家城乡二元结构对劳动力技能溢价的影响。',

    'proj.label': '05 · Projects',
    'proj.title': '项目经历',
    'proj.mock.1': 'AI 试衣间',
    'proj.mock.2': '共创工坊',
    'proj.mock.3': '数字衣橱',
    'proj.tag': '国家级大创项目 · 负责人',
    'proj.name': '旗韵 · AI 新中式穿搭平台',
    'proj.p1': '负责从 0 到 1 的产品设计。围绕 <b>AI 试衣间、AI 共创工坊、新中式商城、灵感社区、数字衣橱</b> 五大模块，设计「需求输入 → AI 试穿 → 风格推荐 → 内容共创 → 社区种草 → 商品定制」的完整用户旅程。',
    'proj.p2': '使用 Claude、VSCode 及 AI 设计工具快速搭建 Demo，验证 AI 生成内容、推荐逻辑、试穿交互与商城转化链路，最终落地为「专属旗袍照生成」小程序及线上购物系统。',
    'proj.badge.1': '1 项软件著作权',
    'proj.badge.2': '全国高校数字艺术大赛奖项',

    'skill.label': '06 · Toolkit',
    'skill.title': '技能与工具',
    'skill.ai': 'AI / 产品工具',
    'skill.data': '数据分析',
    'skill.lang': '语言',
    'skill.expert': '精通',
    'skill.proficient': '熟练',
    'skill.mandarin': '普通话 · 母语',
    'skill.cantonese': '粤语 · 母语',

    'apply.label': '07 · Request Materials',
    'apply.title': '申请查阅作品集 / 简历',
    'apply.sub': '出于隐私保护，作品集与详细简历不公开展示。填写下方表单，我会在收到申请后 <b>24 小时内</b>审核并将文件发送到你的邮箱。',
    'apply.card1.title': '申请作品集 / 过往 PPT',
    'apply.card1.desc': '包含实习产出脱敏版、研究报告样例',
    'apply.card2.title': '申请个人简历 PDF',
    'apply.card2.desc': '完整版中英文简历',
    'apply.note': '申请提交后，我会在邮箱审核。同意后系统将自动把对应材料发送到你的邮箱。',

    'foot.motto': '用数据讲清楚商业，用产品把想法落地。',

    'modal.step1.title': '你以什么身份申请？',
    'modal.step1.desc': '这有助于我判断合适的分享版本。',
    'modal.identity.company': '公司 / 团队',
    'modal.identity.company.sub': '代表公司需求',
    'modal.identity.personal': '个人',
    'modal.identity.personal.sub': '个人学习或交流',
    'modal.back': '← 返回',
    'modal.step2.title': '填写申请信息',
    'modal.step2.title.company': '请填写公司信息',
    'modal.step2.title.personal': '请填写个人信息',
    'modal.step2.desc': '我会审核后在 24 小时内回复。',
    'modal.step3.title': '申请已提交',
    'modal.step3.desc': '感谢你的关注。我会在收到通知后审核，并将 <b id="successMaterial">材料</b> 发送到 <b id="successEmail">你的邮箱</b>。通常 24 小时内回复。',
    'modal.step3.ok': '好的',
    'modal.material.portfolio': '申请 · 作品集 / 过往 PPT',
    'modal.material.cv': '申请 · 个人简历 PDF',

    'form.company': '公司 / 团队名称 <em>*</em>',
    'form.company.ph': '例：TikTok / Anthropic / 高瓴资本',
    'form.name': '你的姓名 <em>*</em>',
    'form.name.ph': '真实姓名',
    'form.email': '联系邮箱 <em>*</em>',
    'form.email.ph': '用于接收材料',
    'form.role': '角色 / 岗位',
    'form.role.ph': '例：HR / 招聘经理 / 投资人 / 学生',
    'form.purpose': '申请用途 <em>*</em>',
    'form.purpose.ph': '简要说明你希望获取材料的用途，如：某某岗位面试评估 / 项目合作参考',
    'form.submit': '提交申请',
    'form.sending': '发送中…',
    'form.material.portfolio': '作品集 / 过往 PPT',
    'form.material.cv': '个人简历 PDF',
    'form.identity.company': '公司 / 团队',
    'form.identity.personal': '个人',
  },

  en: {
    'brand.name': 'Xiangming Huang',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.research': 'Research',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.apply': 'Request',

    'hero.tag': 'Open to Full-Time · 2026 & 2027',
    'hero.name.cn': '黄香铭',
    'hero.name.en': 'Xiangming <em>Huang</em>',
    'hero.sub': 'Cambridge Judge MPhil · CUC · PKU Economics Minor',
    'hero.scroll': 'Scroll',

    'about.label': '01 · About',
    'about.title': "Hi, I'm Xiangming.",
    'about.lead': "I'm a strategy & product practitioner working across internet, AI and investment, currently reading MPhil in <b>Innovation Strategy and Organisation at Cambridge Judge Business School</b>.",
    'about.p1': "I graduated top of my major from Communication University of China and completed an Economics minor at Peking University. The question I keep circling back to: <b>how does technology get adopted inside organisations, accepted by users, and eventually turned into durable business value?</b>",
    'about.p2': "Over the past few years I've worked on post-purchase and livestream governance strategy at <b>TikTok</b>, built cross-channel pricing and performance diagnostics at <b>Merck</b>, produced sector research and investment memos at <b>Huagai Capital</b> and <b>CSC Securities</b>, and contributed to digital transformation consulting at <b>Accenture</b>. I'm also finishing my MPhil dissertation on <b>differentiation narratives among AI-native startups</b>, based on interviews with 15 founders.",
    'about.p3': "Open to roles in <b>internet strategy / business analysis, AI product, and AI-focused PE·VC investment</b>. I make business legible with data, and turn ideas into shipping products.",
    'about.stat.internships': 'top-tier internships',
    'about.stat.interviews': 'AI-founder interviews',
    'about.stat.schools': 'leading universities',
    'about.stat.rank': 'in undergraduate cohort',
    'about.tracks': 'Target roles',
    'about.track.1': 'Strategy / Biz Analytics',
    'about.track.2': 'AI Product',
    'about.track.3': 'PE·VC (AI)',

    'edu.label': '02 · Education',
    'edu.title': 'Education',
    'edu.badge': 'In progress',
    'edu.cam.school': 'University of Cambridge · Judge Business School',
    'edu.cam.degree': 'MPhil in Innovation Strategy and Organisation',
    'edu.cam.courses': 'Coursework: Information Systems · Statistical Analysis · Quantitative Methods · Strategic Innovation',
    'edu.cuc.school': 'Communication University of China',
    'edu.cuc.degree': 'B.Mgmt · Cultural Industries Management',
    'edu.cuc.rank': 'Rank <b>#1</b>',
    'edu.cuc.honors': 'Merit Student · Outstanding Graduate · CMG Scholarship · National Entrepreneurship Fund',
    'edu.pku.school': 'Peking University',
    'edu.pku.degree': 'Economics Minor',
    'edu.pku.gpa': 'Combined WES GPA: <b>3.81</b>',
    'edu.pku.courses': 'Intermediate Micro / Macro / Econometrics · Stata · Financial Accounting',

    'exp.label': '03 · Experience',
    'exp.title': 'Experience',
    'exp.sub': 'Click any role to unfold quantified outputs and outcomes.',
    'exp.tt.time': '2026.05 – Present · London',
    'exp.tt.role': 'Strategy Analyst Intern · Seller Experience & Platform Strategy',
    'exp.tt.1': "<b>TikTok Shop UK Post-Purchase Experience Deep Dive.</b> Mapped refund-only and return-refund reverse flows across review, auto-approval, arbitration, seller appeal and reimbursement. Based on 3,000+ refund-only and 4,000+ return-refund orders, quantified distribution, pass rate, dispute rate and payout, identifying high-risk scenarios and initiating a reimbursement-rule and appeal-mechanism optimisation project.",
    'exp.tt.2': '<b>Livestream Auction Governance & Experience Strategy.</b> Diagnosed seller onboarding, listing / post-purchase governance and malicious-buyer risk control. Focused on rapid growth of temporary listings in GMV and below-average auction resolution rate, supporting end-to-end governance design, prioritisation and cross-team alignment.',
    'exp.tt.3': "<b>False-Positive Analysis for E-commerce Livestream Content Governance.</b> Ran case audits and root-cause analysis on Gambling, Undisclosed Marketing and Adult Body Exposure scenarios; delivered recommendations on livestream detection strategy, specialist review queue, secondary review and data-access optimisation.",

    'exp.merck.time': '2024.11 – 2025.04 · Shanghai',
    'exp.merck.company': 'Merck',
    'exp.merck.role': 'Strategy Analyst Intern · Strategy & Innovation',
    'exp.merck.1': '<b>Cross-Province Channel Pricing & Competitor Strategy Report.</b> Cleaned hospital-channel prices via SQL and scraped retail-channel prices via Python; built a comparable cross-province price database and interpreted price gaps against the "Four Sames" policy, with a Metformin competitive pricing deep dive.',
    'exp.merck.2': '<b>Pharmacy Transformation Under Oncology Chronicity.</b> Contributed to the 2025 Xiding conference brief, mapping the chronicity trend, dual-channel reimbursement policy, DTP pharmacy development and chain-pharmacy profitability; proposed recommendations on services, patient management and channel synergy.',
    'exp.merck.3': '<b>Multi-Channel Performance Diagnostic Report.</b> Decomposed hospital, retail, community and county-level channel performance; quantified YTD and MoM growth and identified drivers, structural risks and regional divergence.',

    'exp.huagai.time': '2023.03 – 2023.06 · Beijing',
    'exp.huagai.company': 'Huagai Capital',
    'exp.huagai.role': 'Investment Analyst Intern · Tech Group',
    'exp.huagai.1': '<b>New Materials Industry Research.</b> Attended 23 site interviews, produced 18 meeting notes; mapped the value chain, downstream applications, competitive landscape and import-substitution trend; sized markets and visualised opportunities with Excel and Tableau.',
    'exp.huagai.2': '<b>New Materials Investment Strategy.</b> Applied the "Valley of Death" framework to sci-tech commercialisation pathways; evaluated TRL, industrialisation path, market demand and monetisation via 7 expert interviews.',
    'exp.huagai.3': '<b>Polyimide Company Investment Study.</b> Independently produced a deep-dive covering product matrix, technical moat, customer structure and downstream applications; built a 5-year financial forecast model to assess growth, profitability and risk.',

    'exp.csc.time': '2022.12 – 2023.02 · Beijing',
    'exp.csc.company': 'China Securities Co.',
    'exp.csc.role': 'Sector Research Intern · Pharma',
    'exp.csc.1': '<b>CXO Industry Research.</b> Cleaned Wind / iFinD data, decomposed the CXO value chain and quantified size, business logic and growth potential; comparative analysis of the four leading players.',
    'exp.csc.2': '<b>CDMO Deep Dive & Comparable Valuation.</b> Built a value-chain model plus financial forecast; explained gross-margin swings; benchmarked against comparable companies to test the sustainability of the business model.',

    'exp.acc.time': '2022.08 – 2022.09 · Beijing',
    'exp.acc.company': 'Accenture',
    'exp.acc.role': 'Strategy Consulting Intern',
    'exp.acc.1': '<b>Enterprise Digital Transformation Report.</b> PEST analysis comparing domestic and international digital transformation; proposed cloud- and data-driven transformation pathways.',
    'exp.acc.2': '<b>Rural Commercial Bank Digital Transformation Analysis.</b> Led case study benchmarking rural banks against the Big Four, identifying pain points and differentiated breakthroughs.',
    'exp.acc.3': '<b>Database Localisation Delivery Standards White Paper.</b> Authored the "Implementation Standards & Path" chapter; summarised the three-stage / five-step ten-phase migration model.',

    'res.label': '04 · Research',
    'res.title': 'Research',
    'res.mphil.tag': 'MPhil Dissertation',
    'res.mphil.title': 'Differentiation Strategies of AI-Native Startups',
    'res.mphil.meta': 'Cambridge Judge Business School · 2026.02 – 2026.06',
    'res.mphil.p1': 'Semi-structured interviews, corporate materials, cross-case comparison. Based on in-depth interviews with <b>15 AI-native startup founders</b> across seed to pre/post-Series-A stages in China, North America and Europe.',
    'res.mphil.p2': "Through thematic coding, I distil product positioning and commercial narratives across AI-trading, AI-agent, smart-hardware and AI-social verticals, articulating how founders build competitive advantage — via scenario, data, workflow, brand and founder background — under shared foundation-model capability.",
    'res.charls.tag': 'CHARLS Surveyor',
    'res.charls.title': 'China Health and Retirement Longitudinal Study',
    'res.charls.p1': "<b>Poverty Subsidies and Multi-dimensional Poverty Among Middle-aged and Elderly.</b> Cross-sectional CHARLS data; Alkire-Foster method for a multi-dimensional poverty index; STATA logit models.",
    'res.charls.p2': "<b>Smart City Development and Elderly Well-being.</b> Five-year CHARLS + city macro data as a balanced panel; PSM-DID validates the positive effect, with health insurance amplifying and high income constrained by cost of living.",
    'res.nse.tag': 'Research Assistant',
    'res.nse.title': 'Institute of New Structural Economics',
    'res.nse.p1': "<b>Skill Premium of Developing Countries in Quantitative Trade Models.</b> Built a quantitative model centred on labour compensation, employment and hours; used STATA on EU KLEMS to compute skill premia for 30+ economies over ~50 years.",
    'res.nse.p2': "Demonstrated prediction bias of Heckscher-Ohlin-based trade models when developing countries' urban-rural dual structure is ignored.",

    'proj.label': '05 · Projects',
    'proj.title': 'Projects',
    'proj.mock.1': 'AI Fitting Room',
    'proj.mock.2': 'Co-creation',
    'proj.mock.3': 'Digital Closet',
    'proj.tag': 'National Innovation Project · Lead',
    'proj.name': 'Qiyun · AI Neo-Chinese Fashion Platform',
    'proj.p1': 'Led 0-to-1 product design covering five modules: <b>AI Fitting Room, AI Co-creation Studio, Neo-Chinese Store, Inspiration Community, Digital Closet</b>. Designed the full journey from input → AI try-on → style recommendation → co-creation → community → custom order.',
    'proj.p2': "Used Claude, VSCode and AI design tools to ship a demo validating generated content, recommendation logic, try-on interaction and store conversion, ultimately launching a bespoke qipao photo mini-program plus an online shop.",
    'proj.badge.1': '1 software copyright',
    'proj.badge.2': 'National University Digital Art Award',

    'skill.label': '06 · Toolkit',
    'skill.title': 'Skills & Tools',
    'skill.ai': 'AI / Product',
    'skill.data': 'Data Analysis',
    'skill.lang': 'Languages',
    'skill.expert': 'Expert',
    'skill.proficient': 'Proficient',
    'skill.mandarin': 'Mandarin · Native',
    'skill.cantonese': 'Cantonese · Native',

    'apply.label': '07 · Request Materials',
    'apply.title': 'Request Portfolio / CV',
    'apply.sub': 'For privacy reasons, the portfolio and full CV are not publicly hosted. Submit the form below and I will review within <b>24 hours</b> and email the file to you.',
    'apply.card1.title': 'Request Portfolio / Past Decks',
    'apply.card1.desc': 'Redacted internship deliverables and research samples',
    'apply.card2.title': 'Request Full CV (PDF)',
    'apply.card2.desc': 'Complete bilingual CV',
    'apply.note': 'After you submit, I review the request in my inbox. Once approved, the corresponding materials are sent to your email.',

    'foot.motto': 'Make business legible with data, ship ideas as products.',

    'modal.step1.title': 'Who are you requesting as?',
    'modal.step1.desc': 'This helps me choose the right version to share.',
    'modal.identity.company': 'Company / Team',
    'modal.identity.company.sub': 'On behalf of a company',
    'modal.identity.personal': 'Individual',
    'modal.identity.personal.sub': 'Personal reference or exchange',
    'modal.back': '← Back',
    'modal.step2.title': 'Request details',
    'modal.step2.title.company': 'Company information',
    'modal.step2.title.personal': 'Your information',
    'modal.step2.desc': "I'll review and reply within 24 hours.",
    'modal.step3.title': 'Request submitted',
    'modal.step3.desc': "Thanks for your interest. Once reviewed, I'll send <b id=\"successMaterial\">the materials</b> to <b id=\"successEmail\">your email</b>. Usually within 24 hours.",
    'modal.step3.ok': 'Got it',
    'modal.material.portfolio': 'Request · Portfolio / Past Decks',
    'modal.material.cv': 'Request · Full CV (PDF)',

    'form.company': 'Company / Team <em>*</em>',
    'form.company.ph': 'e.g. TikTok / Anthropic / Hillhouse Capital',
    'form.name': 'Your name <em>*</em>',
    'form.name.ph': 'Full name',
    'form.email': 'Email <em>*</em>',
    'form.email.ph': 'To receive the materials',
    'form.role': 'Role / Position',
    'form.role.ph': 'e.g. HR / Recruiter / Investor / Student',
    'form.purpose': 'Purpose <em>*</em>',
    'form.purpose.ph': 'A short reason, e.g. interview evaluation for role X / partnership reference',
    'form.submit': 'Submit request',
    'form.sending': 'Sending…',
    'form.material.portfolio': 'Portfolio / Past Decks',
    'form.material.cv': 'Full CV (PDF)',
    'form.identity.company': 'Company / Team',
    'form.identity.personal': 'Individual',
  },
};

// ================================================================
// 语言切换器
// ================================================================
const LANG_KEY = 'xm-lang';

function getLang(){
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === 'zh' || saved === 'en') return saved;
  // 默认英文
  return 'en';
}

function applyLang(lang){
  const dict = I18N[lang];
  if (!dict) return;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // 普通文本
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  // 允许 HTML 的（包含 <b>/<em>/<sub> 等）
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  // placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  // 更新切换按钮激活态
  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  localStorage.setItem(LANG_KEY, lang);
  window.__currentLang = lang;
  // 触发一个事件，让 script.js 可以响应
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  const initLang = getLang();
  applyLang(initLang);

  // 绑定切换器
  const switcher = document.getElementById('langSwitch');
  if (switcher){
    switcher.addEventListener('click', e => {
      const opt = e.target.closest('.lang-opt');
      if (opt) applyLang(opt.dataset.lang);
      else {
        // 点整个按钮 → 切换
        const now = getLang();
        applyLang(now === 'zh' ? 'en' : 'zh');
      }
    });
  }
});

window.I18N = I18N;
window.getLang = getLang;
