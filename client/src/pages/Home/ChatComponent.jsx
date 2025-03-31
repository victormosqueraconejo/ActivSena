import React from 'react'
import "./styles/ChatComponent.css"
import ChatImg from "./img/chat-icon.svg"

export default function ChatComponent() {
  return (
    <section className='chat-container-home'>
      <a href="#anuncios" className='a-home'>
        <section className='chat-btn-home'>
          <img className='chat-icon-home img-home' src={ChatImg} alt="Chat IA ActivBot" />
          <h5 className='chat-title-home h5-home'>ActivBot</h5>
        </section>
      </a>
    </section>
  )
}