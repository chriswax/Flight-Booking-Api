const {Flights} = require("../models/Flight");
const {v4: uuid} = require("uuid");  //to give unique ids

//////get all users
exports.getFlights = async (req, res) => {
    try{
        const flights = Flights;
        res.status(200).json({
            message: "All Flights",
            flights: flights
        })
    }catch (err){
        res.status(500).json({message: err.message});
    }
}

/////get single Flight
exports.getFlight = async (req, res) => {
    try{
         let id = req.params.id;
         const flight = Flights.find((flight) => flight.id === id);
         res.status(200).json({
            message: "Flight Found!",
            flight: flight,
         });
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

/////create a new flight
exports.createFlight = async (req, res) => {
    try{
        const { title, time, price, date} =await req.body;
        const newFlight = {
            id: uuid(),
            title,
            time,
            price,
            date,
            //dateAdded: new Date().toLocaleDateString(),
            //timeAdded: new Date().toLocaleTimeString()
        };
        Flights.push(newFlight);
        res.status(201).json({
            message: "Flight Created",
            newFlight,
        });
    }catch(err){
        res.status(500).json({message: err.message});
    }
}


////Update/ edit fligh
exports.updateFlight = async(req, res) => {
    try{
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        const { title, time, price, date} = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;
        res.status(200).json({
            message: "Flight Updated",
            flight,
        });
    }catch (err){
        res.status(500).json({message: err.message});
    }
}

/////Delete Flight
exports.deleteFlight = async (req, res) => {
    try{
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        Flights.splice(Flights.indexOf(flight), 1);
        res.status(200).json({
            message: "User Deleted",
            flight,
        });
    }catch(err){
        res.status(500).json({message: err.message});
    }

}