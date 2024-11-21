// Create a function that returns the index of the first vowel in a string.

// Examples
// firstVowel("apple") ➞ 0
function firstVowel(str){
    let index=0
    let vowels='aeiou'
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            index++
            break
        }

    }
    return index

}
console.log(firstVowel("apple"))