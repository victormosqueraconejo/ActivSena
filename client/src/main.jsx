import React, {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import HomePage  from './pages/Home/HomePage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage ></HomePage>

  </StrictMode>,
)
