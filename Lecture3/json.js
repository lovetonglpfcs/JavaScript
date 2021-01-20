const blank = {};
console.log("Blank type:",typeof blank);
console.log("Blank value",blank);

const book = {
    title: "1948",
    author:"George Orwell",
    isAvailable: false
};

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

let Obook=JSON.parse(bookJSON);
console.log(Obook.title);