function pairs(obj) {
    const newArr = []
    for(let key in obj){
        newArr.push([key, obj[key]])
    }
    return newArr
}
module.exports = pairs