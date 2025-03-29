import React from 'react'
import "../src/index.css"
import "./styles/ChatComponent.css"


export default function ChatComponent() {

  return (
    <section className='chat-container'>
    <a href="#anuncios">
        <section className='chat-btn' >
            <img className='chat-icon' src="/chat-icon.svg" alt="Chat IA ActivBot" />
            <h5>ActivBot</h5>
        </section>
    </a>

    </section>
  )
}
