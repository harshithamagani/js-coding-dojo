//Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function swapTowardTheCenter(arr){

    for(var i=0; i < arr.length/2 ; i++){
        if(i%2===0){
          console.log("i",i);
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
}
    
    console.log(arr);
    return arr;
}

swapTowardTheCenter([1,2,3,4,5,6]);
swapTowardTheCenter([true,42,"Ada",2,"pizza"]);


