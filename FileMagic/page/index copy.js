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
    
// 定义六神、五行和阴阳的数组
const sixGods = ["大安", "留连", "速喜", "赤口", "小吉", "空亡"];
const fiveElements = ["水", "木", "火", "土", "金"];
const yinYang = ["阳", "阴"];

// 定义一个函数，根据农历月、日、时生成卦象
function getGua(month, day, hour) {
  // 从大安开始，顺时针数月数，得到第一个宫
  let first = (month - 1) % 6;
  // 从第一个宫开始，顺时针数日数，得到第二个宫
  let second = (first + day - 1) % 6;
  // 从第二个宫开始，顺时针数时数，得到第三个宫
  let third = (second + hour - 1) % 6;
  // 返回三个宫的数组
  return [first, second, third];
}

// 定义一个函数，根据卦象生成具象卦
function getConcreteGua(gua) {
  // 定义一个空数组，用来存放具象卦的三画
  let concreteGua = [];
  // 遍历卦象的三个宫
  for (let i = 0; i < 3; i++) {
    // 根据六神的阴阳属性，生成具象卦的一画
    // 大安、速喜、小吉为阳，用1表示
    // 留连、赤口、空亡为阴，用0表示
    let line = yinYang.indexOf(sixGods[gua[i]]) === 0 ? 1 : 0;
    // 将一画添加到具象卦的数组中
    concreteGua.push(line);
  }
  // 返回具象卦的数组
  return concreteGua;
}

// 定义一个函数，根据具象卦生成卦名
function getGuaName(concreteGua) {
  // 定义一个对象，存放具象卦和卦名的对应关系
  const guaNames = {
    "111": "乾",
    "011": "兑",
    "101": "离",
    "001": "震",
    "110": "巽",
    "010": "坎",
    "100": "艮",
    "000": "坤"
  };
  // 将具象卦的数组转换为字符串，作为对象的键
  let key = concreteGua.join("");
  // 返回对象中对应的卦名
  return guaNames[key];
}

// 定义一个函数，根据卦象生成解卦的文字
function getGuaText(gua) {
  // 定义一个对象，存放卦象和解卦的对应关系
  // 这里只是举例，您可以根据自己的理解和经验来编写解卦的内容
  const guaTexts = {
    "000": "凡事都可以得到安康，但是此为静卦，宜静不宜动。",
    "001": "凡事受阻，不如不做，此卦更不能有过大动作，凡事宜守。",
    "002": "凡事皆有喜讯，而且很快就会到来，但有先破财而后得财或者先得财后破财之兆。",
    "003": "运势衰落，伴有诸多纷争和口舌之祸，但问题不大，因为人能控制住局面。",
    "004": "凡事皆吉，不如大安的安稳，也不如速喜快速，是介于两者中间的卦象。",
    "005": "凡事秽暗不明，内心不安，运势起伏，可多听取他人之意见，切莫随意就做判断。",
    // 省略其他卦象的解卦
  };
  // 将卦象的数组转换为字符串，作为对象的键
  let key = gua.join("");
  // 返回对象中对应的解卦
  return guaTexts[key];
}

// 获取当前的农历月、日、时
// 这里只是简单的示例，您可以使用 Zepp OS 提供的日期和时间功能，来获取更准确的农历信息
let month = 1; // 农历正月
let day = 1; // 农历初一
let hour = 1; // 农历子时

// 调用函数，生成卦象
let gua = getGua(month, day, hour);
// 调用函数，生成具象卦
let concreteGua = getConcreteGua(gua);
// 调用函数，生成卦名
let guaName = getGuaName(concreteGua);
// 调用函数，生成解卦
let guaText = getGuaText(gua);

// 输出结果
console.log("您的卦象是：" + sixGods[gua[0]] + "，" + sixGods[gua[1]] + "，" + sixGods[gua[2]]);
console.log("您的具象卦是：" + concreteGua[0] + "，" + concreteGua[1] + "，" + concreteGua[2]);
console.log("您的卦名是：" + guaName);
console.log("您的解卦是：" + guaText);


const img = hmUI.createWidget(hmUI.widget.IMG, {//bg
      x: 0,
      y: 0,
      src: '1.png'
    })
    

const text = hmUI.createWidget(hmUI.widget.TEXT, {
  x: 50,//200,
  y: 80,
  w: 320,
  h: 100, 
  color: 0xFFC451,
  text_size: 40,
  text_style: hmUI.text_style.WRAP,
  text: sixGods[gua[0]]  
})

hmUI.createWidget(hmUI.widget.TEXT, {
  x: 30,
  y: 139,
  w: 120,
  h: 220,
  color: 0x68B5F1,
  text_size: 15,
  text_style: hmUI.text_style.WRAP,
  text: guaText  
})


hmUI.createWidget(hmUI.widget.TEXT, {
  x: 50,
  y: 220,
  w: 400,
  h: 100,
  color: 0xFFC451,
  text_size: 20,
  text_style: hmUI.text_style.WRAP,
  text: "卦名 :" + guaName
})



hmUI.createWidget(hmUI.widget.IMG, {//bg
      x: -10,
      y: 210,
      src: '2.png'
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