var starImg,bgImg;
var star, starBody;
var world;
//criar variável para sprite de fada e imgFada
var imgfada,fada;
var vozFada;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {    
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    imgfada = loadAnimation("images/fairyimage1.png","images/fairyimage2.png");
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    vozFada = loadSound("sound/JoyMusic.mp3");
    //criar sprite de fada e adicionar animação para fada
    fada =  createSprite(200,200,20,20);
    fada.addAnimation(imgfada);
    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    
    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	

}
function draw(){
    Engine.update(engine);
}
