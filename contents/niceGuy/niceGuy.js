//サンプルからいい奴変更
let niceGuyChange = function () {
  let btn = document.getElementById("niceguy_changeButton");

  let fun = function () {
    let imgNum = document.getElementById("niceGuyChange_Select").value;

    let img = document.querySelector(".img");

    img.src = "niceguy/" + "niceguy" + imgNum + ".png";
  };
  btn.addEventListener("click", fun, false);
};
window.addEventListener("load", niceGuyChange);

//サンプルから背景変更
let backgroundChange = function () {
  let btn = document.getElementById("background_changeButton");

  let fun = function () {
    let bgNum = document.getElementById("backgroundChange_Select").value;
    let bg = document.querySelector(".bg");
    bg.src = "background/" + "bg" + bgNum + ".jpg";
  };

  btn.addEventListener("click", fun, false);
};
window.addEventListener("load", backgroundChange);

//セリフ変更
let serifChange = function () {
  let btn = document.getElementById("serif_changeButton");
  let fun = function () {
    let serifNum = document.getElementById("serifChange_Form").value;
    let serif = document.querySelector(".serif");
    serif.innerHTML = serifNum;
  };
  btn.addEventListener("click", fun, false);
};
window.addEventListener("load", serifChange);

//ローカルからいい奴変更
var inputfile = document.getElementById("niceGuyChange_Input");
inputfile.addEventListener(
  "change",
  function (e) {
    let img = document.querySelector(".img");
    var file = e.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = function () {
      img.src = reader.result;
    };
  },
  false
);

//ローカルから背景変更
var inputfile = document.getElementById("backgroundChange_Input");
inputfile.addEventListener(
  "change",
  function (e) {
    let bg = document.querySelector(".bg");
    var file = e.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = function () {
      bg.src = reader.result;
    };
  },
  false
);

//画像ダウンロード
let dl=function(){

  let link=document.getElementById("dlButton");
  let fun=function () {
    //canvasにmainを描画
   let canvas=html2canvas(document.querySelector("#main")).then(canvas => {
    let downloadEle = document.createElement("a");
    downloadEle.href = canvas.toDataURL("image/png");
    downloadEle.download = "いい奴だったよ.jpg";
    downloadEle.click();
  });
  }
  link.addEventListener("click",fun,false);
}
window.addEventListener("load",dl,false);