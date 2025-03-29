import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "../pages/Home/HomePage"


export default function RutasComponents() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage></HomePage>}></Route>

        </Routes>
    </BrowserRouter>
    </>
  )
}
