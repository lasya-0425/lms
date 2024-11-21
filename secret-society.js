// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

// Examples
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
function societyName(arr){
    let result=''
    for(let i=0;i<arr.length;i++){
        if(arr[i][0].toUpperCase()){
            result+=arr[i][0]
            
        }
    }
    return result.split("").sort().join('')

}
console.log(societyName(["Adam", "Sarah", "Malcolm"]))