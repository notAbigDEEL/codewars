/*Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
 */

function adjacentElementsProduct(array) {
  const arr = array;
  let x = 0,
    y = 0,
    p = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    x = arr[i];
    y = arr[i + 1];
    if (x * y > p) {
      p = x * y;
    }
  }
  return p;
}

/*In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.

Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.
*/

function inAscOrder(arr) {
  // Code your algorithm here :)
  let isAsc;
  if (arr.length === 1) {
    isAsc = true;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        isAsc = false;
        break;
      } else {
        isAsc = true;
      }
    }
  }
  return isAsc;
}

/*Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

  */

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  } else if (p1 === "scissors" && p2 === "rock") {
    return "Player 2 won!";
  } else if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  } else if (p1 === "rock" && p2 === "paper") {
    return "Player 2 won!";
  } else if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  } else if (p1 === "paper" && p2 === "scissors") {
    return "Player 2 won!";
  }
};

/*
Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers.
*/

function remainder(a, b) {
  // Divide the larger argument by the smaller argument and return the remainder
  if (a > b) {
    return a % b;
  } else {
    return b % a;
  }
}

/*Return the type of the sum of the two arguments
 */
function typeOfSum(a, b) {
  let sum = a + b;
  return typeof sum;
}

/*For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

Note: Make sure you return the correct message with correct spaces and punctuation.
   */

function cookie(x) {
  // ...
  if (typeof x === "string") {
    return `Who ate the last cookie? It was Zach!`;
  } else if (typeof x === "number") {
    return `Who ate the last cookie? It was Monica!`;
  } else return `Who ate the last cookie? It was the dog!`;
}

/*In this kata you will create a function that takes in a list and returns a list with the reverse order.
 */

function reverseList(list) {
  return list.reverse();
}

/**I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.
 *
 */

var v1 = 50;
(v2 = 100), (v3 = 150), (v4 = 200), (v5 = 2), (v6 = 250);
function equal1() {
  var a = v1;
  var b = v1;
  return a + b;
}
//Please refer to the example above to complete the following functions
function equal2() {
  var a = v3; //set number value to a
  var b = v1; //set number value to b
  return a - b;
}
function equal3() {
  var a = v5; //set number value to a
  var b = v1; //set number value to b
  return a * b;
}
function equal4() {
  var a = v4; //set number value to a
  var b = v5; //set number value to b
  return a / b;
}
function equal5() {
  var a = v6; //set number value to a
  var b = v3; //set number value to b
  return a % b;
}

/**Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"
 */

function whatday(num) {
  if (num === 1) {
    return "Sunday";
  } else if (num === 2) {
    return "Monday";
  } else if (num === 3) {
    return "Tuesday";
  } else if (num === 4) {
    return "Wednesday";
  } else if (num === 5) {
    return "Thursday";
  } else if (num === 6) {
    return "Friday";
  } else if (num === 7) {
    return "Saturday";
  } else {
    return "Wrong, please enter a number between 1 and 7";
  }
}

/**To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: the sides must be integers
 */

var cubeChecker = function (volume, side) {
  return volume === side * side * side && volume > 0 ? true : false;
};

/**Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

function arrayDiff(a, b) {
  return a.filter((val) => !b.includes(val));
}

/**Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

In Racket, the function is called palindrome?

(palindrome? "nope") ; returns #f
(palindrome? "Yay")  ; returns #t
 */

function isPalindrome(x) {
  return x.toLowerCase() === x.split("").reverse().join("").toLowerCase();
}

/**You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
 */

function otherAngle(a, b) {
  return 180 - a - b;
}

/**Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

-If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".

-If he doesn't get 10 hoops, return the string "Keep at it until you get it".
 */

function hoopCount(n) {
  if (n >= 10) {
    return "Great, now move on to tricks";
  } else return "Keep at it until you get it";
}

/**In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
 */

function well(x) {
  goodCount = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      goodCount++;
    }
  }
  if (goodCount === 0) {
    return "Fail!";
  } else if (goodCount <= 2) {
    return "Publish!";
  } else return "I smell a series!";
}

/**Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.
 */

function calculateTip(amount, rating) {
  let rate = rating.toLowerCase();
  if (rate === "terrible") {
    return 0;
  } else if (rate === "poor") {
    return Math.ceil(amount * 0.05);
  } else if (rate === "good") {
    return Math.ceil(amount * 0.1);
  } else if (rate === "great") {
    return Math.ceil(amount * 0.15);
  } else if (rate === "excellent") {
    return Math.ceil(amount * 0.2);
  } else return "Rating not recognised";
}

/**
 * Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.
 */

function SeriesSum(n) {
  let result = 0;
  let x = 1;
  for (let i = 0; i < n; i += 1) {
    if (i === 0) {
      result = 1;
    } else {
      x += 3;
      result = result + 1 / x;
    }
  }
  return result.toFixed(2);
}

/**Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length. */

function tripleTrouble(one, two, three) {
  let result = "";
  one = one.split("");
  two = two.split("");
  three = three.split("");
  for (let i = 0; i < one.length; i++) {
    result = result + one[i] + two[i] + three[i];
  }
  return result;
}

/**Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones. */

function noBoringZeros(n) {
  // your code
  let result;
  while (n % 10 === 0 && n !== 0) {
    n = n / 10;
  }
  return n;
}

/**Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
 */

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) {
      return arr[i];
    }
  }
  return null;
}

/**Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

function XO(str) {
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      countX++;
    } else if (str[i].toLowerCase() === "o") {
      countO++;
    }
  }
  return countX === countO;
}

/**Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
 */

var capitals = function (word) {
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      arr.push(i);
    }
  }
  return arr;
};

/**An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
 */

function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

/**JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
 */

function getEvenNumbers(numbersArray) {
  // filter out the odd numbers
  return numbersArray.filter((num) => num % 2 === 0);
}

/*Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
   */

function uefaEuro2016(teams, scores) {
  if (scores[0] > scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
  } else if (scores[1] > scores[0]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
  } else return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
}

/*
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples:

peopleWithAgeDrink(13) === "drink toddy"
peopleWithAgeDrink(17) === "drink coke"
peopleWithAgeDrink(18) === "drink beer"
peopleWithAgeDrink(20) === "drink beer"
peopleWithAgeDrink(30) === "drink whisky"
 */

