// Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.
// https://leetcode.com/problems/maximum-subarray/description/
// https://medium.com/@marcellamaki/finding-the-maximum-contiguous-sum-in-an-array-and-kadanes-algorithm-e303cd4eb98c

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 0) return;
  let currentSubarraySum = nums[0];
  let maxSubarraySum = currentSubarraySum;
  for (let i = 1; i < nums.length; i++) {
    currentSubarraySum = Math.max(nums[i], nums[i] + currentSubarraySum);
    maxSubarraySum = Math.max(currentSubarraySum, maxSubarraySum);
  }
  return maxSubarraySum;
};
