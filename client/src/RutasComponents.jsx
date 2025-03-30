import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "../public/HomePage"
import DashBoard from '../public/DashBoard'
import Ludicas from './pages/Ludicas/Ludicas'
import Alquiler from './pages/Alquiler/Alquiler'
import DetallerAlquiler from './pages/DetallesAlquiler/DetallerAlquiler'
import RegistroLudicas from './pages/RegistroLudicas/Registroludicas'
import Constancia from './pages/ConstanciaCertificado/Constancia'
import InicioSesion from '../public/InicioSesion'
import Registro from "../public/Registro"
import Combinar from './pages/CombinarFA/Combinar'
import Rectificar from './pages/Rectificar/Rectificar'


export default function RutasComponents() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage></HomePage>} />
            <Route path='/dash' element={<DashBoard/>}/>
            <Route path='/alquiler' element={<Alquiler/>}/>
            <Route path='/detalleralquiler' element={<DetallerAlquiler/>}/>
            <Route path='/registroludicas' element={<RegistroLudicas/>}/>
            <Route path='/constanciaCertificado' element={<Constancia/>}/>
            <Route path='/iniciosesion' element={<InicioSesion />} />
            <Route path="/registro" element={<Registro />} />
            <Route path='/combinar' element={<Combinar />}></Route>
            <Route path='/rectificar' element={<Rectificar />}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}
