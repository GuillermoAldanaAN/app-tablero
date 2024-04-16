import React from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";


import PresentacionPage from './pages/Presentacion';
import "./index.css";
import { NavBar } from './components/Nav';
import ListadoPage from './pages/Listado';

function App() {
  return (
    <React.Fragment>
      <NavBar />
     <Routes>
        <Route path="/" element={ <PresentacionPage /> } />
        <Route path="/listado" element={ <ListadoPage /> } />
      </Routes>
    </React.Fragment>
  )
}

export default App
