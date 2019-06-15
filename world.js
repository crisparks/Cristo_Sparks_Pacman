// random number generator
function rng(max,min){
    return Math.floor(Math.random()* (max-min +1))+min;
    }

//world map & score bars

var world= [
    [1,1,1,1,1,1,1,1,1,1],
    [1,3,2,0,rng(-1,3),rng(-1,3),rng(-1,3),rng(0,3),3,1],
    [1,2,2,0,rng(-1,3),rng(-1,3),rng(-1,3),rng(0,3),rng(0,3),1],
    [1,rng(-1,3),rng(-1,3),0,0,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),1],
    [1,rng(-1,3),rng(-1,3),rng(-1,3),0,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),1],
    [1,rng(-1,3),rng(-1,3),rng(-1,3),0,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),1],
    [1,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),0,rng(-1,3),rng(-1,3),rng(-1,3),1],
    [1,rng(-1,3),0,rng(-1,3),rng(-1,3),rng(-1,3),0,0,rng(-1,3),1],
    [1,rng(-1,3),0,rng(-1,3),rng(-1,3),rng(-1,3),0,0,rng(-1,3),1],
    [1,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),1],
    [1,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),1],
    [1,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),0,rng(-1,3),rng(-1,3),rng(-1,3),1],
    [1,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),0,rng(-1,3),rng(-1,3),rng(-1,3),1],
    [1,1,1,1,1,1,1,1,1,1],
];

var worldDict = {
    0: 'coin',
    1: 'wall',
    2: 'cherry',
    3: 'blank',
}
//Block of code for point system
var points = 0;
console.log("Points:"+points);




//Create live system
var lives = 3;
console.log("lives:"+lives);

function reset(){
    world = [
        [1,1,1,1,1,1,1,1,1,1],
        [1,3,2,0,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),3,1],
        [1,2,2,0,rng(-1,3),rng(-1,3),rng(-1,3),2,2,1],
        [1,rng(-1,3),rng(-1,3),0,0,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),1],
        [1,rng(-1,3),rng(-1,3),rng(-1,3),0,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),1],
        [1,rng(-1,3),rng(-1,3),rng(-1,3),0,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),1],
        [1,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),0,rng(-1,3),rng(-1,3),rng(-1,3),1],
        [1,rng(-1,3),0,rng(-1,3),rng(-1,3),rng(-1,3),0,0,rng(-1,3),1],
        [1,rng(-1,3),0,rng(-1,3),rng(-1,3),rng(-1,3),0,0,rng(-1,3),1],
        [1,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),1],
        [1,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),1],
        [1,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),2,rng(-1,3),rng(-1,3),rng(-1,3),1],
        [1,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),2,rng(-1,3),rng(-1,3),rng(-1,3),1],
        [1,1,1,1,1,1,1,1,1,1],
    ];
    drawWorld();
}
function fullReset(){
    world = [
        [1,1,1,1,1,1,1,1,1,1],
        [1,3,2,0,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),3,1],
        [1,2,2,0,rng(-1,3),rng(-1,3),rng(-1,3),2,2,1],
        [1,rng(-1,3),rng(-1,3),0,0,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),1],
        [1,rng(-1,3),rng(-1,3),rng(-1,3),0,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),1],
        [1,rng(-1,3),rng(-1,3),rng(-1,3),0,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),1],
        [1,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),0,rng(-1,3),rng(-1,3),rng(-1,3),1],
        [1,rng(-1,3),0,rng(-1,3),rng(-1,3),rng(-1,3),0,0,rng(-1,3),1],
        [1,rng(-1,3),0,rng(-1,3),rng(-1,3),rng(-1,3),0,0,rng(-1,3),1],
        [1,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),1],
        [1,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),1],
        [1,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),2,rng(-1,3),rng(-1,3),rng(-1,3),1],
        [1,rng(-1,3),rng(-1,3),rng(-1,3),rng(-1,3),3,rng(-1,3),rng(-1,3),rng(-1,3),1],
        [1,1,1,1,1,1,1,1,1,1],
    ];
    pacman = {
        x: 1,
        y: 1
    }
    misses = {
        x: 8,
        y: 1
    }
    lives = 3;
    points = 0;
    drawWorld();
}



function drawWorld(){
    output = "";

    for(var row = 0; row < world.length; row++){
        output += "<div class = 'row' >"
        for(var x = 0; x < world[row].length; x++){
            output += "<div class = '" + worldDict[world[row][x]] +"' ></div>"
            
        }
        output += "</div>"
    }
    document.getElementById('world').innerHTML = output;
    document.getElementById("score").innerHTML = "Score: " +points;
    document.getElementById("lives").innerHTML = "Lives: " +lives;
}
drawWorld();

//player spawn

var pacman = {
    x: 1,
    y: 1
}

function drawPacman(){
    document.getElementById('pacman').style.top =
        pacman.y *40 + 'px'
    document.getElementById('pacman').style.left =
        pacman.x *40 + 'px'
}
drawPacman();

