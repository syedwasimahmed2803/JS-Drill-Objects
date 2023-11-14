function invert(obj) {
  const invertedObject = {};

  for (const key in obj) {
      invertedObject[obj[key]] = key; 
  }
  return invertedObject;
}
module.exports = invert