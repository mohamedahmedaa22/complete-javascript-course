'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let newSet = new Set([
  'Mohamed',
  'Ahmed',
  'Sherif',
  'Mohanad',
  'Mohamed',
  'Emad',
  'Noah',
]);

// console.log(newSet);
// console.log(newSet.size);
// console.log(newSet.has('Mohamed'));
// console.log(newSet.add('Donia'));
// console.log(newSet);
// console.log(newSet.delete('Mohamed'));
// console.log(newSet);

const rest = new Map();
rest.set('name', 'Classico Itliano');
rest.set(1, 'Rome, Italy');
rest.set(2, 'Alexandria, Egypt');
// console.log(rest);
//console.log(restaurant.openingHours.mon?.open);
//const days = ['sat', 'sun', 'mon', 'tes', 'wed', 'thu', 'fri'];

// for (const day of days)
//   console.log(
//     `${day} open's at: ${restaurant.openingHours[day]?.open ?? 'closed'}`
//   );

//console.log(`On ${key} we open at: ${open} and closing at: ${close}`);

// let [main, , secondary] = restaurant.categories;

// [main, secondary] = [secondary, main];
//console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
//console.log(starter, mainCourse);

// const nasted = [1, 2, [3, 4]];
// const [x, , y] = nasted;

//default values

// const [x = 1, y = 1, z = 1] = [8, 5];

// console.log(x, y, z);

//object destruct

//for (const [key, { open, close }] of Object.entries(openingHours))
//const { name, openin, categories } = restaurant;

//changing name
//const {
//   name: restaurantName,
//   openin: restaurantHours,
//   categories: tags,
// } = restaurant;

//restaurantName;

// nasted object destruction

// const {
//   fri: { open, close },
// } = openingHours;
//console.log(open, close);

// the spread operator ...
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// const newGoodArr = [1, 2, ...arr];

//copy array
// const mainmenuCopy = [...restaurant.mainMenu];

//join 2 arrays
// const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
//console.log(fullMenu);

// const [a, b, ...others] = [1, 2, 3, 4, 5];
//console.log(a, b, others);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1)
// const [players1, players2] = game.players;
// //console.log(players1, players2);

// // 2)
// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;
// //console.log(gk1, gk2, fieldPlayers1, fieldPlayers2);

// // 3)
// const allPLayers = [...players1, ...players2];
// //console.log(allPLayers);

// // 4)
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// //console.log(players1Final);

// // for off loop
// //for (const [i, el] of fullMenu.entries()) console.log(`${i + 1}: ${el}`);

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
gameEvents.delete(64);
console.log(events);
console.log(gameEvents);

const time = [...gameEvents.keys()];

console.log(
  `An event happened, on average, every ${
    time[time.length - 1] / gameEvents.size
  } mintes`
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} Half] ${min} ${event}`);
}
