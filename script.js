// ==UserScript==
// @name         中移网大学习助手
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
    return new Promise(resolve => {
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

  function preventPause() { videoDom.play().catch(err => console.log(err)) }

  const onVideoChange = async (mutationsList) => {
    mutationsList.forEach(async item => {
      if (item.attributeName === 'src') {
        registerEvent(await getVideoDom())
      }
    })
  }

  const registerEvent = async (videoDom) => {
    videoDom.addEventListener('pause', preventPause)

    const observer = new MutationObserver(onVideoChange)
    observer.observe(videoDom, { attributes: true, childList: false, subtree: false })

    let { duration, currentTime } = videoDom
    while (!duration) {
      await wait(50)
      duration = videoDom.duration
    }
    while ((duration - currentTime) > 5) {
      await wait(1000)
      currentTime = videoDom.currentTime
    }
    videoDom.removeEventListener('pause', preventPause)
    videoDom.pause()
    await wait(duration * 50)
    videoDom.play()
    videoDom.addEventListener('pause', preventPause)
  }

  // 主逻辑
  const videoDom = await getVideoDom()
  registerEvent(videoDom)
  window.alert('中移网大学习助手已启动！')
})();