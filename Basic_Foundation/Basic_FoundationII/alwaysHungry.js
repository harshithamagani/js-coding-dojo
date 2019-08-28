//Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function alwaysHungry(arr){
    var count = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]==="food"){
            console.log("yummy");
            count++;
        }
    }
    if(count === 0){
        console.log("I'm hungry");
    }
}

alwaysHungry([2,6,"food",8,9,"food"]);
alwaysHungry([5,6,7,8,9]);



