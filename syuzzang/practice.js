// 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

// 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const nums = Array.from({ length: N }).map((_, i) => i + 1);

function solution(nums, k) {
  const result = [];
  const visited = Array.from({length:nums.length}).fill(false);

  function backtrack(curr) {
    if (curr.length === k) {
      result.push([...curr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if(visited[i]) continue;
      visited[i] = true;
      curr.push(nums[i]);
      backtrack(curr);
      curr.pop();
      visited[i] = false; 
    }
  }
  backtrack([]);

  return result
    .map((arr) => arr.map((num) => num.toString()).join(" "))
    .join("\n");
}

console.log(solution(nums, M));
