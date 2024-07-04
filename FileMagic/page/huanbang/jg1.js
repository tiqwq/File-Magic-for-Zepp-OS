try {
  (() => {
    var e = __$$hmAppManager$$__.currentApp,
    t = e.current;
  new DeviceRuntimeCore.WidgetFactory(
    new DeviceRuntimeCore.HmDomApi(e, t),
    "drink"
  );

DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
t.module = DeviceRuntimeCore.Page({
    init_view() {

    // Create widgets, timers, call functions here
    
  
    hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: 192,
      h: 490,
      radius: 0,
      color: 0x17130b
    })

   

    hmUI.createWidget(hmUI.widget.IMG, {
      x: 70,
      y: 16,
      src: 'time.png',
    })
    

hmUI.createWidget(hmUI.widget.TEXT, {
  x: 56,
  y: 37,
  w: 120,
  h: 27,
  color: 0xffffff,
  text_size: 20,
  align_h: hmUI.align.CENTER,
  align_v: hmUI.align.CENTER_V,
  text: "无缝换绑"  
})

hmUI.createWidget(hmUI.widget.IMG, {
  x: 47,
  y: 398,
  src: 'go.png'
}).addEventListener(hmUI.event.CLICK_UP, function (c) {
  hmApp.gotoPage({
  url: "page/huanbang/jg2",
  param: ""
  })
})


hmUI.createWidget(hmUI.widget.IMG, {//bg
  x: 23,
  y: 113,
  src: 'jg.png'
})


 

//---------------------------------分割线-------------------------------------


//----------------------------------------------------------------------



    
},
onInit() {
  console.log("index page.js on init invoke"), this.init_view();
},
onReady() {
  console.log("index page.js on ready invoke");
},
onShow() {
  console.log("index page.js on show invoke");
},
onHide() {
  console.log("index page.js on hide invoke");
},
onDestory() {
  console.log("index page.js on destory invoke");
}
});
})();
} catch (e) {
console.log(e);
}