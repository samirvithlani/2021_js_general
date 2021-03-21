function onclickDemo(){

    console.log("function called on click.....")
    //alert(document.getElementById("text").innerHTML="clicked..")
    document.getElementById("text").style.color="BLUE"
}
function buttonDemo(){

    console.log("button called...")
    document.getElementById("fb").href ="https://www.google.com"
    document.getElementById("fb").innerHTML="google"
    document.getElementById("fb").style.color="red"

    console.log("href ->",document.getElementById("fb").href)
    
    
}