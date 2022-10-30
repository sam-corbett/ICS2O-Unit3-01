// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-01/sw.js", {
    scope: "/ICS2O-Unit3-01/",
  })
}

/**
 * This function displays an alert.
 */
function calculateAREA() {
  //input
  const length = parseInt(document.getElementById("length-of-trapezoid").value)
  const width = parseInt(document.getElementById("width-of-trapezoid").value)
  const height = parseInt(document.getElementById("height-of-trapezoid").value)

  //process
  const area = ((length + width) / 2) * height

  //output
  document.getElementById("area").innerHTML =
    "The Area Of The Trapezoid is: " + area.toFixed(2) + "cm²"
}
