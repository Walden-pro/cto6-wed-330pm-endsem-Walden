let pokemons = ["Pikachu"
    ,"Raichu"
    ,"Bulbasaur"
    ,"Mewtwo"
    ,"Charizard"];
let yPos;

function setup(){
    createCanvas(200, 300);
    fill("pink");
    // Task: Align the text to the center using textAlign
    // Task: set font size to 20 using textSize
    textAlign(CENTER,CENTER);
    background("black");
    textSize(20);
    
}
function draw(){
    // background("black")
    yPos = 100;
    fill("pink");
for (let index = 0; index < pokemons.length; index++) {
yPos = yPos +25;
 text(pokemons[index],width/2,yPos);
} 



}