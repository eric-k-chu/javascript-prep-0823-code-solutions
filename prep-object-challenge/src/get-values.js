/* exported getValues */
function getValues(object) {
  const arr = [];
  for (const keys in object) {
    arr.push(object[keys]);
  }
  return arr;
}
