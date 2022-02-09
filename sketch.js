var starImg,bgImg;
var star, starBody;
var fair, fairyImg;
//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/Starfish.png");
	bgImg = loadImage("images/Ocean.png");
	fairyImg=loadImage ("images/Triton.png")
 	//carga aquí la animación del hada
}

function setup() {
	createCanvas(800, 750);



	//crea el sprite del hada, y agrega la animación para el hada
    fair = createSprite(390,650)
	fair.addImage(fairyImg);
	fair.scale=0.7;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada
  if(star.isTouching(fair)){
	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	if (keyCode === RIGHT_ARROW){
		fair.velocityX=2;
	}

  if (keyCode === LEFT_ARROW){
	  fair.velocityX=-2;
  }


}
