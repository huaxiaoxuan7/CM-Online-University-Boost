# 网大学习助手脚本v0.2.2-使用说明

<br/>

### 声明
本脚本是出于学习前端技术为目的编写的，仅供学习交流使用。**如果您担心使用脚本会带来安全方面的问题，或者有其他方面的顾虑，请不要使用**。

<br/>


### 功能
脚本通过浏览器用户脚本管理器插件*Tampermonkey*为网页加载学习助手*脚本*，自动恢复暂停播放的网课视频。每个视频末尾会自动暂停视频长度的5%。目前脚本支持识别视频，pdf和图片等资源暂未开发。

<br/>

### 已知问题
部分课程在多开的情况下播放完成后仍显示*学习中*，需要单独重新学习。

<br/>

### Link
网大学习助手脚本[代码仓库](https://github.com/huaxiaoxuan7/CM-Online-University-Boost)

网大学习助手脚本[Greasy Fork](https://greasyfork.org/scripts/418737-%E4%B8%AD%E7%A7%BB%E7%BD%91%E5%A4%A7%E5%AD%A6%E4%B9%A0%E5%8A%A9%E6%89%8B)

浏览器插件[Tampermonkey](https://www.tampermonkey.net/)

<br/>

### 支持的浏览器及版本
* Chrome >= 31
* Microsoft Edge >= 79
* Firefox >= 52
* Safari 12+
* Opera Next >= 15
* 基于Chrome的其他国产浏览器（360极速等）

<br/>

### 如何使用
1. 在浏览器中安装Tampermonkey插件；
    * 内网环境下，Chrome、Microsoft Edge、360极速等浏览器可以使用附件中的离线安装包*Tampermonkey_v4.8.41.crx*安装插件。
    * 外网环境下，各浏览器可以通过扩展管理页面来安装插件。
2. 添加脚本
    * 内网环境下，点击Tampermonkey插件图标，选择*添加新脚本*，将附件中的script.js的内容替换到文本框中并保存。
    * 外网环境下，用安装好Tampermonkey插件的浏览器访问[脚本页面](https://greasyfork.org/scripts/418737-%E4%B8%AD%E7%A7%BB%E7%BD%91%E5%A4%A7%E5%AD%A6%E4%B9%A0%E5%8A%A9%E6%89%8B)，点击安装脚本。

<br/>

### 如何卸载
1. 在Tampermonkey管理页删除用户脚本;
2. 在用户浏览器中删除Tampermonkey插件。

<br/>

### 附件列表
```
├─readme.pdf    //使用说明
├─resource        //附件
|    ├─360浏览器安装使用说明.pdf
|    ├─Tampermonkey_v4.8.41.crx  // Tampermonkey插件离线安装包
|    ├─script.js                 // 脚本文件
```

<br/>

### Q&A
* 内网用户是否可以安装使用？
    * 可以，请参考附件中的其他说明文档。

* 影响我使用其他网页吗？
    * 不影响。

* 是否安全？
    * 脚本代码透明可见。
    * 脚本本身只监听video组件相关DOM并调用其自带方法，没有覆盖其他任何原网页的DOM和方法。

* 技术原理？
    1. 脚本生效后自动搜索DOM树，寻找video组件。
    2. 找到video组件后，监听video组件的pause事件。
    3. 当pause事件触发时调用video组件的play方法实现继续播放。
* 问题反馈
    * 请提[Issue](https://github.com/huaxiaoxuan7/CM-Online-University-Boost/issues)