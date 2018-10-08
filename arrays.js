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

function addElementToEndOfArray(chocolateBars, x){
  var b = [...chocolateBars, x];
}

function destructivelyAddElementToEndOfArray(){
  chocolateBars.push(x);
}
