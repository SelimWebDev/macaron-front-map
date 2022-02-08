import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Arrondissement } from '../type/Arrondissement'
import { FeatureCollection } from '../type/FeatureCollection'
import { Filter } from '../type/Filter'
import type { RootState } from './store'

interface arrondissementState {
  isLoaded: boolean,
  error: string,
  data: FeatureCollection,
  filters: Filter[]
}

// Define the initial state using that type
const initialState: arrondissementState = {
  isLoaded: false,
  error: "",
  data: {
    type: "FeatureCollection",
    features: []
  },
  filters: []
}

//thunk function
export const fetchArrondissement = createAsyncThunk('arrondissements/fetchAll', async () => {
  console.log("fetch arrondissement")
  const response = await fetch('http://localhost:3001/arrondissements')
  const arrondissements: Arrondissement[] = await response.json()
  return arrondissements
})

export const arrondissementSlice = createSlice({
  name: 'arrondissement',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchArrondissement.pending, (state, action) => {
        //state.status = 'loading'
      })
      .addCase(fetchArrondissement.fulfilled, (state, action) => {
        state.isLoaded = true
        state.data.features = action.payload
        for (let i=0; i< action.payload.length;i++){
          state.filters.push({
            name: action.payload[i].properties.l_ar,
            code: action.payload[i].properties.c_arinsee
          })
        }
      })
      .addCase(fetchArrondissement.rejected, (state, action) => {
        state.isLoaded = true
        state.error = action.error.message
      })
  }
})

// Other code such as selectors can use the imported `RootState` type
export const selectArrondissement = (state: RootState) => state.arrondissement
export const selectArrondissementFilter = (state: RootState) => state.arrondissement.filters

export default arrondissementSlice.reducer