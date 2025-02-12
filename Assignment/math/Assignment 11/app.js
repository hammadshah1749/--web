let currYear = +prompt("Currnt Year");
let birthYear = +prompt("Birth Year");

let age = currYear - birthYear;

document.write(currYear);
document.write(birthYear);


document.write('They are ' + age + ' years old or '+ ++age +' years old.');