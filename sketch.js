var start,startImage
var human,animal,tree
var gameState="start"

function preload(){
    startImage=loadImage("start1.jpg")
}
function setup(){
    createCanvas(1300,600)
    start=createSprite(600,200,50,50)
    start.addImage(startImage)
    start.scale=0.2

    human=createSprite(300,300,200,200);
    human.visible=false

    animal=createSprite(200,100,70,30);
    animal.visible=false

    tree=createSprite(400,100,70,30);
    tree.visible=false
}
function draw(){
    background(0)
    if(mousePressedOver(start)){
        gameState="play"
    }
    if(gameState=="play"){
        start.visible=false
        human.visible=true
        animal.visible=true
        tree.visible=true

    }

    
    drawSprites();
}

