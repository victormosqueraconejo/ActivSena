import React, {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import Combinar from './pages/CombinarFA/Combinar'
import RutasComponents from './RutasComponents.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Combinar />
    
      <RutasComponents ></RutasComponents>
  </StrictMode>,
)
