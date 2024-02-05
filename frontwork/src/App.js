// import MainTest from "./components/MainTest";
import React from "react";
import { Route, Routes } from "react-router-dom";
import InquiryInput from "./components/InquiryInput";
import Main from "./components/Main";
import Product from "./components/Product";
import ValueInput from "./components/ValueInput";

function App() {
  return (
    <Routes>
      <Route path ="/" element={<Main/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/ask" element={<InquiryInput/>}/>
      <Route path="/ValueInput" element={<ValueInput/>}/>
    </Routes>
  );
}

export default App;
