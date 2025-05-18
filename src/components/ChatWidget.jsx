import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react'; // make sure lucide-react is installed

const mockResponses = {
  "how do i sell my license?": "You can sell your license by uploading it through our platform. We'll handle the rest!",
  "how does softsell work?": "SoftSell connects you with buyers and helps you get paid fast.",
  "is this secure?": "Yes! We use bank-level encryption and secure verification for all transactions.",
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    const lowerInput = input.toLowerCase();

    const botResponse = {
      sender: 'bot',
      text: mockResponses[lowerInput] || "Sorry, I didn't understand that. Try asking something else!",
    };

    setMessages([...messages, userMessage, botResponse]);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <MessageSquare className="text-white" />
        </button>
      ) : (
        <div className="w-80 bg-white border border-gray-300 rounded-lg shadow-xl">
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
            <span>💬 Chat with SoftBot</span>
            <button onClick={() => setIsOpen(false)}>
              <X className="text-white" />
            </button>
          </div>
          <div className="h-64 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-md text-sm ${
                  msg.sender === 'user'
                    ? 'bg-blue-100 text-right ml-10'
                    : 'bg-gray-100 text-left mr-10'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex border-t">
            <input
              type="text"
              className="flex-grow px-3 py-2 outline-none"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
