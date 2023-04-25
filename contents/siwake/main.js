// phina.js をグローバル領域に展開
phina.globalize();

//サイズ指定用の定数
var SCREEN_X = 900;
var SCREEN_Y = 600;

var blueCat={
    image:{
        "bluecat":"image/cat_blue.png",
    },
  };

// MainScene クラスを定義
phina.define('MainScene', {
    superClass: 'CanvasScene',
    init: function(option) {    //ここにoptionを追加
      this.superInit(option);   //こっちにも
      // 背景色を指定
      this.backgroundColor = '#444';

      var cat=Sprite('bluecat').addChildTo(this).setPosition(320, 480).setSize(50,50);
     
    //マウスに追従させる
    cat.setInteractive(true);
    cat.onpointmove=function(){
        cat.update = function(app){
            this.x = app.pointer.x; // x 座標
            this.y = app.pointer.y; // y 座標
            this.text=`${Math.round(this.x)},${Math.round(this.y)}`
          };
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