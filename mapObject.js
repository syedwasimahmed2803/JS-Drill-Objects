function mapObject(obj, cb) {
    const newObj = {}
   for(let key in obj){
    newObj[key] = cb(obj[key])
   }
   return newObj
}
module.exports = mapObject