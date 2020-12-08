$(document).ready(function (){
    const app = new PIXI.Application({backgroundColor: 0xffffff, resolution: '1.389',
        height: '400'});
    document.getElementById("platno").appendChild(app.view);

    let bol = false;

//nacitanie obrazkov
    const texture = PIXI.Texture.from('./img/orange.png');
    const secondTexture = PIXI.Texture.from('./img/banana.png');

// vytvorenie Sprite
    const fruit = new PIXI.Sprite(texture);

// vycentrovanie obrazkov na stred
    fruit.anchor.set(0.5);
    fruit.scale.set(0.5);

    fruit.x = app.screen.width / 2;
    fruit.y = app.screen.height / 2;

    app.stage.addChild(fruit);

// zapnutie interaktivnosti obrazkov
    fruit.interactive = true;
    fruit.buttonMode = true;

    fruit.on('pointertap', () => {
        bol = !bol;
        if (bol) {
            fruit.texture = secondTexture;
        } else {
            fruit.texture = texture;
        }
    });

    app.ticker.add(() => {
        fruit.rotation += 0.01;
    });

})

