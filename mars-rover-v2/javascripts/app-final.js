
var rover1 = {
  direction:"N",
  x: 0,
  y: 0,
  travelLog:[[0,0]]
}

var rover2 = {
  direction:"N",
  x: 9,
  y: 9,
  travelLog:[[9,9]]
}



var grid = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null,"o","o","o", null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, "o","o", null, null],
  [null, null, null, null, null, null, "o","o", null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, "o","o","o","o","o", null, null],
];


function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction) {
    case "N":
      rover.direction="W";
      if(rover === rover1) {
        console.log("Rover1 going West.");
      }
      else {
        console.log("Rover2 going West.");
      }
      break;
    case "W":
      rover.direction="S";
      if(rover === rover1) {
        console.log("Rover1 going South.");
      }
      else {
        console.log("Rover2 going South.");
      }
      break;
    case "S":
      rover.direction="E";
      if(rover === rover1) {
        console.log("Rover1 going East.");
      }
      else {
        console.log("Rover2 going East.");
      }
      break;
    case "E":
      rover.direction="N";
      if(rover === rover1) {
        console.log("Rover1 going North.");
      }
      else {
        console.log("Rover2 going North.");
      }
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction) {
    case "N":
      rover.direction="E";
      if(rover === rover1) {
        console.log("Rover1 going East.");
      }
      else {
        console.log("Rover2 going East.");
      }
      break;
    case "E":
      rover.direction="S";
      if ( rover === rover1) {
        console.log("Rover1 going South.");
      }
      else {
        console.log("Rover2 going South.");
      }
      break;
    case "S":
      rover.direction="W";
      if ( rover === rover1) {
        console.log("Rover1 going West.");
      }
      else {
        console.log("Rover2 going West.");
      }
      break;
    case "W":
      rover.direction="N";
      if ( rover === rover1) {
      console.log("Rover1 going North.");
      }
      else {
        console.log("Rover2 going North.");
      }
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called");
  if(rover === rover1) {
    if(rover.direction === "N" && (rover.y>0)) {
      if(grid[rover.y-1][rover.x] === null && ((rover.x != rover2.x) && (rover.y-1 != rover2.y))) {
        rover.y-=1;
        rover.travelLog.push([rover.x,rover.y]);
        console.log("Rover1 is in: " + rover.x + ", " + rover.y + ".");
      }
      else if (grid[rover.y-1][rover.x] !== null){
        console.log("Obstacle found");
      }
      else {
        console.log("Rover2 in that position! Stop!");
      }
    }
    else if(rover.direction === "W" && (rover.x>0)) {
      if(grid[rover.y][rover.x-1] === null && ((rover.x-1 != rover2.x)&& (rover.y != rover2.y))) {
        rover.x-=1;
        rover.travelLog.push([rover.x,rover.y]);
        console.log("Rover1 is in: " + rover.x + ", " + rover.y + ".");
      }
      else if (grid[rover.y][rover.x-1] !== null){
        console.log("Obstacle found");
      }
      else {
        console.log("Rover2 in that position! Stop!");
      }
    }
    else if(rover.direction === "S" && (rover.y<9)) {
      if(grid[rover.y+1][rover.x] === null && ((rover.x != rover2.x) && (rover.y+1 != rover2.y))) {
        rover.y+=1;
        rover.travelLog.push([rover.x,rover.y]);
        console.log("Rover1 is in: " + rover.x + ", " + rover.y + ".");
      }
      else if (grid[rover.y+1][rover.x] !== null){
        console.log("Obstacle found");
      }
      else {
        console.log("Rover2 in that position! Stop!");
      }
    }
    else if(rover.direction === "E" && (rover.x<9)) {
      if(grid[rover.y][rover.x+1] === null && ((rover.x+1 != rover2.x) && (rover.y != rover2.y))) {
        rover.x+=1;
        rover.travelLog.push([rover.x,rover.y]);
        console.log("Rover1 is in: " + rover.x + ", " + rover.y + ".");
      }
      else if (grid[rover.y][rover.x+1] !== null){
        console.log("Obstacle found");
      }
      else {
        console.log("Rover2 in that position! Stop!");
      }
    }
  }
  else if (rover === rover2) {
    if(rover.direction === "N" && (rover.y>0)) {
      if(grid[rover.y-1][rover.x] === null && ((rover.x != rover1.x) && (rover.y-1 != rover1.y))) {
        rover.y-=1;
        rover.travelLog.push([rover.x,rover.y]);
        console.log("Rover2 is in: " + rover.x + ", " + rover.y + ".");
      }
      else if (grid[rover.y-1][rover.x] !== null){
        console.log("Obstacle found");
      }
      else {
        console.log("Rover1 in that position! Stop!");
      }
    }
    else if(rover.direction === "W" && (rover.x>0)) {
      if(grid[rover.y][rover.x-1] === null && ((rover.x-1 != rover1.x)&& (rover.y != rover1.y))) {
        rover.x-=1;
        rover.travelLog.push([rover.x,rover.y]);
        console.log("Rover2 is in: " + rover.x + ", " + rover.y + ".");
      }
      else if (grid[rover.y][rover.x-1] !== null){
        console.log("Obstacle found");
      }
      else {
        console.log("Rover1 in that position! Stop!");
      }
    }
    else if(rover.direction === "S" && (rover.y<9)) {
      if(grid[rover.y+1][rover.x] === null && ((rover.x != rover1.x) && (rover.y+1 != rover1.y))) {
        rover.y+=1;
        rover.travelLog.push([rover.x,rover.y]);
        console.log("Rover2 is in: " + rover.x + ", " + rover.y + ".");
      }
      else if (grid[rover.y+1][rover.x] !== null){
        console.log("Obstacle found");
      }
      else {
        console.log("Rover1 in that position! Stop!");
      }
    }
    else if(rover.direction === "E" && (rover.x<9)) {
      if(grid[rover.y][rover.x+1] === null && ((rover.x+1 != rover1.x) && (rover.y != rover1.y))) {
        rover.x+=1;
        rover.travelLog.push([rover.x,rover.y]);
        console.log("Rover2 is in: " + rover.x + ", " + rover.y + ".");
      }
      else if (grid[rover.y][rover.x+1] !== null){
        console.log("Obstacle found");
      }
      else {
        console.log("Rover1 in that position! Stop!");
      }
    }
  }
}

