//Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function outLookNegArr(arr){
    for(var i=0; i<arr.length ; i++){
        if(arr[i] > 0){
            arr[i] = arr[i] * -1;
        }
    }

    return arr;
}

console.log(outLookNegArr([1,-3,5]));
