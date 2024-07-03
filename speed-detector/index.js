function speedDetecter(speed) {
  const speedLimit = 70;
  const demeritPoints = 5;
  if (speed <= speedLimit) {
    return 'Ok';
  } else if (speed > speedLimit) {
    let points = Math.floor((speed - speedLimit) / demeritPoints); 
    if(points > 12 ){
      return 'License suspended';
    } else {
      return `Points: ${points}`;
    }
  }
}
console.log(speedDetecter(90));