function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy";
  } else if (old < 18) {
    return "drink coke";
  } else if (old < 21) {
    return "drink beer";
  } else {
    return "drink whisky";
  }
}

/*Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

For Example:

  usdcny(15) // => '101.25 Chinese Yuan'
  usdcny(465) // => '3138.75 Chinese Yuan'
The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers shold be rounded to the nearest hundredth (e.g. 21.00 NOT 21.0 or 21) (HINT: google toFixed)
   */

function usdcny(usd) {
  let result = usd * 6.75;
  return `${result.toFixed(2)} Chinese Yuan`;
}

/*Task:
A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you.The bricks width and height are equal, forming a square. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will except these parameters:

radius - bottle's radius (always > 0);
bottleLength - total bottle length (always > 0);
rimLength - length from bottle top to brick (always < bottleLength);
And return volume of ice brick that magician managed to put into a bottle.
 */

function iceBrickVolume(radius, bottleLength, rimLength) {
  // Your code should be here ;)
  return 2 * radius ** 2 * (bottleLength - rimLength);
}

/*This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

For example:

derive(7, 8)
In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

derive(7, 8) --> this should output "56x^7" 
derive(5, 9) --> this should output "45x^8" 
Notes:

The output of this function should be a string
The exponent will never be 1, and neither number will ever be 0
   */

function derive(coefficient, exponent) {
  let result = coefficient * exponent;
  let exp = exponent - 1;

  return `${result}x^${exp}`;
}

/*Inspired by the development team at Vooza, write the function howManyLightsabersDoYouOwn/how_many_light_sabers_do_you_own that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

howManyLightsabersDoYouOwn("anyone else") === 0
howManyLightsabersDoYouOwn("Zach") === 18
howManyLightsabersDoYouOwn() === 0
 */

function howManyLightsabersDoYouOwn(name) {
  if (name === "Zach") {
    return 18;
  } else {
    return 0;
  }
}

/*Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.
*/

function findLongest(str) {
  let spl = str.split(" ");
  let longest = 0;

  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return longest;
}

/*Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
 */

function between(a, b) {
  const arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

/*Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
    */

function divisors(integer) {
  let arr = [];
  for (var i = 2; i < integer; i++) {
    if (integer % i === 0) {
      arr.push(i);
    }
  }
  if (arr.length === 0) {
    return `${integer} is prime`;
  } else {
    return arr;
  }
}

/*An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
 */
// write the function isAnagram
var isAnagram = function (test, original) {
  const a = test.toLowerCase().split("").sort().join("");
  const b = original.toLowerCase().split("").sort().join("");

  if (b === a) {
    return true;
  } else {
    return false;
  }
};

/**We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.

We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return {name: this.firstName + ' ' + this.lastName};
}

var n = new NameMe('John', 'Doe');
n.firstName //Expected: John
n.lastName //Expected: Doe
n.name //Expected: John Doe
 * 
 */

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  return (this.name = `${first} ${last}`);
}

/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
 */

function getSum(a, b) {
  let sum = 0;
  if (a === b) {
    return a;
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  }
  return sum;
}

/*Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0
 */

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    let arr = [];
    for (let i = 0; i <= count; i++) {
      arr.push(i);
    }
    let b = arr.reduce((total, next) => total + next, 0);
    let a = arr.join("+");

    if (count < 0) return `${count}<0`;
    if (count == 0) return `${count}=0`;

    return `${a} = ${b}`;
  };

  return SequenceSum;
})();

/**
 * Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
 */

function angle(n) {
  return (n - 2) * 180;
}

/*Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
 */

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      rna += "U";
    } else {
      rna += dna[i];
    }
  }
  return rna;
}

/*Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA" 
 */

function DNAStrand(dna) {
  //your code here
  let result = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result += "T";
    } else if (dna[i] === "T") {
      result += "A";
    } else if (dna[i] === "C") {
      result += "G";
    } else if (dna[i] === "G") {
      result += "C";
    }
  }
  return result;
}

/*Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome.

Examples
isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false
 */

function isPalindrome(line) {
  let q = line.toString().split("").reverse().join("");
  return q == line;
}

/*This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.
 */

function checkForFactor(base, factor) {
  // code here
  if (base % factor === 0) {
    return true;
  }
  return false;
}

/*Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Graph

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
 */

function squareArea(A) {
  const radius = (2 * A) / Math.PI;
  const area = radius * radius;
  return Number(area.toFixed(2));
}

/*I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?
 */
function swapValues(args) {
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}

/* Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
 */

function combat(health, damage) {
  // Write your code here
  return health < damage ? 0 : health - damage;
}

/*Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.
  */

function spEng(sentence) {
  //write your code here
  if (sentence.toLowerCase().indexOf("english") === -1) {
    return false;
  } else {
    return true;
  }
}

/*The following formula is called the Decibel Scale:

Decibel Scale Formula

The Decibel Scale is used to determine the loudness of a sound, measured in dB:

β is the result we want, defined in dB;
We multiply the result of the logarithmic operation by 10, otherwise it'll be called "Bel Scale";
We provide I, the intensity of the sound wave we need to find the loudness of, which is, for the purposes of this Kata, measured in 2D space and, hence, in Watts per square meter;
Finally, we divide the intensity by the threshold of human hearing, also measured in Watts per square meter. This is the softest possible sound a human ear can hear;
Since the threshold of human hearing involves an extremely small, long number, we need to utilize a logarithmic operation that will provide us the result in a convenient way.
Your task is to simply calculate the loudness of a sound wave, given its intensity as a parameter to the dBScale/db_scale function.

Results are automatically rounded to the nearest integer by the test cases.
*/

function dBScale(intensity) {
  return 10 * Math.log10(intensity / Math.pow(10, -12));
}

/*Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
     */

function smash(words) {
  "use strict";
  return words.join(" ");
}

/* Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
 */

function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  } else if (a + b > c && b + c > a && a + c > b) {
    return true;
  } else return false;
}

/*The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Note for F#: The input will be of (int list list) which is a List<List>

Example Input
[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
Output
Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example Output
["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

function openOrSenior(data) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  }
  return result;
}

/*Code as fast as you can! You need to double the integer and return it.
 */

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return 2 * i;
}

