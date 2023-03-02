    let nowTime=new Date();

    if(localStorage.firstFlug==null)
    {
        //初めて訪問した時の処理
        localStorage.firstTime=Math.floor(nowTime.getTime()/(1000*60));
        localStorage.firstFlug=false;
        console.log("はじめてです");
    }
    else
    {
        bamboo();
        //一分ごとに更新
        setInterval("bamboo()", 60000);
    }

    function bamboo()
    {
        //高さ計算
        console.log("はじめてじゃない");
        console.log("最初時刻"+localStorage.firstTime);
        currentTime=Math.floor(nowTime.getTime()/(1000*60));
        console.log("現在時刻"+currentTime);
        
        let sa=currentTime-localStorage.firstTime;
        console.log("差     "+sa);

        localStorage.currentHeight=(sa/60).toFixed(2);
        console.log(localStorage.currentHeight);
        let banbooHeight=document.getElementById("banbooHeight");

        //テスト用強制成長コード
        //localStorage.currentHeight=100;

        //高さ表示
        if(localStorage.currentHeight<100)
        {
            banbooHeight.innerHTML=localStorage.currentHeight+"cm";
        }
        else
        {
            banbooHeight.innerHTML=Math.floor(localStorage.currentHeight/100)+"m"
            +(localStorage.currentHeight % 100)+"cm";
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
        time=16;

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

    function tweet(){
        let text="私の竹は"+document.getElementById("banbooHeight").innerHTML+"になりました";
        window.open("https://twitter.com/share?text="+
        +text);
    }

