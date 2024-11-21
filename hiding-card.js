// Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

// Examples
// cardHide("1234123456785678") ➞ "************5678"
function cardHide(str){
    let result=''
    for(let i=0;i<str.length-4;i++){
        result+='*'

        
        
    }
    for(let i=str.length-4;i<str.length;i++){
        result+=str[i]
    }
    return result

}
console.log(cardHide("1234123456785678"))