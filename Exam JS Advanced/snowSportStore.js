class SnowSportStore {

    constructor(storeName){
        this.storeName = storeName
        this.availableEquipment = [];
        this.revenue = 0;
    }

    addEquipment(type, price, condition) {
        if(type === ''){
            throw new Error("Invalid equipment details!")
        }
        if(typeof price !== 'number' || price < 0){
            throw new Error("Invalid equipment details!")
        }
        if(condition === ""){
            throw new Error("Invalid equipment details!")
        }

        this.availableEquipment.push({type, price, condition})
        return `New equipment added: ${type} / ${condition} condition - ${price.toFixed(2)}$.`
    }

    rentEquipment(type, rentalDays) {

        let isExisting = this.availableEquipment.find(equipment => equipment.type === type && equipment.condition === 'used')

        if(!isExisting){
            throw new Error(`${type} is not available for rent!`)
        }
       let rentalCost = isExisting.price * 0.1 * rentalDays
       this.revenue += rentalCost

       return `${type} rented for ${rentalDays} days. Total cost: ${rentalCost.toFixed(2)}$.`

    }
    sellEquipment(type) {
        if(type === ''){
            throw new Error("Invalid equipment details!")
        }
        let isExisting = this.availableEquipment.find(
            equipment => equipment.type === type && equipment.condition === 'new'
        )
        if(!isExisting){
            throw new Error(`${type} is not available for purchase!`)
        }
        this.revenue += isExisting.price;
        this.availableEquipment = this.availableEquipment.filter(euqipment => euqipment !== isExisting)
        return `${type} has been sold for ${isExisting.price.toFixed(2)}$.`;
    }

    showRevenue() {

        if(this.revenue === 0){
            return `Nothing has been sold or rented.`
        }else {
            return `${this.storeName} has made a total revenue of ${this.revenue.toFixed(2)}$.`
        }
    }

}


let store = new SnowSportStore('Alpine Gear Shop');
console.log(store.addEquipment('Ski', 500, 'new'));
console.log(store.addEquipment('Boots', 100, 'used'));
console.log(store.addEquipment('Helmet', 200, 'new'));
console.log(store.addEquipment('Snowboard', 300, 'used'));
console.log(store.sellEquipment('Ski'));
console.log(store.sellEquipment('Helmet'));
console.log(store.rentEquipment('Snowboard', 3));
console.log(store.showRevenue());


