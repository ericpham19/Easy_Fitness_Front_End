import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    notes: '',
    exercises: [],
    sets: [],
    duration: null
}

const SessionReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        add_exercise: (state, payload) => {
            return {
                ...state,
                exercises: [...state.exercises, payload.payload],
                sets: [...state.sets, {id: state.sets.length + 1, number: 1, exercise_id: payload.payload.id, weight: null, reps: null, completed: false}]
            }
        },
        add_set: (state, payload) => {
            return {
                ...state,
                sets: [...state.sets, { id: state.sets.length + 1, ...payload.payload }]
            }
        },
        update_set: (state, payload) => {
            let sets = [...state.sets]
            let index = state.sets.findIndex((s) => s.id == payload.payload.id)
            sets[index] = {...sets[index], weight: payload.payload.weight, reps: payload.payload.reps, completed: payload.payload.completed}
            return {
                ...state,
                sets: sets
            }
        },
        set_duration: (state, payload) => {
            return {
                ...state,
                duration: payload.payload
            }
        },
        set_notes: (state, payload) => {
            return {
                ...state,
                notes: payload.payload
            }
        },
        cancelSession: (state, payload) => {
            return {
                ...initialState
            }  
        }
    }
})
    // console.log(userSlice)
export const { add_exercise, add_set, update_set, set_duration, set_notes, cancelSession } = SessionReducer.actions

export default SessionReducer.reducer