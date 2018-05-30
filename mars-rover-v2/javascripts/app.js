
var rover = {
  direction:"N",
  x: 0,
  y: 0,
  travelLog:[[0,0]]
}


// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction) {
    case "N":
      rover.direction="W";
      console.log("rover going West");
      break;
    case "W":
      rover.direction="S";
      console.log("rover going South");
      break;
    case "S":
      rover.direction="E";
      console.log("rover going East");
      break;
    case "E":
      rover.direction="N";
      console.log("rover going North");
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction) {
    case "N":
      rover.direction="E";
      console.log("rover going East");
      break;
    case "E":
      rover.direction="S";
      console.log("rover going South");
      break;
    case "S":
      rover.direction="W";
      console.log("rover going West");
      break;
    case "W":
      rover.direction="N";
      console.log("rover going North");
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  if(rover.direction === "N" && (rover.y>0)) {
    rover.y-=1;
    rover.travelLog.push([rover.x,rover.y]);
    console.log("rover is in: " + rover.x + ", " + rover.y + ".");
  }
  else if(rover.direction === "W" && (rover.x>0)) {
    rover.x-=1;
    rover.travelLog.push([rover.x,rover.y]);
    console.log("rover is in: " + rover.x + ", " + rover.y + ".");
  }
  else if(rover.direction === "S" && (rover.y<9)) {
    rover.y+=1;
    rover.travelLog.push([rover.x,rover.y]);
    console.log("rover is in: " + rover.x + ", " + rover.y + ".");
  }
  else if(rover.direction === "E" && (rover.x<9)) {
    rover.x+=1;
    rover.travelLog.push([rover.x,rover.y]);
    console.log("rover is in: " + rover.x + ", " + rover.y + ".");
  }
}


function moveBackward(rover){
  console.log("moveBackward was called")
  if(rover.direction === "N" && (rover.y<9)) {
    rover.y+=1;
    rover.travelLog.push([rover.x,rover.y]);
    console.log("rover is in: " + rover.x + ", " + rover.y + ".");
  }
  else if(rover.direction === "W" && (rover.x<9)) {
    rover.x+=1;
    rover.travelLog.push([rover.x,rover.y]);
    console.log("rover is in: " + rover.x + ", " + rover.y + ".");
  }
  else if(rover.direction === "S" && (rover.y>0)) {
    rover.y-=1;
    rover.travelLog.push([rover.x,rover.y]);
    console.log("rover is in: " + rover.x + ", " + rover.y + ".");
  }
  else if(rover.direction === "E" && (rover.x>0)) {
    rover.x-=1;
    rover.travelLog.push([rover.x,rover.y]);
    console.log("rover is in: " + rover.x + ", " + rover.y + ".");
  }
}


function commands(move) {
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
