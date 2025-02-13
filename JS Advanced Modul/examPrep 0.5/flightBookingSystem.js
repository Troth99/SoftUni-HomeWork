class FlightBookingSystem {

    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0
    }

    addFlight(flightNumber, destination, departureTime, price) {

        let ifExists = this.flights.find(flight => flight.flightNumber === flightNumber)
        if (ifExists) {
            return `Flight ${flightNumber} to ${destination} is already available.`
        }
        this.flights.push({ flightNumber, destination, departureTime, price })
        return `Flight ${flightNumber} to ${destination} has been added to the system.`
    }

    bookFlight(passengerName, flightNumber) {


        let ifExists = this.flights.find(flight => flight.flightNumber === flightNumber)

        if (!ifExists){
            return `Flight ${flightNumber} is not available for booking.`
        }

        this.bookings.push({passengerName , flightNumber});
        this.bookingsCount ++

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
    }

    cancelBooking(passengerName, flightNumber) {

        let bookingIndex = this.bookings.findIndex(booking => booking.passengerName === passengerName && booking.flightNumber === flightNumber );
        if(bookingIndex === -1){
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        }

        this.bookings.splice(bookingIndex, 1)
        this.bookingsCount--

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
    }

    showBookings(criteria) {
        if (this.bookings.length === 0) {
            throw new Error("No bookings have been made yet.");
        }
    
        if (criteria === "all") {
            let result = `All bookings(${this.bookingsCount}):\n`;
            this.bookings.forEach(booking => {
                result += `${booking.passengerName} booked for flight ${booking.flightNumber}.\n`;
            });
            return result.trim();
        }
    
        if (criteria === "cheap" || criteria === "expensive") {
            let priceThreshold = 100;
            let isCheap = criteria === "cheap";
    
          
            let filteredBookings = this.bookings.filter(booking => {
                let flight = this.flights.find(f => f.flightNumber === booking.flightNumber);
                return flight ? (isCheap ? flight.price <= priceThreshold : flight.price > priceThreshold) : false;
            });
    
            if (filteredBookings.length === 0) {
                return isCheap ? "No cheap bookings found." : "No expensive bookings found.";
            }
    
            let result = isCheap ? "Cheap bookings:\n" : "Expensive bookings:\n";
            filteredBookings.forEach(booking => {
                result += `${booking.passengerName} booked for flight ${booking.flightNumber}.\n`;
            });
    
            return result.trim();
        }
    
        throw new Error("Invalid criteria. Use 'all', 'cheap', or 'expensive'.");
    }
    

}

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("all"));

