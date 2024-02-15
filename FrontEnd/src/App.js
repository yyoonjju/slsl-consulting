import React from 'react';
import {Routes, Route} from "react-router-dom";

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
        <Route path='/faq' element={<FaQ/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path="/mapselect" element={<MapSelect/>}/>
        <Route path='/inquiryinput' element={<InquiryInput/>}/>
        <Route path="/valueinput" element={<ValueInput/>}/>
        <Route path='/valueresult' element={<ValueResult/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;