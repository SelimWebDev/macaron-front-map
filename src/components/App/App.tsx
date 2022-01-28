import React from 'react';
import './App.css';
import Map from '../Map/Map'
import useFetch from '../../utils/hooks';

function App() {

  var { isLoaded, data } = useFetch("http://localhost:3001/tournages")
  const allArrondissement = data;

  return (
    <div data-testid="App" id="App">
      {isLoaded && <Map arrondissement={allArrondissement} ></Map>}
    </div>
  );
}

export default App;