var misses = {
    x: 8,
    y: 1
}

function drawMisses(){
    document.getElementById('misses').style.top =
        misses.y *40 + 'px'
    document.getElementById('misses').style.left =
        misses.x *40 + 'px'
}
drawMisses();

//ghost spawn
var blinky = {
    x: 6,
    y: 9
}

var pinky = {
    x: 5,
    y: 12
}
function drawGoons() {
        document.getElementById("blinky").style.left = 
        blinky.x *40+"px";
        document.getElementById("blinky").style.top = 
        blinky.y *40+"px";
        document.getElementById("pinky").style.left = 
        pinky.x *40+"px";
        document.getElementById("pinky").style.top = 
        pinky.y *40+"px";
}
drawGoons()

//ghost move patterns

function moveBluey(){
    var move = rng(-1,4);
        if(move ===0 && (world[blinky.y][blinky.x-1] !==1)){//0 = left
          blinky.x--;
        } 
        else if(move ===1 && (world[blinky.y][blinky.x+1] !==1)){//1 = right
          blinky.x++;
        }
        else if(move ===2 && (world[blinky.y-1][blinky.x] !==1)){//2 = up
         blinky.y--;
        }
        else if(move ===3 && (world[blinky.y+1][blinky.x] !==1)){//3 = down
         blinky.y++;
        }
}
function movePinky(){
    var move = rng(-1,4);
        if(move ===0 && (world[pinky.y][pinky.x-1] !==1)){//0 = left
         pinky.x--;
        } 
        else if(move ===1 && (world[pinky.y][pinky.x+1] !==1)){//1 = right
         pinky.x++;
        }
        else if(move ===2 && (world[pinky.y-1][pinky.x] !==1)){//2 = up
         pinky.y--;
        }
        else if(move ===3 && (world[pinky.y+1][pinky.x] !==1)){//3 = down
         pinky.y++;
        }
}

function moveCycle() {
    document.getElementById("score").innerHTML = "Score: " +points;
    document.getElementById("lives").innerHTML = "Lives: " +lives;
    drawPacman();
    drawMisses();
    drawGoons();
    moveBluey();
    movePinky();
    drawGoons();
    setTimeout(moveCycle, 350)
}

document.onkeydown = function(e){
    //MISSESCONTROLS
    if(e.keyCode == 37) { // LEFT
        if(world[misses.y][misses.x - 1] != 1){
            misses.x--;
        }
    }
    if(e.keyCode == 39){ // RIGHT
        if(world[misses.y][misses.x + 1] != 1){
            misses.x++;
        }        
    }
    if(e.keyCode == 40){ // DOWN
        if(world[misses.y + 1][misses.x] != 1){
            misses.y++;
        }
    }
    if(e.keyCode == 38){ // UP
        if(world[misses.y - 1][misses.x] != 1){
            misses.y--;
        }
    }
    //PACMAN CONTROLS   
    if(e.keyCode == 65) { // LEFT
        if(world[pacman.y][pacman.x - 1] != 1){
            pacman.x--;
        }
    }
    if(e.keyCode == 68){ // RIGHT
        if(world[pacman.y][pacman.x + 1] != 1){
            pacman.x++;
        }        
    }
    if(e.keyCode == 83){ // DOWN
        if(world[pacman.y + 1][pacman.x] != 1){
            pacman.y++;
        }
    }
    if(e.keyCode == 87){ // UP
        if(world[pacman.y - 1][pacman.x] != 1){
            pacman.y--;
        }
    }
    
//block of code to add points
    if(world[pacman.y][pacman.x] === 2){
            world[pacman.y][pacman.x] =3;
            points+=50;
            console.log("Points:"+points);}
        else if(world[pacman.y][pacman.x] === 0){
            world[pacman.y][pacman.x] =3;
            points+=10;
            console.log("Points:"+points);
           }
    if(world[misses.y][misses.x] === 2){
            world[misses.y][misses.x] =3;
            points+=50;
            console.log("Points:"+points);}
        else if(world[misses.y][misses.x] === 0){
            world[misses.y][misses.x] =3;
            points+=10;
            console.log("Points:"+points);
           }
//block to lose lives by touching the two ghosts           
    if((pacman.x === pinky.x) && (pacman.y === pinky.y)){
            lives -=1;
          console.log("lives:"+lives)
          }
    if((pacman.x === blinky.x) && (pacman.y === blinky.y)){
            lives -=1;
          console.log("lives:"+lives)
          }
    if((misses.x === pinky.x) && (misses.y === pinky.y)){
            lives -=1;
          console.log("lives:"+lives)
          }
    if((misses.x === blinky.x) && (misses.y === blinky.y)){
            lives -=1;
          console.log("lives:"+lives)
          }
//failstate
    if(lives ===0){alert("You Lose! Your Score is "+points)}
    drawPacman()
    drawMisses()
    drawWorld()
}
moveCycle();