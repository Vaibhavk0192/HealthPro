import React, { useState, useEffect, useRef } from 'react';
import "./chatbot.css"

export const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(true);
  const [userMessage, setUserMessage] = useState('');
  const chatboxRef = useRef(null);
  const chatInputRef = useRef(null);

  useEffect(() => {
    chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
  }, [userMessage]);

  const createChatLi = (message, className) => {
    return (
      <li className={`chat ${className}`}>
        {className === 'outgoing' ? null : (
          <>
            <span className="material-symbols-outlined">smart_toy</span>
            <p></p>
          </>
        )}
        <p>{message}</p>
      </li>
    );
  };

  const generateResponse = async () => {
    const API_KEY = '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';
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const messageElement = chatboxRef.current.querySelector('li.incoming p');

    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: userMessage }],
        }),
      };

      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
      const responseMessage = data.choices[0].message.content.trim();
      messageElement.textContent = responseMessage;
    } catch (error) {
      messageElement.classList.add('error');
      messageElement.textContent = 'Oops! Something went wrong. Please try again.';
    } finally {
      chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
    }
  };

  const handleChat = () => {
    const trimmedMessage = userMessage.trim();
    if (!trimmedMessage) return;

    setUserMessage('');
    chatInputRef.current.style.height = '55px';

    const chatbox = chatboxRef.current;
    chatbox.appendChild(createChatLi(trimmedMessage, 'outgoing'));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
      const incomingChatLi = createChatLi('Thinking...', 'incoming');
      chatbox.appendChild(incomingChatLi);
      chatbox.scrollTo(0, chatbox.scrollHeight);
      generateResponse();
    }, 600);
  };

  const handleInputChange = (e) => {
    chatInputRef.current.style.height = '55px';
    chatInputRef.current.style.height = `${chatInputRef.current.scrollHeight}px`;
    setUserMessage(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleChat();
    }
  };

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className={`chatbot ${showChatbot ? 'show-chatbot' : ''}`}>
      <button className="chatbot-toggler" onClick={toggleChatbot}>
        <span className="material-symbols-rounded">chat</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot">
        <header>
          <h2>Chatbot</h2>
          <span className="close-btn material-symbols-outlined" onClick={toggleChatbot}>
            close
          </span>
        </header>
        <ul className="chatbox" ref={chatboxRef}>
          <li className="chat incoming">
            <span className="material-symbols-outlined">smart_toy</span>
            <p>Hi there 👋<br />How can I help you today?</p>
          </li>
        </ul>
        <div className="chat-input">
          <textarea
            placeholder="Enter a message..."
            spellCheck="false"
            required
            ref={chatInputRef}
            value={userMessage}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          ></textarea>
          <span id="send-btn" className="material-symbols-rounded" onClick={handleChat}>
            send
          </span>
        </div>
      </div>
    </div>
  );
};
