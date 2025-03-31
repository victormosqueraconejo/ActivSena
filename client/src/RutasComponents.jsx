import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "../public/HomePage"
import DashBoard from '../public/DashBoard'
import DashBoardAp from '../public/DashBoardAp'
import DashBoardIn from '../public/DashBoardIn'


export default function RutasComponents() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage></HomePage>} />
            <Route path='/dash' element={<DashBoard/>}/>
            <Route path='/dashap' element={<DashBoardAp/>}/>
            <Route path='/dashin' element={<DashBoardIn/>}/>
        
        </Routes>
    </BrowserRouter>
    </>
  )
}
