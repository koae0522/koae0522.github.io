var nankai = 0;
var first = true;

var ary = [];
var Aary = [];

var Bary = [];
var Iary = [];
var Nary = [];
var Gary = [];
var Oary = [];

function S() {
  if (first == true) {
    Start();
  } else {
    Turn();
  }
}

function Start() {
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

  console.log(Bary);
  console.log(Iary);
  console.log(Nary);
  console.log(Gary);
  console.log(Oary);

  document.getElementById("imamade").innerText = Aary;
}

function Name() {
  document.getElementById("title").innerText =
    document.getElementById("name").value;
}
