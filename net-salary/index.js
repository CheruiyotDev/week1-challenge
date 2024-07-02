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