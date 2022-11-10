// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

//! if number appears more than once push to out array

//@ if number

/**
 * @param {number[]} nums
 * @return {number}
 */

//! XOR Tutorial

var singleNumber = function (nums) {
  let single = 0;

  for (let i = 0; i < nums.length; i++) {
    single ^= nums[i];
    return single;
  }
};

// quick explanation

//  XOR in this case is toggling true or false for each number in the array if the number is a single number compared to the single = 0 the result is true. If the same number appears again later in the array it is toggled to false. This way anything with only a single number is true... i think.
