
let books = document.querySelectorAll("li");

books.forEach((book) => {
    book.addEventListener("click", (e) => {
        books.forEach((otherBook) => {
            otherBook.style.backgroundColor = "transparent";
        });

        e.target.style.backgroundColor = "#fda883";
        console.log(123);
    });
});