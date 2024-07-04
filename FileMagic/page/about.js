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
    

    

const text = hmUI.createWidget(hmUI.widget.TEXT, {
  x: 20,//200,
  y: 80,
  w: 320,
  h: 100, 
  color: 0xD9D9D9,
  text_size: 40,
  text_style: hmUI.text_style.WRAP,
  text: "关于"
})

hmUI.createWidget(hmUI.widget.TEXT, {
  x: 10,
  y: 139,
  w: 190,
  h: 220,
  color: 0xFFC451,
  text_size: 40,
  text_style: hmUI.text_style.WRAP,
  text: "File Magic" 
}).addEventListener(hmUI.event.CLICK_UP, function (c) {
  hmApp.gotoPage({
  url: "page/CAIDAN",
  param: ""
  })
  });




//---------------------------------分割线-------------------------------------

hmUI.createWidget(hmUI.widget.IMG, {//bg
  x: 0,
  y: 250,
  src: 'about us.png'
});

hmUI.createWidget(hmUI.widget.IMG, {//bg
  x: 0,
  y: 400,
  src: 'thanks.png'
}).addEventListener(hmUI.event.CLICK_UP, function (c) {
  hmApp.gotoPage({
  url: "page/code_about",
  param: ""
  })
  });

hmUI.createWidget(hmUI.widget.IMG, {//bg
  x: 0,
  y: 550,
  h: 250,
  src: 'join us.png'
})




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