
try {
  (() => {
    var e = __$$hmAppManager$$__.currentApp,
    t = e.current;
  new DeviceRuntimeCore.WidgetFactory(
    new DeviceRuntimeCore.HmDomApi(e, t),
    "drink"
  );
  const battery = hmSensor.createSensor(hmSensor.id.BATTERY)
  const bat = battery.current
  const time = hmSensor.createSensor(hmSensor.id.TIME)
DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
t.module = DeviceRuntimeCore.Page({
    init_view() {
      
    // Create widgets, timers, call functions here
    const b = hmSetting.getBrightness()
    const bri = Math.ceil(b*0.01*168)
    hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: 192,
      h: 670,
      radius: 0,
      color: 0x17130b
    })

   

    const timeee = hmUI.createWidget(hmUI.widget.IMG, {
      x: 70,
      y: 16,
      src: 'time.png',
    })

    /*new Fx({
      begin: 100, // 初始函数值
      end: 200, // 目标函数值
      fps: 30, // 帧率
      time: 20, // 总时长(秒)
       style: Fx.Styles.EASE_IN_OUT_QUAD, //   预设类型 见fx.js中的Fx.Style
  
       onStop() {
         console.log("anim stop");
       }, // 动画结束后的回调函数
  
       // 每一帧的回调函数，参数为当前函数值，取值范围为[begin, end]
        func: (result) => timeee.setProperty(hmUI.prop.X, result),
    });*/
    

hmUI.createWidget(hmUI.widget.TEXT, {
  x: 50,
  y: 37,
  w: 120,
  h: 27,
  color: 0xffffff,
  text_size: 20,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.CENTER_V,
  text: "File Magic"  
})

const 问候 = hmUI.createWidget(hmUI.widget.TEXT, {
  x: 22,
  y: 93,
  w: 192,
  h: 50,
  color: 0xedc06c,
  text_size: 36,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.WRAP  
})
if(time.hour >= 6&&time.hour < 9){
  问候.setProperty(hmUI.prop.MORE, {
    text: '早上好~'
  })
}
if(time.hour >= 9&&time.hour < 12){
  问候.setProperty(hmUI.prop.MORE, {
    text: '上午好~'
  })
}
if(time.hour >= 12&&time.hour < 15){
  问候.setProperty(hmUI.prop.MORE, {
    text: '中午好~'
  })
}
if(time.hour >= 15&&time.hour < 18){
  问候.setProperty(hmUI.prop.MORE, {
    text: '下午好~'
  })
}
if(time.hour >= 18){
  问候.setProperty(hmUI.prop.MORE, {
    text: '晚上好~'
  })
}
if(time.hour <= 3){
  问候.setProperty(hmUI.prop.MORE, {
    text: '夜深了…'
  })
}
if(time.hour > 3&&time.hour <= 5){
  问候.setProperty(hmUI.prop.MORE, {
    text: '一日之始！'
  })
}
hmUI.createWidget(hmUI.widget.TEXT, {
  x: 22,
  y: 143,
  w: 192,
  h: 28,
  color: 0xffffff,
  text_size: 20,
  text_style: hmUI.text_style.WRAP,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.CENTER_V,
  text: "现在电量是" + bat + "%"
})


var temm = hmUI.createWidget(hmUI.widget.FILL_RECT, {
  x: 12,
  y: 179,
  w: 168,
  h: 46,
  radius: 24,
  color: 0x201b13
})
var tem = hmUI.createWidget(hmUI.widget.FILL_RECT, {
  x: 12,
  y: 179,
  w: bri,
  h: 46,
  radius: 24,
  color: 0xedc06c
})
var temmm = hmUI.createWidget(hmUI.widget.IMG, {
  x: bri-23,
  y: 190,
  src: 'light.png'
})
if(bri <= 28){
  tem.setProperty(hmUI.prop.W, 46)
  temmm.setProperty(hmUI.prop.X, 24)
}
tem.addEventListener(hmUI.event.MOVE, function (info) {
  if ( 159 > info.x && info.x > 35 ) {
    tem.setProperty(hmUI.prop.W, info.x + 10)
    temmm.setProperty(hmUI.prop.X, info.x - 13)
    hmSetting.setBrightness((info.x + 10) / 168 * 100)
  }
})
temm.addEventListener(hmUI.event.MOVE, function (info) {
  if ( 159 > info.x && info.x > 35 ) {
    tem.setProperty(hmUI.prop.W, info.x + 10)
    temmm.setProperty(hmUI.prop.X, info.x - 13)
    hmSetting.setBrightness((info.x + 10) / 168 * 100)
  }
})
temmm.addEventListener(hmUI.event.MOVE, function (info) {
  if ( 159 > info.x && info.x > 35 ) {
    tem.setProperty(hmUI.prop.W, info.x + 10)
    temmm.setProperty(hmUI.prop.X, info.x - 13)
    hmSetting.setBrightness((info.x + 10) / 168 * 100)
  }
})
hmUI.createWidget(hmUI.widget.FILL_RECT, {
  x: 12,
  y: 233,
  w: 168,
  h: 82,
  radius: 22,
  color: 0x2f2921
})
hmUI.createWidget(hmUI.widget.TEXT, {
  x: 68,
  y: 251,
  w: 80,
  h: 27,
  color: 0xece1d4,
  text_size: 20,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.CENTER_V,
  text: "文件管理"  
})
hmUI.createWidget(hmUI.widget.TEXT, {
  x: 68,
  y: 278,
  w: 100,
  h: 19,
  color: 0x9A8F80,
  text_size: 14,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.CENTER_V,
  text: "可以管理文件"  
})
hmUI.createWidget(hmUI.widget.IMG, {
  x: 32,
  y: 259,
  src: 'filelist.png'
});

//分割-------------------------------------------------
hmUI.createWidget(hmUI.widget.FILL_RECT, {
  x: 12,
  y: 233+90,
  w: 168,
  h: 82,
  radius: 22,
  color: 0x2f2921
}).addEventListener(hmUI.event.CLICK_UP, function (info) {
  hmApp.gotoPage({
    url: "page/huanbang/wufenghuanbang",
    param: ""
    })
})
hmUI.createWidget(hmUI.widget.TEXT, {
  x: 68,
  y: 251+90,
  w: 80,
  h: 27,
  color: 0xece1d4,
  text_size: 20,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.CENTER_V,
  text: "无缝换绑"  
}).setEnable(false)
hmUI.createWidget(hmUI.widget.TEXT, {
  x: 68,
  y: 278+90,
  w: 84,
  h: 19,
  color: 0x9A8F80,
  text_size: 14,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.CENTER_V,
  text: "保数据换绑"  
}).setEnable(false)
hmUI.createWidget(hmUI.widget.IMG, {//bg
  x: 32,
  y: 259+90,
  src: 'huanbang.png'
}).setEnable(false)

//分割-------------------------------------------------
hmUI.createWidget(hmUI.widget.FILL_RECT, {
  x: 12,
  y: 233+180,
  w: 168,
  h: 82,
  radius: 22,
  color: 0x2f2921
})

hmUI.createWidget(hmUI.widget.TEXT, {
  x: 68,
  y: 251+180,
  w: 180,
  h: 27,
  color: 0xece1d4,
  text_size: 20,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.CENTER_V,
  text: "关机&重启"  
})
hmUI.createWidget(hmUI.widget.TEXT, {
  x: 68,
  y: 278+180,
  w: 184,
  h: 19,
  color: 0x9A8F80,
  text_size: 14,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.CENTER_V,
  text: "如题"  
})
hmUI.createWidget(hmUI.widget.IMG, {//bg
  x: 32,
  y: 259+180,
  src: 'die.png'
})

//分割-------------------------------------------------
hmUI.createWidget(hmUI.widget.FILL_RECT, {
  x: 12,
  y: 233+180+90,
  w: 168,
  h: 82,
  radius: 22,
  color: 0x2f2921
})
hmUI.createWidget(hmUI.widget.TEXT, {
  x: 68,
  y: 251+180+90,
  w: 180,
  h: 27,
  color: 0xece1d4,
  text_size: 20,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.CENTER_V,
  text: "关于项目"  
})
hmUI.createWidget(hmUI.widget.TEXT, {
  x: 68,
  y: 278+180+90,
  w: 184,
  h: 19,
  color: 0x9A8F80,
  text_size: 14,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.CENTER_V,
  text: "写了一些东西"  
})
hmUI.createWidget(hmUI.widget.IMG, {//bg
  x: 32,
  y: 259+180+90,
  src: 'about.png'
})

    

    /*hmUI.createWidget(hmUI.widget.IMG, {//bg
      x: 3,
      y: 490,
      src: 'fast_open.png'
    }).addEventListener(hmUI.event.CLICK_UP, function (c) {
      hmApp.gotoPage({
      url: "page/fastopen",
      param: ""
      })
      });


    hmUI.createWidget(hmUI.widget.IMG, {//bg
      x: 3,
      y: 630,
      src: 'appside.png'
    }).addEventListener(hmUI.event.CLICK_UP, function (c) {
      hmApp.gotoPage({
      url: "page/appside_tech",
      param: ""
      })
      });

    hmUI.createWidget(hmUI.widget.IMG, {//bg
      x: 3,
      y: 790,
      h: 250,
      src: 'about.png'
    }).addEventListener(hmUI.event.CLICK_UP, function (c) {
      hmApp.gotoPage({
      url: "page/about",
      param: ""
      })
      });*/
 

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