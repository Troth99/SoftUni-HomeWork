class Hotel {
    constructor(initialBudget) {
        this.initialBudget = initialBudget;
        this.roomAvailability = {}; 
        this.supplyStock = {}; 
    }

    restockSupplies(supplies) {
        let messages = [];

        for (const element of supplies) {
            let [supplyName, supplyQuantity, supplyTotalPrice] = element.split(' ');
            supplyQuantity = Number(supplyQuantity);
            supplyTotalPrice = Number(supplyTotalPrice);

            if (this.initialBudget >= supplyTotalPrice) {
                if (this.supplyStock[supplyName]) {
                    this.supplyStock[supplyName] += supplyQuantity;
                } else {
                    this.supplyStock[supplyName] = supplyQuantity;
                }
                this.initialBudget -= supplyTotalPrice;
                messages.push(`Successfully stocked ${supplyQuantity} ${supplyName}`);
            } else {
                messages.push(`There was not enough money to restock ${supplyQuantity} ${supplyName}`);
            }
        }

        return messages.join('\n');
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        if (this.roomAvailability[roomType]) {
            return `The ${roomType} is already available in our hotel, try something different.`;
        }

        this.roomAvailability[roomType] = {
            neededSupplies: neededSupplies.map(s => {
                let [name, quantity] = s.split(' ');
                return { name, quantity: Number(quantity) };
            }),
            pricePerNight: pricePerNight
        };

        return `Great idea! Now with the ${roomType}, we have ${Object.keys(this.roomAvailability).length} types of rooms available, any other ideas?`;
    }

    showAvailableRooms() {
        let rooms = Object.entries(this.roomAvailability)
            .map(([roomType, { pricePerNight }]) => `${roomType} - $ ${pricePerNight}`)
            .join('\n');

        return rooms.length ? rooms : "Our rooms are not ready yet, please come back later...";
    }

    bookRoom(roomType) {
        if (!this.roomAvailability[roomType]) {
            return `There is no ${roomType} available, would you like to book another room?`;
        }

        let { neededSupplies, pricePerNight } = this.roomAvailability[roomType];

        for (let { name, quantity } of neededSupplies) {
            if (!this.supplyStock[name] || this.supplyStock[name] < quantity) {
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
            }
        }

        return `Your booking for ${roomType} has been confirmed! The price is $${pricePerNight} per night.`;
    }
}


//input 1
let hotel = new Hotel(500);

console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));


