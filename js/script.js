// Copyright (c) 2020 Mr. Coxall All rights reserved
// Created by: Emre Guzel
// Created on: March 20  2025
// This file contains the JS functions for index.html

"use strict"

function CalucalteTaxIncome() {
  // Setting the varibles
  const TaxAmount = 0.18
  let HourlyWorked = parseInt(document.getElementById("hourly-worked").value)
  let HourlyWage = parseInt(document.getElementById("hourly-wage").value)
  let grossPay = HourlyWorked * HourlyWage
  let TakeHomePay = grossPay - TaxAmount

  // clacualtoins 
  document.getElementById("result").innerHTML =
    `Take home Pay: $${TakeHomePay.toFixed(2)} <br> Taxes: $${(grossPay * TaxAmount).toFixed(2)}`;
}