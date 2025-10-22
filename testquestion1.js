let posX = 600/2;
let xSpeed = 5;
function setup(){
    createCanvas(600, 400);
    posX = width/ 2;
    xSpeed = 5;
    background("skyblue");
fill('limegreen');

}
function draw(){
background("skyblue");
circle(posX,height/2,50);

posX = posX + xSpeed;
if (posX > 600){
    xSpeed = xSpeed * -1;

}else if (posX <0){
    xSpeed = xSpeed * -1;
}


 




}
