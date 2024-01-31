import React, {useState} from 'react';
import Map from './components/Map.js';
import Table from './components/Table.js';
import MapSelect from './components/MapSelect.js';
import './App.css';

function App() {
  const [selectData, setSelectData] = useState(null);

  const handleData = (dt) => {
    setSelectData(dt);
    console.log(dt);
  };
  return (
    <div>
      <div>
        <MapSelect onDataUpdate={handleData}/>
      </div>
      <div>
        <Map data={selectData}/>
        <Table data={selectData}/>
      </div>
    </div>
  );
}

export default App;
