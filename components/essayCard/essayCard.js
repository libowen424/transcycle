// components/essayCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userAvator:
    {
      type:String,
      value:"../../imgs/service.png",
    },
    userName:
    {
      type:String,
      value: "用户1",
    },
    time:
    {
      type:String,
      value:"两小时前"
    },
    essayTitle:
    {
      type:String,
      value:"今天垃圾收集了吗"
    },
    context:{
      type:String,
      value:"今天有收集垃圾吗？今天有收集垃圾吗？今天有收集垃圾吗？今天有收集垃圾吗？"
    },
    photos:
    {
      type:Array,
      value:["../../imgs/scanner.png","../../imgs/scanner.png","../../imgs/scanner.png","../../imgs/scanner.png","../../imgs/scanner.png",]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    sysWidth:wx.getSystemInfoSync().windowWidth, //图片宽度

  },
  // 组件声明周期
  lifetimes: {
    attached: function() {
  // 在组件实例进入页面节点树时执行
      console.log(this.data.sysWidth)
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
