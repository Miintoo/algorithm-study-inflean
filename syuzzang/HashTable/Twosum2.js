function longestConsecutive(nums) {
    let longest = 0;
    let numSet = new Set(nums);
    
    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let cnt = 1;
            let target = num + 1;
            
            while (numSet.has(target)) {
                target++;
                cnt++;
            }
            
            longest = Math.max(longest, cnt);
        }
    }
    
    return longest;
}

console.log(longestConsecutive([6, 7, 200, 5, 4, 4]));

//https://leetcode.com/problems/longest-consecutive-sequence/description/