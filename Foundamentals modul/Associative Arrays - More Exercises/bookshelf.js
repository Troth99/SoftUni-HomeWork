function solve(arr) {

    let storedBooks = [];

    let counterBooks = 0;
    for (const token of arr) {


        if (token.includes(`->`)) {
            let [id, genre] = token.split(` -> `)

            let itHas = storedBooks.find(x => x.id === id);

            let obj = {
                id: id,
                genre: genre,
                counter: counterBooks,
                books: []
            }
            if (!itHas) {
                storedBooks.push(obj)
            }
        }



        if (!token.includes(`->`)) {
            let tokensSplit = token.split(`, `)[0]
            let [bookTitle, bookAuthor] = tokensSplit.split(`: `);
            let bookgenre = token.split(`, `)[1]


            let itHas = storedBooks.find(x => x.genre === bookgenre);

            if (itHas) {
                itHas.counter += 1
                itHas.books.push({ bookTitle: bookTitle, author: bookAuthor })

            }

        }

    }

let sortedByDescending = storedBooks.sort((a, b) => b.counter - a.counter)
sortedByDescending.forEach(genre => {
    genre.books.sort((a,b) => a.bookTitle.localeCompare(b.bookTitle))
})


for (let book of sortedByDescending){
    console.log(`${book.id} ${book.genre}: ${book.counter}`);

    for (let b of book.books) {
        console.log(`--> ${b.bookTitle}: ${b.author}`);
    }
        
    }
    
    
}





solve(['1 -> mystery', '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi']
)

/* solve(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery',
     '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 
     'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 
     'Lions and Rats: Gabe Roads, history', 
     '2 -> romance', 
     'Effect of the Void: Shay B, romance', 
     'Losing Dreams: Gail Starr, sci-fi', 
     'Name of Earth: Jo Bell, sci-fi', 
     'Pilots of Stone: Brook Jay, history'])*/