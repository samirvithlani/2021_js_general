var languages = ["gujarati","english","telugu","tamil","hindi","marathi","hi","B","malyalam"]

function len_cmp(a,b){

    return a.length - b.length;
}
//sort
console.log("string",languages.sort(len_cmp))


var price = [101,1001,500,25,9000,12000,007,0]
//asc
/* function priceList(a,b){
    return a - b;
} */

price.sort(function(a,b){

    return a - b
}); 

/* 
price.sort((a,b)=>{

    return a - b;
}) */


//console.log(price.sort(priceList))
console.log(price)