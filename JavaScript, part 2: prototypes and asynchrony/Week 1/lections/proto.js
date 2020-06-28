let person = {
  type: 'human',
  getName: function () {return this.name;},
}

let student = {
  name: "Platon",
  sleep: function(){return this.name + ' is sleeping...'},
}

Object.setPrototypeOf(student, person);
console.log(Object.getPrototypeOf(student));

console.log(student.getName());
console.log(student.sleep());


Object.defineProperty(student, 'age', {
  set: function(age){this._age = parseInt(age)},
  get: function(){return this._age}
});

student.age = '3';
console.log(student.age);


Object.defineProperty(student, 'class', {
  enumerable: false,
  value: 'mage'
})

for(let key in student){
  if(student.hasOwnProperty(key))
    console.log('student\'s own property: ' + key);
}
console.log('Array of student\'s keys: ' + Object.keys(student));

let robot = {
  name: "R2-D2",
  work: function(){return this.name + ' is working...'},
}

Object.setPrototypeOf(robot,person);
robot.type = "robot";
//console.log(person.type);

console.log(Object.getPrototypeOf(Object));
var a = {};
console.log(Object.getPrototypeOf(a));