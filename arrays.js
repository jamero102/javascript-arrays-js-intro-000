var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
function addElementToBeginningOfArray(array, x){
  ['x', ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, x){
  chocolateBars.unshift(x)
}
