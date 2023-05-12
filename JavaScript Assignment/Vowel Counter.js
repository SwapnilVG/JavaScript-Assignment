/*We want to count the number of vowels in a person's name. Given a name as input, the program should iterate through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be counted.*/

let prompt = require("prompt-sync")();

function countVowels(name) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < name.length; i++) {
    if (vowels.includes(name[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

let name = prompt("Enter Person Name: ");

if (name.trim().length === 0) {
  console.log("Name cannot be empty.");
} else {
  const vowelCount = countVowels(name);
  if (vowelCount === 0) {
    console.log(`There are no vowels in ${name}.`);
  } else {
    console.log(`There are ${vowelCount} vowels in ${name}.`);
  }
}

  