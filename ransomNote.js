// https://www.hackerrank.com/challenges/ctci-ransom-note/problem
// A kidnapper wrote a ransom note but is worried it will be traced back to him.He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note.The words in his note are case -sensitive and he must use whole words available in the magazine, meaning he cannot use substrings or concatenation to create the words he needs.
// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

function ransomNote(magazine, ransom) {
    let counter = magazine.reduce((acc, word) => {
        acc[word] = ++acc[word] || 1;
        return acc;
    }, {});
    let decrementer = ransom.reduce((acc, word) => {
        acc[word] = --acc[word];
        return acc;
    }, counter);
    return Object.values(decrementer).every(val => val >= 0) ? "Yes" : "No";
}

function refactoredRansomNote(magazine, ransom) {
    let counter = magazine.reduce((acc, word) => {
        acc[word] = ++acc[word] || 1;
        return acc;
    }, {});
    for (let word of ransom) {
        if (counter[word] <= 0) return "No";
        counter[word]--;
    }
    return "Yes";
}