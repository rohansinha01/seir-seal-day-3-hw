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


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////


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