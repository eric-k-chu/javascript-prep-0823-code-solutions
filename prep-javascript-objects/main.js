const person = {
  firstName: 'Eric',
  lastName: 'Chu',
  hobby: 'Coding',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);

person.job = 'Programmer';
console.log("The person's current job is: ", person.job);

person['previousJob'] = 'Student';
console.log("The person's previous job is: ", person['previousJob']);

console.log(person);
