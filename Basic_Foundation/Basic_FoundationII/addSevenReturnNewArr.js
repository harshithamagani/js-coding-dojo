//Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.


function addSevenReturnNewArr(arr){
    var newArr=[];
    for(var i=0; i<arr.length;i++){
        newArr.push(arr[i]+7);
    }
    console.log(newArr);
    return newArr;
}

addSevenReturnNewArr([1,2,3])