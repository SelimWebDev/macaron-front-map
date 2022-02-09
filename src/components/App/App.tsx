import React, { useEffect, useState } from 'react';
import './App.css';
import Map from '../Map/Map'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/utils.index';
import { FeatureCollection } from '../../type/FeatureCollection';
import FilterSelect from '../FilterSelect/FilterSelect';
import { fetchArrondissement, selectArrondissement, selectArrondissementFilter } from '../../store/arrondissementSlice';
import { fetchTournage, fetchTournageByCode, selectTournage } from '../../store/tournageSlice'
import { RootState } from '../../store/store';
import { Filter } from '../../type/Filter';

function App() {

  const dispatch = useAppDispatch()
  const arrondissementState = useAppSelector((state: RootState) => selectArrondissement(state))
  const filters = useAppSelector((state :RootState) => selectArrondissementFilter(state))
  const tournageState = useAppSelector((state: RootState) => selectTournage(state))

  var [filterSelected, setFilterSelected] = useState<Filter>()

  useEffect(() => {
    if(filterSelected){
      dispatch(fetchTournageByCode(filterSelected))
    } else {
      dispatch(fetchArrondissement())
      dispatch(fetchTournage())
    }
  },[filterSelected])

  return (
    <div data-testid="App" id="App">
      <FilterSelect filtersList={filters} update={setFilterSelected}></FilterSelect>
      <Map arrondissements={arrondissementState.data} tournages={tournageState.data}></Map>
    </div>
  );
}

export default App;
