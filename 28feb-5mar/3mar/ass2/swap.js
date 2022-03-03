let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//creating a temporary variable;
let temp;

//swap variables by assigning values;
temp = a;
a = b;
b = temp;

document.write(`The value of a after swapping: ${a} ${b}`);
