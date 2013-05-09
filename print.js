"use strict"

var dup = require("dup")
var sym = require("symmetric-tensor-index")
var multi = require("multinomial")

function tensorToString(dimension, rank, coeffs) {
  var deg = dup(dimension)
    , seq = dup(rank)
    , idx = 0
    , result = [], i, c
  while(idx >= 0) {
    sym.tensorToDegree(dimension, rank, seq, deg)
    if(Math.abs(coeffs[idx]) > 1e-6) {
      if(result.length > 0) {
        result.push("+")
      }
      c = coeffs[idx] * multi(deg)
      if(c !== 1) {
        result.push(coeffs[idx] * multi(deg))
      }
      for(i=0; i<dimension; ++i) {
        if(deg[i] > 1) {
          result.push("x_{" + i + "}^{" + deg[i] + "}")
        } else if(deg[i] === 1) {
          result.push("x_{" + i + "}")
        }
      }
    }
    idx = sym.nextTensor(dimension, rank, seq, idx)
  }
  return result.join(" ")
}

module.exports = tensorToString