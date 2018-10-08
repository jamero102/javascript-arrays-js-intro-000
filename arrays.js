var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(y, x){
  const y = ['x', ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(y, x){
  chocolateBars.unshift(x)
}

function destructivelyAddElementToEndOfArray(y, x){
  chocolateBars.push(x)
}
