function stairCase() {
  const numOfRows = 5;
  let output = '';
  for (let i = 1; i <= numOfRows; i++) {
    for (let j = 1; j <= i; j++) {
      output += '#';
    }
    output += '\n';
  }
  return output;
}
//console.log(stairCase())