// Destructing Exercise

// Destructuring Array
// let Dessert = [
//   "Chocolava Cake",
//   "Pudding",
//   "Ice Cream",
//   "Vanilla Cake",
//   "Red Velvet Cake",
// ];

// let [Cake1, others1, others2, Cake2, Cake3] = Dessert;

// console.log(Cake1);
// console.log(others1);
// console.log(others2);
// console.log(Cake2);
// console.log(Cake3);

// Destructing Object
// let Dessert = {
//   cakeName: "Red Velvet",
//   color: "Red",
//   sweet: true,
//   quantity: 1,
// };

// let { cakeName, color, sweet, quantity } = Dessert;
// console.log(cakeName);
// console.log(color);
// console.log(sweet);
// console.log(quantity);

// Destructuring Array Dengan Mengambil Sebagian Item
// let Dessert = [
//   "Chocolava Cake",
//   "Pudding",
//   "Ice Cream",
//   "Vanilla Cake",
//   "Red Velvet Cake",
// ];

// let [Cake1, , , Cake2, Cake3] = Dessert;

// console.log(Cake1);
// console.log(Cake2);
// console.log(Cake3);

// Destructuring Object dengan mengambil sebagian item
// let Dessert = {
//   cakeName: "Red Velvet",
//   color: "Red",
//   sweet: true,
//   quantity: 1,
// };

// let { cakeName, quantity } = Dessert;
// console.log(cakeName);
// console.log(quantity);

// Destructuring Array dengan Default Value
// let Dessert = [
//   "Chocolava Cake",
//   "Pudding",
//   "Ice Cream",
//   "Vanilla Cake",
//   "Red Velvet Cake",
// ];

// let [Cake1, others1, others2, Cake2, Cake3, Cake4 = "Tiramisu Cake"] = Dessert;

// console.log(Cake1);
// console.log(others1);
// console.log(others2);
// console.log(Cake2);
// console.log(Cake3);
// console.log(Cake4);

// Destructuring Object dengan Default Value
// let Dessert = {
//   cakeName: "Red Velvet",
//   sweet: true,
//   quantity: 1,
// };

// let { cakeName, color = "Red", sweet, quantity } = Dessert;
// console.log(cakeName);
// console.log(color);
// console.log(sweet);
// console.log(quantity);

// Destructuring Array dengan menggunakan rest operator
// let Dessert = [
//   "Chocolava Cake",
//   "Pudding",
//   "Ice Cream",
//   "Vanilla Cake",
//   "Red Velvet Cake",
// ];

// let [Cake1, others1, ...rest] = Dessert;

// console.log(Cake1);
// console.log(others1);
// console.log(rest);

// Destructuring Object dengan menggunakan rest operator
// let Dessert = {
//   cakeName: "Red Velvet",
//   color: "Red",
//   sweet: true,
//   quantity: 1,
// };

// let { cakeName, ...rest } = Dessert;
// console.log(cakeName);
// console.log(rest);
