"use strict"

var tensorToString = require("../print.js")

require("tap").test("tensor-to-string", function(t) {

  console.log(tensorToString(3, 2, [1, 1, 1, 1, 1, 1]))


  t.end()
})