function moveBackward(rover){
  console.log("moveBackward was called");
  if (rover === rover1) {
    if(rover.direction === "N" && (rover.y<9)) {
      if(grid[rover.y+1][rover.x] === null && ((rover.x != rover2.x) && (rover.y+1 != rover2.y))) {
        rover.y+=1;
        rover.travelLog.push([rover.x,rover.y]);
        console.log("Rover1 is in: " + rover.x + ", " + rover.y + ".");
      }
      else if (grid[rover.y+1][rover.x] !== null){
       console.log("Obstacle found");
      }
      else {
        console.log("Rover2 in that position! Stop!");
      }
    }
    else if(rover.direction === "W" && (rover.x<9)) {
      if(grid[rover.y][rover.x+1] === null && ((rover.x+1 != rover2.x) && (rover.y != rover2.y))) {
        rover.x+=1;
        rover.travelLog.push([rover.x,rover.y]);
        console.log("Rover1 is in: " + rover.x + ", " + rover.y + ".");
      }
      else if (grid[rover.y][rover.x+1] !== null) {
        console.log("Obstacle found");
      }
      else {
        console.log("Rover2 in that position! Stop!");
      }
    }
    else if(rover.direction === "S" && (rover.y>0)) {
      if(grid[rover.y-1][rover.x] === null && ((rover.x != rover2.x) && (rover.y-1 != rover2.y))) {
        rover.y-=1;
        rover.travelLog.push([rover.x,rover.y]);
        console.log("Rover1 is in: " + rover.x + ", " + rover.y + ".");
      }
      else if (grid[rover.y-1][rover.x] !== null) {
        console.log("Obstacle found");
      }
      else {
        console.log("Rover2 in that position! Stop!");
      }
    }
    else if(rover.direction === "E" && (rover.x>0)) {
      if(grid[rover.y][rover.x-1] === null && ((rover.x-1 != rover2.x) && (rover.y != rover2.y))) {
        rover.x-=1;
        rover.travelLog.push([rover.x,rover.y]);
        console.log("Rover1 is in: " + rover.x + ", " + rover.y + ".");
      }
      else if (grid[rover.y][rover.x-1] !== null) {
        console.log("Obstacle found");
      }
      else {
        console.log("Rover2 in that position! Stop!");
      }
    }
  }
  else if (rover === rover2) {
    if(rover.direction === "N" && (rover.y<9)) {
      if(grid[rover.y+1][rover.x] === null && ((rover.x != rover1.x) && (rover.y+1 != rover1.y))) {
        rover.y+=1;
        rover.travelLog.push([rover.x,rover.y]);
        console.log("Rover2 is in: " + rover.x + ", " + rover.y + ".");
      }
      else if (grid[rover.y+1][rover.x] !== null){
       console.log("Obstacle found");
      }
      else {
        console.log("Rover1 in that position! Stop!");
      }
    }
    else if(rover.direction === "W" && (rover.x<9)) {
      if(grid[rover.y][rover.x+1] === null && ((rover.x+1 != rover1.x) && (rover.y != rover1.y))) {
        rover.x+=1;
        rover.travelLog.push([rover.x,rover.y]);
        console.log("Rover2 is in: " + rover.x + ", " + rover.y + ".");
      }
      else if (grid[rover.y][rover.x+1] !== null) {
        console.log("Obstacle found");
      }
      else {
        console.log("Rover1 in that position! Stop!");
      }
    }
    else if(rover.direction === "S" && (rover.y>0)) {
      if(grid[rover.y-1][rover.x] === null && ((rover.x != rover1.x) && (rover.y-1 != rover1.y))) {
        rover.y-=1;
        rover.travelLog.push([rover.x,rover.y]);
        console.log("Rover2 is in: " + rover.x + ", " + rover.y + ".");
      }
      else if (grid[rover.y-1][rover.x] !== null) {
        console.log("Obstacle found");
      }
      else {
        console.log("Rover1 in that position! Stop!");
      }
    }
    else if(rover.direction === "E" && (rover.x>0)) {
      if(grid[rover.y][rover.x-1] === null && ((rover.x-1 != rover1.x) && (rover.y != rover1.y))) {
        rover.x-=1;
        rover.travelLog.push([rover.x,rover.y]);
        console.log("Rover2 is in: " + rover.x + ", " + rover.y + ".");
      }
      else if (grid[rover.y][rover.x-1] !== null) {
        console.log("Obstacle found");
      }
      else {
        console.log("Rover1 in that position! Stop!");
      }
    }
  }
}

function commands(rover, move) {
  for(var i=0; i<move.length; i++) {
    if(move[i]==="f") {
      moveForward(rover);
    }
    else if(move[i]==="r") {
      turnRight(rover);
    }
    else if(move[i]==="l") {
      turnLeft(rover);
    }
    else if(move[i]==="b") {
      moveBackward(rover);
    }
    else {
      console.log("Invalid command!");
    }
  }
  console.log(rover.travelLog);  
}



