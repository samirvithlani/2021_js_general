//var languages = ["gujarati","english","telugu","tamil","hindi",101,true,"marathi"]

var tech = ["java","javaScript","python","php","NODE"]

var numbers = [100,200,500,700,800,50,30,1200,56,"hindi","raj"]

function checkNums(x){

    return x >200;
}

console.log(numbers.filter(checkNums))


//arr = tech
//q = "java"
//q = "p"
function custome_search(array,search_element){

    function condition(x){

        return x.indexOf(search_element)!= -1;
    }

    return array.filter(condition)
}

console.log("indexof.....",tech.indexOf("php"))

console.log(custome_search(tech,"java")) //java,javaScript
console.log(custome_search(tech,"p"))//python....

