
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
      x: 48,
      y: 159,
      src: 'icon.png',
    }).addEventListener(hmUI.event.CLICK_UP, function (info) {
      hmApp.goBack()
    })

    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 22,
      y: 255,
      w: 148,
      h: 45,
      color: 0xedc06c,
      text_size: 32,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text: "FileMagic"  
    })
    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 62,
      y: 302,
      w: 68,
      h: 29,
      radius: 29/2,
      normal_color: 0x54442a,
      press_color: 0x54442a,
      color: 0xf7dfbb,
      text_size: 18,
      text: "DEV"
    })
        const timer1 = timer.createTimer(
          1000,
          1500,
          function (option) {
            //回调
            hmFS.SysProSetInt('wel', 1)
            hmApp.gotoPage({
              url: "page/index",
              param: ""
              })
          }
        )
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