/*Write a function that takes a list (in Python) or array (in other languages) of numbers, and makes a copy of it.

Note that you may have troubles if you do not return an actual copy, item by item, just a pointer or an alias for an existing list or array.

If not a list or array is given as a parameter in interpreted languages, the function should raise an error.

Examples:

t = [1, 2, 3, 4]
tCopy = copyList(t)
t[1] += 5
t = [1, 7, 3, 4]
tCopy = [1, 2, 3, 4]
*/

function copyList(l) {
  const result = l.map((x) => x);
  return result;
}

/*Given a non-negative integer, return an array / a list of the individual digits in order.

Examples:

123 => [1,2,3]

1 => [1]

8675309 => [8,6,7,5,3,0,9]
 */

function digitize(n) {
  return n.toString().split("").map(Number);
}

/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

function countPositivesSumNegatives(input) {
  let result = [0, 0];

  if (!input || !input.length) {
    return [];
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      result[0] += 1;
    } else {
      result[1] += input[i];
    }
  }
  return result;
}

/* Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 === 1) ||
    (flower1 % 2 === 1 && flower2 % 2 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

/*You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
 */
function twoSort(s) {
  const sorted = s.sort();
  return sorted[0].split("").join("***");
}

/*Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

Example:
Repeater.repeat("a", 5)
should return

"aaaaa"
*/

function repeater(string, n) {
  let str = "";
  while (n > 0) {
    str += string;
    n--;
  }
  return str;
}

/*The wide mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method take one argument animal which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive) return small otherwise return wide.
 */

function mouthSize(animal) {
  // code here
  if (animal.toLowerCase() === "alligator") {
    return "small";
  } else {
    return "wide";
  }
}

/*Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points. If the answer ends with a 0, it should be rounded off without the 0. So instead of 5.50, we should get 5.5.

Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres
 */

function converter(mpg) {
  kmPerLiter = mpg / 2.824810531496;
  return Number(kmPerLiter.toFixed(2));
}

/*You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"

 */

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

/* Create a function that takes a number as an argument and returns a grade based on that number.

Score	Grade
Anything greater than 1 or less than 0.6	"F"
0.9 or greater	"A"
0.8 or greater	"B"
0.7 or greater	"C"
0.6 or greater	"D"
Examples:

grader(0)   should be "F"
grader(1.1) should be "F"
grader(0.9) should be "A"
grader(0.8) should be "B"
grader(0.7) should be "C"
grader(0.6) should be "D"
 */

function grader(score) {
  if (score > 1 || score < 0.6) {
    return "F";
  } else if (score >= 0.9) {
    return "A";
  } else if (score >= 0.8) {
    return "B";
  } else if (score >= 0.7) {
    return "C";
  } else if (score >= 0.6) {
    return "D";
  }
}

/*Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
 */

function addBinary(a, b) {
  const sum = a + b;
  return sum.toString(2);
}

/*Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6

 */

function add(n) {
  return function (m) {
    return m + n;
  };
}

/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

 */

function findOdd(A) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[i] === A[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return A[i];
    }
  }
}

/*The Story:

Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
Task Overview:

You have to write a function that accepts three parameters:

    cap is the amount of people the bus can hold excluding the driver.
    on is the number of people on the bus excluding the driver.
    wait is the number of people waiting to get on to the bus excluding the driver.

If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
Usage Examples:

cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting


 */

function enough(cap, on, wait) {
  if (cap >= on + wait) {
    return 0;
  } else {
    return on + wait - cap;
  }
}

/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)


 */

function findOutlier(integers) {
  const odd = integers.filter((a) => a % 2 !== 0);
  const even = integers.filter((a) => a % 2 === 0);

  if (odd.length === 1) {
    return odd[0];
  } else {
    return even[0];
  }
}

/*Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

Examples:

var sleigh = new Sleigh();
sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)
*/

function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!";
};

/*Personalized greeting

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:
case 	return
name equals owner 	'Hello boss'
otherwise 	'Hello guest'
   */

function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else return "Hello guest";
}

/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

However, the arrays can have varying lengths, not just limited to 4.

 */
const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

/*Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


 */

function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join("");
}

/*Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

 */

function solution(str, ending) {
  return ending === str.substr(str.length - ending.length);
}

/* Kata Task

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

    humanYears >= 1
    humanYears are whole numbers only

Cat Years

    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that

Dog Years

    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that

References

    http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
    http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html

 */

var humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  let result = [];

  if (humanYears === 1) {
    return (result = [humanYears, 15, 15]);
  } else if (humanYears === 2) {
    return (result = [humanYears, 24, 24]);
  } else {
    let catYears = 24 + (humanYears - 2) * 4;
    let dogYears = 24 + (humanYears - 2) * 5;

    return (result = [humanYears, catYears, dogYears]);
  }
};

/*Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
 */

function removeExclamationMarks(s) {
  let str = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "!") {
      str.push("");
    } else {
      str.push(s[i]);
    }
  }
  return str.join("");
}

/*This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a number.

Write a function calculating circumference of a Circle.

Tests round answers to 6 decimal places.
 */

function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

/*As a treat, I'll let you read part of the script from a classic 'I'm Alan Partridge episode:

Lynn: Alan, there’s that teacher chap.
Alan: Michael, if he hits me, will you hit him first?
Michael: No, he’s a customer. I cannot hit customers. I’ve been told. I’ll go and get some stock.
Alan: Yeah, chicken stock.
Phil: Hello Alan.
Alan: Lynn, hand me an apple pie. And remove yourself from the theatre of conflict.
Lynn: What do you mean?
Alan: Go and stand by the yakults. The temperature inside this apple turnover is 1,000 degrees. If I squeeze it, a jet of molten Bramley apple is going to squirt out. Could go your way, could go mine. Either way, one of us is going down.
Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.

Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

X will be either a number or a string. Both are valid.
 */

function apple(x) {
  if (x ** 2 > 1000) {
    return `It's hotter than the sun!!`;
  } else {
    return `Help yourself to a honeycomb Yorkie for the glovebox.`;
  }
}

