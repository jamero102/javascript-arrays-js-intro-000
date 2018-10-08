var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
function addElementToBeginningOfArray(){
  var newChoc = ['milky way', ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray('x',Array){
  chocolateBars.unshift('x')
}
