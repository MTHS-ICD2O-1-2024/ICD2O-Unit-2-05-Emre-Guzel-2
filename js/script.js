// Copyright (c) 2020 Mr. Coxall All rights reserved
// Created by: Emre Guzel
// Created on: March 24  2025
// This file contains the JS functions for index.html

"use strict"

function calculateTaxIncome() {
  // Setting the variables
  const taxAmount = 0.18;
  let hourlyWorked = parseFloat(document.getElementById("hourly-worked").value);
  let hourlyWage = parseFloat(document.getElementById("hourly-wage").value);
  let takeHomePay = (hourlyWorked * hourlyWage) * (1.00 - taxAmount)
  let taxes = (hourlyWorked * hourlyWage) * taxAmount;

  // Correct currency formatting
  let formattedPrice = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });

  // Display calculations correctly with formatted currency
  document.getElementById("result").innerHTML =
    `Take-home Pay: ${formattedPrice.format(takeHomePay)} <br> 
    Taxes: ${formattedPrice.format(taxes)}`;
}