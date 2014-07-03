enchant();
window.onload = function() {
    var game = new Game(320,440); // ゲームの準備をし、表示領域の大きさを指定している
     game.preload('img/chara1.png'); // ゲームに用いるリソース(画像)を読み込む
      game.fps = 30;
       game.scale = 1;
        game.onload = function() {
             var bear = new Sprite(32, 32);
               bear.image = game.assets['img/chara1.png'];
                 bear.x = 10;
                   bear.y = 200;
                     game.rootScene.addChild(bear);
               
                       var text = new Label('テストサンプル');
                         text.x = 10;
                           text.y = 20;
                             game.rootScene.addChild(text);
                             
                               game.rootScene.backgroundColor = '#11FF11';
                             }
                              game.start(); // ゲームを開始する
                           }
