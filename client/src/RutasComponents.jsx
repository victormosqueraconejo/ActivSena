import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "../public/HomePage"
import DashBoard from '../public/DashBoard'
import Ludicas from './pages/Ludicas/Ludicas'
import Alquiler from './pages/Alquiler/Alquiler'
import DetallerAlquiler from './pages/DetallesAlquiler/DetallerAlquiler'
import RegistroLudicas from './pages/RegistroLudicas/Registroludicas'
import Constancia from './pages/ConstanciaCertificado/Constancia'
import Combinar from "./pages/CombinarFA/Combinar"
import Rectificar from "./pages/Rectificar/Rectificar"



export default function RutasComponents() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage></HomePage>} />
            <Route path='/dash' element={<DashBoard/>}/>
            <Route path='/ludicas' element={<Ludicas />} />
            <Route path='/alquiler' element={<Alquiler />} />
            <Route path='/detalle' element={<DetallerAlquiler />} />
            <Route path='/registro' element={<RegistroLudicas />} />
            <Route path='/constancia' element={<Constancia />} />
            <Route path='/combinar' element={<Combinar />} />
            <Route path='/rectificar' element={<Rectificar />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}
