
import React, {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import Combinar from './pages/CombinarFA/Combinar'
import RutasComponents from './RutasComponents.jsx'
import DetallesAlquiler from './pages/DetallesAlquiler/DetallerAlquiler.jsx'
import Actividades from './pages/Actividades/Actividades.jsx'
import HorasLudicas from './pages/HorasLudicas/HorasLudicas.jsx'
import Ludicas from './pages/Ludicas/Ludicas.jsx'

import Calendario from './pages/CalendarioAdmin/Calendario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>


 
  <RutasComponents ></RutasComponents>
  
    
  {/* <Combinar />
   Importar 
   <Ludicas / >App*/}

  </StrictMode>,
)
