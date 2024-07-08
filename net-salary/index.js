function calculateNetSalary(basicSalary, benefits) {
  const PAYE = [
      { min: 0, max: 24000, rate: 0.1 },
      { min: 24001, max: 32333, rate: 0.25 },
      { min: 32334, max: 40333, rate: 0.3 },
      { min: 40334, max: 48333, rate: 0.325 },
      { min: 48334, max: Infinity, rate: 0.35 }
  ];
  const NHIF_RATES = [
      { min: 0, max: 5999, amount: 150 },
      { min: 6000, max: 7999, amount: 300 },
      { min: 8000, max: 11999, amount: 400 },
      { min: 12000, max: 14999, amount: 500 },
      { min: 15000, max: 19999, amount: 600 },
      { min: 20000, max: 24999, amount: 750 },
      { min: 25000, max: 29999, amount: 850 },
      { min: 30000, max: 34999, amount: 900 },
      { min: 35000, max: 39999, amount: 950 },
      { min: 40000, max: 44999, amount: 1000 },
      { min: 45000, max: 49999, amount: 1100 },
      { min: 50000, max: 59999, amount: 1200 },
      { min: 60000, max: 69999, amount: 1300 },
      { min: 70000, max: 79999, amount: 1400 },
      { min: 80000, max: 89999, amount: 1500 },
      { min: 90000, max: 99999, amount: 1600 },
      { min: 100000, max: Infinity, amount: 1700 }
  ];
  const NSSF_RATE_EMPLOYEE = 0.06;
  const NSSF_RATE_EMPLOYER = 0.06;
  
  // Calculate gross salary
  const grossSalary = basicSalary + benefits;

  //deduct standard personal relief
  const taxableIncome = grossSalary - 2400; 
  
  const taxAmount = calculateTax(PAYE, taxableIncome);

  // Calculate NHIF Deductions
  const nhifDeduction = calculateNHIF(NHIF_RATES, grossSalary);

  // Calculate NSSF Deductions
  const nssfEmployeeContribution = grossSalary * NSSF_RATE_EMPLOYEE;
  const nssfEmployerContribution = grossSalary * NSSF_RATE_EMPLOYER;

  // Calculate Net Salary
  const netSalary = grossSalary - taxAmount - nhifDeduction - nssfEmployeeContribution;


  return {
      grossSalary: grossSalary.toFixed(2),
      taxAmount: taxAmount.toFixed(2),
      nhifDeduction: nhifDeduction.toFixed(2),
      nssfEmployeeContribution: nssfEmployeeContribution.toFixed(2),
      nssfEmployerContribution: nssfEmployerContribution.toFixed(2),
      netSalary: netSalary.toFixed(2)
  };
}

//function to calculate PAYE (Tax)
function calculateTax(taxBands, taxableIncome) {
  let taxAmount = 0;

  for (let band of taxBands) {
      if (taxableIncome <= 0) {
          break;
      }

      let bandTaxable = Math.min(taxableIncome, band.max - band.min + 1);
      taxAmount += bandTaxable * band.rate;
      taxableIncome -= bandTaxable;
  }

  return taxAmount;
}

//function to calculate NHIF Deductions
function calculateNHIF(nhifRates, grossSalary) {
  let nhifDeduction = 0;

  for (let rate of nhifRates) {
      if (grossSalary >= rate.min && grossSalary <= rate.max) {
          nhifDeduction = rate.amount;
          break;
      }
  }

  return nhifDeduction;
}


   

let salaryDetails = calculateNetSalary(50000, 5000);
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("Tax (PAYE):", salaryDetails.taxAmount);
console.log("NHIF Deduction:", salaryDetails.nhifDeduction);
console.log("NSSF Employee Contribution:", salaryDetails.nssfEmployeeContribution);
console.log("NSSF Employer Contribution:", salaryDetails.nssfEmployerContribution);
console.log("Net Salary:", salaryDetails.netSalary);
