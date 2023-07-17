const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
};

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  res.render('flights/show', { title: 'Flight Details', flight });
}

async function index(req, res) {
  const flights = await Flight.find({});
  res.render('flights/index', { flights });
}

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: '' });
  }

  async function create(req, res) {
    req.body.flightNo = parseInt(req.body.flightNo);
  
    try {
      await Flight.create(req.body);
      res.redirect('/flights/');
    } catch (err) {
      console.error(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }