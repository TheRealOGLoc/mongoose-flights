const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

async function showTicket(req, res, next) {
    const tickets = await Ticket.find({});
    res.render('tickets/new', {
        title: 'Add Tickets',
        tickets
    })
}

async function create(req, res, next) {
    req.body.price = Number(req.body.price);
    try {
        await Ticket.create(req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect('/tickets');
}

async function addToTicket(req, res, next) {
    const flight = await Flight.findById(req.params.id);
    flight.tickets.push(req.body.ticketID);
    try {
        await flight.save();
    } catch(err) {
        console.log(err);
    }
    res.redirect(`/flights/${req.params.id}`);
}

module.exports = {
    new: showTicket,
    create,
    addToTicket
}