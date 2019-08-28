//Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.


function doubleVision(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        var square = arr[i]*arr[i];
        newArr.push(square)
    }
    return newArr;
}

console.log(doubleVision([1,2,3]));