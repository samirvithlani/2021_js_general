var names = ["raj", "parth", "om", "prahar", "x", "malayalam"]

console.log("before",names)
function len_compare(a, b) {

    return a.length - b.length;
}

names = names.sort(len_compare)

console.log(names)

