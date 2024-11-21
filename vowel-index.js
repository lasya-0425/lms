const str='dctacademy'
//o/p:'dct0c01my'
const vowels='aeiou'
let result=''

for(let i=0;i<str.length;i++){
    
    if(vowels.includes(str[i])){
        result+=vowels.indexOf(str[i])
    }
    else{
        result+=str[i]
    }
    

}
console.log(result)