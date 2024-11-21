// Create a function that takes a string and returns a new string with all vowels removed.

// Examples
// removeVowels("I have never seen a thin person drinking Diet Coke.")
// ➞ " hv nvr sn  thn prsn drnkng Dt Ck."
function removeVowels(str){
    let result=''
    let vowels='aeiou'
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i].toLowerCase())!=true){
            result+=str[i]
        }
    }
    return result

}
console.log(removeVowels("I have never seen a thin person drinking Diet Coke."))