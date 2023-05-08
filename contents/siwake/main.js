// phina.js をグローバル領域に展開
phina.globalize();

//サイズ指定用の定数
let SCREEN_X = 900;
let SCREEN_Y = 600;

let scoreLabel;
let score=0;
let interval=3;
let previousTime=0;

var blueCat={
    image:{
        "bluecat":"image/cat_blue.png",
        "pinkcat":"image/cat_pink.png",
        "bg":"image/background.png",
    },
  };


// MainScene クラスを定義
phina.define('MainScene', {
    superClass: 'DisplayScene',
    init: function(option) {    
      this.superInit(option);   

      // 背景色を指定
      this.backgroundColor = '#444';
      this.bg = Sprite("bg").addChildTo(this);
      this.bg.origin.set(0, 0);
      this.generate();
      scoreLabel=Label(`スコア:${score}`).addChildTo(this).setPosition(SCREEN_X /2,30);
    },

    //インターバルごとにねこ生成関数呼び出し
    update: function(app){

      let gameTime=Math.floor(app.elapsedTime / 1000);

      // if((gameTime-previousTime)>interval||interval<=0.3&&(gameTime-previousTime)>interval){
      //   previousTime=gameTime;
      //   if(interval>0.3){
      //     interval-=0.3;
      //   }
      //   this.generate();
      // }

    },

    //ねこ生成
    generate:function(){
      let ran=Math.randint(0,1);
        let color;
        let img;
        if(ran==0)
        {
          color="blue";
          img="bluecat";
        }
        else{
          color="pink";
          img="pinkcat";
        }  
        cat(color,img).addChildTo(this);
    },
  
  });

  //ねこクラス
  phina.define("cat",{

    //Spriteクラスを継承
    superClass:"Sprite",

    //初期化
    init:function(color,image){
      this.superInit(image);
      this.color=color;
      this.setSize(1,1);
      this.setPosition(Math.randint(330,570),Math.randint(50,580));
      this.pointed=false;
      this.time=0;
      this.dirX=Math.randint(-4,4);
      this.dirY=Math.randint(-4,4);
      this.finish=false;
      this.syokibidou=false;

      if(this.dirX<0)
      {
        this.tweener.scaleTo(50,1000 ,"easeOutElastic").play();
      }
      else{
        this.tweener.to({scaleX:-50,scaleY:50},1000,"easeOutElastic").play();
      }
    

      this.setInteractive(true);
    },

     //押したとき
    onpointstart:function(){
      this.pointed=true; 
     },

     //離したとき
     onpointend:function(){
      this.pointed=false; 

      //正解
      if(this.color=="blue"&&this.x<=300||this.color=="pink"&&this.x>=600){
        console.log("正解")
        this.finish=true;
        this.setInteractive(false);
        this.rotation++;
        this.tweener.scaleTo(0,3000).setLoop(false).play();
        score++;
        scoreLabel.text=`スコア:${score}`;

      }

      //不正解
      if(this.color=="blue"&&this.x>=600||this.color=="pink"&&this.x<=300){
        this.finish=true;
        this.setInteractive(false);
        this.big();
        console.log("不正解");
      }
     },
     
     //でかくする関数
     big:function(){
      console.log("big")
        if(this.scaleX>0){
          this.tweener.to({scaleX:1000,scaleY:1000,rotation:0},1000,"easeOutElastic").setLoop(false).play();
        }
        else if(this.scaleX<0){
          this.tweener.to({scaleX:-1000,scaleY:1000,rotation:0},1000,"easeOutElastic").setLoop(false).play();
        }
      
     },

     //ずっと繰り返し
     update:function(app){
      //マウスに追従
      if(this.pointed==true && this.finish==false){
        this.x = app.pointer.x; 
        this.y = app.pointer.y; 
      }
      //マウスでポイントされてないとき動かす
      else if(this.pointed==false&&(this.x>=320||this.x<=580||this.y<=580||this.y>=20) 
              && this.scaleY==50){
        this.x+=this.dirX;
        this.y+=this.dirY;

        //跳ね返ったとき
        if(this.x<=320||this.x>=580){
          this.dirX=-this.dirX;
          this.scaleX *= -1;
        }
        else if(this.y>=580||this.y<=20){
            this.dirY=-this.dirY;
        }
     
        }

        //時限爆弾
        if(this.finish==false){
           this.time+=app.deltaTime;
        console.log(Math.floor(this.time/1000));
        if((Math.floor(this.time/1000)>=3)&& ((Math.floor(this.time/1000))<5)&& this.syokibidou==false&& this.finish==false){
          this.tweener.rotateTo(15,50).rotateTo(-15,50).setLoop(true).play();
          this.syokibidou=true;
          console.log("a")
        }else  if(Math.floor(this.time/1000)>=8 &&  this.finish==false &&  this.syokibidou==true && this.finish==false){
          this.big();
          this.tweener.rotateTo(0,0).setLoop(false).play();
          this.finish=true;
          console.log("b")
        }
        }
       

      }
     },
  );

// メイン
phina.main(function() {
  var app = GameApp({
    startLabel: 'main', 
    width: SCREEN_X,
    height: SCREEN_Y,
    assets: blueCat,
  });
  app.run();
});