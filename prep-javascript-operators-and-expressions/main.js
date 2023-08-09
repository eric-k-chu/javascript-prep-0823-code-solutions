const number1 = 4;
const number2 = 5;
const product = number1 * number2;
console.log(product, typeof product);

const charge = 7.49;
const payment = 7.0;
const amountRemaining = charge - payment;
console.log(amountRemaining, typeof amountRemaining);

const tests = 95;
const assignments = 100;
const final = 90;
const grade = (tests + assignments + final) / 3.0;
console.log(grade, typeof grade);

const firstName = 'Eric';
const lastName = 'Chu';
const fullName = firstName + ' ' + lastName;
console.log(fullName, typeof fullName);

const pH = 2;
const isAcidic = pH < 7;
console.log(isAcidic, typeof isAcidic);

const numberOfSoldiers = 300;
const isSparta = numberOfSoldiers === 300;
console.log(isSparta, typeof isSparta);

let nickname = fullName;
nickname += ' is the GOAT';
console.log(nickname, typeof nickname);
