var recipes = {'eggs': 3, "milk": "1 cup"}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {key: value})
}