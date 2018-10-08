var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(y, x){
  const y = ['x', ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, x){
  chocolateBars.unshift(x)
}

function addElementToEndOfArray(){
  const z = [...chocolateBars, 'x'];
}

function destructivelyAddElementToEndOfArray(chocolateBars, x){
  chocolateBars.push(x)
}
