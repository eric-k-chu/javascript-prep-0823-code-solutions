/* exported getKeys */
function getKeys(object) {
  const arr = [];
  for (const keys in object) {
    arr.push(keys);
  }
  return arr;
}
