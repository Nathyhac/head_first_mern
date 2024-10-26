//the mian function of the controller is to abstract and define different database operations on the model making the the routes simple
const Workout = require('../models/workoutModel')
const mongoose = require('mongoose');


//get all wokouts
const getWorkouts = async(req,res)=>{
   const workouts = await Workout.find({}).sort({createdAt: - 1})
   res.status(200).json(workouts)
 }

//get a single wokout
const getworkout  = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).res.json({mssg:"no such workout"})
    }
    const workout  = await Workout.findById(id)

    if(!workout){
      return  res.status(400).json({error:"no such workout "})
    }

    res.status(200).json(workout)
}

//create a workout
const createWorkout = async (req,res)=>{
    const {title, rep, load}=req.body
    try{
     const workout = await Workout.create({title,rep,load})
     res.status(200).json(workout)
    }catch(error){
     res.status(400).json({error:error.message})
    }
 
 }

//delete workout
 const deleteWorkout = async (req,res) => {

  const {id} = id.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({mssg:"no such workout"})
  }

  const workout = await Workout.findOneAndDelete({_id:id})
    
  if(!workout){
    return  res.status(400).json({error:"no such workout "})
  }
   
  res.status(200).json(workout)

 }
//update workout
const updateWorkout = async(req,res)=>{
  const {id} = id.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({mssg:"no such workout"})
  }
  const workout = await Workout.findOneAndUpdate({_id:id}, {...req.body}) 

  if(!workout){
    return  res.status(400).json({error:"no such workout "})
  }
   
  res.status(200).json(workout)

}

module.exports={
    createWorkout,
    getWorkouts,
    getworkout,
    updateWorkout,
    deleteWorkout
}