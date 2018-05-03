// https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem

// Simple Recursion
function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2)
}

// Dynamic Programming: Memoization
function fibonacci(n, memo = []) {
    if (n < 2) return n;
    if (memo[n]) return memo[n];
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

// Dynamic Programming: Tabulation
function fibonacci(n) {
    if (n < 2) return n;
    let i = 2;
    let num1 = 1;
    let num2 = 0;
    let temp;
    while (i < n) {
        temp = num1 + num2;
        num2 = num1;
        num1 = temp;
        i++;
    }
    return num1 + num2;
}