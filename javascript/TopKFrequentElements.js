// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.



var topKFrequent = function(nums,k) {
    var finalAnswer=[]
   function sortMapByValuesDescending(inputMap) {
       const mapEntries = Array.from(inputMap.entries());
       mapEntries.sort((a, b) => b[1] - a[1]);
       const sortedMap = new Map(mapEntries);
       return sortedMap;
   }
   
       let sortedArray = nums.sort();
       let myMap = new Map();
   
       for (let i = 0; i < sortedArray.length; i++) {
           if (myMap.has(sortedArray[i])) {
               var currentValue = myMap.get(sortedArray[i]);
               myMap.set(sortedArray[i], currentValue + 1);
           } else {
               myMap.set(sortedArray[i], 1);
           }
       }
   
        var answer=sortMapByValuesDescending(myMap)
   
        const keysArray = Array.from(answer.keys());
         
    
       for(i=0;i<k;i++){
        finalAnswer[i]=keysArray[i]
        }
   
    return finalAnswer
   };