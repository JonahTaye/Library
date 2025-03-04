const myLibrary = []

function Book(title, author, numberOfPages, readStatus) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.readStatus = readStatus
}

Book.prototype.addBook = function() {
    let bookInfo = [
        this.title,
        this.author,
        this.numberOfPages,
        this.readStatus
    ]
    
    myLibrary.push(bookInfo)
}


console.log(myLibrary)
