//Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function nthToLastArray(arr,x){
    if(arr.length < x) {
        return null;
    }  
    else{
        return arr[arr.length - x];
    }  
    }
    
    
     console.log(nthToLastArray([5,2,3,6,4,9,7],3));