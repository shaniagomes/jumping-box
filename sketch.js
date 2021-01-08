var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(100,580,200,20);
    block1.shapeColor = "blue";
    block1.debug = "true";
    block2 = createSprite(310,580,200,20);
    block2.shapeColor = "orange";
    block2.debug = "true";
    block3 = createSprite(510,580,200,20);
    block3.shapeColor = "purple";
    block3.debug = "true";
    block4 = createSprite(710,580,200,20);
    block4.shapeColor = "green";
    block4.debug = "true";

    //create box sprite and give velocity
    box = createSprite(random(20,750),500,40,40);
    box.shapeColor = "white" ;
    box.velocityY = 3;

    createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    if(block1.isTouching(box)&& box.bounceOff(block1)){
        box.shapeColor = "blue" ;
        music.play();
    }

    if(block2.isTouching(box)&& box.bounceOff(block2)){
        box.shapeColor = "yellow" ;
        music.play();
    }

    if(block3.isTouching(box)&& box.bounceOff(block3)){
        box.shapeColor = "purple" ;
        music.play();
    }

    if(block4.isTouching(box)&& box.bounceOff(block4)){
        box.shapeColor = "green" ;
        music.play();
    }

    if(block4.isTouching(box)){
        box.shapeColor = "green" ;
        box.velocityX = 0;
        music.stop();
    }

    //add condition to check if box touching surface and make it box
    drawSprites();
    box.bounceOff(edges);
}
