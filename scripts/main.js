var luckyNum=8;
first=false
if(luckyNum!=8 && !first){
    alert("不是幸运数")
    first!=first
}else{
    alert("今天是幸运日呢!\n快说谢谢兽兽沐安~");
    first!=first
}


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
myImage.onclick = ()=> {
  let mySrc = myImage.getAttribute("src");
  let myClass=myImage.getAttribute("class")
  if (mySrc === "images/SelectedDirt.png" && myClass==="picture1") {
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
function setUserName(ps="") {
    let myName = prompt("请输入你的名字。"+ps);
    if (!myName){
        setUserName("您没有进行输入。")
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = "今天也要开心哦，" + myName;
    }
}
//进入页面，如果有存储名字，则调用本地存储api的getitem获取，否则prompt读入并调用setitem存储
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "今天也要开心哦，" + storedName;
}
  