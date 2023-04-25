// phina.js をグローバル領域に展開
phina.globalize();

//サイズ指定用の定数
var SCREEN_X = 900;
var SCREEN_Y = 600;
var pointed=false;

var ASSETS={
    image:{
        "bluecat":"image/cat_blue.png",
        "bg":"image/background.png",
    },
  };

// MainScene クラスを定義
phina.define('MainScene', {
    superClass: 'CanvasScene',
    init: function(option) {    
      this.superInit(option);

      // 背景色を指定
      this.bg=Sprite("bg").addChildTo(this);
      this.bg.origin.set(0, 0);
      this.bg.width = SCREEN_X;
      this.bg.height = SCREEN_Y;

      var cat=Sprite('bluecat').addChildTo(this).setPosition(320, 480).setSize(50,50);
     
      
    //ねこ

    cat.setInteractive(true);
    cat.onpointstart=function(){
     pointed=true; 
    };

    cat.onpointend=function(){
      pointed=false; 
      if(this.x<=300){
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
      }
     };

    cat.update = function(app){
    if(pointed==true){
      this.x = app.pointer.x; 
      this.y = app.pointer.y; 
    }
    };
    
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
    assets: ASSETS,
  });
  // アプリケーション実行
  app.run();
});