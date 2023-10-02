// Buatlah fungsi yang menerima 1 input angka
// Dan mengembalikan string apakah angka yang dimasukan
// adalah bilangan ganjil dan genap

function ganjilGenap(num) {
  let formula = num % 2;
  let isNum = formula == 0 ? "Genap" : "Ganjil";
  console.log(isNum);
}

ganjilGenap(9);
