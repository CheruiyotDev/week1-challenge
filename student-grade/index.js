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