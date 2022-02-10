import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { FeatureCollection } from '../type/FeatureCollection'
import { Filter } from '../type/Filter'
import { Status } from '../type/Status'
import { Tournage } from '../type/Tournage'
import type { RootState } from './store'

interface tournageState {
  status: Status,
  error: string,
  data: FeatureCollection
}

// Define the initial state using that type
const initialState: tournageState = {
  status: Status.initial,
  error: "",
  data: {
    type: "FeatureCollection",
    features: []
  }
}

//thunk function

export const fetchTournageByCode = createAsyncThunk('tournage/fetchByCode', async (filter?: Filter | undefined) => {
  console.log("fetch tournage filtré")
  const codeStr = JSON.stringify(filter.code)
  const paramCode = codeStr[3] + codeStr[4]
  const response = await fetch(process.env.REACT_APP_URL_BACK + 'tournages/' + paramCode)
  const tournage: Tournage[] = await response.json()
  return tournage
})

export const fetchTournage = createAsyncThunk('tournage/fetchAll', async () => {
  console.log("fetch tout les tournages")
  const response = await fetch(process.env.REACT_APP_URL_BACK + 'tournages/')
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
        state.status = Status.loading
      })
      .addCase(fetchTournage.fulfilled, (state, action) => {
        state.status = Status.loaded
        // Add any fetched posts to the array
        state.data.features = action.payload
      })
      .addCase(fetchTournage.rejected, (state, action) => {
        state.status = Status.failed
        state.error = action.error.message
      })

      .addCase(fetchTournageByCode.pending, (state, action) => {
        state.status = Status.loading
      })
      .addCase(fetchTournageByCode.fulfilled, (state, action) => {
        state.status = Status.loaded
        state.data.features = action.payload
      })
      .addCase(fetchTournageByCode.rejected, (state, action) => {
        state.status = Status.failed
        state.error = action.error.message
      })
  }
})

// Other code such as selectors can use the imported `RootState` type
export const selectTournage = (state: RootState) => state.tournage

export default tournageSlice.reducer