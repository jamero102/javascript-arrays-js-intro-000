var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(chocolateBars, 'x'){
   chocolateBars2 = ['x', ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, x){
  var chocolateBars = chocolateBars.unshift(x);
}

function addElementToEndOfArray(Array, Element){
  var chocolateBars2 = [...chocolateBars, 'Element'];
}

function destructivelyAddElementToEndOfArray(){
  chocolateBars.push(x);
}
