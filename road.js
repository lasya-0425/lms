const str='====c===b==a'
for(let i=str.length-1;i>=0;i--){
    if(str[i]!='='){
        console.log(str[i])
        break
    }
}