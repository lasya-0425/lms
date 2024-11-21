// Create a function that takes a string and returns a string in which each character is repeated once.

// Examples
// doubleChar("String") ➞ "SSttrriinngg"
function repeat(str){
    let result=''
    for(let i=0;i<str.length;i++){
        result+=str[i]+str[i]
    }
    return result

}
console.log(repeat("String"))