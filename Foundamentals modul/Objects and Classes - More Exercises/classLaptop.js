
class Laptop {
    constructor(info, quality) {

        this.info = {
            producer: info.producer,
            age: info.age,
            brand: info.brand,
        }
        this.isOn = false
        this.quality = quality

        this.price = 800 - info.age * 2 + (quality * 0.5)

    }

    turnOn() {
        this.isOn = true
        this.quality -= 1
        this.newPrice()

    }
    turnOff() {
        this.isOn = false
        this.quality -= 1
        this.newPrice()

    }

    showInfo() {
        return JSON.stringify(this.info)
    }

    newPrice(){
        this.price = this.price = 800 - this.info.age * 2 + (this.quality * 0.5)
    }


}

let info = {producer: "Lenovo", age: 1, brand: "Legion"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
laptop.turnOn()
laptop.turnOff()
console.log(laptop.isOn)


