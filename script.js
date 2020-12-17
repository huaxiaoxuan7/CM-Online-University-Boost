// ==UserScript==
// @name         网大学习视频增强脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  视频播放停止后自动恢复
// @author       Hua Xiao Xuan
// @match        https://wangda.chinamobile.com/
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  // Your code here...
  console.log('脚本启动中...')
  setTimeout(() => {
    const [video] = document.getElementsByTagName('video')
    video.addEventListener('pause', () => video.play())
    window.alert('元素已捕捉，增强模式开启')
  }, 5000)
})();