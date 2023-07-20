const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
	new: newTicket,
	create,
};

function newTicket(req, res) {
	res.render('tickets/new', { flightId: req.params.id });
}

async function create(req, res) {
  const flightId = req.params.id;
  req.body.flight = flightId;

  try {
    await Ticket.create(req.body);
    res.redirect(`/flights/${flightId}`);
  } catch (error) {
    res.render('error', { message: error.message });
  }
}

