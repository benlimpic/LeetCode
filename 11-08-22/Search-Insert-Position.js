


// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4


// iterate through list and determine if target is in list

// if target is in the list return the index

// if target isnt in list compare value of target to each element in list

// return the index of the first element that is larger than target

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//# Passing but Slow

// var searchInsert = function(nums, target) {

//   for (let i = 0; i < nums.length; i++) {
//       let more = [];
//       let less = [];

//       if (nums[i] === target) {
//         return i
//       } 
//       else if (nums[i] < target) {
//         less.push(nums[i])
//       } 
//       else if (nums[i] > target) {
//         more.push(nums[i])
//       }
//       if (more.length > 0) {
//         return i
//       }
//       if (nums[i] === nums[nums.length - 1]) {
//         return nums.length
//       }
//   };
// };


//@ passing but not fast

// var searchInsert = function(nums, target) {
    
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return i
//     }
//     if (nums[i] > target) {
//       return i
//     }
//     if (nums[i] === nums[nums.length - 1]) {
//       return nums.length
//     }
//   }
// };

//! interesting discussion version

// var searchInsert = function(nums, target) {
//   let i = 0;
//   while (nums[i] < target) { i++ };
//   return i  
// };