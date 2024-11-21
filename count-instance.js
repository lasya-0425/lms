// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Examples
// charCount("a", "dcta") ➞ 1
function charCount(char,str){
    let charCount=0
    for(let i=0;i<str.length;i++){
        if(char==str[i]){
            charCount++
        }

    }
    return charCount

}
console.log(charCount("a", "dcta"))