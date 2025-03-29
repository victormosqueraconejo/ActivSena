import React, {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import HeaderHome from "./pages/Home/HeaderHome"


import "../src/pages/Home/styles/indexHome.css"
import "../src/pages/Home/styles/HeaderHome.css"
import AlquilerApp from './pages/Alquiler/Alquiler'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HeaderHome />

  
  </StrictMode>,
)
