# Bilibili VIP Quality Filter

这是一个简单的油猴脚本，用于在哔哩哔哩视频播放器中自动过滤大会员专属清晰度选项。

## 📥 安装

**[👉 点击此处直接安装脚本](./bilibili-vip-quality-filter.user.js)**

*(如果点击上方链接后没有弹出安装界面，请尝试右键点击链接选择“另存为”，或者查看下方的“发布说明”)*

## 功能

- 自动识别播放器中的清晰度菜单项（`bpx-player-ctrl-quality-menu-item`）。
- 检查其中是否包含“大会员”关键字。
- 如果包含，则自动移除该选项，避免误触或干扰。

## 🚀 发布与分享指南（重要）

为了让其他人也能通过点击链接直接安装，你需要将此项目上传到 GitHub 等平台，并获取文件的 **Raw 链接**。

1.  **上传代码**：将本项目上传到你的 GitHub 仓库。
2.  **获取 Raw 链接**：
    *   在 GitHub 仓库中找到 `bilibili-vip-quality-filter.user.js` 文件。
    *   点击文件右上角的 **"Raw"** 按钮。
    *   复制浏览器地址栏中的 URL（通常以 `https://raw.githubusercontent.com/...` 开头）。
3.  **更新链接**：
    *   编辑 `README.md` 文件。
    *   将上方的 `[👉 点击此处直接安装脚本](./bilibili-vip-quality-filter.user.js)` 中的链接替换为你刚才复制的 Raw URL。
    *   提交更改。

这样，任何人访问你的 GitHub 项目主页，点击该链接即可直接触发油猴插件的安装界面。

## 手动安装

1.  安装 Tampermonkey 插件。
2.  创建新脚本，将 `bilibili-vip-quality-filter.user.js` 中的代码复制进去保存。
3.  打开 Bilibili 视频页面即可生效。
