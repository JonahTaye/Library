const myLibrary = []
const idList = []

function Book(title, author, numberOfPages, readStatus) {
    this.id = generateId()
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.readStatus = readStatus

    function generateId() {
        while (true) {
            let randomId = Math.floor(Math.random() * 9999) + 1000

            if (!idList.includes(randomId)) {
                idList.push(randomId)
                return randomId
            }
        }
    }
}

Book.prototype.addBook = function () {
    let bookInfo = [
        this.id,
        this.title,
        this.author,
        this.numberOfPages,
        this.readStatus
    ]

    myLibrary.push(bookInfo)
}

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()

    let newBook = new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("pages").value,
        document.getElementById("book-status").value
    )

    newBook.addBook()
    createCard()
    form.reset()
    console.log(myLibrary)
})

function createCard() {
    let card = document.createElement("div")
    let btn = document.createElement("button")
    card.textContent = "Book"
    btn.textContent = "Remove"
    btn.classList.add("remove")
    card.classList.add("cards")
    ids = Math.floor(Math.random() * 10)
    card.id = "id" + ids
    btn.id = "id" + ids
    card.style.border = "1px solid black"

    let newBook = myLibrary.at(-1)
    newBook.map(bookInfo => {
        let info = document.createElement("div")
        info.textContent = bookInfo
        card.appendChild(info)
        card.remov
    })
    card.appendChild(btn)
    document.body.appendChild(card)
}


document.addEventListener("click", event => {
    if (event.target.classList.contains("remove")) {
        let card = document.querySelector(`.cards#${event.target.id}`)
        document.body.removeChild(card)
        myLibrary.map
    }
})

