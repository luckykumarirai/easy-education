const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    email: String,
    password: String,
    qualification: String,
    experience: String,
    name: String
});

const Teacher = mongoose.model('Teacher',TeacherSchema);

module.exports = Teacher;