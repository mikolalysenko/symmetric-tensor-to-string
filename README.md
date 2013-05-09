symmetric-tensor-to-string
==========================
Converts symmetric tensors into pretty-printable LaTeX polynomial expressions.

## Use

```javascript
console.log(require("symmetric-tensor-to-string")(2, 2, [1, 1, 1]))

//Prints:
//
//  x_{0}^2 + 2 x_{0} x_{1} + x_{1}^2
//
```

## Install

    npm install symmetric-tensor-to-string

### `require("symmetric-tensor-to-string")(dimension, rank, coeffs)`
Converts a symmetric tensor into a human readable LaTeX expression.

* `dimension` is the dimension of the vector space
* `rank` is the order of the tensor
* `coeffs` are the tensor coefficients

**Returns** A human readable string

## Credits
(c) 2013 Mikola Lysenko. MIT License