// prerequesites 10x10 grid

/*
---------------------------------------------------------------------------------
|  0,0  |  0,1  |  0,2  |  0,3  |  0,4  |  0,5  |  0,6  |  0,7  |  0,8  |  0,9  |
---------------------------------------------------------------------------------
|  1,0  |  1,1  |  1,2  |  1,3  |  1,4  |  1,5  |  1,6  |  1,7  |  1,8  |  1,9  |
---------------------------------------------------------------------------------
|  2,0  |  2,1  |  2,2  |  2,3  |  2,4  |  2,5  |  2,6  |  2,7  |  2,8  |  2,9  |
---------------------------------------------------------------------------------
|  3,0  |  3,1  |  3,2  |  3,3  |  3,4  |  3,5  |  3,6  |  3,7  |  3,8  |  3,9  |
---------------------------------------------------------------------------------
|  4,0  |  4,1  |  4,2  |  4,3  |  4,4  |  4,5  |  4,6  |  4,7  |  4,8  |  4,9  |
---------------------------------------------------------------------------------
|  5,0  |  5,1  |  5,2  |  5,3  |  5,4  |  5,5  |  5,6  |  5,7  |  5,8  |  5,9  |
---------------------------------------------------------------------------------
|  6,0  |  6,1  |  6,2  |  6,3  |  6,4  |  6,5  |  6,6  |  6,7  |  6,8  |  6,9  |
---------------------------------------------------------------------------------
|  7,0  |  7,1  |  7,2  |  7,3  |  7,4  |  7,5  |  7,6  |  7,7  |  7,8  |  7,9  |
---------------------------------------------------------------------------------
|  8,0  |  8,1  |  8,2  |  8,3  |  8,4  |  8,5  |  8,6  |  8,7  |  8,8  |  8,9  |
---------------------------------------------------------------------------------
|  9,0  |  9,1  |  9,2  |  9,3  |  9,4  |  9,5  |  9,6  |  9,7  |  9,8  |  9,9  |
---------------------------------------------------------------------------------
*/


// Rover Object Goes Here
// ======================

const rover = {
    direction : "N",                    //four possible values: "N", "S", "E", or "W". The rover's default direction will be "N" (as North)
    x: 0,
    y: 0,
    travelLog: [{x:0,y:0}],
}


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
            console.log(`Rover Direction: ${rover.direction}`)
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
    }
    else if(rover.direction == "S" && rover.x < 9){
        rover.x++;
    }
    else if(rover.direction == "E" && rover.y < 9){
        rover.y++;
    }
    else if(rover.direction == "W" && rover.y > 0){
        rover.y--;
    }
    else{
        console.log("You reached the end of the grid, please choose another direction.");
    }
    // tracking of the rovers last position, stored as array in the rover object
    let lastPosition = {x:rover.x,y:rover.y};
        rover.travelLog.push(lastPosition);
}

// moves rover backwards
function moveBackward(rover){
    console.log("moveBackward was called")
    if(rover.direction == "N" && rover.x < 9){
        rover.x++;
    }
    else if(rover.direction == "S" && rover.x > 0){
        rover.x--;
    }
    else if(rover.direction == "E" && rover.y > 0){
        rover.y--;
    }
    else if(rover.direction == "W" && rover.y < 9){
        rover.y++;
    }
    else{
        console.log("You reached the end of the grid, please choose another direction.");
    }
    // tracking of the rovers last position, stored as array in the rover object
    let lastPosition = {x:rover.x,y:rover.y};
        rover.travelLog.push(lastPosition);
}



