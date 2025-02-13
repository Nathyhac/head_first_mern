const express=require('express')
const {createWorkout,getWorkouts,getworkout, deleteWorkout,updateWorkout}
=require('../controllers/workoutController')

const router = express.Router()

router.get('/',getWorkouts)

router.get('/:id',getworkout)

router.post('/', createWorkout)

router.delete('/:id',deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports=router;