import { useState } from "react"



const WorkoutForm = () => {
    const [rep, setRep] = useState('')
    const [load, setLoad] = useState('')
    const [title, setTitle] = useState('')
    const [error, setError] = useState(null)

    const submitWorkout = async (e) => {
        e.preventDefault()
        const workout = { title, rep, load }

        const response = await fetch("/api/workouts", {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': "application/json"
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            setLoad('')
            setTitle('')
            setRep('')
            console.log("new workout added successfully")
        }
    }

    return (
        <div>
            <form method="post" onSubmit={submitWorkout}>
                <h3>Add new workout</h3>

                <label htmlFor="title">title</label>
                <input type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} />

                <label htmlFor="title">load(KG)</label>
                <input type="number"
                    onChange={(e) => setLoad(e.target.value)}
                    value={load} />

                <label htmlFor="title">reps</label>
                <input type="text"
                    onChange={(e) => setRep(e.target.value)}
                    value={rep} />
                <button >Submit Workout</button>
                {error &&
                    <div className="error"> {error}</div>}
            </form>
        </div>
    )
}

export default WorkoutForm