var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
var MyArray = [1]

function addElementToBeginningOfArray(var, element){
   var array = ['foo', ...MyArray];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, x){
  chocolateBars.unshift(x);
}

function addElementToEndOfArray(Array, Element){
  var chocolateBars2 = [...chocolateBars, 'Element'];
}

function destructivelyAddElementToEndOfArray(){
  chocolateBars.push(x);
}
