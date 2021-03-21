var count = 0;
function keyup() {

    //text value =x
    var x = document.getElementById("text").value
    document.getElementById("value").innerHTML = x.toUpperCase();

}

function press(){

    count++;
    console.log("press called..",count)

}

function keyUpDemo() {

    document.getElementById("demo").style.background = "YELLOW"
}
function keyDownDemo() {

    document.getElementById("demo").style.background = "PINK"

}