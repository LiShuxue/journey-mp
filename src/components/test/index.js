/**
 * Component 构造器来构造组件。 Component 构造器与 Page 的主要区别是：方法需要放在 methods: { } 里面。
 * 详细介绍：https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/
 */
Component({
  behaviors: [], // 类似mixins
  // 组件属性
  properties: {
    test: {
      type: String,
      optionalTypes: [String, Object], // 这个属性可以是 Number 、 String 、 Boolean 三种类型中的一种
      value: '',
      observer: function (newVal, oldVal) {
        // 属性值变化时执行
        console.log(newVal, oldVal);
      },
    },
  },

  // 组件内部数据。跟properties都可以用于渲染。使用 this.data 可以获取内部数据和属性值。 通过this.setData 来改变属性值和内内部值。
  data: {},

  // 用于监听 properties 和 data 的变化
  observers: {},

  lifetimes: {
    // 生命周期函数，可以定义在最外层，或在methods中
    created() {
      console.log('组件实例刚刚被创建时执行，注意此时不能调用 setData');
    },
    attached() {
      console.log('初始化完毕，组件实例进入页面节点树时执行，绝大多数初始化工作可以在这个时机进行');
    },
    ready() {
      console.log('页面渲染完成');
    },
    moved() {
      console.log('在组件实例被移动到节点树另一个位置时执行');
    },
    detached() {
      console.log('在组件离开页面节点树后触发');
    },
    error() {
      console.log('组件内部报错时');
    },
  },

  pageLifetimes: {
    show() {
      console.log('组件所在的页面被展示时执行');
    },
    hide() {
      console.log('组件所在的页面被隐藏时执行');
    },
    resize() {
      console.log('组件所在的页面尺寸变化时执行');
    },
    routeDone() {
      console.log('组件所在页面路由动画完成时执行');
    },
  },

  // 方法列表
  methods: {},
});
