var languages = ["hindi", "english", "marathi", "hibrish", "tamil", "hinglish"]


function search(arr, searchelm) {

    function condition(elem) {

        return elem.toLowerCase().indexOf(searchelm.toLowerCase()) !== -1;
    }

    return arr.filter(condition)
}


var filterLag = search(languages, "hi");
console.log(filterLag)