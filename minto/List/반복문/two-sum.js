/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return false;
};

// 투 포인터로 해결 결과는 leetcode와 two-sum과 다르다.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let [l, r] = [0, nums.length - 1];
    nums.sort((a,b) => {return a>b ? 1 : a<b ? -1 : 0;});
    while(l < r) {
        if (nums[l] + nums[r] > target) {
            r -= 1;
        } else if (nums[l] + nums[r] < target) {
            l += 1;
        } else {
            return true;
        }
    }
    return false;

};