var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
function addElementToBeginningOfArray(){
  var newChoc = ['milky way', ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(){
  chocolateBars.unshift('')
}
