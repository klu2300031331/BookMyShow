import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const responses = {
    hi: 'Hey! Welcome to BookMyShow!',
    hello: 'Hey! Welcome to BookMyShow!',
    'how to book a ticket': 'To book a ticket, search your movie, select date and time, then make payment.',
    'how to cancel a ticket': 'To cancel a ticket, go to "My Bookings", select the booking, and choose "Cancel".',
    'can i get a refund': 'Yes, refunds are available based on the cancellation policy. Check "My Bookings" for more.',
    'what is bookmyshow': 'BookMyShow is a platform to book movie, event, and activity tickets online.',
  };

  const handleSend = () => {
    if (!userInput.trim()) return;

    const userMessage = userInput.trim();
    const lowerCaseMessage = userMessage.toLowerCase();

    const botResponse =
      responses[lowerCaseMessage] ||
      "Sorry, I didn't understand that. Can you rephrase?";
    setMessages([
      ...messages,
      { type: 'user', text: userMessage },
      { type: 'bot', text: botResponse },
    ]);
    setUserInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">BookMyShow ChatBot</div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your question here..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
          aria-label="Chat input"
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
