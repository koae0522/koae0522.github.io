    let nowTime=new Date();

    if(localStorage.firstFlug==null)
    {
        localStorage.firstTime=Math.floor(nowTime.getTime()/(1000*60));
        localStorage.firstFlug=false;
        console.log("はじめてです");
    }
    else
    {
        console.log("はじめてじゃない");
        console.log("最初時刻"+localStorage.firstTime);
        currentTime=Math.floor(nowTime.getTime()/(1000*60));
        console.log("現在時刻"+currentTime);
        
        let sa=currentTime-localStorage.firstTime;
        console.log("差     "+sa);

        let currentHeight=(sa/60).toFixed(2);
        console.log(currentHeight);
        let banbooHeight=document.getElementById("banbooHeight");
        banbooHeight.innerHTML=currentHeight+"cm";

    }


