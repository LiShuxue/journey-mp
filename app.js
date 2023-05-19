/**
 * app.js中调用 App 方法注册小程序实例，绑定生命周期函数、错误监听函数、全局对象，全局函数等，其他地方使用getApp()获取该实例。
 * 整个小程序只有一个 App 实例，是全部页面共享的。详细介绍：https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html
 *
 * app.json中定义小程序的全局配置，比如启动页，页面路径，窗口表现（标题，背景色等）、设置网络超时时间、设置多 tab 、分包结构、所需系统权限等。
 * 详细介绍：https://developers.weixin.qq.com/miniprogram/dev/framework/config.html
 *
 * 在 app.wxss 中的样式为全局样式，作用于每一个页面。
 * 在 page 的 wxss 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 app.wxss 中相同的选择器。
 */
App({
  onLaunch() {
    console.log('小程序初始化，全局只触发1次');
  },
  onShow: () => {
    console.log('小程序启动或从后台进入前台');
  },
  onHide() {
    console.log('小程序进入后台');
  },
  onError() {
    console.log('发生脚本错误或 API 调用报错');
  },
  onUnhandledRejection() {
    console.log('未处理的 Promise reject');
  },
  onPageNotFound() {
    console.log('打开的页面不存在');
  },
  onThemeChange() {
    console.log('主题切换');
  },

  // app.js中除了声明生命周期函数外，其他函数或数据都是全局可访问的。
  /**
   * 使用方法：
   * const app = getApp();
   * app.globalData;
   * app.globalFunction();
   */
  globalData: {
    text: '这是全局数据',
  },
  globalFunction() {
    console.log('这是全局函数');
  },
});
