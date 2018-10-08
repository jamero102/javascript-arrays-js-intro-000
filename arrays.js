var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(Element, Array){
   var array = [Element, ...Array()];
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
