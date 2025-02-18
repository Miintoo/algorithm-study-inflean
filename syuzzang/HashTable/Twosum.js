function twoSum(nums, target) {
    let memo = {};
    
    for (let v of nums) {
        memo[v] = 1;
    }
    
    for (let v of nums) {
        let neededNumber = target - v;
        if (memo[neededNumber]) {
            return true;
        }
    }
    
    return false;
}

console.log(twoSum([2, 7, 11, 15], 9));

// https://leetcode.com/problems/two-sum/description/