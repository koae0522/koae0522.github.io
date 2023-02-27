    let nowTime=new Date();

    if(localStorage.firstFlug==null)
    {
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
        //localStorage.currentHeight=10;

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
           
    }


