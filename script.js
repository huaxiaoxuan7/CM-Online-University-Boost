// ==UserScript==
// @name         网大学习助手
// @namespace    https://github.com/huaxiaoxuan7/CM-Online-University-Boost
// @version      0.1
// @description  网大视频播放停止后自动恢复播放
// @author       Hua Xiao Xuan
// @match        https://wangda.chinamobile.com/
// @grant        none
// ==/UserScript==

(async function () {
  'use strict';

  // 工具函数
  const wait = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms)
    })
  }

  const getVideoDom = async () => {
    let [video] = document.getElementsByTagName('video')
    while (!video || !video.src) {
      await wait(50)
      video = document.getElementsByTagName('video')[0]
    }
    return video
  }

  const onVideoChange = async (mutationsList) => {
    mutationsList.forEach(async item => {
      if (item.attributeName === 'src') {
        registerEvent(await getVideoDom())
      }
    })
  }

  const registerEvent = (videoDom) => {
    videoDom.addEventListener('pause', () => videoDom.play())
    const observer = new MutationObserver(onVideoChange)
    observer.observe(videoDom, { attributes: true, childList: false, subtree: false })
  }

  // 主逻辑
  registerEvent(await getVideoDom())
  window.alert('网大学习助手已启动！')
})();