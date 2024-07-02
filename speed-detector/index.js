function speedDetecter(speed) {
  if (speed <= 70) {
    return 'Ok';
  } else if (speed > 70) {
    let speedPoints = Math.floor((speed - 70) / 5);
    if(speedPoints > 12 ){
      return 'License suspended';
    } else {
      return `Points: ${speedPoints}`;
    }
  }
}