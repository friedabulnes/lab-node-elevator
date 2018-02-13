const Elevator = require('./elevator.js');
const Person = require('./person.js');

let myElevator = new Elevator();

const personaUno=new Person("Lalo",3,5);
const personaDos=new Person("nganiza",7,0);
myElevator.call(personaUno);
myElevator.call(personaDos);


console.log(myElevator.waitingList)
myElevator.start();