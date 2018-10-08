var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(a, x){
  var a = [x, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, x){
  chocolateBars.unshift(x);
}

function addElementToEndOfArray(z,x){
  const = [...chocolateBars, x];
}

function destructivelyAddElementToEndOfArray(chocolateBars, x){
  chocolateBars.push(x);
}
