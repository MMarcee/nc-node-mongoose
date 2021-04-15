// @Schema:
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campsiteSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true

    },
    description: {
        type: String,
        requirede: true
    }
}, {
    timestamps: true
});

// @Model based on schema:
// Creates model name Campsite with capital C -- first argument given should have first letter capitalized and be a singular (not plural) version of the name of the collection being used for the model:
// This model is created for the campsites (plural) collection 
const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;
