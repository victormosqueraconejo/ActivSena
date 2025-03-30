import React from 'react'
import MenuLateral from '../src/pages/DashBoard/DashBoardComponents/MenuLateral'
import HomeDash from "../src/pages/DashBoard/HomeDash"
import ActivBot from '../src/pages/DashBoard/DashBoardComponents/ActivBot'

import "../src/styles/App.css"
import "../src/styles/BotHp.css"
import "../src/styles/ColaViento.css"
import "../src/styles/global.css"
import "../src/styles/Resposive.css"

export default function DashBoard() {
  return (
    <>
    <section className='contenedor' >
        <MenuLateral></MenuLateral>
        <main className='contenido'>
            <HomeDash></HomeDash>
        </main>
        <ActivBot></ActivBot>
    </section>
    </>
  )
}
