import React, { useState } from 'react';
const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'Support', message: 'Assalamu Alaikum! How can we help you today?' },
  ]);
  const [isOpen, setIsOpen] = useState(false); // State to manage whether chatbox is open or closed

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();

    if (message.trim()) {
      const newMessage = {
        sender: 'You',
        message,
      };

      // Update chat history with new message
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        newMessage,
        { sender: 'Support', message: 'Thank you for your message, we will get back to you shortly.' },
      ]);
      setMessage('');
    }
  };

  const toggleChatBox = () => {
    setIsOpen(!isOpen); // Toggle chatbox open/close
  };

  return (
    <>
      {/* Message Icon */}
      <div className="message-icon" onClick={toggleChatBox}>
        <span className="icon">💬</span> {/* You can replace this with an icon */}
      </div>

      {/* Chatbox Popup */}
      {isOpen && (
        <div className="chatbox-container">
          <div className="chatbox-header">
            <h4>Chat with Us</h4>
            <button className="close-chat" onClick={toggleChatBox}>X</button>
          </div>
          <div className="chatbox-content">
            <div className="chatbox-history">
              {chatHistory.map((chat, index) => (
                <div key={index} className={`chat-message ${chat.sender.toLowerCase()}`}>
                  <strong>{chat.sender}: </strong>
                  <span>{chat.message}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="chatbox-footer">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={handleMessageChange}
              className="chatbox-input"
            />
            <button onClick={handleMessageSubmit} className="chatbox-send-button">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
