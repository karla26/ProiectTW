const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: {type:String, require:true, unique:true},
    idMovie: {type : int}, 
    idUser: {type : int},
    startDate: {type : Date},
    endDate: {type : Date},
    processed: {type : Boolean}

},
{timestamps: true});

module.export = mongoose.model("Movie", MovieSchema);