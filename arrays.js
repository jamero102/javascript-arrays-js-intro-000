var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(chocolate, x){
  const y = ['x', ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, x){
  chocolateBars.unshift(x)
}

function destructivelyAddElementToEndOfArray(chocolateBars, x){
  chocolateBars.push(x)
}
