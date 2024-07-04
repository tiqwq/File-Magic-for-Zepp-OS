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
  x: 15,//200,
  y: 80,
  w: 320,
  h: 100, 
  color: 0xD9D9D9,
  text_size: 40,
  text_style: hmUI.text_style.WRAP,
  text_style: hmUI.text_style.NONE,
  text: "感谢"
})

hmUI.createWidget(hmUI.widget.TEXT, {
  x: 15,
  y: 139,
  w: 190,
  h: 320,
  color: 0xFFC451,
  text_size: 30,
  text_style: hmUI.text_style.WRAP,
  text: "每一个支持\n我们的用户" 
})




//---------------------------------分割线-------------------------------------

const imgArray = ['tx/1.png', 'tx/2.png', 'tx/3.png', 'tx/4.png', 'tx/5.png']
const cycleList = hmUI.createWidget(hmUI.widget.CYCLE_LIST, {
  x: 230,
  y: 120,
  h: 300,
  w: 30,
  data_array: imgArray,
  data_size: 5,
  item_height: 100,
  item_click_func: (list, index) => {
    console.log(index)
  },
  item_bg_color: 0xffffff
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