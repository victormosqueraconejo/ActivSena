import React from 'react'

import { Data } from "../../../interfaces/AgendaModel"
import "../styles/index.css"

interface Props {
  data: Data,
  handleDragging: (dragging: boolean) => void
}

export const CardItem = ({ data, handleDragging }: Props) => {

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', `${data.id}`)
    handleDragging(true)
  }

  const handleDragEnd = () => handleDragging(false)

  return (
    <div
      className='card-container'
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <p>{data.content}</p>
    </div>
  )
}
