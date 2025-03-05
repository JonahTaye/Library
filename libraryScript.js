let myLibrary = []
const idList = []
const main = document.querySelector(".main")

function Book(title, author, numberOfPages, readStatus, description) {
    this.id = generateId()
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.readStatus = readStatus
    this.description = description

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
        this.readStatus,
        this.description
    ]

    myLibrary.push(bookInfo)
}

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    let checkbox = form.querySelector("#book-status")
    
    let newBook = new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("pages").value,
        checkbox.checked? checkbox.value: "Incomplete",
        document.getElementById("description").value
    )

    newBook.addBook()
    createCard()
    form.reset()
    document.querySelector(".form-dialog").close()

    console.log(myLibrary)
})

function createCard() {
    let card = document.createElement("div")
    let btn = document.createElement("button")
    btn.textContent = "Remove"
    
    btn.classList.add("remove")
    card.classList.add("cards")
    
    card.style.border = "1px solid black"

    let newBook = myLibrary.at(-1)
    card.id = `id${newBook[0]}`
    btn.id = `id${newBook[0]}`

    for(let i = 1; i < newBook.length; i++) {
        let info = document.createElement("div")
        let readButton = document.createElement("button")

        if (i === 4) {
            readButton.textContent = newBook[i]
            readButton.id = `id${newBook[0]}`
            readButton.classList.add("statusBtn")
            card.appendChild(readButton)
            continue
        }
        info.textContent = newBook[i]
        card.appendChild(info)
        
    }
    card.appendChild(btn)
    main.prepend(card)
}


document.addEventListener("click", event => {
    if (event.target.classList.contains("remove")) {
        let id = String(event.target.id)
        let card = document.querySelector( `.cards#${id}`)
        document.body.removeChild(card)

        id = Number(id.slice(2,))
        myLibrary.forEach((book, index) => {
            if(book.includes(id)) {
                myLibrary.splice(index, 1)
                console.log(myLibrary)
            }
        })

    }

    if (event.target.classList.contains("statusBtn")) {
        console.log("hereer")
        let id = String(event.target.id)
        let btn = document.querySelector(`.statusBtn#${id}`)

        id = Number(id.slice(2,))
        if (btn.textContent == "Incomplete") {
            btn.textContent = "Completed"
            myLibrary.forEach((book) => {
                if (book.includes(id)) book[4] = "Completed"
                console.log(myLibrary)
            })
        } else {
            btn.textContent = "Incomplete"
            myLibrary.forEach((book) => {
                if (book.includes(id)) book[4] = "Incomplete"
                console.log(myLibrary)
            })
        }
    }

    if (event.target.classList.contains("open-dialog")) {
        let dialog = document.querySelector(".form-dialog")
        dialog.showModal()
    }
})

