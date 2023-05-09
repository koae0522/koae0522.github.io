//おまじない
phina.globalize();

let SCREEN_X =1280;
let SCREEN_Y =720;
let body;
let startFlag=false;
let speed=5;
let finishFlag=false;
let label;
let result;
let ASSETS ={
    image:{
        body:"image/body.png",
        foot:"image/foot.png",
        bg:"image/bg.jpg"
    },

};

phina.define("MainScene", {
// 継承
superClass: 'DisplayScene',
// 初期化
init: function(option) {    
    this.superInit(option);   
    this.bg = Sprite("bg").addChildTo(this);
      this.bg.origin.set(0, 0);
    body=Sprite("body").addChildTo(this).setPosition(680,580).setScale(1.5).setRotation(0);
    body.origin.set(0,0.5);
    Sprite("foot").addChildTo(this).setPosition(550,SCREEN_Y/2).setScale(0.8, 0.8);

    this.setInteractive(true);
    this.onpointstart=function(){
        startFlag=!startFlag;
    };

    label = Label(body.rotation).addChildTo(this).setPosition(100,100);
    label.fill="white";
    result=Label("タッチでスタート、タッチで止める").addChildTo(this).setPosition(SCREEN_X/2,100);
    result.fill="white";
},
update:function(){
    label.text=(body.rotation);
    if(startFlag==true&&body.rotation>=-180&&finishFlag==false){
        speed+=0.3;
        body.rotation-=speed;
    }else{
        
    }

    if(finishFlag==false&&startFlag==false){
        if((-130)>=body.rotation&&body.rotation>=(-140)){
            finishFlag=true;
            result.text=("成功！");

        }else if(body.rotation!=0){
            finishFlag=true;
            result.text=("アウト！");
        }
        
    }

    if(startFlag==true&&body.rotation<=(-180)){
      result.text=("アウト！");
    }

},
});

phina.main(function() {
    var app = GameApp({
      startLabel: 'main', 
      width: SCREEN_X,
      height: SCREEN_Y,
      assets:ASSETS,
    });
    app.run();
  });