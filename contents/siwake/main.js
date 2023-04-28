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
    init: function(option) {    //ここにoptionを追加
      this.superInit(option);   //こっちにも

      // 背景色を指定
      this.backgroundColor = '#444';
      this.bg = Sprite("bg").addChildTo(this);
      this.bg.origin.set(0, 0);
      
      scoreLabel=Label(`スコア:${score}`).addChildTo(this).setPosition(SCREEN_X /2,30);
    },

    //ねこ生成
    update: function(app){

      let gameTime=Math.floor(app.elapsedTime / 1000);

      if((gameTime-previousTime)>interval||interval<=0.3&&(gameTime-previousTime)>interval){
        previousTime=gameTime;
        if(interval>0.3){
          interval-=0.3;
        }
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
      }

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
      this.setSize(50,50);
      this.setPosition(Math.randint(330,570),Math.randint(50,580));
      this.pointed=false;
      this.time=0;
      this.dirX=Math.randint(-4,4);
      this.dirY=Math.randint(-4,4);

      if(this.dirX>0)
      {
        this.scaleX *= -1;
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
        this.update=function(){
          this.rotation++;
          if(this.scaleX>0){
            this.scaleX-=0.005;
            this.scaleY-=0.005;
          }
          else if(this.scaleX<0){
            this.scaleX+=0.005;
            this.scaleY+=0.005;
          }
          else if(this.scaleX==0){
            this.hide();
          }

        }          
        score++;
        scoreLabel.text=`スコア:${score}`;

      }

      //不正解
      if(this.color=="blue"&&this.x>=600||this.color=="pink"&&this.x<=300){
        this.update=function(){
          if(this.scaleX!=0){
            this.scaleX+=0.5;
            this.scaleY+=0.5;
          }
        
        }

      }
     },
     
     //ずっと繰り返し
     update:function(app){
      if(this.pointed==true){
        this.x = app.pointer.x; 
        this.y = app.pointer.y; 
      }
      //動かす
      else if(this.pointed==false&&(this.x>=320||this.x<=580||this.y<=580||this.y>=20)){
        this.x+=this.dirX;
        this.y+=this.dirY;
        if(this.x<=320||this.x>=580||this.y>=580||this.y<=20){
          this.dirX=-this.dirX;
          this.dirY=-this.dirY;
          this.scaleX *= -1;
        }
      }
     },
  });

// メイン処理
phina.main(function() {
  // アプリケーション生成
  var app = GameApp({
    startLabel: 'main', // メインシーンから開始する
    //ここでscreenのサイズを変更 ここはOK
    width: SCREEN_X,
    height: SCREEN_Y,
    assets: blueCat,
  });
  // アプリケーション実行
  app.run();
});