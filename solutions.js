/*Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
*/

function adjacentElementsProduct(array) {

    const arr = array
    let x = 0,
        y=0,  
        p = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < arr.length; i++) {
      x = arr[i];
      y = arr[i + 1];
      if (x * y > p) {
        p = x * y;
      };
    };
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
    }
    else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
          isAsc = false;
          break
        }
        else {
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
    if(p1 === p2){
      return "Draw!"
    }
    else if(p1=== "scissors" && p2 === "paper"){
      return "Player 1 won!"
    }
    else if(p1==="scissors" && p2 === "rock"){
      return "Player 2 won!"
    }
    else if (p1==="rock" && p2 === "scissors"){
      return "Player 1 won!"
    }
    else if (p1==="rock" && p2 === "paper"){
      return "Player 2 won!"
    }
    else if (p1==="paper" && p2==="rock"){
      return "Player 1 won!"
    }
    else if (p1==="paper" && p2=== "scissors"){
      return "Player 2 won!"
    }
  };


/*
Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers.
*/

  function remainder(a, b){
    // Divide the larger argument by the smaller argument and return the remainder
    if(a>b){
      return a%b
    }
    else{
      return b%a
    }
  }


  /*Return the type of the sum of the two arguments
  */
  function typeOfSum(a, b) {
    let sum = a+b
    return typeof sum
  } 


  /*For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

Note: Make sure you return the correct message with correct spaces and punctuation.
   */

