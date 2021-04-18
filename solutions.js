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

function checkForFactor (base, factor) {
  // code here
  if(base%factor === 0){
    return true
  }
  return false
}

/*Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Graph

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
 */


function squareArea(A){
  const radius = (2*A)/Math.PI
  const area = radius*radius
  return Number(area.toFixed(2))
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
    return health < damage ? 0 : health-damage
  }


  /*Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.
  */

  function spEng(sentence){
    //write your code here
      if (sentence.toLowerCase().indexOf("english") === -1){
        return false
      }
      else{
        return true
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
      return 10*Math.log10(intensity/Math.pow(10,-12))
     }


    /*Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
     */

     function smash (words) {
      "use strict";
      return words.join(" ")
      
  };

/* Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
 */

  function isTriangle(a,b,c)
{
   if(a<=0 || b <= 0 || c <=0){
     return false
   }
  else if (a+b>c && b+c > a && a+c>b){
    return true
  }
  else
    return false
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

function openOrSenior(data){
  const result = []
  for(let i = 0; i<data.length; i++){
    if(data[i][0] >= 55 && data[i][1]>7){
      result.push("Senior")
    }
    else{
      result.push("Open")
    }
  }
  return result
}


/*Code as fast as you can! You need to double the integer and return it.
*/

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return 2*i;
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

function copyList(l){
  const result = l.map(x=>x)
  return result
}

/*Given a non-negative integer, return an array / a list of the individual digits in order.

Examples:

123 => [1,2,3]

1 => [1]

8675309 => [8,6,7,5,3,0,9]
 */


function digitize(n) {
  return n.toString().split('').map(Number);
}


/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

function countPositivesSumNegatives(input) {

  let result = [0,0]

  if(!input || !input.length){
    return[]
  }

  for(let i = 0; i < input.length; i++){
    if(input[i]> 0 ){
      result[0] += 1
    }
    else{
      result[1] += input[i]
    }
}
  return result
  
}


/* Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

function lovefunc(flower1, flower2){
  if(flower1 % 2 === 0 && flower2 % 2 === 1 || flower1 % 2 === 1 && flower2 %2 === 0){
    return true
  }else{
    return false
  }
}


/*You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
 */
function twoSort(s) {
  const sorted = s.sort()
  return sorted[0].split('').join('***')

}

/*Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

Example:
Repeater.repeat("a", 5)
should return

"aaaaa"
*/

function repeater(string, n){
  let str = ""
 while(n>0){
   str+=string
   n--
 }
  return str
}


/*The wide mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method take one argument animal which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive) return small otherwise return wide.
 */

function mouthSize(animal) {
  // code here
  if(animal.toLowerCase() === "alligator"){
    return "small"
  }
  else{
    return "wide"
  }
}



/*Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points. If the answer ends with a 0, it should be rounded off without the 0. So instead of 5.50, we should get 5.5.

Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres
 */


function converter (mpg) {
  kmPerLiter = mpg/2.824810531496
  return Number(kmPerLiter.toFixed(2))
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
  if(names.length === 0){
    return 'no one likes this'
  }
  else if(names.length === 1){
    return `${names[0]} likes this`
  }
  else if(names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  }
  else if(names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  else{
    return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
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
  if (score > 1 || score<0.6){
    return "F"
  }
  else if(score >= 0.9){
    return "A"
  }
  else if(score >= 0.8){
    return "B"
  }
  else if(score >= 0.7){
    return "C"
  }
  else if(score >= 0.6){
    return "D"
  }
}

/*Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
 */

function addBinary(a,b) {
  const sum = a+b
  return sum.toString(2)

}


/*Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6

 */


function add(n) {
  return function(m){
    return m+n
  }
}



/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

 */


function findOdd(A) {
  let count = 0
  for(let i = 0; i < A.length; i++){
    for(let j = 0; j < A.length; j++){
      if(A[i] === A[j]){
        count++
      }
    }
    if(count % 2 !== 0){
      return A[i]
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
  if(cap >=on+wait){
    return 0
  }else{
    return (on+wait)-cap
  }
}

/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)


 */


function findOutlier(integers){
  const odd = integers.filter( (a) => a % 2 !== 0)
  const even = integers.filter( (a) => a % 2 === 0)
  
  if(odd.length === 1){
    return odd[0]
  }
  else{
    return even[0]
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

Sleigh.prototype.authenticate = function(name, password) {
   return (name === 'Santa Claus' && password === "Ho Ho Ho!")
  
  }


  /*Personalized greeting

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:
case 	return
name equals owner 	'Hello boss'
otherwise 	'Hello guest'
   */

  function greet (name, owner) {
    if(name === owner){
      return 'Hello boss'
    }else return 'Hello guest'
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
  const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
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
  return [...new Set(s1+s2)].sort().join("")
}


/*Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

 */


function solution(str, ending){
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

var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  let result = []
  
  if(humanYears === 1){
    return result = [humanYears,15,15]
  }
  else if (humanYears === 2){
    return result = [humanYears,24,24]
  }
  else{
    let catYears = 24 + ((humanYears - 2) * 4)
    let dogYears = 24 +((humanYears - 2) * 5)

    return result =[humanYears, catYears, dogYears]
  }
  
}


/*Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
 */

function removeExclamationMarks(s) {
  let str = []
  for(let i=0 ; i<s.length;i++){
    if (s[i] === "!"){
      str.push("")
    }
    else{
       str.push(s[i])
    }
  }
  return str.join("")
}



/*This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a number.

Write a function calculating circumference of a Circle.

Tests round answers to 6 decimal places.
 */

function circleCircumference(circle) {
  return 2*Math.PI*circle.radius
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


 function apple(x){
  if(x**2 > 1000){
    return `It's hotter than the sun!!`
  }
  else{
    return `Help yourself to a honeycomb Yorkie for the glovebox.`
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
  if(w === "Monday"){
    return `It is ${w} today, James, you have to work, you must spray ${n} trees and you need ${n*c} dollars to buy liquid`
  }
  else if (w === "Tuesday"){
        return `It is ${w} today, John, you have to work, you must spray ${n} trees and you need ${n*c} dollars to buy liquid`
  }
  else if (w === "Wednesday"){
        return `It is ${w} today, Robert, you have to work, you must spray ${n} trees and you need ${n*c} dollars to buy liquid`
  }
  else if (w === "Thursday"){
        return `It is ${w} today, Michael, you have to work, you must spray ${n} trees and you need ${n*c} dollars to buy liquid`
  }
  else{
        return `It is ${w} today, William, you have to work, you must spray ${n} trees and you need ${n*c} dollars to buy liquid`
  }
}