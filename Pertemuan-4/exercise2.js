// exercise 2

// IIFE
// (function (num = 10) {
//   const formula = num % 2;
//   let isNum = formula == 0 ? "Genap" : "Ganjil";
//   console.log("Angka " + num + " adalah " + isNum);
// })();

// Callback

function ganjilGenap(num, callback) {
  const formula = num % 2;
  const isNum = formula == 0 ? "Genap" : "Ganjil";
  callback(isNum);
}

function logResult(isNum) {
  console.log(isNum);
}

ganjilGenap(10, logResult);
