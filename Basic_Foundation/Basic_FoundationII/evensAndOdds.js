//Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function evensAndOdds(arr){
    for(var i=0;i<arr.length-2;i++){
      if(arr[i]%2!==0 && arr[i+1]%2!==0 && arr[i+2]%2!==0){
        if(i+1 < arr.length && i+2 < arr.length ){
        console.log("That's odd!",arr[i]);
          }
        }
      else if(arr[i]%2===0 && arr[i+1]%2===0 && arr[i+2]%2===0){
        console.log("Even more so!",arr[i]);
      }
    }
  }

  evensAndOdds([1,1,1,2,2,2,3,3,3]);
  evensAndOdds([1,4,0,2,2,2,3,7,9]);
