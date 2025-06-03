// nums =[1,2,3,4]에서 두개의 원소를 선택해 만들수 있는 모든 조합을 구하시오

function combination(nums, k) {
  const result = [];

  function backtrack(start, curr) {
    if (curr.length === k) {
      result.push([...curr]); // 깊은 복사
      return;
    }

    for (let i = start; i < nums.length; i++) {
      curr.push(nums[i]);
      backtrack(i + 1, curr);
      curr.pop(); // 백트래킹
    }
  }

  backtrack(0, []);
  return result;
}

console.log(combination([1, 2, 3, 4], 2));
