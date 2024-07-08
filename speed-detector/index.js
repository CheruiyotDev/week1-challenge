//Function to evaluate speed above the speed limit
function speedDetecter(speed) {
  const speedLimit = 70;
  const demeritPoints = 5;
  const pointsBeforeSuspension = 12;
  if (speed <= speedLimit) {
    return 'Ok';
  } 
  const points = Math.floor((speed - speedLimit) / demeritPoints);

  if (points > pointsBeforeSuspension) {
    return 'License suspended';
  } else {
    return `Points: ${points}`;
  }
}
console.log(speedDetecter(0));