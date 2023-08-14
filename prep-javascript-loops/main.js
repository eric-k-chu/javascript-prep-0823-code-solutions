function whileLoop1() {
  const arr = [];
  let i = 0;
  while (i < 10) {
    arr.push(i++);
  }
  return arr;
}
console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  const arr = [];
  let i = 0;
  let increment = 0;
  while (i < 10) {
    arr.push(increment);
    increment += 2;
    i++;
  }
  return arr;
}
console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(i);
  }
  return arr;
}
console.log('forLoop1', forLoop1());

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion ' + i + '!');
  }
}
forLoop2();

function forInLoop1(object) {
  const arr = [];
  for (const property in object) {
    arr.push(property);
  }
  return arr;
}
const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
console.log('forInLoop1 output', forInLoop1(object));

function forInLoop2(object) {
  const arr = [];
  for (const property in object) {
    arr.push(object[property]);
  }
  return arr;
}
console.log('forLoop2 output', forInLoop2(object));