/*There are five workers : James,John,Robert,Michael and William.They work one by one and on weekends they rest. Order is same as in the description(James works on mondays,John works on tuesdays and so on).You have to create a function 'task' that will take 3 arguments(w, n, c):

    Weekday

    Number of trees that must be sprayed on that day

    Cost of 1 litre liquid that is needed to spray tree,let's say one tree needs 1 litre liquid.

Let cost of all liquid be x

Your function should return string like this : 'It is (weekday) today, (name), you have to work, you must spray (number) trees and you need (x) dollars to buy liquid'

For example:

task('Monday',15,2) -> 'It is Monday today, James, you have to work, you must spray 15 trees and you need 30 dollars to buy liquid'

 */

function task(w, n, c) {
  if (w === "Monday") {
    return `It is ${w} today, James, you have to work, you must spray ${n} trees and you need ${
      n * c
    } dollars to buy liquid`;
  } else if (w === "Tuesday") {
    return `It is ${w} today, John, you have to work, you must spray ${n} trees and you need ${
      n * c
    } dollars to buy liquid`;
  } else if (w === "Wednesday") {
    return `It is ${w} today, Robert, you have to work, you must spray ${n} trees and you need ${
      n * c
    } dollars to buy liquid`;
  } else if (w === "Thursday") {
    return `It is ${w} today, Michael, you have to work, you must spray ${n} trees and you need ${
      n * c
    } dollars to buy liquid`;
  } else {
    return `It is ${w} today, William, you have to work, you must spray ${n} trees and you need ${
      n * c
    } dollars to buy liquid`;
  }
}

/* Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5


 */

function litres(time) {
  return Math.floor(time * 0.5);
}

/* Write a function that returns the total surface area and volume of a box as an array: [area, volume]
 */

function getSize(width, height, depth) {
  let area = height * width * 2 + width * depth * 2 + depth * height * 2;

  const volume = width * height * depth;

  const arr = [area, volume];

  return arr;
}

/*Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
Examples(Inputs-->Output):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0
  */

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects > 1) {
    return 75;
  } else {
    return 0;
  }
}

/* Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

Examples:
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
 */

function iqTest(numbers) {
  numbers = numbers.split(" ").map((el) => {
    return parseInt(el);
  });

  var odd = numbers.filter((el) => {
    return el % 2 === 1;
  });
  var even = numbers.filter((el) => {
    return el % 2 === 0;
  });

  return odd.length < even.length
    ? numbers.indexOf(odd[0]) + 1
    : numbers.indexOf(even[0]) + 1;
}

/*Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples:

sumCubes(2) // 9
// sum of the cubes of 1 and 2 is 1 + 8
 */
function sumCubes(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 3;
  }
  return sum;
}

/*Classy Extensions
Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword. You will be preloaded with the Animal class, so you should only edit the Cat class.
Task
Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'
The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).
 */
class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}

/*This is a beginner friendly kata especially for UFC/MMA fans.

It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

If the winner is George Saint Pierre he will obviously say:

"I am not impressed by your performance."
If the winner is Conor McGregor he will most undoubtedly say:

"I'd like to take this chance to apologize.. To absolutely NOBODY!"
Good Luck!
 */

var quote = function (fighter) {
  if (fighter.toLowerCase() === "conor mcgregor") {
    return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
  } else return "I am not impressed by your performance.";
};

/*You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
 */

function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

/* Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"
 */

function nameShuffler(str) {
  let strArr = str.split(" ");

  return `${strArr[1]} ${strArr[0]}`;
}

/* Create a function that takes a string and an integer (n).

The function should return a string that repeats the input string n number of times.

If anything other than a string is passed in you should return "Not a string"

Example
"Hi", 2 --> "HiHi"
1234, 5 --> "Not a string"
 */

var repeatIt = function (str, n) {
  if (typeof str === "string") {
    return str.repeat(n);
  } else return "Not a string";
};

/* You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

Weekday Month Day, time e.g., Friday May 2, 7pm

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".
 */

function shortenToDate(longDate) {
  return longDate.split(",")[0];
}

/* This is a spin off of my first kata. You are given a list of character sequences as a comma separated string. Write a function which returns another string containing all the character sequences except the first and the last ones, separated by spaces. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.
 */

function array(arr) {
  return arr.split(",").slice(1, -1).join(" ") || null;
}

/*You get any card as an argument. Your task is to return a suit of this card.

Our deck (is preloaded):

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
  */

function defineSuit(card) {
  if (card.includes("♣")) {
    return "clubs";
  } else if (card.includes("♦")) {
    return "diamonds";
  } else if (card.includes("♥")) {
    return "hearts";
  } else return "spades";
}

/* Template Strings
Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '```
Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings
  */

var TempleStrings = function (obj, feature) {
  return `${obj} are ${feature}`;
};

/* Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1') 
 */

function removeUrlAnchor(url) {
  let index = url.indexOf("#");

  if (index === -1) {
    return url;
  } else return url.slice(0, index);
}

/* Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
 */

var greet = function (name) {
  const myStr = name.toLowerCase();
  const newString = myStr[0].toUpperCase() + myStr.slice(1);
  return `Hello ${newString}!`;
};

/* Complete the function caffeineBuzz, which takes a non-zero integer as it's one argument.

If the integer is divisible by 3, return the string "Java".

If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

If the integer is one of the above and is even, add "Script" to the end of the string.

Otherwise, return the string "mocha_missing!"

caffeineBuzz(1)   => "mocha_missing!"
caffeineBuzz(3)   => "Java"
caffeineBuzz(6)   => "JavaScript"
caffeineBuzz(12)  => "CoffeeScript"
 */

function caffeineBuzz(n) {
  if (n % 3 === 0 && n % 4 === 0 && n % 2 === 0) {
    return "CoffeeScript";
  } else if (n % 3 === 0 && n % 2 === 0) {
    return "JavaScript";
  } else if (n % 3 === 0 && n % 4 === 0) {
    return "Coffee";
  } else if (n % 3 === 0) {
    return "Java";
  } else {
    return "mocha_missing!";
  }
}

/* Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
 */

function uefaEuro2016(teams, scores) {
  let teamA = teams[0];
  let teamB = teams[1];
  let scoreA = scores[0];
  let scoreB = scores[1];

  if (scoreA > scoreB) {
    return `At match ${teamA} - ${teamB}, ${teamA} won!`;
  } else if (scoreB > scoreA) {
    return `At match ${teamA} - ${teamB}, ${teamB} won!`;
  } else if (scoreA === scoreB) {
    return `At match ${teamA} - ${teamB}, teams played draw.`;
  }
}

