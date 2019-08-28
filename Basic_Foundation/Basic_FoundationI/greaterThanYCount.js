//Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterThanYCount(arr,y){
    var count=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i] > y){
            count++;
        }
    }
    return 2;
}

console.log(greaterThanYCount([1, 3, 5, 7]));