function solve(arr){

class Cat {
    constructor(name, age){
        this.name = name
        this.age = age
    }


    meow () {
        console.log(`${this.name}, age ${this.age} says Meow`);
        
    }
}

for (let catInfo of arr){
    let catInfoArg = catInfo.split(` `)

        let catName = catInfoArg[0]
        let catAge = +catInfoArg[1]
        let cat = new Cat(catName, catAge)
        cat.meow()
}

}

solve(['Mellow 2', 'Tom 5'])