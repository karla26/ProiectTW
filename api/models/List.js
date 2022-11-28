const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: {type:String, require:true, unique:true},
    genre: {type :String},
    content: {type : Array}

},
{timestamps: true});

module.export = mongoose.model("Movie", MovieSchema);