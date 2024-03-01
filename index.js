// EXAMPLE 1 - Get the Max id in an Array of Objects in JavaScript

const arr = [{id: 1}, {id: 7}, {id: 3}, {id: 14}];

const ids = arr.map(object => {
  return object.id;
});
console.log(ids); // 👉️ [1, 7, 3, 14]

const max = Math.max(...ids);
console.log(max); // 👉️ 14

const min = Math.min(...ids);
console.log(min); // 👉️ 1

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the Max id in an Array of Objects using reduce()

// const arr = [{id: 1}, {id: 7}, {id: 3}, {id: 14}];

// const maxObj = arr.reduce((accumulator, current) => {
//   return accumulator.id > current.id ? accumulator : current;
// });

// console.log(maxObj); // 👉️ { id: 14 }

// console.log(maxObj.id); // 👉️ 14

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the Max id in an Array of Objects using forEach()

// const arr = [{id: 1}, {id: 7}, {id: 3}, {id: 14}];

// let maxId = 0;
// let maxObj;

// arr.forEach(element => {
//   if (element.id > maxId) {
//     maxId = element.id;
//     maxObj = element;
//   }
// });

// console.log(maxId); // 👉️ 14
// console.log(maxObj); // 👉️ { id: 14 }
