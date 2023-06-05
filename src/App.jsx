import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ExcersisesDetails from './components/ExcersisesDetails'

import FullDetails from './components/FullDetails';

function App() {
  

  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Routes>
        <Route exact path='/' element={<Navbar />}/>
          <Route path='/ExcersisesDetails' element={<ExcersisesDetails />}/>
          <Route path='/FullDetails/:id' element={<FullDetails/>} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
