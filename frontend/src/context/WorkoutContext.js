import { createContext } from "react";

const WorkoutContext = createContext()

export const WorkoutContextProvider = ({ children }) => {
    return (
        <WorkoutContext.Provider>
            {children}
        </WorkoutContext.Provider>
    )
}