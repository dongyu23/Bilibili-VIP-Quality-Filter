// ==UserScript==
// @name         Bilibili VIP Quality Filter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动过滤哔哩哔哩视频播放器中大会员专属清晰度
// @author       You
// @match        https://www.bilibili.com/video/*
// @match        https://www.bilibili.com/bangumi/play/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 配置
    const CONFIG = {
        targetClass: 'bpx-player-ctrl-quality-menu-item',
        keyword: '大会员'
    };

    /**
     * 移除包含关键字的清晰度选项
     */
    function filterQualityItems() {
        const items = document.querySelectorAll(`.${CONFIG.targetClass}`);
        if (items.length === 0) return;

        items.forEach(item => {
            // 检查是否已经处理过（可选，但如果是直接移除元素则不需要）
            if (item.textContent.includes(CONFIG.keyword)) {
                console.log(`[Bilibili VIP Filter] 移除清晰度选项: ${item.textContent.trim()}`);
                item.remove(); // 移除整个元素
            }
        });
    }

    // 监听页面变化，处理动态加载的内容
    const observer = new MutationObserver((mutations) => {
        // 检查是否有相关节点被添加
        let shouldCheck = false;
        for (const mutation of mutations) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                shouldCheck = true;
                break;
            }
        }

        if (shouldCheck) {
            filterQualityItems();
        }
    });

    // 开始监听
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // 初始执行一次，以防脚本加载时元素已存在
    filterQualityItems();

})();
