var recipes = {'eggs': 3, "milk": "1 cup"}

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, recipes, {key: value})
}