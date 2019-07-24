// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};
// ======================
var board = [
  [null, "X", null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
];

function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log("turnLeft was called!");
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("turnRight was called!");
}

function moveForward(rover) {
  var outOfGrid = false;
  var obstacleFound = false;
  if (rover.direction === "N") {
    if (board[rover.x][rover.y-1] === null) {
      obstacleFound = true;
    } else if (rover.y > 0) {
      rover.y--;
    } else {
      outOfGrid = true;
    }
  } else if (rover.direction === "W") {
    if (board[rover.x-1][rover.y] === null) {
      obstacleFound = true;
    } else if (rover.x > 0) {
      rover.x--;
    } else {
      outOfGrid = true;
    }
  } else if (rover.direction === "S") {
    if (board[rover.x][rover.y + 1] === null) {
      obstacleFound = true;
    } else if (rover.y <10) {
      rover.y++;
    } else {
      outOfGrid = true;
    }
  } else {
    if (board[rover.x+1][rover.y] === null) {
      obstacleFound = true;
    } else if (rover.x < 10) {
      rover.x++;
    } else {
      outOfGrid = true;
    }
  }
  if (obstacleFound === true) {
    console.log("The rover found an obstacle");
  }
  if (outOfGrid === true) {
    console.log("The rover can't move");
  }
  console.log("moveForward was called");
  console.log(rover.x + ", " + rover.y);
}

function moveBackwards(rover) {
  var outOfGrid = false;
  if (rover.direction === "N") {
    if (rover.y < 10) {
      rover.y++;
    } else {
      outOfGrid = true;
    }
  } else if (rover.direction === "W") {
    if (rover.x < 10) {
      rover.x++;
    } else {
      outOfGrid = true;
    }
  } else if (rover.direction === "S") {
    if (rover.y > 0) {
      rover.y--;
    } else {
      outOfGrid = true;
    }
  } else {
    if (rover.x > 0) {
      rover.x--;
    } else {
      outOfGrid = true;
    }
  }
  if (outOfGrid === true) {
    console.log("The rover can't move, the grid has ended");
  }
  console.log("moveForward was called");
  console.log(rover.x + ", " + rover.y);
}

function moveRoverAround(movement) {
  for (var i = 0; i < movement.length; i++) {
    var letter = movement[i];
    switch (letter) {
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackwards(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      default:
        console.log(letter + " is not a valid movement");
    }
    rover.travelLog.push(rover.x + ", " + rover.y);
  }
}
moveRoverAround("rfrff");
console.log(rover.travelLog);
