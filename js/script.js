// Copyright (c) 2024 hames al sharoa All rights reserved
//
// Created by: hames al sharoa
// Created on: may 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-03-JS/sw.js", {
    scope: "/ICS2O-Unit5-03-JS/",
  })
}

/**
 * This function displays the user's movie age rating.
 */
function ageRating() {
  // input
  const age = parseInt(document.getElementById("age").value)

  // process
  if (age >= 17) {
    document.getElementById("watchable").innerHTML =
      "You're old enough to watch any R movie alone. Congrats!"
  } else if (age >= 13) {
    document.getElementById("watchable").innerHTML =
      "You can watch PG-13 movies alone."
  } else if (age >= 5) {
    document.getElementById("watchable").innerHTML =
      "You're pretty young... let's stick to G or PG for now."
  } else {
    document.getElementById("watchable").innerHTML =
      "I'm surprised you even found this site... shouldn't you be napping?"
  }
}