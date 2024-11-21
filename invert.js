function invert(obj){
    let result={}
    for(const key in obj){
        result[key]=obj[key]
    }
    return result


}
console.log(invert({'z':'q','w':'f'}))//{'q':'z','f':'w'}