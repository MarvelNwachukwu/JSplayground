// const num = EvenOddNo => {
//   if (EvenOddNo % 2 === 0) {
//     alert("This number is even");
//   } else {
//     alert("This number is odd");
//   }
// };

// num(9);

// Array

var names = ["Mark", "John", "Luke", "Matthew"];
console.log(names);
console.log(names.length);
let sentence1 = "There are " + names.length + " names";
console.log(sentence1);

// Array Mutation

names[0] = "James";
names[1] = "Jude";
names[5] = "Mat";
console.log(names.length);
let sentence2 = "There are " + names.length + " names ";
console.log(sentence2);

// Multi-Array Values Test

var Marvel = ["Marvellous", "Nwachukwu", 2003, "Food", "Programmer", "False"];
Marvel.push("black");
Marvel.unshift("Single");
// Marvel.pop();
// Marvel.pop();
// Marvel.shift();
console.log(Marvel);
let sentence3 = "There are " + names.length + " names";
console.log(sentence3);
console.log(Marvel.indexOf(2003));
console.log(Marvel.indexOf("James"));

// Messing with James

var WhatJamesIs =
  Marvel.indexOf("Developer") === -1
    ? "James is a Developer"
    : "James is my Tutor";
console.log(WhatJamesIs);

// SetTimeout

function TimeoutTest() {
  setTimeout(TestOfTimer, 3000);
}

function TestOfTimer() {
  console.log("Timeout is working");
  alert("Hello there!");
}

TimeoutTest();

// Async

function AsyncText() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await AsyncText();
  console.log(result);
}

asyncCall();

// It's been fun learning Javascript
