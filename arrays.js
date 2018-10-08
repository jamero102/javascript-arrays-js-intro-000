var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
function addElementToBeginningOfArray(newArray, 'x'){
  var newArray = ['x', ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, x){
  chocolateBars.unshift(x)
}
