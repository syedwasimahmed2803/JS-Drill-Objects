const mapObject = require("../mapObject")
const obj = require('../testObject')
const testMap = mapObject(obj, (object)=>object*3)
console.log(testMap)