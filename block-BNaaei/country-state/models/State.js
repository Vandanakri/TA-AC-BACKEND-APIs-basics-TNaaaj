var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stateSchema = new Schema(
  {
    name: { type: String },
    state: { type: mongoose.Schema.Types.ObjectId, ref: 'Country' },
    population: { type: Number },
    area: { type: Number },
    neighbouring_states: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'State' },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('State', stateSchema);