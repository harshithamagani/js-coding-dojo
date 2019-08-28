//Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function b(arr){
  var max=0;
  var max2=0;
  if(arr.length < 2){
    return null;
  }
  if(arr[0] > arr[1]){
    max = arr[0];
    max2 = arr[1];
    //console.log(max,max2);
  }
  else if(arr[0] < arr[1]){
    max = arr[1];
    max2 = arr[0];
    //console.log(max,max2);
  }
  for(var i=2; i< arr.length ;i++){
    if(arr[i] >= max){
      max = arr[i];
    }
    else{
      max2 = max;
    }
  } 
  
  return max2;
}

console.log(b([3]));
console.log(b([3,5]));
console.log(b([3,5,6,1,2,8]));