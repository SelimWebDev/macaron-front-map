import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { create } from 'domain'
import { FeatureCollection } from '../type/FeatureCollection'
import { Filter } from '../type/Filter'
import { Tournage } from '../type/Tournage'
import type { RootState } from './store'

interface tournageState {
  status: string,
  error: string,
  data: FeatureCollection
}

// Define the initial state using that type
const initialState: tournageState = {
  status: "",
  error: "",
  data: {
    type: "FeatureCollection",
    features: []
  }
}

//thunk function
export const fetchTournageByCode = createAsyncThunk('tournage/fetchByCode', async (filter?: Filter) => {
  console.log("fetch tournage filtré")
  const codeStr = JSON.stringify(filter.code)
  const paramCode = codeStr[3] + codeStr[4]
  const response = await fetch('http://localhost:3001/tournages/' + paramCode)
  const tournage: Tournage[] = await response.json()
  return tournage
})

export const fetchTournage = createAsyncThunk('tournage/fetchAll', async () => {
  console.log("fetch tout les tournages")
  const response = await fetch('http://localhost:3001/tournages/')
  const tournage: Tournage[] = await response.json()
  return tournage
})


export const tournageSlice = createSlice({
  name: 'tournage',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchTournage.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchTournage.fulfilled, (state, action) => {
        state.status = "loaded"
        // Add any fetched posts to the array
        state.data.features = action.payload
      })
      .addCase(fetchTournage.rejected, (state, action) => {
        state.status = "error"
        state.error = action.error.message
      })

      .addCase(fetchTournageByCode.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchTournageByCode.fulfilled, (state, action) => {
        state.status = 'loaded'
        state.data.features = action.payload
      })
      .addCase(fetchTournageByCode.rejected, (state, action) => {
        state.status = "error"
        state.error = action.error.message
      })
  }
})

// Other code such as selectors can use the imported `RootState` type
export const selectTournage = (state: RootState) => state.tournage

export default tournageSlice.reducer