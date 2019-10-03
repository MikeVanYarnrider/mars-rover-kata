// prerequesites 10x10 grid


let board = [
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ','O',' ',' ',' ',' ',' ',' ',' '], //obstacle at [2][2]
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ','O',' ',' ',' '], //obstacle at [6][5]
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
];


// Rover Object Goes Here
// ======================

const rover = [
    {
        name: "Klaus",
        alias: "K",
        direction : "N",                    //four possible values: "N", "S", "E", or "W". The rover's default direction will be "N" (as North)
        x: 0,
        y: 0,
        travelLog: [{x:0,y:0}],
    },
    {
        name: "Sandra",
        alias: "S",
        direction : "N",                    //four possible values: "N", "S", "E", or "W". The rover's default direction will be "N" (as North)
        x: 9,
        y: 9,
        travelLog: [{x:0,y:0}],
    }
];

let lastPosition = { 
    first: {
        x: rover.x, 
        y: rover.y 
    },
    second: {
        x: rover.x, 
        y: rover.y 
    },
};

// Error Messages
const msgObstacle = "Watch out! Obstacle or Rover in sight!";
const msgGridEnd = "You reached the end of the grid, please choose another direction.";

// ======================

// loops through given commands and calls every function according to each case
function command(rover,commands){
    for(let i = 0; i < commands.length; i++){
        let command = commands[i];
        // validation for the right input. loop runs as long as the commands are correct and breaks when an invalid char occurs
        if (command == "l" ||command == "r" ||command == "b" ||command == "f"){
            switch (command) {
                case "l":
                    turnLeft(rover);
                    break;
                case "r":
                    turnRight(rover);
                    break;
                case "f":
                    moveForward(rover);
                    break;
                case "b":
                    moveBackward(rover);
                    break;
                default:
                    console.log("Error");
            }
            console.log(`Rover Position: ${rover.x},${rover.y}`);
            console.log(`Rover Direction: ${rover.direction}`);
            travelLog(rover);
            roverPosition(rover);
        }
        else {
            console.log("Please check your input. Use l,f,b,r only");
            // break statement to stop the for loop when a wrong input occurs
            break;              
        }
    }
}

// rover turns left
function turnLeft(rover){
    console.log("turnLeft was called!");
    if(rover.direction == "N"){
        rover.direction = "W";
    }
    else if(rover.direction == "W"){
        rover.direction = "S";
    }
    else if(rover.direction == "S"){
        rover.direction = "E";
    }
    else if(rover.direction == "E"){
        rover.direction = "N";
  }
}

// rover turns right
function turnRight(rover){
    console.log("turnRight was called!");
    if(rover.direction == "N"){
        rover.direction = "E";
    }
    else if(rover.direction == "E"){
        rover.direction = "S";
    }
    else if(rover.direction == "S"){
        rover.direction = "W";
    }
    else if(rover.direction == "W"){
        rover.direction = "N";
    }
}

// rover moves forward and makes sure the rover doesn't accidentally roam off the map
function moveForward(rover){
console.log("moveForward was called")
    if(rover.direction == "N" && rover.x > 0){
        rover.x--;
        if(board[rover.x][rover.y] != ' '){
            rover.x++;
            console.log(msgObstacle);
        }
    }
    else if(rover.direction == "S" && rover.x < 9){
        rover.x++;
        if(board[rover.x][rover.y] != ' '){
            rover.x--;
            console.log(msgObstacle);
        }
    }
    else if(rover.direction == "E" && rover.y < 9){
        rover.y++;
        if(board[rover.x][rover.y] != ' '){
            rover.y--;
            console.log(msgObstacle);
        }
    }
    else if(rover.direction == "W" && rover.y > 0){
        rover.y--;
        if(board[rover.x][rover.y] != ' '){
            rover.y++;
            console.log(msgObstacle);
        }
    }
    else{
        console.log(msgGridEnd);
    }
}

// moves rover backwards
function moveBackward(rover){
    console.log("moveBackward was called")
    if(rover.direction == "N" && rover.x < 9){
        rover.x++;
        if(board[rover.x][rover.y] != ' '){
            rover.x--;
            console.log(msgObstacle);
        }
    }
    else if(rover.direction == "S" && rover.x > 0){
        rover.x--;
        if(board[rover.x][rover.y] != ' '){
            rover.x++;
            console.log(msgObstacle);
        }
    }
    else if(rover.direction == "E" && rover.y > 0){
        rover.y--;
        if(board[rover.x][rover.y] != ' '){
            rover.y++;
            console.log(msgObstacle);
        }
    }
    else if(rover.direction == "W" && rover.y < 9){
        rover.y++;
        if(board[rover.x][rover.y] != ' '){
            rover.y++;
            console.log(msgObstacle);
        }
    }
    else{
        console.log(msgGridEnd);
    }
}

// function to move the rover position on the board
function roverPosition(){
    for(let i = 0; i < rover.length; i++){
    // deletes the last position on the board
    board[rover[i].travelLog[rover[i].travelLog.length-2].x][rover[i].travelLog[rover[i].travelLog.length-2].y] = ' ';
    // sets position on the board
    board[rover[i].x][rover[i].y] = rover[i].alias;
    }
    console.log(board.join('\n'));
}

// updates the travelLog array in the rover object 
function travelLog() {
    for(let i = 0; i < rover.length; i++){
    rover[i].lastPosition = { x: rover[i].x, y: rover[i].y };
    rover[i].travelLog.push(rover[i].lastPosition);
    }
}

// test command => navigates to end of grid and then to the first obstacle
command(rover[0],"frffrff");
command(rover[1],"ffflfff");