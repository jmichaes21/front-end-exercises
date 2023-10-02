// import hello, { fullName, numbers, john } from "./utils.js";
// import sayGreetings from "./sayGreetings.js";
// console.log(fullName);
// console.log(numbers);
// console.log(john);
// hello();
// sayGreetings();

// Asynchronous Js

// synchronous -> single thread -> blocking
// console.log(`Proses 1`);
// console.log(`Proses 2`);
// console.log(`Proses 3`);
// console.log(`Proses 4`);

// Asynchrounous -> multi thread -> non blocking
// Ada 2 macam async

// 1. Parallel
// setTimeout(() => {
//   console.log(`proses 1`);
// }, 3000);
// console.log(`proses 2`);
// setTimeout(() => {
//   console.log(`proses 3`);
// }, 4000);
// console.log(`proses 4`);

// 2. Concurrent
// 2.a callback
// setTimeout(() => {
//   console.log(`proses 1`);
//   setTimeout(() => {
//     console.log(`proses 2`);
//     setTimeout(() => {
//       console.log(`proses 3`);
//       setTimeout(() => {
//         console.log(`proses 4`);
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

// 2.b promise
// buat promise
let condition = false;
const newPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve(`berhasil`);
  } else {
    reject("gagal");
  }
});
// pakai promise
// 1. then - catch
// newPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.log(error));

// 2. Async - Await (ES7)
// async await digunakan pada fungsi
const consumePromise = async () => {
  try {
    let result = await newPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
consumePromise();
