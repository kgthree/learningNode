// function statement
function greet () {
  console.log('hi');
}
greet();

// function are first-Class
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

// function Expression
var greetMe = function() {
  console.log('Hi Kevin');
}
greetMe();

// it's first-Class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function(){
  console.log('Hello Kevin!');
});
