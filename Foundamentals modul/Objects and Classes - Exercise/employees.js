function solve(arr) {

    class Employes {
        constructor(name, length) {
            this.name = name
            this.persoNaleNum = length
        }

        print() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.persoNaleNum}`);

        }
    }

    for (const command of arr) {



        let name = command
        let length = name.length

        let employeeNames = new Employes(name, length)
        employeeNames.print()


    }


}


solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)