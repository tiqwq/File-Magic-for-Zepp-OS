    Page({
        init_view() {
    hmUI.setLayerScrolling(!1);
    hmUI.createWidget(hmUI.widget.FILL_RECT, {   //背景
      x: 0,
      y: 0,
      w: 192,
      h: 490,
      radius: 20,//圆角
      color: 0x2E7DF6//颜色，十六进制
    })
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 2,
      y: 72,
      w: 150,
      h: 100,
      align_h: hmUI.align.CENTER_H,
      text_size: 37,
      color: 0xffffff,
      text: '教程',
      show_level: hmUI.show_level.ONLY_NORMAL
    })
    hmUI.createWidget(hmUI.widget.STROKE_RECT, {
      x: 5,
      y: 130,
      w: 182,
      h: 80,
      radius: 20,//圆角
      line_width: 4,
      color: 0xFFFFFF//颜色，十六进制
    })

    //------------------
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 5,
      y: 130,
      w: 182,
      h: 80,
      color: 0xffffff,
      text_size: 24,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text: '不再提示'
    })
    .addEventListener(hmUI.event.CLICK_UP, function (c) {
      // 页面返回
      hmApp.goBack()
    }); 
    //------------------------stare--------------------------







    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 15,
      y: 300,
      w: 192,
      h: 190,
      color: 0xffffff,
      text_size: 26,
      align_h: hmUI.align.TOP,
      align_v: hmUI.align.TOP,
      text_style: hmUI.text_style.WRAP,
      text: "请前往\nZelee 社区\n查看教程。"
    })


















 

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

