////////////////////////////////
// Easy Going
////////////////////////////////
{
  for (let a = 1; a < 21; a++) {
    console.log(a);
  }
} /*Using a For Loop to get a list of numbers. 
Starting off with "a" being 1. Since I want 1-20, 
I want this loop to stop running after 20. 
I want to increase by 1 from the starting point of 1.*/

////////////////////////////////
// Get Even
////////////////////////////////
{
  for (let b = 0; b < 201; b += 2) {
    console.log(b);
  }
} /*Using a For Loop to get a list of even numbers.
Started with 0 for this one. To make sure that 200 included with this list, 
I made sure to run it up to 201. I wanted to increase by 2, so I put a+=2. 
The way I read += as is the increment increase will be by 2.*/

////////////////////////////////
// Fizz Buzz
////////////////////////////////
{
  for (let c = 1; c < 101; c++) {
    if (c % 3 === 0 && c % 5 === 0) {
      console.log("FizzBuzz");
    } else if (c % 3 === 0) {
      console.log("Fizz");
    } else if (c % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(c);
    }
  }
}
/*This one took some googling for what I was doing wrong.
I wasn't getting the FizzBuzz because I didn't put it first. 
Didn't realize that the order matter since all three would be true, but put the if statement that encompassed both remainders first and that got me the answer. */
////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

//Plantee just had her birthday; change Plantee's array to reflect her being a year older.

plantee.splice(2, 1, 5001); //The splice tool will identify the index that we need to identify, how many we need to work, and what we are changing it to.
console.log(plantee);

//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy.splice(3, 1, "Gotham City"); //Using the splice tool to replace the previous city, just like the first example.
console.log(wolfy);

//Give D'Art a second hometown by adding "Hawkins"
dart.splice(3, 0, "Hawkins"); // Changed the number of indeces that we need to change to 0, which lets you add an index.
console.log(dart);
//Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.splice(0, 1, "Gameboy"); // Updated the data of the name of Wolfy to Gameboy.
console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const tmnt = ["Leonardo", "Donatello", "Rafael", "Michelangelo"]; //Built the array of the four little turtles
for (turtles of tmnt) //for of loop requires to have a different new name of the updated array that the loop produces get the list of the array.
  console.log(turtles.toUpperCase()); //.toUpperCase added to what we are logging makes this upper case

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];
//Console log: the index of Titanic
console.log(favMovies.indexOf("Titanic")); // To log the index we have to look at the array labeled favMovies and use the index of function and see where Titanic rates.
//Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):

//Note: if you have to add to the array, feel free to add any movie you'd like

//use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
favMovies.sort(); //This alphabatized the list and it permanently altered it.

//Use the method pop
favMovies.pop(); //This took off the last item of the alphabatized list on the list "Volver"

//push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy"); //This added Guardians to the end of the already alphabatized list.

//Reverse the array
favMovies.reverse(); //This reversed the list as it was in the previous step, so Guardians is at the top of the list now.

//Use the shift method
favMovies.shift(); //This removed Guardians from the list

//unshift - what does it return?
favMovies.unshift(); // This didn't return anything different than from the previous list.

favMovies.unshift("Boogie Nights"); // This added Boogie Nights to the top of the list.

//splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar"); // spliced the index of Django and removing 1 total index and adding in Avatar. This put Avatar in the Django slot of the array.

//slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
const newMovies = favMovies.slice(favMovies.length / 2); //for splices, you have to create a new array from the index that you want. I divided the array length by 2 to pick
//store the value of your slice in a variable, console.log it - Thought question: what is going on here?
console.log(newMovies); //This is the second half of the list.
//console.log your final results
console.log(favMovies);
//After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
console.log(favMovies.indexOf("Fast and Furious")); // Fast and Furious wasn't taken off the list when I ran any of the previous codes.
console.log(favMovies.indexOf("Volver")); // Volver was removed and that is giving an -1 index
//Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
//Arrays allow for changes with different commands.

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];
//Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1, 1); //splice identifies the item indexed 1 and will remove 1 item
console.log(whereIsWaldo);
// //Change "Neff" to "No One"
const secondGroup = whereIsWaldo.slice(1, 2).pop(); //Needed to slice out the 2 index as is
secondGroup.splice(2, 1, "No One"); //Needed to splice in No One into the array
whereIsWaldo.splice(1, 1, secondGroup); //Spliced in the new array into the old array with the changes
console.log(whereIsWaldo);

//Access and console.log "Waldo"
const thirdGroup = whereIsWaldo.slice(2).pop() // Needed to slice out the 3rd array 
const fourthGroup = thirdGroup.slice(1).pop() // Needed to slice out the 2nd array within the 3rd array
const waldo = fourthGroup.pop(1) // Popped Waldo as a return

console.log(waldo);
////////////////////////////////
//  Excited Kitten
////////////////////////////////

////////////////////////////////
//  Find the Median
////////////////////////////////
