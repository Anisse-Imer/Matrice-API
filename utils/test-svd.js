const { SVD } = require('svd-js')
const a = [
      [22, 10, 2, 3, 7],
      [14, 7, 10, 0, 8],
      [-1, 13, -1, -11, 3],
      [-3, -2, 13, -2, 4],
      [9, 8, 1, -2, 4],
      [9, 1, -7, 5, -1],
      [2, -6, 6, 5, 1],
      [4, 5, 0, -2, 2]
    ]

const { u, v, q } = SVD(a)
console.log(u)
console.log(v)
console.log(q)