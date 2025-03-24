// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: March 20  2025
// This file contains the JS functions for index.html

"use strict"

function calculatoinOfAreaOftriangle() {
  // Setting the varibles
  const baseOfTheTriangle = parseFloat(document.getElementById("base-of-the-triangle").value)
  const heightOfTheTriangle = parseFloat (document.getElementById("height-of-the-triangle").value)
  const calculatoinOfAreaOftriangle = (baseOfTheTriangle * heightOfTheTriangle) / 2 
  // clacualtoins 
  document.getElementById("area").innerHTML ="Area is: " + calculatoinOfAreaOftriangle + "cm²"
}