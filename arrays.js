var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(Element, Array){
new Array(1)
   var array = [Element, ...Array];
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
