import React, {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import RutasComponents from './RutasComponents.jsx'
import Alquiler from './pages/Alquiler/Alquiler.jsx'
import DetallesAlquiler from './pages/DetallesAlquier/DetallesAlquiler.jsx'
import Actividades from './pages/Actividades/Actividades.jsx'
import RegistroLudicas from './pages/RegistroLudicas/Registroludicas.jsx'
import Constancia from './pages/ConstanciaCertificado/Constancia.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Constancia />
  
  </StrictMode>,
)
