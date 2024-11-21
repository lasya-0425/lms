function toObj(arr){
    let result=[]
    
    for(let i=0;i<arr.length;i++){
        let obj={}
        obj[arr[i]]=arr[i].charCodeAt()
        result.push(obj)
    }
    return result
}
console.log(toObj(['a','b','c']))