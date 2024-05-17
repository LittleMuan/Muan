// 记录欢迎语
var welcome = ""
// 刷新并显示日期和时间
setInterval(function () {
  var nowDate=getDate().split('/');
  var l = ["日", "一", "二", "三", "四", "五", "六"]
  document.getElementById("current_date").innerHTML = nowDate[0] + "年" + nowDate[1] + "月" + nowDate[2] + "日    星期" + l[nowDate[3]] + "    " + nowDate[4] + ':' + nowDate[5] + ':' + nowDate[6];
}, 1000)

window.addEventListener('unload', function () {
  localStorage.setItem("date", getDate())
});


// 根据现在和上次的日期对比
if (!localStorage.getItem("date")) {
  alert("获取上次登录日期时间失败")
} else {
  lastDate = localStorage.getItem("date").split('/');
  date = getDate().split('/');
  if(lastDate[2]!==date[2]){
    welcome+="新的一天！沐安说：“今天也要开心哦”\n";
  }else{
    // welcome+="没到新的一天\n";
  }
}

// 获取当前日期和时间
function getDate() {
  var nowDate=""
  date = new Date();
  week = date.getDay()
  time = date.toLocaleTimeString().split(':');
  hour = time[0];
  minute = time[1];
  second = time[2];
  date = date.toLocaleDateString().split('-');
  if(date.length===1){
    date=date[0].split('/');
  }
  year = date[0];
  month = date[1];
  day = date[2];
  nowDate = year + '/' + month + '/' + day + '/' + week + '/' + hour + '/' + minute + '/' + second;
  return nowDate;
}

switch (new Date().getDay()) {
  case 0: welcome += "周末最后一天了呢...\n"; break;
  case 1: welcome += "最厉害的1不过星期一(bushi\n"; break;
  case 2: welcome += "周二,略感疲惫?\n"; break;
  case 3: welcome += "周三又有什么该做的呢..嗯..\n"; break;
  case 4: welcome += "今天可以疯狂星期四~hh\n"; break;
  case 5: welcome += "要周末啦，加油!\n"; break;
  case 6: welcome += "享受周六吧~\n"; break;
}
alert(welcome);

// 关于点击选择器元素时的添加监听
// // html全局，body块级主体
// document.querySelector("h2").addEventListener("click", function () {
//     alert("戳h2惹!");
// });

// //   ()=>  和  function()   等效为匿名函数定义
// document.querySelector("h1").addEventListener("click", ()=> {
//     alert("戳H1啦~?");
// });


//   获取img选择器添加点击事件（匿名函数，用if判断为picture1类的图片才进行操作）
let myImage = document.querySelector("img");
myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  let myClass = myImage.getAttribute("class")
  if (mySrc === "images/SelectedDirt.png" && myClass === "picture1") {
    myImage.setAttribute("src", "images/Dirt.png");
  } else {
    myImage.setAttribute("src", "images/SelectedDirt.png");
  }
};


//获取选择器
let myButton = document.querySelector("button");
// 添加点击事件
myButton.onclick = function () {
  setUserName();
};
let myHeading = document.querySelector("h1");
//定义函数
function setUserName(ps = "") {
  date=getDate().split('/');
  let myName = prompt("请输入你的名字。" + ps);
  if (!myName) {
    setUserName("您没有进行输入。")
  } else {
    localStorage.setItem("name", myName);
    var greet=""
    if(date[4]>=6&&date[4]<9){
      greet="早上好，"
    }else if(date[4]>=9&&date[4]<12){
      greet="上午好，"
    }else if(date[4]>=12&&date[4]<14){
      greet="中午好，"
    }else if(date[4]>=14&&date[4]<18){
      greet="下午好，"
    }else if(date[4]>=18&&date[4]<22){
      greet="晚上好，"
    }else if(date[4]>=22&&date[4]<24){
      greet="夜已深，早点睡觉嗷，"
    }else{
      greet="夜已深，早点睡觉嗷，"
    }
    myHeading.textContent = greet+ myName;
  }
}
//进入页面，如果有存储名字，则调用本地存储api的getitem获取，否则prompt读入并调用setitem存储
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  date=getDate().split('/');
  let storedName = localStorage.getItem("name");
  var greet=""
    if(date[4]>=6&&date[4]<9){
      greet="早上好，"
    }else if(date[4]>=9&&date[4]<12){
      greet="上午好，"
    }else if(date[4]>=12&&date[4]<14){
      greet="中午好，"
    }else if(date[4]>=14&&date[4]<18){
      greet="下午好，"
    }else if(date[4]>=18&&date[4]<22){
      greet="晚上好，"
    }else if(date[4]>=22&&date[4]<24){
      greet="夜已深，早点睡觉嗷，"
    }else{
      greet="夜已深，早点睡觉嗷，"
    }
  myHeading.textContent = greet + storedName;
}
