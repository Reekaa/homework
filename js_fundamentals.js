// // Excercise 1
// 7 + 3;
// 10
//
// 9 % 2;
// 1
//
// typeof(42);
// 'number'
//
// typeof(2) === typeof(9.24);
// true
//
// 42 / 0;
// Infinity
//
// 9 / "player1";
// NaN
//
// NaN === NaN;
// false
//
// typeof(NaN);
// number
//
// typeof parseInt("42");
// number
//
// "Brendan" + " Eich";
// Brendan Eich
//
// var firstName = "Brendan";
// var lastName = "Eich";
// firstName + " " + lastName;
// Brendan Eich
//
// var phoneNumber = "08798976";
// phoneNumber.length;
// 8
//
// "Brendan" === "Brendan";
// true
//
// var fName;
// if (fName) console.log(`First name is ${fName}`);
// no
//
// var name = "";
// if (name) console.log(`First name is $(name)`);
// no

// Exercise 2

// var score = 10;
// switch (score) {
//   case 8:
//   console.log('Pass');
//     break;
//   case 9:
//   console.log('Merit');
//     break;
//   case 10:
//   console.log('Distinction');
//     break;
//   default:
//   console.log('Fail');
// }

// Excercise 3

// var coffees = [
//   { type:"Latte", price:2.65 },
//   { type:"Cappuccino", price:2.75 },
//   { type:"Flat white", price:2.95 },
//   { type:"Super-dooper Mocha Deluxe", price:3.79 }
// ];
//
// for (coffee of coffees) {
//   console.log(coffee.type + " " + "cost" + " " + coffee.price)
// }

// Excercise 4 - I wasn't sure what to do with this, the below idea came from the team...

// var currentPlayer = 'x';
// var grid = [['x','x','x'], ['o', null, 'o'], [null, null, null]];
//
//
// if ((grid[0][0]===currentPlayer&&grid[0][1]===currentPlayer&&grid[0][2]===currentPlayer)||
//     (grid[0][0]===currentPlayer&&grid[1][1]===currentPlayer&&grid[2][2]===currentPlayer)||
//     (grid[1][0]===currentPlayer&&grid[1][1]===currentPlayer&&grid[1][2]===currentPlayer)||
//     (grid[0][2]===currentPlayer&&grid[1][1]===currentPlayer&&grid[2][0]===currentPlayer)||
//     (grid[0][1]===currentPlayer&&grid[1][1]===currentPlayer&&grid[2][1]===currentPlayer)||
//     (grid[0][2]===currentPlayer&&grid[1][2]===currentPlayer&&grid[2][2]===currentPlayer)||
//     (grid[2][0]===currentPlayer&&grid[2][1]===currentPlayer&&grid[2][2]===currentPlayer))
// {
//   console.log("x wins");
// }
// else {
//   console.log("No winner");
// }
