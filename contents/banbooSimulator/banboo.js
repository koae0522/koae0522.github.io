    let nowTime=new Date();

    if(localStorage.firstFlug==null)
    {
        //初めて訪問した時の処理
        localStorage.firstTime=Math.floor(nowTime.getTime()/(1000*60));
        localStorage.firstFlug=false;
        localStorage.currentHeight=0;
        console.log("はじめてです");
        bamboo();
    }
    else
    {
        bamboo();
        setInterval("bamboo()", 6000);
    }

    function bamboo()
    {
        let nowTime=new Date();

        //高さ計算
       // console.log("はじめてじゃない");
       // console.log("最初時刻"+localStorage.firstTime);
        currentTime=Math.floor(nowTime.getTime()/(1000*60));
        //console.log("現在時刻"+currentTime);
        
        let sa=currentTime-localStorage.firstTime;
       // console.log("差     "+sa);

        localStorage.currentHeight=(sa/60).toFixed(2);
      //  console.log(localStorage.currentHeight);
        let banbooHeight=document.getElementById("banbooHeight");

        //テスト用強制成長コード
        //localStorage.currentHeight=3643.64;
        let h=Number("localStorage.currentHeight");

        //高さ表示
        if(localStorage.currentHeight<100)
        {
            banbooHeight.innerHTML=localStorage.currentHeight+"cm";
        }
        else
        {
            banbooHeight.innerHTML=Math.floor(localStorage.currentHeight/100)+"m"
            +Math.floor(localStorage.currentHeight % 100)+"cm"+
           String(localStorage.currentHeight).split(".")[1].charAt(0)+
           String(localStorage.currentHeight).split(".")[1].charAt(1)
           +"mm";
        }
 
        //画像表示
        if(localStorage.currentHeight<50)
        {
            let heightPx=(localStorage.currentHeight);
            let imgElm=document.getElementById("img");
            imgElm.style.width=heightPx+"%";
        }
        else
        {
            let heightPx=localStorage.currentHeight;
            let imgElm=document.getElementById("img");
            imgElm.src="image/bamboo.png";
            imgElm.style.width="100%";
            imgElm.style.height=heightPx+"px";
        }
           
        //時刻によって背景変更
        time=nowTime.getHours();
        let textElm=document.getElementById("text");
        let bodyElm=document.body;
        time=10;

        //夜 19~5
        if(time>=19||time<5)
        {
            textElm.style.color="#FFFFFF";
            bodyElm.style.background="linear-gradient(to bottom, #000000, #0c1b33)";
        }
        //朝 5~9
        else if(time>=5&&time<9)
        {
            textElm.style.color="#000000";
            bodyElm.style.background="linear-gradient(to bottom, #75d6ff, #ffffff)";
        }
        //昼 9~16
        else if(time>=9&&time<16)
        {
            textElm.style.color="#000000";
            bodyElm.style.background="linear-gradient(to bottom, #87cefa, #98fb98)";
        }
        //夕方 16~19
        else if(time>=16&&time<19)
        {
            textElm.style.color="#000000";
            bodyElm.style.background="linear-gradient(to bottom, #ff8c00, #ffd700)";
        }
    }


    let tweetbtn=document.getElementById("tweet");
    tweetbtn.addEventListener("click",()=>{
        let text="わたしの竹は"+document.getElementById("banbooHeight").innerHTML+"になりました"+"koae0522.github.io/contents/banbooSimulator/banboo.html";
        window.open("https://twitter.com/share?text="+text);
    });
       

