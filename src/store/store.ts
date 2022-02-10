import { configureStore } from '@reduxjs/toolkit'
import arrondissementReducer from './arrondissementSlice'
import tournageReducer from './tournageSlice'

const reducer = {
    arrondissement: arrondissementReducer,
    tournage: tournageReducer
}

export const store = configureStore ({reducer: reducer})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch