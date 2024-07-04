/**
 * Build with ZMake tool
 */


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
    



const img = hmUI.createWidget(hmUI.widget.IMG, {//bg
      x: 0,
      y: 0,
      src: 'bg1.png'
    })
    

const text = hmUI.createWidget(hmUI.widget.TEXT, {
  x: 20,//200,
  y: 70,
  w: 320,
  h: 100, 
  color: 0xFFC451,
  text_size: 40,
  text_style: hmUI.text_style.WRAP,
  text: "快捷启动" 
})

hmUI.createWidget(hmUI.widget.TEXT, {
  x: 60,
  y: 30,
  w: 120,
  h: 220,
  color: 0x000,
  text_size: 20,
  text_style: hmUI.text_style.WRAP,
  text: "happy!!"  
})









hmUI.createWidget(hmUI.widget.IMG, {//bg
      x: 3,
      y: 150,
      src: 'huanbang.png'
    });

    hmUI.createWidget(hmUI.widget.IMG, {//bg
      x: 3,
      y: 300,
      src: 'setthing.png'
    }).addEventListener(hmUI.event.CLICK_UP, function (c) {
      hmApp.startApp({
        url: "Settings_homeScreen" ,
        native: true
      })
      });

    hmUI.createWidget(hmUI.widget.IMG, {//bg
      x: 3,
      y: 450,
      src: 'take_photo.png'
    }).addEventListener(hmUI.event.CLICK_UP, function (c) {
      hmApp.startApp({
        url: "HidcameraScreen" ,
        native: true
      })
      });


    hmUI.createWidget(hmUI.widget.IMG, {//bg
      x: 3,
      y: 600,
      src: 'repeat.png'
    }).addEventListener(hmUI.event.CLICK_UP, function (c) {
      hmApp.startApp({
        url: "Settings_homeScreen" ,
        native: true
      })
      });

    hmUI.createWidget(hmUI.widget.IMG, {//bg
      x: 3,
      y: 750,
      src: 'off.png'
    }).addEventListener(hmUI.event.CLICK_UP, function (c) {
      hmApp.startApp({
        url: "HmReStartScreen" ,
        native: true
      })
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