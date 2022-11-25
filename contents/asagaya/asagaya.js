//グローバル変数
var docci;
var score=0;//正解数
var que=0;//問題数
var per=0;//正解率
var con=0;//連続正解数
var h=false;//ハードか true=ハード　false=ノーマル

function Hard()
{
    h=true;
    Asagaya();
}//aa
function Nomal()
{
    h=false;
    Asagaya();
}

function Asagaya()
{   
    console.log(h);
    //写真の枚数(最後の番号)
    var imgNum=30;

    //スタートボタン削除
    if( document.getElementById("start")!=null)
    {
         document.getElementById("start").remove();
    }
   
    if( document.getElementById("h-start")!=null)
    {
         document.getElementById("h-start").remove();
    }

    if( document.getElementById("nnButton")!=null)
    {
        document.getElementById("nnButton").remove();
    }
    
    if( document.getElementById("nhButton")!=null)
    {
        document.getElementById("nhButton").remove();
    }
   

    //説明変更
    var setumei=document.getElementById("setumei").innerText="どっち？";
    if(h==false)//ノーマル
    {
        var s=document.getElementById("score").innerText="正解数"+que+"問中"+score+"問 正答率"+per+"%";
    }
    else//ハード
    {
        var s=document.getElementById("score").innerText="連続正解数"+con+"問 ";
    }
    
    //乱数生成
    docci=Ran(1);
    var dore=Ran(imgNum);
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

    var oButton = document.createElement("input");
    oButton.type = "button";
    oButton.value = "終わる";
    oButton.id = "oButton";

    var parent=document.getElementById("aButton");
    parent.appendChild(eButton);
    parent.appendChild(mButton);

    if(h==false)
    {
        parent.appendChild(nButton);
        parent.appendChild(oButton);
    }
   
}

function Ran(max)
{
    return Math.floor(Math.random()*(max+1));
}

function mAns()
{

    if(docci==1)
    {
        document.getElementById("setumei").innerText="正解！";
        if(h==true)
        {
            
            var nButton = document.createElement("input");
            nButton.type = "button";
            nButton.value = "次の問題へ";
            nButton.id = "nButton";
            var parent=document.getElementById("aButton");
            parent.appendChild(nButton);
        }
        score++;
        con++;
    }
    else
    {
        document.getElementById("setumei").innerText="不正解！";
        if(h==true)
        {
          
            End();
        }
    }
    mButton.disabled = true;
    eButton.disabled = true;
}

function eAns()
{

    if(docci==0)
    {
        if(h==true)
        {
            
            var nButton = document.createElement("input");
            nButton.type = "button";
            nButton.value = "次の問題へ";
            nButton.id = "nButton";
            var parent=document.getElementById("aButton");
            parent.appendChild(nButton);
        }
        score++;
        con++;
    }
    else
    {
        document.getElementById("setumei").innerText="不正解！";
        if(h==true)
        {
            End();
        }
    }
    mButton.disabled = true;
    eButton.disabled = true;
}

function Next()
{
    document.getElementById("eButton").remove();
    document.getElementById("mButton").remove();
    if( document.getElementById("nButton")!=null)
    {
        document.getElementById("nButton").remove();
    }

    if( document.getElementById("oButton")!=null)
    {
        document.getElementById("oButton").remove();
    }

    if( document.getElementById("start")!=null)
    {
         document.getElementById("start").remove();
    }
    que++;
    per=Math.trunc((score/que)*100);
    Asagaya();
}

function End()
{
    document.getElementById("eButton").remove();
    document.getElementById("mButton").remove();
     if( document.getElementById("nButton")!=null)
    {
        document.getElementById("nButton").remove();
    }
     if( document.getElementById("oButton")!=null)
    {
        document.getElementById("oButton").remove();
    }


    syasin.src="simai/simai.jpg";
    if(h==true)
    {
        setumei=document.getElementById("setumei").innerText="ごめんあそばせ♪";
    }
    else
    {
        setumei=document.getElementById("setumei").innerText="おつかれさま♪";
    }
    

    var nnButton = document.createElement("input");
    nnButton.type = "button";
    nnButton.value = "何問でもノーマルモード";
    nnButton.id = "nnButton";

    var nhButton = document.createElement("input");
    nhButton.type = "button";
    nhButton.value = "間違えたら即終了ハードモード";
    nhButton.id = "nhButton";
    
    var parent=document.getElementById("aButton");
    parent.appendChild(nnButton);
    var parent=document.getElementById("aButton");
    parent.appendChild(nhButton);
}

function MoreN()
{
  
    if( document.getElementById("nnButton")!=null)
    {
        document.getElementById("nnButton").remove();
    }
    
    if( document.getElementById("nhButton")!=null)
    {
        document.getElementById("nhButton").remove();
    }

    score=0;
    que=0;
    per=0;
    con=0;
    Nomal();

}

function MoreH()
{
  
    if( document.getElementById("nnButton")!=null)
    {
        document.getElementById("nnButton").remove();
    }
    
    if( document.getElementById("nhButton")!=null)
    {
        document.getElementById("nhButton").remove();
    }

    score=0;
    que=0;
    per=0;
    con=0;
    Hard();
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

$(document).on("click","#oButton",function(){
    End();
});

$(document).on("click","#tButton",function(){
    More();
});

$(document).on("click","#nnButton",function(){
    MoreN();
});

$(document).on("click","#nhButton",function(){
    MoreH();
});
