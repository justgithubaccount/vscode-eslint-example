// https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code
// https://eslint.org/docs/latest/rules/

const name = "James";

const person = { first: name };

console.log(person);

const sayHelloLinting = (fName) => {
  console.log(`Hello linting, ${fName}`);
};

sayHelloLinting(person.first);
