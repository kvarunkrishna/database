var canvas
var allplayers
var gamestate =0;
playercount = 0;
var database
var form,player,game
function setup(){
canvas=createCanvas(400,400)
database=firebase.database();
game=new Game()
game.getstate()
game.start()
}
function draw(){
if(playercount==4){
    game.update(1)
    clear()
    game.play()
}
}