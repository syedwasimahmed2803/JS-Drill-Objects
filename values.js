function values(obj) {
    const newArr = []

    for(let key in obj){
        newArr.push(obj[key])
    }
    return newArr
}
module.exports = values