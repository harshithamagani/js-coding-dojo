//create a test for a function that returns the largest number in the array.  
//For example, returnLargest([1,3,10]) should return 10.  returnLargest([-2,-5,-10]) should return -2.  
//Once you write the test, run the test 
//(without writing the full function to make sure that the tests all fail), then complete the function to make sure all the tests pass.

function largeNumInArr(arr){
var max = arr[0];
for(var i=0;i<arr.length;i++){
    if(arr[i] > max){
        max = arr[i];
    }
} 
return max;
}
 
describe("largeNumInArr", function() { 
    it("should return 10 when we pass [1,3,10] as an argument", function() { 
        expect(largeNumInArr([1,3,10])).toEqual(10); 
    }); 
    it("should return 6 when we pass [1,6,2,3] as an argument", function() { 
        expect(largeNumInArr([1,6,2,3])).toEqual(6); 
    }); 
    it("should return 12 when we pass [11,12,10] as an argument", function() { 
        expect(largeNumInArr([11,12,10])).toEqual(12); 
    }); 
});
