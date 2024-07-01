// Tax rates for the year 2023/2024
const taxRates = [
    { bandMin: 0, bandMax: 24000, rate: 0.1 },
    { bandMin: 24001, bandMax: 40667, rate: 0.25 },
    { bandMin: 40668, bandMax: 57334, rate: 0.3 },
    { bandMin: 57335, bandMax: Infinity, rate: 0.35 },
    personalRelief: 2400
  ];
  
  // NHIF deduction rates
  const nhifRates = [
    { min: 0, max: 5999, rate: 150 },
    { min: 6000, max: 7999, rate: 300 },
    { min: 8000, max: 11999, rate: 400 },
    { min: 12000, max: 14999, rate: 500 },
    { min: 15000, max: 19999, rate: 600 },
    { min: 20000, max: 24999, rate: 750 },
    { min: 25000, max: 29999, rate: 850 },
    { min: 30000, max: 34999, rate: 900 },
    { min: 35000, max: 39999, rate: 950 },
    { min: 40000, max: Infinity, rate: 1000 }
  ];
  
  // NSSF deduction rate
  const nssfRate = 0.06; // 6% of the basic salary
  
  function calculateNetSalary() {
    const basicSalary = parseFloat(prompt("Enter basic salary:"));
    const benefits = parseFloat(prompt("Enter benefits:"));
  
    const grossSalary = basicSalary + benefits;
  
    let taxableIncome = grossSalary;
    let tax = 0;
    for (const band of taxRates) {
      if (taxableIncome > band.bandMin) {
        if (taxableIncome <= band.bandMax) {
          tax += (taxableIncome - band.bandMin) * band.rate;
          break;
        } else {
          tax += (band.bandMax - band.bandMin) * band.rate;
          taxableIncome -= band.bandMax;
        }
      }
    }
    tax -= taxRates.personalRelief;
    tax = Math.max(tax, 0);
  

    let nhifDeduction = 0;
    for (const nhifBand of nhifRates) {
      if (grossSalary >= nhifBand.min && grossSalary <= nhifBand.max) {
        nhifDeduction = nhifBand.rate;
        break;
      }
    }
  

    const nssfDeduction = basicSalary * nssfRate;

    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;
  

    console.log("Gross Salary:", grossSalary);
    console.log("PAYE (Tax):", tax);
    console.log("NHIF Deduction:", nhifDeduction);
    console.log("NSSF Deduction:", nssfDeduction);
    console.log("Net Salary:", netSalary);
  }
  
  calculateNetSalary();