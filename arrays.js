var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
function addElementToBeginningOfArray(){
var chocolateBars2 = ["milky way", ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray("milky way", chocolateBars){
  chocolateBars.unshift("milky way")
}
