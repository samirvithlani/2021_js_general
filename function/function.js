function sum() {

    //wor woa
    var a = 10, b = 20;
    console.log("sum called..", a + b)
}

function sub(x, y) {

    //wo re and with args
    ans = x - y;
    console.log("x = ", x)
    console.log("y = ", y)
    console.log("ans = ", ans)

}

function mul(n) {

    return n * n;
}

function div(){

    var a =10 ,b =5;
    return a /b;
}

function getName(name){


    return name.toUpperCase();
}



var xx = 10
var yy = 20
sum()
sub(xx, yy)

var sq = mul(10);
console.log(sq)
console.log(div())

console.log(getName("sam"))
