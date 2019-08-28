//Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function minMaxAvgOfArrInNewArr(arr){
    var newArr=[];
    var max=arr[0];
    var min=arr[0];
    var sum = 0;
    for(var i=0;arr.length;i++){
        if(max < arr[i]){
            max = arr[i];
        }
        else if(min < arr[i]){
            min = arr[i];
        }
    }
    var avg = sum / arr.length;
    newArr =[max,min,avg];
    return newArr;
}

console.log(minMaxAvgOfArrInNewArr([1,5,10,-2]))