try {
  (() => {
    var e = __$$hmAppManager$$__.currentApp,
    t = e.current;
  new DeviceRuntimeCore.WidgetFactory(
    new DeviceRuntimeCore.HmDomApi(e, t),
    "drink"
  );
  const y = true
  const n = false
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



//分割-------------------------------------------------

const pic = hmUI.createWidget(hmUI.widget.IMG, {
  x: 16,
  y: 149,
  src: 'link-y.png'
})
const tips111 = hmUI.createWidget(hmUI.widget.IMG, {
  x: 78,
  y: 278,
  src: 'i.png'
}).addEventListener(hmUI.event.CLICK_UP, function (c) {
  pic.setProperty(hmUI.prop.MORE, { y: 90 });
  hmUI.createWidget(hmUI.widget.FILL_RECT, {
    x: 78,
    y: 278,
    w: 36,
    h: 36,
    radius: 0,
    color: 0x17130b
  });
  hmUI.createWidget(hmUI.widget.TEXT, {
    x: 23,
    y: 220,
    w: 146,
    h: 150,
    color: 0xece1d4,
    text_size: 20,
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    text: "无缝换绑可以让\n你在保留数据\n（应用和表盘）\n的前提下换绑手\n环。"  
  })
})



hmUI.createWidget(hmUI.widget.IMG, {
  x: 47,
  y: 398,
  src: 'go.png'
}).addEventListener(hmUI.event.CLICK_UP, function (c) {
  pic.setProperty(hmUI.prop.VISIBLE, false);
  hmUI.createWidget(hmUI.widget.FILL_RECT, {
    x: 0,
    y: 149,
    w: 192,
    h: 490-149,
    radius: 0,
    color: 0x17130b
  })
  hmUI.createWidget(hmUI.widget.IMG, {
    x: 23,
    y: 113,
    src: 'jg.png'
  })
  hmUI.createWidget(hmUI.widget.IMG, {
    x: 47,
    y: 398,
    src: 'go.png'
  }).addEventListener(hmUI.event.CLICK_UP, function (c) {
    hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 0,
      y: 113,
      w: 192,
      h: 490-113,
      radius: 0,
      color: 0x17130b
    })
    hmUI.createWidget(hmUI.widget.IMG, {//bg
      x: 23,
      y: 135,
      src: 'jg1.png'
    })
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 47,
      y: 398,
      src: 'go.png'
    }).addEventListener(hmUI.event.CLICK_UP, function (c) {
      hmUI.showToast({
        text: '啊哦~\n暂未开放',
      });
    })
    
    
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