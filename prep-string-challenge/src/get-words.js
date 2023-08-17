/* exported getWords */
function getWords(string) {
  const arr = [];
  let word = '';

  if (!string) {
    return arr;
  }

  for (let i = 0; i <= string.length; i++) {
    if (string[i] === ' ' || i === string.length) {
      arr.push(word);
      word = '';
    } else {
      word += string[i];
    }
  }
  return arr;
}
