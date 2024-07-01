function calculateDemeritPoints() {
    let speed = prompt("Enter the car's speed (in km/h):");

    while (isNaN(speed) || speed < 0) {
      speed = prompt("Invalid input. Please enter a positive number:");
    }

    let demeritPoints = 0;
    if (speed > 70) {
      demeritPoints = Math.floor((speed - 70) / 5);
    }

    if (demeritPoints === 0) {
      console.log("Ok");
    } else if (demeritPoints <= 12) {
      console.log(`Points: ${demeritPoints}`);
    } else {
      console.log("License suspended");
    }
  }
  calculateDemeritPoints();