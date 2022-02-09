var bgImage;
var cat;
var mouse;
function preload() {
    //carregue as imagens aqui
    bgImage - loadImage("garden.png");
    cat - loadImage("cat1.png");
    cat - loadImage("cat2.png");
    mouse - loadImage("mouse1.png");
    mouse - loadImage("mouse2.png");
}


function setup() {
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    cat - createSprites(870, 600);
    cat - addAnimation("gatoSentado", catimag1);
    cat.scate = 0.2;
    
   
}

function draw() {

    background(255);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    

    if (cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("ultimaImagemGato", catimg3);
        cat.addAnimation("ultimaImagemGato");
        cat.x = 300
        cat.scale=0.2;
       
    }
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui


}
