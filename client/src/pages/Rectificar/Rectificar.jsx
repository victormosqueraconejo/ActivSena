import React from 'react'
import './styles/RectificarStyle.css'

import futbol from './img/futbol.jpg'
import basket from './img/basket.jpeg'
import tenis from './img/tenis.jpg'
import cuentas from './img/cuentas.jpg'
import cacao from './img/cacao.jpg'
import academia from './img/academia.jpg'
import gym from './img/gym.jpg'

export default function Rectificar() {
  return (
    <>
    <div className='body scren'>
      <section className='section-rectificar'>
        <h2 className='h2'>EVENTOS APROBADOS</h2>
        <div className='card-container'>
          <div className='card-dark card text'>
            <h3 className='h3'>Fútbol</h3>
            
            <img src={futbol} alt='imagen futbol'/>
            <h3>APROBADO</h3>
            <ul className='p2 bordado'>
              <p>EL EVENTO SE APROBO CORRECTAMENTE FUE UN EXITO</p>
            </ul>
            <button className='botonar'>EDITAR</button>
          </div>
          <div className='card-dark card text'>
            <h3 className='h3'>Baloncesto</h3>
            <img src={basket} alt='imagen basket' />  
            <h3>APROBADO</h3>
            <ul className='p2 bordado'>
              <p>EL EVENTO SE APROBO CORRECTAMENTE FUE UN EXITO</p>
            </ul>
            <button className="botonar">EDITAR</button>
          </div>
          <div className='card-dark card text'>
            <h3 className='h3'>Tenis</h3>
            <img src={tenis} alt="imagen tenis" />
            <h3>APROBADO</h3>
            <div className='p2 bordado'>
              <p>EL EVENTO SE APROBO CORRECTAMENTE FUE UN EXITO</p>
            </div>
            <button className='botonar'>EDITAR</button>
          </div>
        </div>
      </section>

      <section className='section-rectificar'>
        <h2 className='h2'>EVENTOS PENDIENTES</h2>
        <div className='card-container'>
          <div className='card-dark card text'>
            <h3 className='h3'>Dialogos</h3>
            <img src={cuentas} alt='imagen cuentas' /> 
            <h3>APLAZADO</h3>
            <div className='p2 bordado'>
              <p>Evento aplazado, dia y fecha por confirmar</p>
            </div>
            <button className='botonar'>EDITAR</button>
          </div>
          <div className='card-dark card text'>
            <h3 className='h3'>Cacao Fest</h3>
            <img src={cacao} alt="imagen cacao" />
            <h3>APLAZADO</h3>
            <div className='p2 bordado'>
              <p>El evento se aplazo, no se inscribieron suficientes Aprendices</p>
            </div>
            <button className='botonar'>EDITAR</button>
          </div>
          <div className='card-dark card text'>
            <h3 className='h3'>Indo Academia</h3>
            <img src={academia} alt="imagen academia" />
            <h3>APLAZADO</h3>
            <div className='p2 bordado'>
            <p>Se encuentra pendiente, a la espera de confirmar!!</p>
            </div>
            <button className='botonar'>EDITAR</button>
          </div>
        </div>
      </section>

      <section className='section-rectificar'>
        <h2 className='h2'>EVENTOS RECHAZADOS</h2>
        <div className='card-container'>
          <div className='card-dark card text'>
            <h3 className='h3'>ACTIVIDAD FISICA</h3>
            <img src={gym} alt="imagen fisica" />
            <h3>RECHAZADO</h3>
            <div className='p2 bordado'>
            <p>No hay Instructores que esten a cargo de este evento!!</p>
            </div>
            <button className='botonar'>EDITAR</button>
          </div>
        </div>
      </section>
    </div>
    
    </>
  )
}

