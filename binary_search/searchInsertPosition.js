// https://leetcode.com/problems/search-insert-position/


 var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length-1
    let middle = Math.floor((start+end)/2);
    
    if (target < nums[start]) return 0;
    
    while (nums[middle] !== target && start <= end) {
        if (nums[middle] > target) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start+end)/2);
    }
    
    if (nums[middle] === target) return middle

    if (target < nums[middle]) {
       return middle - 1;
   } else  {
       return middle + 1;
   } 
    
};