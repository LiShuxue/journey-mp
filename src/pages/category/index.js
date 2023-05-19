import config from '../../config';

/**
 * Page()构造函数注册小程序中的一个页面。可以传入页面的初始数据、生命周期、事件处理函数等。详细介绍：https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
 *
 * page.json 可以独立定义每个页面的一些属性，覆盖app.json中的定义，如导航栏背景颜色，标题等。详细介绍：https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html
 */
Page({
  // data 是页面第一次渲染使用的初始数据。可以通过setData来改变数据（同步的）。
  data: {
    config,
  },

  onLoad(options) {
    console.log('页面加载时触发，一个页面只会调用一次');
    console.log('页面URL参数：' + options);

    // page中可以获取到route对象
    console.log(this.route);

    // 如果一个页面由另一个页面通过 wx.navigateTo 打开，这两个页面间将建立一条数据通道。
    // 被打开的页面可以通过 this.getOpenerEventChannel() 方法来获得一个 EventChannel 对象
    // wx.navigateTo 的 success 回调中也包含一个 EventChannel 对象
    // 这两个 EventChannel 对象间可以使用 emit 和 on 方法相互发送、监听事件
    const eventChannel = this.getOpenerEventChannel();
    console.log(eventChannel);
  },

  onReady() {
    console.log('页面初次渲染完成时触发，一个页面只会调用一次');
  },

  onShow() {
    console.log('页面显示/切入前台时触发');
  },

  onHide() {
    console.log('页面隐藏/切入后台时触发，如 wx.navigateTo 或底部 tab 切换到其他页面，小程序切入后台等');
  },

  onUnload() {
    console.log('页面卸载时触发。如wx.redirectTo或wx.navigateBack到其他页面时');
  },

  // 监听用户下拉动作。需要在app.json的window选项中或页面配置中开启enablePullDownRefresh
  onPullDownRefresh() {},

  // 监听用户上拉触底事件。在app.json的window选项中或页面配置中设置触发距离onReachBottomDistance
  onReachBottom() {},

  // 监听用户滑动
  onPageScroll() {},

  // 监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容。此事件处理函数需要 return 一个 Object，用于自定义收藏内容
  onAddToFavorites() {},

  // 监听用户点击页面内转发按钮（button 组件 open-type="share"）或右上角菜单“转发”按钮的行为，并自定义转发内容。此事件处理函数需要 return 一个 Object，用于自定义转发内容
  onShareAppMessage() {},

  // 监听右上角菜单“分享到朋友圈”按钮的行为，并自定义分享内容。事件处理函数返回一个 Object，用于自定义分享内容
  onShareTimeline() {},

  // 页面尺寸改变时触发，比如手机或者pad上旋转屏幕，PC上启用大屏模式。
  onResize() {},

  // 当前是 tab 页时，点击 tab 时触发
  onTabItemTap() {},

  // 每当小程序可能被销毁之前，页面回调函数 onSaveExitState 会被调用，可以进行退出状态的保存。
  onSaveExitState() {},

  // 其他的函数可以作为wxml代码内的事件监听函数
  otherFun() {},
});
