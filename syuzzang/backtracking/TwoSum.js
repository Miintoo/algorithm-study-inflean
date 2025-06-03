// 리스트 [4,9,7,5,1]에서 두개의 숫자를 더해서 12가 될수 있나요? (중복 x)

function solution(nums, target) {
  function backtrack(start, curr) {
    // 1. 종료 조건: curr에 2개의 인덱스가 있고, 그 값들의 합이 target이면 반환
    if (curr.length === 2) {
      const sum = curr.reduce((acc, i) => acc + nums[i], 0);
      if (sum === target) return true;
    }

    // 2. 현재 위치(start)부터 nums 끝까지 반복
    for (let i = start; i < nums.length; i++) {
      curr.push(i); // 현재 인덱스를 선택
      const ret = backtrack(i + 1, curr); // 다음 인덱스로 재귀 진행
      if (ret) return ret; // 정답이면 상위 재귀로 반환
      curr.pop(); // 아니면 선택 취소 (백트래킹)
    }

    return false; // 아무것도 못 찾은 경우
  }

  return backtrack(0, []);
}


// 테스트 실행
console.log(solution([4, 9, 7, 5, 1], 12));
// 예시 출력: [1, 3] → 9 + 3 = 12
