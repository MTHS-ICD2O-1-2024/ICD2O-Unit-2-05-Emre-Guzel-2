"use strict"

function CalucalteTaxIncome() {
  // Setting the variables
  const TaxAmount = 0.18;
  let HourlyWorked = parseFloat(document.getElementById("hourly-worked").value);
  let HourlyWage = parseFloat(document.getElementById("hourly-wage").value);
  let TakeHomePay = (HourlyWorked * HourlyWage)
  let Taxes = (HourlyWorked * HourlyWage) * TaxAmount;

  // Correct currency formatting
  let formattedPrice = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });

  // Display calculations correctly with formatted currency
  document.getElementById("result").innerHTML =
    `Take-home Pay: ${formattedPrice.format(TakeHomePay)} <br> 
    Taxes: ${formattedPrice.format(Taxes)}`;
}
