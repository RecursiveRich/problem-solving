// https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem
// Davis has  staircases in his house and he likes to climb each staircase, , or  steps at a time.Being a very precocious child, he wonders how many ways there are to reach the top of the staircase.

// Memoization
function ways(n, memo = [0, 1, 2, 4]) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 4;
    if (memo[n]) return memo[n];
    memo[n] = ways(n - 1, memo) + ways(n - 2, memo) + ways(n - 3, memo);
    return memo[n];
}

// Tabulation
function ways(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 4;
    let curr;
    let prev = 4;
    let prevPrev = 2;
    let prevPrevPrev = 1;
    for (let i = 4; i <= n; i++) {
        curr = prev + prevPrev + prevPrevPrev;
        prevPrevPrev = prevPrev;
        prevPrev = prev;
        prev = curr;
    }
    return curr;
}