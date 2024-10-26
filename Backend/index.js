require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workouts = require('./routes/workoutRoutes')
const app = express()


app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.meth)
    next()

})
app.use('/api/workouts', workouts)

//connect to mongodb
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(" database connected successfully and listening on port", process.env.PORT)
    })
})
.catch((error)=>{
    console.log("error happened during database connection"+error)
})

