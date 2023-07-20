const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
};

async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.id).populate('tickets');
    res.render('flights/show', { title: 'Flight Details', flight });
  } catch (error) {
    res.render('error', { message: error.message });
  }
}

async function index(req, res) {
  try {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
  } catch (error) {
    res.render('error', { message: error.message });
  }
}

function newFlight(req, res) {
  res.render('flights/new', { errorMsg: '' });
}

async function create(req, res) {
  req.body.flightNo = parseInt(req.body.flightNo);

  try {
    await Flight.create(req.body);
    res.redirect('/flights/');
  } catch (error) {
    res.render('flights/new', { errorMsg: error.message });
  }
}