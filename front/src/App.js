import React from 'react';
import {Routes, Route} from "react-router-dom";
import './css/Main.css';
import Main from "./pages/Main";
import Introduce from "./pages/Introduce";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/introduce' element={<Introduce/>}/>
      </Routes>
    </div>
  );
}

export default App;