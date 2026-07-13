# Xiangming (Isabella) Huang · Personal site

编辑刊物式个人作品集。米白纸底、单一点缀墨绿、幽灵编号、墨色反转区块。

## 结构

- [index.html](index.html) · 页面结构
- [styles.css](styles.css) · 全站样式
- [i18n.js](i18n.js) · 中英双语文案 + 视角变体
- [script.js](script.js) · 交互（视角 · 折页 · 主题图 · Agent · 表单）
- [worker.js](worker.js) · Personal Agent Cloudflare Worker

## 特性对照（对应改版需求）

| 需求 | 状态 |
|---|---|
| 视角切换器（strategy / product / invest）+ URL 状态 | ✅ |
| 案例按视角重排 + 高亮 | ✅ |
| 折页式案例（Problem/Analysis/Output/Impact） | ✅ |
| 墨色反转区块（dissertation 金句） | ✅ |
| 幽灵编号（Hero 大 00 字） | ✅ |
| Kinetic type（Hero 逐字浮现） | ✅ |
| `::selection` 点缀色 | ✅ |
| 导航下划线从左向右生长 | ✅ |
| 伦敦实时时间 | ✅ |
| 中英双语 + URL 语言状态 + Newsreader 英文衬线 | ✅ |
| 研究主题图（可点击展开引语） | ✅ |
| 创始人评估四维 | ✅ |
| 旗韵项目外链（不复述） | ✅ |
| Personal Agent（前端 UI + Worker 代码） | ✅ 前端就绪，Worker 待部署 |
| 隐私脱敏（无手机号、无内部数字） | ✅ |
| 申请表单弹窗（公司 / 个人） | ✅ |

## 本地预览

```bash
cd ~/xiangming-site
python3 -m http.server 8765
# open http://localhost:8765/
```

## 部署（当前状态）

已托管在 GitHub Pages：
**https://isabellahxm.github.io/xiangming-huang/**

更新流程：

```bash
git add .
git commit -m "your message"
git push
```

约 1–2 分钟后 Pages 会自动重建。

## 待接入的两个后端（都是免费方案）

### 1. Personal Agent → Cloudflare Worker

前端已就绪。Worker 未部署前，Agent 会显示友好提示。部署步骤：

1. 安装 wrangler：`npm i -g wrangler && wrangler login`
2. 到 Cloudflare 后台创建 Worker，粘贴 [worker.js](worker.js) 的内容
3. Settings → Variables 添加：
   - `ANTHROPIC_API_KEY`（Secret，从 [console.anthropic.com](https://console.anthropic.com) 拿）
   - `ALLOWED_ORIGIN`（Text，值 `https://isabellahxm.github.io`）
4. Storage → KV → 创建 namespace，在 Worker 里绑定为 `RATE`（用于 IP 限频）
5. 部署后拿到 URL（形如 `https://xm-agent.xxx.workers.dev`）
6. 打开 [script.js](script.js) 第 7 行，把 URL 填到 `AGENT_ENDPOINT`
7. `git commit && git push`

Anthropic 后台记得设**每日预算告警**（$1–$3 就够，Haiku 4.5 每 1M 输入 $1）。

### 2. 申请表单 → Formspree

未接入时用 mailto 兜底。要真正自动收信：

1. 到 [formspree.io](https://formspree.io) 注册（免费额度 50 封/月）
2. 创建 Form，把 endpoint（形如 `https://formspree.io/f/xxxxxxxx`）填到 [script.js](script.js) 第 11 行 `FORMSPREE_ENDPOINT`
3. `git commit && git push`

## 隐私与脱敏规范

见改版需求文档第七节。当前站点：
- 公开页不显示手机号（仅在申请到的 PDF 里）
- 内部指标（订单数、GMV、通过率）统一改为「千级样本、高风险场景、结构性优化」
- 归因语气从「主导落地」改为「进入评审、提出并推动」
- Agent 的 system prompt 也遵循同一脱敏规则
