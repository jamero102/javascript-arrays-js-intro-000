var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(a, x){
  var a = ['x', ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, x){
  chocolateBars.unshift('foo');
}

function addElementToEndOfArray(){
  const z = [...chocolateBars, 'x'];
}

function destructivelyAddElementToEndOfArray(chocolateBars, x){
  chocolateBars.push('foo');
}
