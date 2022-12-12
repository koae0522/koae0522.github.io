//何回目か
var nankai = 0;
var first = true;

var Nary = [];
var Bary = [];

function S() {
    if (first == true) {
        Start();
    }
    else {
        Turn();
    }
}

function Start() {
    var i = 0;

    for (i = 0; i < 75; i++) {
        Nary[i] = i + 1;
    }

    for (var i = (Nary.length - 1); 0 < i; i--) {
        var r = Math.floor(Math.random() * (i + 1));
        var tmp = Nary[i];
        Nary[i] = Nary[r];
        Nary[r] = tmp;
    }
    
    nankai++;
    var n = document.getElementById("num").innerText = Nary[nankai - 1];
    console.log(n);
    Bary.push(n);
    document.getElementById("imamade").innerText = Bary;
    first = false;
}

function Turn() {
    nankai++;
    var n = document.getElementById("num").innerText = Nary[nankai - 1];
    console.log(n);
    Bary.push(n);
    Bary.sort(function(a,b)
    {
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;
    });
    document.getElementById("imamade").innerText = Bary;
}

function Name()
{
    document.getElementById("title").innerText=document.getElementById("name").value;
}