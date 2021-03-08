'use strict';

// // // function calcAge(birthYear) {
// // //   function printAge() {
// // //     const output = `You are ${firstName}, born in ${birthYear}`;
// // //     console.log(output);
// // //   }

// // //   printAge();
// // //   return 2021 - birthYear;
// // // }

// // // const firstName = 'Mohamed';

// // // calcAge(1998);

// // // // hoisting
// // // console.log(me);
// // // console.log(job);
// // // console.log(year);

// // // var me = 'mohamed';
// // // let job = 'software enginner';
// // // const year = 1998;

// // // // this keyword

// // //console.log(this);

// // function calcAge(birthYear) {
// //   console.log(2021 - birthYear);
// //   console.log(this);
// // }

// // calcAge(1998);

// // const calcAge2 = birthYear => {
// //   console.log(2021 - birthYear);
// //   console.log(this);
// // };

// // calcAge2(1998);

// const mohamed = {
//   firstName: 'Mohamed',
//   lastName: 'Abdellatef',
//   greet: () => console.log(`Hey, ${this.firstName} ${this.lastName}`),
// };

// mohamed.greet();

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
//   return a + b;
// };

// addExpr(1, 5, 6, 2, 1, 3, 54, 1);

// const addArr = (a, b) => a + b;

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'mohamed',
  age: 23,
};

const firend = me;
firend.age = 27;

console.log(me);
console.log(firend);