/*You have an award-winning garden and everyday the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die!
 */

function rainAmount(mm) {
  if (mm < 40) {
    return `You need to give your plant ${40 - mm}mm of water`;
  } else {
    return "Your plant has had more than enough water for today!";
  }
}

/* An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

Examples:

pointsPer48(12, 20) // 28.8
pointsPer48(10, 10) // 48 
pointsPer48(5, 17) // 14.1 
pointsPer48(0, 0) // 0
Notes:
All inputs will be either be an integer or float.
Follow your dreams!
 */

function pointsPer48(ppg, mpg) {
  if (mpg === 0) {
    return 0;
  } else if (mpg < 48) {
    let result = ((ppg / mpg) * 48).toFixed(1);
    return Number(result);
  } else {
    return ppg;
  }
}

/* Task
Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

If you forgot how to push an element to array, please refer to lesson 4.
  */

function pickIt(arr) {
  var odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return [odd, even];
}

/*Task
I've written five function, each function receives a parameter: arr(an array), you should code something with arr.

    1. getLength(arr)    should return length of arr
    2. getFirst(arr)     should return the first element of arr
    3. getLast(arr)      should return the last element of arr
    4. pushElement(arr)  should push an element to arr, and then return arr
    5. popElement(arr)   should pop an element from arr, and then return arr
When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.
 */

function getLength(arr) {
  //return length of arr
  return arr.length;
}
function getFirst(arr) {
  //return the first element of arr
  return arr[0];
}
function getLast(arr) {
  //return the last element of arr
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  //push el to arr
  arr.push(el);

  return arr;
}
function popElement(arr) {
  //pop an element from arr
  arr.pop();
  return arr;
}

/* Task
misson 1: I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).

When you have finished the work, click "Run Tests" to see if your code is working properly.

misson 2: After misson 1 finished. you should click "Attempt" to see my three questions, and write the answer in function answer1, answer2,answer3

If everything is right, click "Submit" again to submit your code pass this kata.
 */

var a1 = "A",
  a2 = "a",
  b1 = "B",
  b2 = "b",
  c1 = "C",
  c2 = "c",
  d1 = "D",
  d2 = "d",
  e1 = "E",
  e2 = "e",
  n1 = "N",
  n2 = "n";
function Dad() {
  //select some variable to combine "Dad"
  return d1 + a2 + d2;
}
function Bee() {
  //select some variable to combine "Bee"
  return b1 + e2 + e2;
}
function banana() {
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1() {
  //the answer should be "yes" or "no"
  return "no";
}
function answer2() {
  //the answer should be "yes" or "no"
  return "no";
}
function answer3() {
  //the answer should be "yes" or "no"
  return "yes";
}

/* Task
Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."
 */

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

/* Task
Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".
 */
function trueOrFalse(val) {
  if (val === false) return "false";
  else {
    return "true";
  }
}

/* Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2

Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope

 */

function slope(points) {
  let y = points[3] - points[1];
  let x = points[2] - points[0];
  let result = y / x;
  return isFinite(result) ? `${result}` : "undefined";
}

/* our task is to sum the differences between consecutive pairs in the array in descending order.

For example:

sumOfDifferences([2, 1, 10])

Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).
 */

function sumOfDifferences(arr) {
  if (arr.length > 1) {
    return Math.max(...arr) - Math.min(...arr);
  } else {
    return 0;
  }
}

/* Recreation of Project Euler problem #6

Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.
Example

For example, when n = 10:

    The square of the sum of the numbers is:

    (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

    The sum of the squares of the numbers is:

12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385

Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640

 */

function differenceOfSquares(n) {
  const sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;
  const sumOfNumbers = (n * (n + 1)) / 2;

  const squareOfSumOfNumbers = sumOfNumbers * sumOfNumbers;
  const difference = Math.abs(sumOfSquares - squareOfSumOfNumbers);

  return difference;
}

/* You have to write a function that describe Leo:

def leo(oscar):
  pass

if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
if it was over 88 you should return "Leo got one already!"

 */

function leo(oscar) {
  if (oscar > 88) {
    return "Leo got one already!";
  } else if (oscar === 88) {
    return "Leo finally won the oscar! Leo is happy";
  } else if (oscar === 86) {
    return "Not even for Wolf of wallstreet?!";
  } else {
    return "When will you give Leo an Oscar?";
  }
}

/*Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
 */

function parseF(s) {
  if (Number.isNaN(parseFloat(s))) {
    return null;
  } else {
    return parseFloat(s);
  }
}

/*Combine strings function

Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')

returns:

'James Stevens'

 */

function combineNames(str1, str2) {
  return `${str1} ${str2}`;
}

/* Task:

Write function typeValidation that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.
Examples:

typeValidation(42, "number");   // => true
typeValidation("42", "number"); // => false

 */

function typeValidation(variable, type) {
  if (typeof variable === type) {
    return true;
  } else return false;
}

/*Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
 */

function include(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}

/* You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'.
 */

function updateLight(current) {
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else {
    return "green";
  }
}

/* Here we have a function that help us spam our hearty laughter. But is not working! I need you to find out why...

Expected results:

spam(1);  // hue
spam(6);  // huehuehuehuehuehue
spam(14); // huehuehuehuehuehuehuehuehuehuehuehuehuehue
 */
function spam(number) {
  let str = "";
  for (let i = 0; i < number; i++) {
    str += "hue";
  }
  return str;
}

/*Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"

 */

class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

/* We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]

Note: The parameter is optional. So you have to give it a default value.

 */
const arr = (N) => {
  let result = [];
  if (!N) {
    return [];
  } else {
    result = [...Array(N).keys()];
    return result;
  }
};

/* Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

    I love you
    a little
    a lot
    passionately
    madly
    not at all

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

 */

function howMuchILoveYou(nbPetals) {
  if (nbPetals % 6 === 1) {
    return "I love you";
  } else if (nbPetals % 6 === 2) {
    return "a little";
  } else if (nbPetals % 6 === 3) {
    return "a lot";
  } else if (nbPetals % 6 === 4) {
    return "passionately";
  } else if (nbPetals % 6 === 5) {
    return "madly";
  } else {
    return "not at all";
  }
}

/* Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
Example

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note

In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

 */

function countSmileys(arr) {
  const validSmileys = {
    ":)": true,
    ";)": true,
    ":D": true,
    ";D": true,
    ":-D": true,
    ":~D": true,
    ":-)": true,
    ":~)": true,
    ";~D": true,
    ";~)": true,
    ";-D": true,
    ";-)": true,
  };
  return arr.filter((chars) => validSmileys[chars]).length;
}

function removeEveryOther(arr) {
  return arr.filter((_, i) => i % 2 === 0);
}

/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

   */

var moveZeros = function (arr) {
  let zero = [];
  let nonzero = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zero.push(arr[i]);
    } else {
      nonzero.push(arr[i]);
    }
  }
  result = nonzero.concat(zero);
  return result;
};

