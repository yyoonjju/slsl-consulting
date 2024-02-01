import React from 'react';
import {Routes, Route} from "react-router-dom";
import './css/Main.css';
import './css/Product.css';
import Main from "./pages/Main";
import Product from "./pages/Product";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;