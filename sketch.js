var track,trackImg;
var car1, car1Img;
var coinImg,coinGroup
var score=0
var coneImg,coneGroup
function preload(){
    trackImg=loadImage("track.jpg")
    car1Img=loadImage("car1.png")
    coinImg=loadImage("coin.png")
    coneImg=loadImage("cone.png")
    
}

function setup() {
    createCanvas(300,400)
    track=createSprite(150,50)
    track.addImage(trackImg)
    track.scale=1.5;

    car1=createSprite(100,350)
    car1.addImage(car1Img)
    car1.scale=0.08
    coinGroup=new Group()
    coneGroup=new Group()
}

function draw() {   
    background(180);
    console.log(track.y)
    track.velocityY=2
    if(track.y>360){
        track.y=50
    }
    if(keyDown(RIGHT_ARROW)){
        car1.x=car1.x+2;
    }
    if(keyDown(LEFT_ARROW)){
        car1.x=car1.x-2;
    }
    if(car1.x<85){
        car1.x=85;
    }
    if(car1.x>215){
        car1.x=215;
    }
    createCoin()
    createCone()
    if(car1.isTouching(coinGroup)){
        coinGroup.destroyEach()
        score=score+10
    }
    if(car1.isTouching(coneGroup)){
        coneGroup.destroyEach()
        score=score-20
    }
    drawSprites();
    textSize(20)
    fill("red")
     text ("Score : "+score,185,20)
}
function createCoin(){
    if (frameCount % 180 === 0){
        var coin = createSprite(random(85,215),-10,30,30)
        coin.addImage(coinImg)
        coin.scale=0.03
        coin.lifetime=300
        coin.velocityY=2.5
        coinGroup.add(coin)
    }
}
function createCone(){
    if(frameCount%200 ===0){
        var cone =createSprite(random(85,215),-20,30,30)
        cone.addImage(coneImg)
        cone.scale=0.05
        cone.lifetime=300
        cone.velocityY=2
        coneGroup.add(cone)
    }
}
