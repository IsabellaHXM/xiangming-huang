# 黄香铭 · 个人简历交互网站

一个专业、可交互的中文单页个人网站，包含：
- 三条求职方向（互联网战略/商分、AI 产品、PE·VC）可切换筛选
- 时间线式实习经历、可展开细节
- 研究、项目、技能展示
- **材料申请弹窗**（作品集 / 简历）— 支持公司/个人身份区分

---

## 🚀 快速预览

在项目目录下：

```bash
cd ~/xiangming-site
python3 -m http.server 8080
```

打开浏览器访问 http://localhost:8080

或直接双击 `index.html`。

---

## ✉️ 让"申请材料"自动发到你邮箱（EmailJS 5 分钟配置）

未配置前，申请按钮会调起用户本地邮件客户端（mailto 兜底）。想做到"用户点击提交 → 你邮箱自动收到申请通知"，按以下步骤：

### 1. 注册 EmailJS（免费 200 封/月）

访问 https://www.emailjs.com/ → 注册。

### 2. 绑定你的邮箱服务

- 后台 → **Email Services** → **Add New Service**
- 选择 Outlook（你用的 xiangming.huang@outlook.com）→ 授权登录
- 记下 **Service ID**（形如 `service_xxxx`）

### 3. 创建邮件模板

- 后台 → **Email Templates** → **Create New Template**
- To Email：`{{to_email}}`
- Subject：`【材料申请】{{identity}} · {{material}}`
- Content（示例）：
  ```
  你收到一份材料申请：

  材料：{{material}}
  身份：{{identity}}
  公司：{{company}}
  姓名：{{name}}
  邮箱：{{email}}
  角色：{{role}}
  用途：{{purpose}}

  提交时间：{{submitted_at}}
  ```
- 保存，记下 **Template ID**（形如 `template_xxxx`）

### 4. 拿到 Public Key

- 后台 → **Account** → **General** → 复制 **Public Key**

### 5. 填入 script.js

打开 `script.js`，把顶部这三个值替换：

```js
const EMAILJS_CONFIG = {
  publicKey:  'xxxxxxxxxxxxx',    // ← 你的 Public Key
  serviceId:  'service_xxxxxxx',  // ← 你的 Service ID
  templateId: 'template_xxxxxxx', // ← 你的 Template ID
};
```

刷新页面，任何人提交申请后你都会立刻收到邮件。

---

## 🔒 关于"你同意后自动发材料给对方"

纯前端做不到"你审批 → 系统自动附件发送"（会暴露作品集下载链接）。推荐的实现方式：

### 方案 A（推荐 · 半自动，10 分钟落地）

1. 按上面步骤配好 EmailJS，你会收到申请邮件
2. 把作品集/简历上传到网盘（Google Drive / OneDrive / 坚果云），生成**分享链接**并设为「知道链接的人可查看」
3. 收到申请邮件后，你手动回复邮件，附上链接即可
4. （可选）用邮件模板：Outlook 的 **快速部件（Quick Parts）** 或 Gmail 的 **模板功能**，一键回复

### 方案 B（全自动 · 需要一点后端）

如果你希望真正做到"点同意→自动发文件链接"，可以再花 30 分钟接入：
- Cloudflare Workers（免费）+ 一个数据库（Cloudflare KV）
- 你收到邮件后点击「同意」按钮 → 触发 Worker → 从 R2 拉文件链接 → 通过 Resend/Postmark 发给申请人

如果需要，告诉我，我给你把 Worker 代码也写了。

---

## 📁 文件结构

```
xiangming-site/
├── index.html      # 页面结构
├── styles.css      # 全部样式（深色主题、玻璃拟态、动效）
├── script.js       # 交互 + 表单
└── README.md
```

---

## 🎨 定制建议

- **头像**：如果需要在 Hero 加头像，把图片放进目录，在 `.hero-inner` 顶部加 `<img src="avatar.jpg" class="hero-avatar" />` 并加对应 CSS
- **换主色**：改 `styles.css` 顶部 `--accent`、`--accent-2`、`--accent-3` 三个变量
- **加板块**：仿照 `<section class="section">` 复制即可
- **部署**：直接把三个文件丢到 GitHub Pages / Vercel / Netlify，5 秒上线
