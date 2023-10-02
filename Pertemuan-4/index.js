// function

// function hoisting

// function greetings() {
//     return "Hello"
// }

// const age = 17;

// const greetings = function (name) {
//   console.log(age);
//   const job = "teacher"; // local
//   if (job === "teacher") {
//     const address = "manado"; // blok
//   }
//   return "Hello";
// };

// console.log(greetings());

// IIFE
// Anonymous Function

// const output = (function () {
//   return "Hello IIFE";
// })();

// console.log(output);

// callback function

function createGreetings(name, callback) {
  const greetings = "Hello " + name;
  callback(greetings);
}

function logGreetings(greetings) {
  console.log(greetings);
}

createGreetings("Juan", logGreetings);
