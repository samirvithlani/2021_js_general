var languages = ["c", "c++"]
languages.push(0, "java", "xyz")
console.log(languages)
console.log("removing...", languages.pop())
console.log(languages)

var languages1 = ["c", "c++"]
var languages2 = ["node", "angular"]

var lang_lang2 = languages1.concat(languages2)
console.log(lang_lang2)

console.log("...", languages)
var lang1 = languages.slice(1, 50)
console.log("-.>>>>", lang1)

//var flag = languages.includes("java");
var flag = languages.includes("c", 1);
console.log(flag)
//every some  flat