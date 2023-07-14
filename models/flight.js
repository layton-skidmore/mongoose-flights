const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
      type: String,
      enum: ['American', 'Southwest', 'United'],
      required: true
    },
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
      default: 'DEN'
    },
    flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999
    },
    departs: {
      type: Date,
      required: true
    }
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Flight', flightSchema);