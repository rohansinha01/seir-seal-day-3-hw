////////////////////////////////
// Easy Going
////////////////////////////////
{for (let a = 1; a < 21; a++) {
    console.log(a)
} }/*Using a For Loop to get a list of numbers. 
Starting off with "a" being 1. Since I want 1-20, 
I want this loop to stop running after 20. 
I want to increase by 1 from the starting point of 1.*/

////////////////////////////////
// Get Even
////////////////////////////////
{for (let b = 0; b < 201; b+=2) {
    console.log(b)
}}/*Using a For Loop to get a list of even numbers.
Started with 0 for this one. To make sure that 200 included with this list, 
I made sure to run it up to 201. I wanted to increase by 2, so I put a+=2. 
The way I read += as is the increment increase will be by 2.*/


////////////////////////////////
// Fizz Buzz
////////////////////////////////
{for (let c = 1; c < 101; c++) {
    if (c % 3 === 0 && c % 5 === 0) {
        console.log("FizzBuzz")}
    else if (c % 3 === 0) {
        console.log("Fizz")
    }
    else if (c % 5 === 0) {
        console.log("Buzz")
    }
    else {
        console.log(c)
    }
}
}
/*This one took some googling for what I was doing wrong.
I wasn't getting the FizzBuzz because I didn't put it first. 
Didn't realize that the order matter since all three would be true, but put the if statement that encompassed both remainders first and that got me the answer. */
////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//Plantee just had her birthday; change Plantee's array to reflect her being a year older.

plantee.splice(2, 1, 5001) //The splice tool will identify the index that we need to identify, how many we need to work, and what we are changing it to.
console.log(plantee)


//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy.splice(3, 1, "Gotham City") //Using the splice tool to replace the previous city, just like the first example.
console.log(wolfy)

//Give D'Art a second hometown by adding "Hawkins"
dart.splice(3, 0, "Hawkins")// Changed the number of indeces that we need to change to 0, which lets you add an index.
console.log(dart)
//Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.splice(0,1, "Gameboy")// Updated the data of the name of Wolfy to Gameboy.
console.log(wolfy)

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const tmnt = ["Leonardo", "Donatello", "Rafael", "Michelangelo"] //Built the array of the four little turtles
for (turtles of tmnt) //for of loop requires to have a different new name of the updated array that the loop produces get the list of the array.
console.log(turtles.toUpperCase()) //.toUpperCase added to what we are logging makes this upper case 

////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////