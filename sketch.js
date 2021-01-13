var canvas;
var music;
var all,edges
var block1
var block2
var block3
var block4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1=createSprite(0,580,360,30)
block2=createSprite(295,580,200,30)
block3=createSprite(515,580,200,30)
block4=createSprite(740,580,220,30)
block1.shapeColor="red"
block2.shapeColor="purple"
block3.shapeColor="green"
block4.shapeColor="black"
    //create box sprite and give velocity
ball=createSprite(random(20,750),100,40,40)
ball.shapeColor="blue"
ball.velocityX=100
ball.velocityY=100
}

function draw() {
    background(rgb(169,169,169));
   edges=createEdgeSprites()
ball.bounceOff (edges)

drawSprites()
    //add condition to check if box touching surface and make it box
}
