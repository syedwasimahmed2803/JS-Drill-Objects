
function defaults(obj, defaultProps) {
    let newObj = obj
    if(defaultProps){
        for(key in defaultProps)
        newObj[key]=defaultProps[key]
    }
    return newObj
}

module.exports = defaults