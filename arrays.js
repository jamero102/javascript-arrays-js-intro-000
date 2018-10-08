var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
const chocolateBars = chocolateBars

function addElementToBeginningOfArray(newArray, x){
  const newArray = [x, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, x){
  chocolateBars.unshift(x)
}
