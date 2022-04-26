const mongoose  = require('mongoose')


const  schema = new mongoose.Schema({
    movieName:{
        type: String,
    },
    Rating:{
        type: Number,
    },
    Cast:{
        type:Array,
    },
    Genre:{
        type:String,
    },
    releaseDate : { type : String, },
})

module.exports = mongoose.model("Movies", schema)