function cookie(x){
    // ...
    if(typeof x === "string"){
      return `Who ate the last cookie? It was Zach!`
    }
    else if(typeof x==="number"){
      return `Who ate the last cookie? It was Monica!`
    }
    else return `Who ate the last cookie? It was the dog!`
  }


  /*In this kata you will create a function that takes in a list and returns a list with the reverse order.
 */

  function reverseList(list) {
    return list.reverse()
  }


  /**I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.
   * 
   */

   var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
   function equal1(){
     var a=v1   
     var b=v1   
     return a+b;
   }
   //Please refer to the example above to complete the following functions
   function equal2(){
     var a= v3  //set number value to a
     var b= v1  //set number value to b
     return a-b;
   }
   function equal3(){
     var a= v5   //set number value to a
     var b= v1  //set number value to b
     return a*b;
   }
   function equal4(){
     var a= v4   //set number value to a
     var b= v5  //set number value to b
     return a/b;
   }
   function equal5(){
     var a= v6  //set number value to a
     var b= v3  //set number value to b
     return a%b;
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
 
    if(num === 1){
      return "Sunday"
    }
    else if(num === 2){
      return "Monday"
    }
    else if(num === 3){
      return "Tuesday"
    }
    else if (num === 4){
      return "Wednesday"
    }
    else if (num === 5){
      return "Thursday"
    }
    else if (num === 6){
      return "Friday"
    }
    else if (num === 7){
      return "Saturday"
    }
    else{
      return "Wrong, please enter a number between 1 and 7"
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

var cubeChecker = function(volume, side){
    return (volume === (side * side * side) && (volume > 0)) ? true : false;
   };


  /**Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */ 

function arrayDiff(a, b) {
    return a.filter(val => !b.includes(val))
}


/**Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

In Racket, the function is called palindrome?

(palindrome? "nope") ; returns #f
(palindrome? "Yay")  ; returns #t
 */

function isPalindrome(x) {
    return x.toLowerCase() === x.split('').reverse().join('').toLowerCase()
    
  }


  /**You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
 */

function otherAngle(a, b) {
    return 180-a-b;
}


/**Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

-If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".

-If he doesn't get 10 hoops, return the string "Keep at it until you get it".
 */

function hoopCount (n) {
    if (n >= 10) {
      return  "Great, now move on to tricks"
    }   
    else return "Keep at it until you get it"
 }


/**In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
 */

 function well(x){
    goodCount = 0
  
    for (let i=0; i<x.length; i++){
      if(x[i] === "good"){
        goodCount++
      }
    }
    if(goodCount === 0){
      return "Fail!"
    }
    else if(goodCount <=2){
      return "Publish!"
    }
    else return "I smell a series!"
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
    let rate = rating.toLowerCase()
    if(rate === "terrible"){
      return 0
    }
    else if(rate === "poor"){
      return Math.ceil(amount * 0.05)
    }
    else if (rate === "good") {
      return Math.ceil(amount * 0.1)
    }
    else if(rate === "great"){
      return Math.ceil(amount * 0.15)
    }
      else if (rate === "excellent"){
      return Math.ceil(amount * 0.2)
    }
     else return "Rating not recognised"
   
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


function SeriesSum(n)
{
    let result = 0;
    let x = 1;
    for (let i = 0; i < n; i += 1) {
        if (i === 0) {
            result = 1;
        } else {
            x += 3;
            result = result + (1 / x);
        }
    }
        return result.toFixed(2);
}


/**Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length. */

function tripleTrouble(one, two, three){
 
    let result = ""
    one = one.split("")
    two = two.split("")
    three = three.split("")
    for(let i = 0; i< one.length; i++){
      result = result + one[i]+two[i]+three[i]
    }
  return result
  }

  /**Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones. */

function noBoringZeros(n) {
    // your code
    let result;
    while(n%10===0 && n!== 0){
      n = n/10
    }
    return n
  }


/**Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
 */

  function firstNonConsecutive (arr) {
    for (let i=1; i < arr.length; i++){
      if(arr[i-1]+1 !== arr[i]){
        return arr[i]
      }
    }
      return null
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
        let countX = 0
        let countO = 0
       
        for(let i=0; i<str.length;i++){
           if(str[i].toLowerCase() === "x"){
             countX++
           }
          else if(str[i].toLowerCase() === "o"){
            countO++
          }
       }
            return countX === countO
       }

       /**Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
 */


       var capitals = function (word) {

        let arr = []
        for(let i = 0; i<word.length; i++){
          if(word[i] === word[i].toUpperCase()){
            arr.push(i)
          }
        }
        return arr
      };


/**An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
 */

      function isIsogram(str){
        str = str.toLowerCase()
        for(let i=0; i<str.length; i++){
          for(let j = i+1; j<str.length; j++){
            if(str[i] === str[j]){
              return false
            }
          }
        }
        return true
      }
      

/**JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
 */

function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    return numbersArray.filter((num)=> num%2 === 0)
  }


  /*Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
   */

  function uefaEuro2016(teams, scores){
    if(scores[0] > scores[1]){
      return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    }
     else if(scores[1]>scores[0]){
       return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
     }
     else return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
   
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
    if(old<14){
      return "drink toddy"
    }
    else if(old<18){
      return "drink coke"
    }
    else if(old<21)
    {
      return "drink beer"
    }
    else{
      return "drink whisky"
    }
  };


  /*Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

For Example:

  usdcny(15) // => '101.25 Chinese Yuan'
  usdcny(465) // => '3138.75 Chinese Yuan'
The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers shold be rounded to the nearest hundredth (e.g. 21.00 NOT 21.0 or 21) (HINT: google toFixed)
   */

function usdcny(usd) {
    let result = usd * 6.75
    return `${result.toFixed(2)} Chinese Yuan`
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
    return (2*radius**2) *(bottleLength - rimLength)
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

  function derive(coefficient,exponent) {
    let result = coefficient * exponent
    let exp = exponent - 1
    
    return `${result}x^${exp}`
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
    if(name==="Zach"){
      return 18
    }
    else{
      return 0
    }
  }


/*Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.
*/

  function findLongest(str){ 
  
    let spl = str.split(" ");
    let longest = 0
    
    for (let i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length
      }
      }
      return longest
  }

/*Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
 */

  function between(a, b) {
    const arr=[]
     for (let i=a; i<=b; i++){
       arr.push(i) 
     }
     return arr
   }
   

   /*Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
    */

function divisors(integer) {
  
    let arr = [];
    for (var i=2;i<integer;i++){
     if (integer % i === 0){
      arr.push(i);
           }
    } if (arr.length === 0) {
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
var isAnagram = function(test, original) {
  
    const a = test.toLowerCase().split("").sort().join("")
    const b = original.toLowerCase().split("").sort().join("")
    
    if(b===a ){
      return true
    }
    else{return false}
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
  return this.name = `${first} ${last}`
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

function getSum( a,b )
{
   let sum = 0
   if(a===b){
     return a
   }
   else if(a<b){
    for(let i = a; i<=b; i++){
      sum+=i
    }
  }
    else if (a>b){
      for(let i=b ; i<=a; i++){
        sum+=i
      }
    }
  return sum
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


var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let arr=[];
    for(let i=0;i<=count;i++) {
      arr.push(i)
    };
    let b=arr.reduce((total,next)=>total+next,0)
    let a=arr.join('+');
    
    if(count<0) return `${count}<0`;
    if(count==0) return `${count}=0`;
    
    return `${a} = ${b}`
  };

  return SequenceSum;

})();


/**
 * Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
 */

 function angle(n) {
  return (n-2)*180
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
  let rna = ""
  for(let i = 0; i<dna.length; i++){
    if(dna[i] === "T"){
      rna += "U"
    }
    else{
    rna += dna[i]
    }
  }
  return rna
}

/*Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA" 
 */

function DNAStrand(dna){
  //your code here
  let result = ""
  for(let i=0; i<dna.length;i++){
    if(dna[i] === "A"){
      result+= "T"
    }
    else if (dna[i]=== "T"){
      result+="A"
    }
    else if(dna[i]==="C"){
      result+= "G"
    }
    else if(dna[i]==="G"){
      result+="C"
    }
  }
  return result
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
  let q=line.toString().split('').reverse().join('');
  return q==line;
}





