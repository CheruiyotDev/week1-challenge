//funtion to generate student grade
function studentGradeGenerator(marks) {
  if (marks < 100 && marks > 0 && !NaN) {
    let grade;
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 50) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        } 
        return grade;
  } else {
    return "The marks entered are incorrect enter the correct marks";
  }
  
}
console.log(studentGradeGenerator(15))