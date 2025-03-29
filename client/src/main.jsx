import React, {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import HeaderHome from "./pages/Home/HeaderHome"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderHome />
  </StrictMode>,
)