/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

 */
function sumMix(x) {
  return x.map((a) => parseInt(a)).reduce((a, b) => a + b);
}

/*Grasshopper Order of Operations

You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.

    */

function orderOperations() {
  return (2 + 2) * ((2 + 2) * 2);
}

/*Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

   */

var number = function (array) {
  return array.map((el, i) => {
    return `${i + 1}: ${el}`;
  });
};

/* Arrow style Functions
Come here to practice the Arrow style functions Not much else to say good luck!
Details

You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.
Examples

These are example of how to convert a number to an ascii Character:
Javascript => String.fromCharCode(97) // a
C# => Tools.FromCharCode(97) // a

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

   */

var ArrowFunc = function (arr) {
  return arr.map((x) => String.fromCharCode(x)).join(""); //Complete this function
};

/* You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

   */

function smallEnough(a, limit) {
  return a.every((x) => x <= limit);
}

/* Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

   */

function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest
  return array.sort((a, b) => a.length - b.length);
}

/* Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

 */

function bump(x) {
  if (x.length > 15) {
    return "Car Dead";
  } else {
    return "Woohoo!";
  }
}

/*  Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.
Examples

[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0


 */

function sumEvenNumbers(input) {
  let result = input.filter((x) => x % 2 === 0);

  return result.reduce((a, b) => a + b);
}

/* You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

    true if at least one Ruby developer has signed up; or
    false if there will be no Ruby developers.

For example, given the following input array:

var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

your function should return true.
    */

function isRubyComing(list) {
  return list.some((v) => v.language === "Ruby");
}

/*Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

kata = 5
Petes kata = 10
life = 0
eating = 1

The Misery Score is the total points gained from the array. Once you have the total, return as follows:

< 40 = 'Super happy!'
< 70 >= 40 = 'Happy!'
< 100 >= 70 = 'Sad!'
> 100 = 'Miserable!'


   */

function paul(x) {
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "kata") {
      count += 5;
    } else if (x[i] === "Petes kata") {
      count += 10;
    } else if (x[i] === "life") {
      count += 0;
    } else if (x[i] === "eating") {
      count += 1;
    }
  }

  if (count < 40) {
    return "Super happy!";
  } else if (count >= 40 && count < 70) {
    return "Happy!";
  } else if (count >= 70 && count < 100) {
    return "Sad!";
  } else return "Miserable!";
}

/* Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help.

function sum(array) {
  // Use array.reduce() to find and return the
  // sum of the values in array.
}

For example:

var someNumbers = [1,2,3,4,5,6,7,8,9,10];

sum(someNumbers); // should return 55

 */

function sum(array) {
  return array.reduce((a, b) => a + b);
}

/* Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.

function double(array) {
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
}

For example:

var someNumbers = [1,2,10,57];

double(someNumbers); // should return [2,4,20,114]


 */

function double(array) {
  return array.map((x) => x * 2);
}

/* Your task is to write function factorial.
 */

