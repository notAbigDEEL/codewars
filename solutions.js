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
