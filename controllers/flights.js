const Flight = require('../models/flight');

function newFlight(req, res, next) {
    res.render('flights/new', {
        title: 'New Flights'
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
    show
}