"use strict";
let id = 5;
console.log('ID:', id);
let company = 'MintTech';
let isPublished = true;
let x = 'hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello'];
let person = [1, 'hello', true];
let employee;
employee = [
    [1, 'oliver'],
    [2, 'maiyo'],
    [3, 'kipkoech'],
    [4, 'koech']
];
console.log(employee[0]);
console.log(employee[1]);
console.log(employee[2]);
console.log(employee[3]);
// union
let pid;
pid: "22";
// enum
var compass;
(function (compass) {
    compass[compass["east"] = 1] = "east";
    compass[compass["west"] = 2] = "west";
    compass[compass["north"] = 3] = "north";
    compass[compass["south"] = 4] = "south";
})(compass || (compass = {}));
console.log(compass);
var compass2;
(function (compass2) {
    compass2["east"] = "E";
    compass2["west"] = "W";
    compass2["north"] = "N";
    compass2["south"] = "S";
})(compass2 || (compass2 = {}));
console.log(compass2);
const user = {
    id: 1,
    name: 'oliver'
};
//   type assertion
let cid = 1;
// let customerId = <number> cid
let customerId = cid;
// functions
function add(x, y) {
    return x + y;
}
console.log(add(5, 20));
function log(greetings) {
    alert(greetings);
}
const sum = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(sub(10, 5));
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} with id ${this.id} is now registred`;
    }
}
const Oliver = new Person(2256, 'Ollie');
const Lilly = new Person(2334, 'SKYLER');
//  console.log(Oliver.register());
//  console.log(Lilly.register());
// subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const Emp = new Employee(3555, 'Josco jj', 'Developer');
console.log(Emp.register());
// generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let stringArray = getArray(['oliver', 'mida', 'trevv', 'nosha']);
stringArray.push('dunk');
numArray.push(6);
