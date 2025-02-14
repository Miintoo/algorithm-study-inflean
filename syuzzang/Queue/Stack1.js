function isValid(s) {
    let stack = [];
    for (let p of s) {
        if (p === '(') {
            stack.push(')');
        } else if (p === '{') {
            stack.push('}');
        } else if (p === '[') {
            stack.push(']');
        } else {
            if (stack.length === 0 || stack.pop() !== p) {
                // 짝이 없거나 stack에서 pop한 문자열이 같지 않을경우
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid("()[]{}"))
// https://leetcode.com/problems/valid-parentheses/description/