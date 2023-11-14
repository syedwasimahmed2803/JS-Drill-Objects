function keys(obj){
    const newArr= []
    
    for (let key in obj) {
            newArr.push(key);
    }
    return newArr
}
module.exports = keys


