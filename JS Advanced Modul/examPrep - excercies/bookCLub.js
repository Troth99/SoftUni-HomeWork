class BookClub {

    constructor(library){
        this.library = library
        this.books = [];
        this.members = []
    }

    addBook (title, author){

        if(this.books.some(book => book.title === title)){
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        }

        this.books.push({title:title, author:author});
        return `The book "${title}" by ${author} has been added to ${this.library} library.`
    }
    addMember (memberName){

        if(this.members.some(person => person.memberName === memberName)){
            return `Member ${memberName} is already a part of the book club.`
        }

        this.members.push({memberName: memberName})
        return `Member ${memberName} has been joined to the book club.`
    }
    assignBookToMember(memberName, bookTitle) {
    
        let foundMember = this.members.find(member => member.memberName === memberName);
        if (!foundMember) {
            throw new Error(`Member ${memberName} not found.`);
        }
    
 
        let foundBook = this.books.find(book => book.title === bookTitle);
        if (!foundBook) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }
    
  
        let bookIndex = this.books.findIndex(book => book.title === bookTitle);
        this.books.splice(bookIndex, 1);
    
 
        return `Member ${memberName} has been assigned the book "${bookTitle}" by ${foundBook.author}.`;
    }

    generateReadingReport (){

        if(this.members.length === 0){
            return `No members in the book club.`
        }
        if(this.books.length === 0){
           return `No available books in the library.`
        }

        let result = [];
        result.push(`Available Books in ${this.library} library:`)
        for (const book of this.books) {
           result.push(`"${book.title}" by ${book.author}`)
        }

        return result.join('\n')
    }

}

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());


