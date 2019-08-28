//Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].


function doubleTrouble(arr){
    var len = arr.length*2;
      for(var i=arr.length; i<len ; i++){
          arr.push('null')
      }
  console.log(arr);
  for(var j=arr.length-1; j>0 ; j--){
    console.log("hi");
    arr[j] = arr[Math.floor(j/2)];
  }
  console.log(arr);
      return arr;
  }

doubleTrouble([2,3,4]);