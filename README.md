# Bilibili VIP Quality Filter

这是一个简单的油猴脚本，用于在哔哩哔哩视频播放器中自动过滤大会员专属清晰度选项。

## 功能

- 自动识别播放器中的清晰度菜单项（`bpx-player-ctrl-quality-menu-item`）。
- 检查其中是否包含“大会员”关键字。
- 如果包含，则自动移除该选项，避免误触或干扰。

## 安装

1. 安装 Tampermonkey 插件。
2. 创建新脚本，将 `bilibili-vip-quality-filter.user.js` 中的代码复制进去保存。
3. 打开 Bilibili 视频页面即可生效。
