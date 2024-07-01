function studentGradeGenerator(grade) {
//Using Switch Statement


  if(grade > 100 || grade < 0 || isNaN(grade)) {
    return 'Enter the correct grade'
  } 
  switch (true) {
    case grade >= 80:
      return 'A'
    case grade >= 60:
      return 'B'
    case grade >= 50:
      return 'C'
    case grade >= 40:
      return 'D'
    default:
      return 'E'
  }
    // Using if statement
  // if(grade > 100 || grade < 0) {
  //   return 'Enter the correct grade'
  // }else  if (grade > 79 && grade <= 100) {
  //   return 'A'
  // } else if (grade > 60 && grade <= 79) {
  //   return 'B'
  // } else if (grade > 49 && grade <= 59) {
  //   return 'C'
  // } else if (grade > 40 && grade <= 49) {
  //   return 'D'
  // } else if (grade < 40) {
  //   return 'E'
  // }
}
console.log(studentGradeGenerator(99))
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

function netSalaryCalculator(salary) {
  const payeeTaxRates = function(salary) {
    if (salary === 24000) {
      return salary * 10 / 100;
    } else if(salary >= 24_000 && salary <= 32_333) {
      return salary * 25 / 100;
    } else if (salary >= 32_334 && salary <= 500_000) {
      return salary * 30 / 100;
    } else if (salary >= 500_000 && salary <= 800_000) {
      return salary * 32.5 / 100
    } else if (salary > 800_0000) {
      return salary * 35 / 100
    } else {
      return 0;
    }
  };
  const nhifRates = function(salary) {
    if (salary === 5_999) {
      return 150;
    } else if (salary >= 6_000 && salary <= 7_999) {
      return 300;
    } else if (salary >= 8_000 && salary <= 11_999) {
      return 400;
    } else if (salary >= 12_000 && salary <= 14_999) {
      return 500;
    } else if (salary >= 15_000 && salary <= 19_999) {
      return 600;
    } else if (salary >= 20_000 && salary <= 24_999) {
      return 750;
    } else if (salary >= 25_000 && salary <= 29_999) {
      return 850;
    } else if (salary >= 30_000 && salary <= 34_999) {
      return 900;
    } else if (salary >= 35_000 && salary <= 39_999) {
      return 950;
    } else if (salary >= 40_000 && salary <= 44_999) {
      return 1000;
    } else if (salary >= 45_000 && salary <= 49_999) {
      return 1_100;
    } else if (salary >= 50_000 && salary <= 59_999) {
      return 1_200;
    } else if (salary >= 60_000 && salary <= 69_999) {
      return 1_300;
    } else if (salary >= 70_000 && salary <= 79_999) {
      return 1_400;
    } else if (salary >= 80_000 && salary <= 89_999) {
      return 1500;
    } else if (salary >= 90_000 && salary <= 99_999) {
      return 1600;
    } else if (salary >= 100_000) {
      return 1700;
    } else {
      return 0;
    }

  };
  const nssfRates = function (salary) {
    if (salary >= 7000) {
      return salary * 6 / 100;
    } else {
      return 0;
    }
  };
  const housingLevy = function (salary) {
    return salary * 1.5 / 100;
  };
  return parseFloat(salary - payeeTaxRates(salary) - nhifRates(salary) - nssfRates(salary) - housingLevy(salary)).toFixed(2);
}
//console.log(netSalaryCalculator(15999))
const input = [5, 6, 1, 3, 4, 2]
function sortArray(input) {
  return input.sort();
}
//console.log(sortArray(input))
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