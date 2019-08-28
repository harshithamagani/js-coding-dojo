//Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function printLowValReturnHighValArr(arr){
    var max= arr[0];
    var min= arr[0];
    for(var i=0;i<arr.length;i++){
      if( arr[i] < min){
        min =  arr[i];
      }
      else if(arr[i] > max){
        max =arr[i];
      }
    }
    console.log(min);
    return max;
}

console.log(printLowValReturnHighValArr([7,9,3,7,1,4]))