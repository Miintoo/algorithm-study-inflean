// nums =[1,2,3,4]로 만들수 있는 순열을 반환하시오

function permute(nums) {
  const ans = [];

  function backtrack(curr) {
    if (curr.length === nums.length) {
      ans.push([...curr]); // 깊은 복사
      return;
    }

    for (let num of nums) {
      if (!curr.includes(num)) {
        curr.push(num);
        backtrack(curr);
        curr.pop(); // 백트래킹 (원상복귀)
      }
    }
  }

  backtrack([]);
  return ans;
}

console.log(permute([1, 2, 3,4]));