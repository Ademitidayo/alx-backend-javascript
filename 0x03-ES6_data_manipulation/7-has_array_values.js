export default function hasValuesFromArray(mySet, myArray) {
  return myArray.every((ele) => mySet.has(ele));
}
