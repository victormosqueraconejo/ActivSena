import React, {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import RutasComponents from './RutasComponents.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RutasComponents />
  
  </StrictMode>,
)
