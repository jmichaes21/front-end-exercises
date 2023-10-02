// Salainti, Juan Michael

// Array Exercise
let people = ["Greg", "Mary", "Devon", "James"];

// nomor 1
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// nomor 2
people.forEach(function (people) {
  console.log(people);
});

// nomor 3
people.shift();
console.log(people);

// nomor 4
people.pop();
console.log(people);

// nomor 5
people.unshift("Matt");
console.log(people);

// nomor 6
people.push("Juan");
console.log(people);

// nomor 7
for (i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] == "Mary") {
    break;
  }
}

// nomor 8
let people2 = people.slice(2);
console.log(people2);

// nomor 9
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

// nomor 10\
let withBob = people.concat("Bob");
console.log(withBob);

// Object exercise

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// nomor 1
programming.languages.push("Go");
console.log(programming);

// nomor 2
programming["difficulty"] = 7;
console.log(programming);

// nomor 3
delete programming.jokes;
console.log(programming);

// nomor 4
programming.isFun = true;
console.log(programming);

// nomor 5
programming.languages.map(function (value, index) {
  console.log(index + " - " + value);
});
