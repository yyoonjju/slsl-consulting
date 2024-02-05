import React from 'react';
import {Routes, Route} from "react-router-dom";
import './css/Main.css';
import './css/FAQ.css';
import './css/Header.css';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import Main from "./component/Main";
import FaQ from "./component/FAQ";
import Product from "./component/Product";
import InquiryInput from "./component/InquiryInput";
import ValueInput from "./component/ValueInput";
import MapSelect from "./component/MapSelect";
import ValueResult from './component/ValueResult.js';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/FaQ' element={<FaQ/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path="/MapSelect" element={<MapSelect/>}/>
        <Route path='/InquiryInput' element={<InquiryInput/>}/>
        <Route path="/ValueInput" element={<ValueInput/>}/>
        <Route path='/ValueResult' element={<ValueResult/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;