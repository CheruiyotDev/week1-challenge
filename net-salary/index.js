//Calculate net salary
function netSalaryCalculator(salary, benefits) {
  const totalIncome = salary + benefits;
  const payee = payeeTaxRates(totalIncome);
  const nhif = nhifRates(totalIncome);
  const nssf = nssfRates(totalIncome);

  const netSalary = parseFloat((totalIncome - payee - nhif - nssf).toFixed(2));
  return netSalary;
}

console.log(netSalaryCalculator(15999, 0))
// Calculate payee

function payeeTaxRates(salary) {
  if (salary <= 24000) {
    return salary * 10 / 100;
  } else if (salary > 24000 && salary <= 32333) {
    return salary * 25 / 100;
  } else if (salary > 32333 && salary <= 500000) {
    return salary * 30 / 100;
  } else if (salary > 500000 && salary <= 800000) {
    return salary * 32.5 / 100;
  } else if (salary > 800000) {
    return salary * 35 / 100;
  } else {
    return 0;
  }
}

//calculate NSSF rates
function nssfRates(salary) {
  if (salary >= 7000) {
    return salary * 6 / 100;
  } else {
    return 0;
  }
}

//CAlculate NHIF rates
function nhifRates(salary) {
  if (salary <= 5999) {
    return 150;
  } else if (salary <= 7999) {
    return 300;
  } else if (salary <= 11999) {
    return 400;
  } else if (salary <= 14999) {
    return 500;
  } else if (salary <= 19999) {
    return 600;
  } else if (salary <= 24999) {
    return 750;
  } else if (salary <= 29999) {
    return 850;
  } else if (salary <= 34999) {
    return 900;
  } else if (salary <= 39999) {
    return 950;
  } else if (salary <= 44999) {
    return 1000;
  } else if (salary <= 49999) {
    return 1100;
  } else if (salary <= 59999) {
    return 1200;
  } else if (salary <= 69999) {
    return 1300;
  } else if (salary <= 79999) {
    return 1400;
  } else if (salary <= 89999) {
    return 1500;
  } else if (salary <= 99999) {
    return 1600;
  } else if (salary >= 100000) {
    return 1700;
  } else {
    return 0;
  }
}

