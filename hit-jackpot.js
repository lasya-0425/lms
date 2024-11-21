// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

// Examples
// testJackpot(["@", "@", "@", "@"]) ➞ true
function testJackpot(arr){
    for(let i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                return true

            }
            else{
                return false
            }
        }
    }

}
console.log(testJackpot(["@", "@", "@", "@"]))