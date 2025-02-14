function dailyTemperatures(temperatures) {
    let ans = new Array(temperatures.length).fill(0);
    let stack = [];
    
    for (let cur_day = 0; cur_day < temperatures.length; cur_day++) {
        let cur_temp = temperatures[cur_day];
        
        while (stack.length > 0 && stack[stack.length - 1][1] < cur_temp) {
            let [prev_day, _] = stack.pop();
            ans[prev_day] = cur_day - prev_day;
        }
        
        stack.push([cur_day, cur_temp]);
    }
    
    return ans;
}

dailyTemperatures([73,74,75,71,69,72,76,73]);


// https://leetcode.com/problems/daily-temperatures/description/