// nums =[1,2,3,4]로 구할수있는 부분집합을 만들어라
function subsets(nums) {
  const result = [];

  function backtrack(start, curr, k) {
    if (curr.length === k) {
      result.push([...curr]); // 깊은 복사
      return;
    }

    for (let i = start; i < nums.length; i++) {
      curr.push(nums[i]);
      backtrack(i + 1, curr, k);
      curr.pop();
    }
  }

  for (let k = 0; k <= nums.length; k++) {
    backtrack(0, [], k);
  }

  return result;
}

console.log(subsets([1, 2, 3,4]));