// ==UserScript==
// @name         Bilibili VIP Quality Filter
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  自动过滤哔哩哔哩视频播放器中大会员专属清晰度
// @author       You
// @match        https://www.bilibili.com/video/*
// @match        https://www.bilibili.com/bangumi/play/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1. 注入 CSS 规则：性能最高效的隐藏方式
    // 这里的 .bpx-player-ctrl-quality-menu-item 是基础类
    // :has(.bpx-player-ctrl-quality-badge-big) 是假设B站有特定的VIP徽章结构（这也是一种常见的CSS过滤方式）
    // 但为了确保万无一失（匹配文本），我们结合 JS 给元素打标
    const style = document.createElement('style');
    style.textContent = `
        /* 定义隐藏规则，使用 !important 覆盖原有样式 */
        .bilibili-vip-filtered {
            display: none !important;
        }
    `;
    document.head.appendChild(style);

    const CONFIG = {
        targetClass: 'bpx-player-ctrl-quality-menu-item',
        keyword: '大会员',
        filterClass: 'bilibili-vip-filtered'
    };

    /**
     * 核心逻辑：仅添加类名，由 CSS 引擎负责隐藏
     * 这比直接 remove() 元素性能更好，避免了 DOM 树的剧烈变动（Reflow）
     */
    function filterQualityItems() {
        // 查找所有目标元素
        const items = document.querySelectorAll(`.${CONFIG.targetClass}:not(.${CONFIG.filterClass})`);
        
        for (let i = 0, len = items.length; i < len; i++) {
            const item = items[i];
            // 纯文本匹配
            if (item.textContent.includes(CONFIG.keyword)) {
                // 仅添加类名，浏览器渲染引擎会自动应用 display: none
                item.classList.add(CONFIG.filterClass);
                console.log(`[VIP Filter] 已隐藏: ${item.textContent.trim()}`);
            }
        }
    }

    // 监听页面变化
    // 使用 requestAnimationFrame 或简单的节流来进一步优化性能
    // 但对于 DOM 变更，MutationObserver 依然是标准且最高效的 API
    const observer = new MutationObserver((mutations) => {
        let shouldCheck = false;
        for (const mutation of mutations) {
            // 仅关注节点增加，且忽略我们要添加的 class 属性变化
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                shouldCheck = true;
                break;
            }
        }

        if (shouldCheck) {
            filterQualityItems();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // 初始执行
    filterQualityItems();

})();
