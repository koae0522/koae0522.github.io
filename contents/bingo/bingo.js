var nankai = 0;
var first = true;

var ary = [];
var Aary = [];

var Bary = [];
var Iary = [];
var Nary = [];
var Gary = [];
var Oary = [];

let nIntervId;

var drum = new Audio("image/drum.mp3");
var cymbal = new Audio("image/cymbal.mp3");

function ready() {
  document.getElementById("stop_button").style.display = "none";
}

function S() {
  drum.currentTime = 0;
  drum.play();
  if (first == true) {
    Start();
  } else {
    Turn();
  }
}

function Start() {
  document.getElementById("stop_button").style.display = "inline";
  document.getElementById("start_button").style.display = "none";

  console.log("start");
  first = false;
  var i = 0;

  for (i = 0; i < 75; i++) {
    ary[i] = i + 1;
  }

  console.log(ary);

  for (var i = ary.length - 1; 0 < i; i--) {
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = ary[i];
    ary[i] = ary[r];
    ary[r] = tmp;
  }

  console.log(ary);
  console.log(first);

  Turn();
}

function Turn() {
  console.log("turn");
  nankai++;
  document.getElementById("stop_button").style.display = "inline";
  document.getElementById("start_button").style.display = "none";
  if (!nIntervId) {
    nIntervId = setInterval(Turn_anime, 75);
  }
}

function Turn_anime() {
  var effect;
  effect = Math.floor(Math.random() * 76);
  document.getElementById("num").innerText = effect;
}

function Stop() {
  clearInterval(nIntervId);
  nIntervId = null;

  drum.pause();
  cymbal.play();

  var n = (document.getElementById("num").innerText = ary[nankai - 1]);
  console.log(n);
  Aary.push(n);
  Aary.sort(function (a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  if (n < 15) {
    Bary.push(n);
    Bary.sort(function (a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    document.getElementById("b").innerText = Bary;
  } else if (n < 30) {
    Iary.push(n);
    Iary.sort();
    document.getElementById("i").innerText = Iary;
  } else if (n < 45) {
    Nary.push(n);
    Nary.sort();
    document.getElementById("n").innerText = Nary;
  } else if (n < 60) {
    Gary.push(n);
    Gary.sort();
    document.getElementById("g").innerText = Gary;
  } else if (n < 75) {
    Oary.push(n);
    Oary.sort();
    document.getElementById("o").innerText = Oary;
  }
  document.getElementById("stop_button").style.display = "none";
  document.getElementById("start_button").style.display = "inline";
}

function Name() {
  document.getElementById("title_text").innerText =
    document.getElementById("name").value;
}
