const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index
};

async function index(req, res) {
    const flights = await Flight.find ({})
    res.render('flights/index', {
        flights
    })
}

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: '' });
  }

  async function create(req, res) {
    req.body.flightNo = parseInt(req.body.flightNo);
  
    try {
      await Flight.create(req.body);
      res.redirect('/flights/new');
    } catch (err) {
      console.error(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }