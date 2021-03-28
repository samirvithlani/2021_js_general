function select_function() {

    var selectedCountryName = document.getElementById("choose").value;
    console.log(selectedCountryName)
    document.getElementById("country").innerHTML=selectedCountryName;

}