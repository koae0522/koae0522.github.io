// phina.js をグローバル領域に展開
phina.globalize();

//サイズ指定用の定数
var SCREEN_X = 900;
var SCREEN_Y = 600;
let scoreLabel;
let score=0;

var blueCat={
    image:{
        "bluecat":"image/cat_blue.png",
        "pinkcat":"image/cat_pink.png",
        "bg":"image/background.png",
    },
  };


// MainScene クラスを定義
phina.define('MainScene', {
    superClass: 'CanvasScene',
    init: function(option) {    //ここにoptionを追加
      this.superInit(option);   //こっちにも

      // 背景色を指定
      this.backgroundColor = '#444';
      this.bg = Sprite("bg").addChildTo(this);
      this.bg.origin.set(0, 0);


      scoreLabel=Label(`スコア:${score}`).addChildTo(this).setPosition(SCREEN_X /2,30);
      
      for(let i=0;i<30;i++){
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

    superClass:"Sprite",

    init:function(color,image){
      this.superInit(image);
      this.color=color;
      this.setSize(50,50);
      this.setPosition(Math.randint(330,570),Math.randint(50,600));
      this.pointed=false;
      this.setInteractive(true);
    },

    onpointstart:function(){
      this.pointed=true; 
     },

     onpointend:function(){
      this.pointed=false; 

      //正解
      if(this.color=="blue"&&this.x<=300||this.color=="pink"&&this.x>=600){
        this.update=function(){
          this.rotation++;
          if(this.scaleX>=0){
            this.scaleX-=0.005;
            this.scaleY-=0.005;
          }
          else{
            this.hide();
          }
        }          
        score++;
        scoreLabel.text=`スコア:${score}`;
      }

      //不正解
      if(this.color=="blue"&&this.x>=600||this.color=="pink"&&this.x<=300){
        this.update=function(){
          if(this.scaleX>=0){
            this.scaleX+=0.5;
            this.scaleY+=0.5;
          }
        }
      }
     },
     
     update:function(app){
      if(this.pointed==true){
        this.x = app.pointer.x; 
        this.y = app.pointer.y; 
      };
      //動かしたい
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