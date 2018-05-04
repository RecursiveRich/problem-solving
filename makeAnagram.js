// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem
// Alice is taking a cryptography class and finding anagrams to be very useful.We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.
// Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams.Can you help her find this number ?
// Given two strings, and, that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams.Any characters can be deleted from either of the strings.

function makeAnagram(str1, str2) {
    let counter1 = str1.split("").reduce((acc, ltr) => {
        acc[ltr] = ++acc[ltr] || 1;
        return acc;
    }, {});
    let counter2 = str2.split("").reduce((acc, ltr) => {
        acc[ltr] = ++acc[ltr] || 1;
        return acc;
    }, {});
    for (let ltr in counter2) {
        counter1[ltr] = (counter1[ltr] || 0) - counter2[ltr];
    }
    return Object.values(counter1).reduce((acc, val) => acc + Math.abs(val), 0);
}

function refactoredMakeAnagram(str1, str2) {
    let counter = str1.split("").reduce((acc, ltr) => {
        acc[ltr] = ++acc[ltr] || 1;
        return acc;
    }, {});
    str2.split("").forEach(ltr => {
        counter[ltr] = (counter[ltr] || 0) - 1;
    })
    return Object.values(counter).reduce((acc, val) => acc + Math.abs(val), 0);
}