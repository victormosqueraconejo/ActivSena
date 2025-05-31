import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "../public/HomePage"
import DashBoard from '../public/DashBoard'
import DashBoardAp from '../public/DashBoardAp'
import DashBoardIn from '../public/DashBoardIn'
import InicioSesion from '../public/InicioSesion'
import Registro from '../public/Registro'
import Actividades from './pages/Actividades/Actividades'
import Agenda from "./pages/Agenda/Agenda"
export default function RutasComponents() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage></HomePage>} />
            <Route path='/iniciosesion' element={<InicioSesion />} />
            <Route path='/registro' element={<Registro />} />
            <Route path='/dash' element={<DashBoard/>}/>
            <Route path='/dashap' element={<DashBoardAp/>}/>
            <Route path='/dashin' element={<DashBoardIn/>}/>
            <Route path='/actividades' element={<Actividades />} />
            <Route path='/agenda' element={<Agenda />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}
