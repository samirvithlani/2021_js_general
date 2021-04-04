var salary = [100, 1500, 1200, 2500, 1700, 2700, null, "hundred"]

function checkPrice(elem) {

    return elem >= 1500;
}

console.log("sal= ", salary)
var filteredSal = salary.filter(checkPrice)
console.log("sal= ", filteredSal)



var newSal = salary.filter((elem) => (elem <= 1500 && elem != null))
console.log("lam", newSal)

