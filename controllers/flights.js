const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

function newFlight(req, res, next) {
    res.render('flights/new', {
        title: 'New Flights'
    })
}

async function addDes(req, res, next) {
    const flight = await Flight.findById(req.params.id)
    try {
        flight.destinations.push(req.body);
        await flight.save();
    } catch(err) {
        console.log(err)
    }
    res.redirect(`/flights/${flight._id}`);
}

async function detail(req, res, next) {
    const flight = await Flight.findById(req.params.id).populate('tickets');
    const tickets = await Ticket.find({})
    res.render(`flights/detail`, {
        title: 'Detail',
        flight,
        tickets
    })
}

async function show(req, res, next) {
    const flights = await Flight.find({});
    res.render('flights/show', {
        flights: flights,
        title: 'All Flights'
    })
}

async function create(req, res, next) {
    req.body.flightNo = Number(req.body.flightNo)
    console.log(req.body)
    try {
        await Flight.create(req.body);
    } catch(err) {
        console.log(err)
        res.render('flights', {
            title: 'New Flights'
        })
    }
    res.render('flights/new', {
        title: 'New Flights'
    })

}

module.exports = {
    new: newFlight,
    create,
    show,
    detail,
    addDes
}