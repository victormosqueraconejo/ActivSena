import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "../public/HomePage"
import DashBoard from '../public/DashBoard'


export default function RutasComponents() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage></HomePage>} />
            <Route path='/dash' element={<DashBoard/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}
