//Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function returnArray1to255(){
    var newArr=[];
    for(var i=1; i<=255 ; i++){
        newArr.push(i);
    }
    return newArr;
}

console.log(returnArray1to255());