function factorial(n) {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

/* SpeedCode #2 - Array Madness
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

*/

function arrayMadness(a, b) {
  let sumOfSquares = a.map((x) => x * x).reduce((x, y) => x + y);
  let sumOfCubes = b.map((x) => x * x * x).reduce((x, y) => x + y);

  if (sumOfSquares > sumOfCubes) {
    return true;
  } else {
    return false;
  }
}

/*
Write a function that rearranges an integer into its largest possible value.

Example (Input --> Output)

123456 --> 654321
105 --> 510
12 --> 21
If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.
*/

function superSize(num) {
  return Number(
    String(num)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

/* What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.

*/

function addLength(str) {
  return str.split(" ").map((x) => `${x} ${x.length}`);
}

/*Be Concise III - Sum Squares
You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:

sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
sumSquares([7,3,9,6,5]) === 200
sumSquares([11,13,15,18,2]) === 843
Shorten the code such that it meets the requirements.

A few hints:

Try researching about built-in Array methods; they may help shorten your code a lot
Good luck!
 */

function sumSquares(array) {
  return array.map((x, y) => x ** 2).reduce((acumm, iter) => acumm + iter);
}

/*It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string.

 */

function joinStrings(string1, string2) {
  return `${string1} ${string2}`;
}

/* Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

    If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

    If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

    If the total of both even and odd numbers are identical return: "Even and Odd are the same"


 */

function evenOrOdd(str) {
  let strArr = str.split("");
  let oddArr = strArr.filter((a) => a % 2 !== 0);
  let evenArr = strArr.filter((a) => a % 2 === 0);

  let oddTotal = oddArr.reduce((accum, val) => {
    return accum + Number(val);
  }, 0);

  let evenTotal = evenArr.reduce((accum, val) => {
    return accum + Number(val);
  }, 0);

  if (evenTotal === oddTotal) {
    return "Even and Odd are the same";
  } else if (oddTotal > evenTotal) {
    return "Odd is greater than Even";
  } else {
    return "Even is greater than Odd";
  }
}

/* Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')

This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

 */

function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

/* Write a function that calculates the original product price, without VAT.
Example

If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

    VAT is always 15% for the purposes of this Kata.
    Round the result to 2 decimal places.
    If null value given then return -1


 */

function excludingVatPrice(price) {
  if (price === null) {
    return -1;
  } else {
    let num = price / 1.15;
    return Number(num.toFixed(2));
  }
}

/* The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down.

 */

function dutyFree(normPrice, discount, hol) {
  return Math.floor((hol / normPrice / discount) * 100);
}

/* Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

 */
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

/*Write a function that appends the items from sequence 2 onto sequence 1, returning the newly formed sequence. Your function should also be able to handle nested sequences.

All inputs will be arrays/nested arrays.

For example:

['a','b','c'], [1,2,3]     --> ['a','b','c',1,2,3]
[['x','x'],'B'], ['c','D'] --> [['x','x'],'B','c','D']


 */

function appendArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

/*  The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.
 */

function broken(x) {
  return x
    .split("")
    .map((x) => (x === "0" ? "1" : "0"))
    .join("");
}

/* Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0

 */

function min(arr, toReturn) {
  if (toReturn === "value") {
    return Math.min(...arr);
  } else {
    return arr.indexOf(Math.min(...arr));
  }
}

/*Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b

 * 
*/

function shorter_reverse_longer(a, b) {
  if (a.length > b.length) {
    return b + a.split("").reverse().join("") + b;
  } else if (a.length < b.length) {
    return a + b.split("").reverse().join("") + a;
  }

  return b + a.split("").reverse().join("") + b;
}

/*
An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.
Example

text before = "abc"
character   = "z"
text after  = "zzz"


 */

function contamination(text, char) {
  return char.repeat(text.length);
}

/* 
Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.

Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.

Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.

In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".

Otherwise return, False/false (according to the language n use).s
 */

function playerRankUp(points) {
  if (points >= 100) {
    return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
  } else return false;
}

/* 
Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.

 */

function evenLast(numbers) {
  let evens = [];
  let sum = 0;

  if (numbers.length === 0) {
    return 0;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
      evens.push(numbers[i]);
    }
  }

  sum = evens.reduce((a, b) => a + b);
  return sum * numbers[numbers.length - 1];
}

/*
Task

Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.

And then sort array in descending order.

Finally, use the separator ">" to connect the elements into a string.

Don't complain about the situation like 1>1 is not reasonable, it is just a separator.

Some example:

bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"

 */

function bigToSmall(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result = result.concat(arr[i]);
  }
  return result.sort((a, b) => b - a).join(">");
}

/*
 Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

If arr is not an array, function should return:

"It's a fake array"

If arr contains elements 5 and 13, function should return:

"It's a black array"

If arr contains neither 5 nor 13, function should return:

"It's a white array"

Examples

blackAndWhite(5,13) should return "It's a fake array"
blackAndWhite([5,13]) should return "It's a black array"
blackAndWhite([5,12]) should return "It's a white array" 

 */

function blackAndWhite(arr) {
  if (Array.isArray(arr) === false) {
    return `It's a fake array`;
  }
  if (arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1) {
    return `It's a black array`;
  } else {
    return `It's a white array`;
  }
}

/* Coding in function maxMin. function accept 2 parameter arr1 and arr2. They are two number array and have the same number of elements.

First, calculate the difference of the same index of the arr1 and arr2. Like this:

[1,3,5]
 | | |   --->  8, 5, 2
[9,8,7]

Please note that the difference is positive. Such as the above 1 and 9, the difference should be 8, not -8. I think abs() can help you get the correct result ;-)

Then find the maximum and minimum values of them, and return the results in the form of an array. Like this:

  maxvalue , minvalue
[    8     ,    2     ]

 */

function maxMin(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(Math.abs(arr1[i] - arr2[i]));
  }
  let max = Math.max(...result);
  let min = Math.min(...result);
  let resultArr = [];
  resultArr[0] = max;
  resultArr[1] = min;

  return resultArr;
}

/* 
You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).

 */

function billboard(name, price = 30) {
  let result = 0;
  for (let i = 0; i < name.length; i++) {
    result += price;
  }
  return result;
}

/* 
Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

Please return the gap between the first position of c and the last position of c.

If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.

for example:

firstToLast("ababc","a") should return 2(2-0)
firstToLast("ababc","c") should return 0(4-4)
firstToLast("ababc","d") should return -1

 */

function firstToLast(str, c) {
  if (str.indexOf(c) === -1) {
    return -1;
  } else {
    return str.lastIndexOf(c) - str.indexOf(c);
  }
}

/*
Coding in function fiveLine, function accept 1 parameter:s. s is a string.

Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

Note2: Using a string template can make your job easier.

Example:

fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
a
aa
aaa
aaaa
aaaaa       <---The effect when you console.log it
fiveLine("  xy ") 
should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
xy
xyxy
xyxyxy
xyxyxyxy
xyxyxyxyxy  <---The effect when you console.log it

 */

function fiveLine(s) {
  s = s.trim();
  return `${s}\n${s}${s}\n${s}${s}${s}\n${s}${s}${s}${s}\n${s}${s}${s}${s}${s}`;
}

/* 
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

+---------------+-------------+
|  numbers n    | price(cents)|
+---------------+-------------+
|n<5            |    100      |
+---------------+-------------+
|n>=5 and n<10  |     95      |
+---------------+-------------+
|n>=10          |     90      |
+---------------+-------------+

You can use if..else or ternary operator to complete it.
 */

function saleHotdogs(n) {
  if (n < 5) {
    return 100 * n;
  } else if (n >= 5 && n < 10) {
    return 95 * n;
  } else return 90 * n;
}

/* 
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

 */

("use strict");

function flattenAndSort(array) {
  let flattened = [].concat(...array);

  return flattened.sort((a, b) => a - b);
}

/* 
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

 */

function bmi(weight, height) {
  let bmi = weight / height ** 2;

  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

/* 
Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

More information here
Examples

1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3

 */

function getRealFloor(n) {
  if (n < 0) {
    return n;
  } else if (n <= 2) {
    return 0;
  } else if (n <= 12) {
    return n - 1;
  } else {
    return n - 2;
  }
}

/* 
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:

[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]


 */

function multipleOfIndex(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % i === 0) {
      result.push(array[i]);
    }
  }
  return result;
}

/* 
Just a simple sorting usage. Create a function that returns the elements of the input-array / list in a sorted manner.

 */

sortme = function (names) {
  return names.sort();
};

/* 
Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

If n == 0 return an empty sequence []
Examples

var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];

 */

