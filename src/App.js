import React from 'react'
import Header from './Components/Header'
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import View from './Components/View';
function App() {
  return (
   <>
  
   <Header />
   <Routes>
   <Route exact path="/Home" element={<Home />} />
   <Route exact path="/View" element={<View />} />

   </Routes>

   </>
  )
}

export default App