import React, {use, useState} from "react"
import { Status , Data} from "../../../interfaces/AgendaModel"
import { ContainerCards } from "./ContenedorItems"
import { data } from "../../../assets/datos"
import "../styles/index.css"


const typesHero: Status[] = ['good', 'normal', 'bad']

export const DragAndDrop = () => {

  const [isDragging, setIsDragging] = useState(false)
  const [listItems, setListItems] = useState<Data[]>(data)

  const handleDragging = (dragging: boolean) => setIsDragging(dragging)

  const handleUpdateList = (id: number, status: Status) => {

       let card = listItems.find(item => item.id === id)

       if (card && card.status !== status) {

           card.status = status

           setListItems( prev => ([
                card!,
                ...prev.filter(item => item.id !== id)
            ]))
       }
   }

    return (
        <div className="grid">
            {
                typesHero.map(container => (
                    <ContainerCards
                        items={listItems}
                        status={container}
                        key={container}

                        isDragging={isDragging}
                        handleDragging={handleDragging}
                        handleUpdateList={handleUpdateList}
                    />
                ))
            }
        </div>
    )
}


