const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PetShelter', {useNewUrlParser: true});



const PetSchema = new mongoose.Schema({
    petName: {type: String, required: true, unique:true, minlength: 3},
    petType: {type: String, required: true, minlength: 3},
    description: {type: String, required: true, minlength: 3},
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String},
    likes: {type: Number, default:0}
    },{timestamps: true});
const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;