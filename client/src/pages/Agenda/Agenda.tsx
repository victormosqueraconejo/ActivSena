import React from 'react'
import "./styles/index.css"
import {DragAndDrop} from './Components/ArrastrarYSoltar'

export default function Agenda() {
  return (
    <div className="container-main flex">
      <DragAndDrop />

    </div>
  )
}
