class Book {

    //let bname = "abc"
    //var bId = 101;
    //const a = 100
    //no construtor overloadoning...


    constructor(no) {

        //local variable..
        var price = 100;
        this.price = price;
        console.log("constructor called,,,,", price,no)
    }


    //use this keyword to 
    getBookPrice() {

        console.log("price", this.price)
    }


}

//book is obejct
book = new Book(12);
book.getBookPrice();


