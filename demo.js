const arr=[4,6,-2,-3,5]
const result=arr.filter(function(ele){
    return ele>=0

})
const res=arr.filter((ele)=>{
    return ele>=0
})
const output=arr.reduce(function(preVal,currVal){
    return preVal+currVal

},0)
const output2=arr.reduce((preVal,currVal)=>{
    return preVal+currVal
})
function obj(arr){
    let positive=[]
    let negative=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=0){
            positive.push(arr[i])
        }
        else{
            negative.push(arr[i])
        }
    }
    return {positive,negative}

}
console.log(obj(arr))
const result2=arr.reduce((preVal,currVal)=>{
    if(currVal>=0){
        preVal.positive.push(currVal)
    }
    else{
        preVal.negative.push(currVal)
    }
    return preVal

},{positive:[],negative:[]})