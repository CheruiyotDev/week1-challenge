//Calculate demerit points
function speedDetecter(speed) {
  const speedLimit = 70;
  const demeritPoints = 5;
  //check if speed is greater that the speed limit
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