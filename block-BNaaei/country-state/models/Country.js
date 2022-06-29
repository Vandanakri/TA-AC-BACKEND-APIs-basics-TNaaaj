var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema = new Schema (
  {
    name: { type: String },
    state: [{ type: mongoose.Schema.Types.ObjectId }],
    continent: { type: String },
    population: { type: String },
    ethnicity: [{ type: String }],
    neighbouring_countires: [{ type: mongoose.Schema.Types.ObjectId }],
    area: { type: String }

}, { timestamps: true });
 module.exports = mongoose.model('Country', countrySchema)