function first(arr, n = 1) {
  const result = [];

  if (n > arr.length) {
    n = arr.length;
  }
  for (let i = 0; i < n; i++) {
    result.push(arr[i]);
  }
  return result;
}

/* 
*** No Loops Allowed ***

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

 */

function check(a, x) {
  return a.includes(x);
}

/* 
Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truth-ish, func1 should be called, otherwise call the func2.
 */

function _if(bool, func1, func2) {
  if (bool) {
    func1();
  } else {
    func2();
  }
}

/* 
Messi goals function

Messi is a soccer player with goals in three leagues:

    LaLiga
    Copa del Rey
    Champions

Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
 */

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

/* 
It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.

It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.

Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...

Go show some truth who's boss!
 */

function ifChuckSaysSo() {
  return 3 > 4;
}

/* 
Write a function that always returns 5
Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

*/

function unusualFive() {
  let five = "fiver";
  return five.length;
}

/* 
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).
Examples

n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
 */

function powersOfTwo(n) {
  const result = [];
  for (let i = 0; i <= n; i++) {
    result.push(2 ** i);
  }
  return result;
}

/*
Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.
 */

function breakChocolate(n, m) {
  if (n === 0 || m === 0) {
    return 0;
  }
  return n * m - 1;
}

/* 
Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
 */

function calculateYears(principal, interest, tax, desired) {
  if (principal === desired) {
    return 0;
  }
  let numYears = 0;
  while (principal < desired) {
    principal = principal + (principal * interest - principal * interest * tax);
    numYears++;
  }
  return numYears;
}

/*Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1]
*/

function removeSmallest(numbers) {
  if (numbers.length <= 1) {
    return [];
  }

  let indexOfSmallest = numbers.indexOf(Math.min(...numbers));

  return [
    ...numbers.slice(0, indexOfSmallest),
    ...numbers.slice(indexOfSmallest + 1),
  ];
}

/* 
Implement a function that returns the minimal and the maximal value of a list (in this order).
 */

function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  const sArray = s.split(" ");
  const sortedSArray = sArray.sort((a, b) => a.length - b.length);
  return sortedSArray[0].length;
}

/* 
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
Examples

arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 10];
mergeArrays(arr1, arr2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr3 = [1, 3, 5, 7, 9];
arr4 = [10, 8, 6, 4, 2];
mergeArrays(arr3, arr4);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr5 = [1, 3, 5, 7, 9, 11, 12];
arr6 = [1, 2, 3, 4, 5, 10, 12];
mergeArrays(arr5, arr6);  // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

*/

function mergeArrays(arr1, arr2) {
  let result = [];

  if (arr1.length === 0 && arr2.length === 0) {
    return [];
  } else {
    result = arr1.concat(arr2).sort((a, b) => a - b);
    result = [...new Set(result)];
  }
  return result;
}

/* A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.
*/

function checkTheBucket(bucket) {
  if (bucket.indexOf("gold") !== -1) {
    return true;
  } else {
    return false;
  }
}

/* 
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

 */

function distinct(a) {
  return [...new Set(a)];
}

/* 
Complete the function that receives as input a string, and produces outputs according to the following table:
Input 	Output
"Jabroni" 	"Patron Tequila"
"School Counselor" 	"Anything with Alcohol"
"Programmer" 	"Hipster Craft Beer"
"Bike Gang Member" 	"Moonshine"
"Politician" 	"Your tax dollars"
"Rapper" 	"Cristal"
anything else 	"Beer"

Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

 */

function getDrinkByProfession(param) {
  if (param.toLowerCase() === "jabroni") {
    return "Patron Tequila";
  } else if (param.toLowerCase() === "school counselor") {
    return "Anything with Alcohol";
  } else if (param.toLowerCase() === "programmer") {
    return "Hipster Craft Beer";
  } else if (param.toLowerCase() === "bike gang member") {
    return "Moonshine";
  } else if (param.toLowerCase() === "politician") {
    return "Your tax dollars";
  } else if (param.toLowerCase() === "rapper") {
    return "Cristal";
  } else {
    return "Beer";
  }
}

/*
Oh no!

Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.

 */

function toNumberArray(stringarray) {
  return stringarray.map(Number);
}

/*
This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!
*/

Array.prototype.square = function () {
  return this.map((x) => x * x);
};

Array.prototype.cube = function () {
  return this.map((x) => x * x * x);
};

Array.prototype.average = function () {
  return this.reduce((a, b) => a + b, 0) / this.length;
};

Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b, 0);
};

Array.prototype.even = function () {
  return this.filter((a) => a % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((a) => a % 2 === 1);
};

/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.
Examples:

spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
spinWords("This is a test") => "This is a test" 
spinWords("This is another test") => "This is rehtona test"
*/

function spinWords(string) {
  let result = [];
  let strArr = string.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5) {
      let reverseStr = strArr[i];
      reverseStr = reverseStr.split("").reverse().join("");
      result.push(reverseStr);
    } else {
      result.push(strArr[i]);
    }
  }
  return result.join(" ");
}

/*
In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]

More examples can be found in the test cases. 
*/

function solve(arr) {
  let answer = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (!answer.includes(arr[i])) {
      answer.unshift(arr[i]);
    }
  }
  return answer;
}

/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

*/

String.prototype.toJadenCase = function () {
  const returnString = [];
  const words = this.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    returnString.push(words[i][0].toUpperCase() + words[i].slice(1));
  }
  return returnString.join(" ");
};

/*
Given two arrays of strings, return the number of times each string of the second array appears in the first array.
Example

array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']

How many times do the elements in array2 appear in array1?

    'abc' appears twice in the first array (2)
    'cde' appears only once (1)
    'uap' does not appear in the first array (0)

Therefore, solve(array1, array2) = [2, 1, 0]
*/

function solve(a, b) {
  return b.map((x) => a.filter((n) => n === x).length);
}

/*John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Could you make a program that
    makes this string uppercase
    gives it sorted in alphabetical order by last name.

When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

It can happen that in two distinct families with the same family name two people have the same first name too.
*/

function meeting(s) {
  return s
    .toUpperCase()
    .split(";")
    .map((el) => `(${el.split(":").reverse().join(", ")})`)
    .sort()
    .join("");
}
