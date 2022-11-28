const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: {type:String, require:true, unique:true},
    //TO DO: combine duration, movie director -> details
    details: {type :String}, 
    genre: {type :String},
    releaseDate: {type: Number},
    duration: {type: Number},
    img: {type : Boolean},
    imgThumb: {type : Boolean},
    video: {type : String}

},
{timestamps: true});

module.export = mongoose.model("Movie", MovieSchema);