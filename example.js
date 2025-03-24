// // Regular Expression 
// // +

// // Regex fro beginning ^

// let sentences= "Today is the first day after spricng break"
// let pattern3 = /^T/
// console.log(pattern3.test(sentences))

// Regex from end $
let sentence = "Today is the first day after spricng break"
let pattern4= /k$/;
console.log(pattern4.test(sentence));

// Regex for OR |
let sentence1 = "Today is a first day after spring break"
let pattern5 = /day |break /
console.log(pattern5.test(sentence1));