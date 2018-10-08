var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
function addElementToBeginningOfArray(){
  var newChoc = ['milky way', ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(Array, Element){
  return chocolateBars.unshift('x')
}
