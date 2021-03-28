var age = [10, 15, 16, 21, 25]

function isAdult(elem) {

    return elem.age >= 18;
}

var person = [

    { name: "samir", age: 15 },
    { name: "raj", age: 17 },
    { name: "deven", age: 25 },
    { name: "poojan", age: 40 },
    { name: "lakhan", age: 60 },
]

//var first_adult = person.find(isAdult);
var adult_mem = person.findIndex(({ age }) => age > 180)
console.log(adult_mem)
