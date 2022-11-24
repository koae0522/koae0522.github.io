//グローバル変数
var docci;
var score=0;
var que=0;
var per=0;

function Asagaya()
{   
    
    //写真の枚数(最後の番号)
    var imgNum=1;

    //スタートボタン削除
    if( document.getElementById("start")!=null)
    {
         document.getElementById("start").remove();
    }
   
    //説明変更
    var setumei=document.getElementById("setumei").innerText="どっち？";
    var s=document.getElementById("score").innerText="正解数"+que+"問中"+score+"問 正答率"+per+"%";

    //乱数生成
    docci=Ran(1);
    console.log("docci"+docci);
    var dore=Ran(imgNum);
    console.log("dore"+dore);
    var syasin=document.getElementById("syasin");

    //ランダムで画像表示
    if(docci==0)
    {
        syasin.src="eriko/" + dore + ".jpg";
    }
    else
    {
        syasin.src="miho/" + dore + ".jpg";
    }

    //回答ボタン生成
    var eButton = document.createElement("input");
    eButton.type = "button";
    eButton.value = "江里子さん";
    eButton.id = "eButton";

    var mButton = document.createElement("input");
    mButton.type = "button";
    mButton.value = "美穂さん";
    mButton.id = "mButton";

    var nButton = document.createElement("input");
    nButton.type = "button";
    nButton.value = "次の問題へ";
    nButton.id = "nButton";

    var parent=document.getElementById("aButton");
    parent.appendChild(eButton);
    parent.appendChild(mButton);
    parent.appendChild(nButton);

}

function Ran(max)
{
    return Math.floor(Math.random()*(max+1));
}


$(document).on("click","#eButton",function(){
    eAns();
});

$(document).on("click","#mButton",function(){
    mAns();
});
    
$(document).on("click","#nButton",function(){
    Next();

});

function mAns()
{

    if(docci==1)
    {
        setumei.innerText="正解！";
        score++;
    }
    else
    {
        setumei.innerText="不正解！";
    }
    
}

function eAns()
{

    if(docci==0)
    {
        setumei.innerText="正解！";
        score++;
    }
    else
    {
        setumei.innerText="不正解！";
    }
}

function Next()
{
    document.getElementById("eButton").remove();
    document.getElementById("mButton").remove();
    document.getElementById("nButton").remove();
    if( document.getElementById("start")!=null)
    {
         document.getElementById("start").remove();
    }
    que++;
    per=Math.trunc((score/que)*100);
    Asagaya();
}