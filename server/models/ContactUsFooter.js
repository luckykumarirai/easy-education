const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactUsSchemaFooter = new Schema({
    email: String,
    message: String

});

const ContactSchemaFooter = mongoose.model('ContactSchemaFooter',ContactUsSchemaFooter);

module.exports = ContactSchemaFooter;