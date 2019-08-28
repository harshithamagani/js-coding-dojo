//Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function convertPosValToStringArr(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}

console.log(convertPosValToStringArr([-1,3,5,-5]));