import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the user's message to the chat
    setMessages([...messages, { text: input, user: true }]);
    setInput('');

    // // Send the user's message to your backend for processing and get a response
    // // You will need to implement this part using an API call to your Flask/Django server.
    // // For this example, we assume you have a function 'sendMessageToBot' that returns a response.
    // sendMessageToBot(input).then((response) => {
    //   setMessages([...messages, { text: response, user: false }]);
    // });
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.user ? 'user' : 'bot'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
