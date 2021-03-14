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


  