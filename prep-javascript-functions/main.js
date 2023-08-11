function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersTest = addTwoNumbers(2, 2);
console.log('2 + 2 = ' + addTwoNumbersTest);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convertHoursToMinutesTest = convertHoursToMinutes(2);
console.log('2 hours is ' + convertHoursToMinutesTest + ' minutes.');

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}
var getGreetingsTest = getGreeting('World');
console.log(getGreetingsTest);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Test = addAndMultiplyBy5(10, 5);
console.log(addAndMultiplyBy5Test);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Test = multiplyAndDivideBy5(35, 10);
console.log(multiplyAndDivideBy5Test);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersTest = subtractTwoNumbers(22, 7);
console.log(subtractTwoNumbersTest);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var getCircleCircumferenceTest = getCircleCircumference(5);
console.log(getCircleCircumferenceTest);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameTest = getFullName('Eric', 'Chu');
console.log(getFullNameTest);

function cube(number) {
  return Math.pow(number, 3);
}
var cubeTest = cube(5);
console.log(cubeTest);
