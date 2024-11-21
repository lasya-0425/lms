const person={
    fn:'lasya',
    city:'ongole',
    age:22
}
function keysValues(obj){
    let keys=[],values=[]
    for(const key in person){
        keys.push(key)
        values.push(person[key])
    }
    return [keys,values]
}
console.log(keysValues(person))