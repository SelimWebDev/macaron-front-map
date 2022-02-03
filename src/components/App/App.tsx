import React, { useEffect, useState } from 'react';
import './App.css';
import Map from '../Map/Map'
import useFetch from '../../utils/hooks/utils.index';
import { FeatureCollection } from '../../type/FeatureCollection';
import { Filter } from '../../type/Filter';
import FilterSelect from '../FilterSelect/FilterSelect';

function App() {

  var allArrondissementFetch = useFetch("http://localhost:3001/arrondissements")
  var allTournageFetch = useFetch("http://localhost:3001/tournages/")

  // State setting by the fecth
  const [allArrondissement, setAllArondissement] = useState<FeatureCollection>({               // type featureCollection
    type: "FeatureCollection",
    features: []
  })

  const [allTournage, setAllTournage] = useState<FeatureCollection>({               // type featureCollection
    type: "FeatureCollection",
    features: []
  })

  const [tournagesSelected, setTournagesSelected] = useState<FeatureCollection>({
    type: "FeatureCollection",
    features: []
  })

  const [filters, setFilters] = useState<Array<Filter>>([])

  //State setting by user select
  const [filtersSelected, setFiltersSelected] = useState<Filter>()
  //var tournagesSelectedFetch = useFetch("http://localhost:3001/tournages/" + filtersSelected.code)

  useEffect(() => {

    if (allArrondissementFetch.isLoaded && allTournageFetch.isLoaded){  // si fetch sont chargé
      setAllArondissement({                                             // set tout arrondissement, tournage, et filter
        ...allArrondissement,
        features: allArrondissementFetch.data
      })

      setAllTournage({
        ...allTournage,
        features: allTournageFetch.data
      })

      setFilters(allArrondissementFetch.data.map((arrondissement) => {
        return {
          name: arrondissement.properties.l_ar,
          code: arrondissement.properties.c_arinsee
        }
      })) 
    }

    /*if(tournagesSelectedFetch.isLoaded){
      setTournagesSelected({
        ...tournagesSelected,
        features: tournagesSelectedFetch.data
      })
    }*/
  },[allTournageFetch.isLoaded, allArrondissementFetch.isLoaded])
  
  return (
    <div data-testid="App" id="App">
      {allArrondissementFetch.isLoaded && <FilterSelect filtersList={filters} update={setFiltersSelected}></FilterSelect>}
      {(allArrondissementFetch.isLoaded && allTournageFetch.isLoaded) && <Map tournagesSelected={tournagesSelected}arrondissements={allArrondissement} tournages={allTournage}></Map>}
    </div>
  );
}

export default App;
