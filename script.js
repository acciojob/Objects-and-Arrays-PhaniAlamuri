const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
// Define the array and object
let players = ['John', 'Mike', 'Sarah'];
let person = { name: 'David', age: 25 };

// Create a variable 'team' to store a reference to 'players' array
let team = players;

// Create a variable 'team1' to make a copy of 'players' array
let team1 = players.slice();

// Create a variable 'cap1' to make a copy of 'person' object
let cap1 = Object.assign({}, person);

// Testing the variables
console.log(team);   // Output: ['John', 'Mike', 'Sarah']
console.log(team1);  // Output: ['John', 'Mike', 'Sarah']
console.log(cap1);   // Output: { name: 'David', age: 25 }
window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
