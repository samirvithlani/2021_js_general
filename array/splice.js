var languages = ["java","pythn","c","c++"]

//index = c
//count = c,c++
var newLang = languages.splice(2,2,"node","php")
console.log("removed",newLang)

console.log("after remove and add",languages)

