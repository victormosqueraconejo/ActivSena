import React,{ useState } from "react";
import "./styles/ChatStyle.css";
import chatai from '../ChatAI/img/chat-icon.svg'
export default function ChatAI() {
 

  const [messages, setMessages] = useState([
    { text: "Hola! Soy Activbot 'como estas ?¿En qué puedo ayudarte El dia de hoy , sere tu acompañante en esta aplicacion innovadora?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botReply = { text: "Hola soy una prueba , un gusto conocerte!", sender: "bot" };
      setMessages(prev => [...prev, { text: "", sender: "spacer" }, botReply]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div className="chat-header">
          <img src={chatai} alt="Chat Logo" className="chat-logo" />
          <h2 className="chat-title">ACTIV BOT</h2>
        </div>
        <div className="messages-container">
          {messages.map((msg, index) => (
            msg.sender === "spacer" ? (
              <div key={index} className="message-spacer"></div>
            ) : (
              <div key={index} className={`message-wrapper ${msg.sender}`}>
                <div className={`message ${msg.sender}`}>{msg.text}</div>
              </div>
            )
          ))}
        </div>
        <div className="input-container">
          <input
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe un mensaje..."
          />
          <button
            className="send-button"
            onClick={sendMessage}>
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
