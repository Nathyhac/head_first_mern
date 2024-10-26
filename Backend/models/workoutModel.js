const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = Schema({
    title:{
        type:String,
        required:true
    },
    rep:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    }
}, {timestamps:true})

module.exports = mongoose.model('workout', workoutSchema)