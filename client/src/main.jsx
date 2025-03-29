import React, {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import RutasComponents from './components/RutasComponents.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <RutasComponents ></RutasComponents>
  
  </StrictMode>,
)
