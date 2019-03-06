var recipes = { eggs: 3 };
function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;
  return recipes;
}
var obj = {foo: "bar"};
var newObj = Object.assign({}, obj);
function deleteFromObjectByKey(object, key){
  delete newObj.foo;
  return newObj;
}
