// https://www.hackerrank.com/challenges/ctci-coin-change/problem
// Given a number of dollars, , and a list of dollar values for  distinct coins, , find and print the number of different ways you can make change for  dollars if each coin is available in an infinite quantity.

function coinChange(amount, denom) {
    let table = Array.from({ length: amount + 1 }, () => 0);
    table[0] = 1;
    for (let i = 0; i < denom.length; i++) {
        for (let j = denom[i]; j < table.length; j++) {
            table[j] += table[j - denom[i]]
        }
    }
    return table[amount];
}