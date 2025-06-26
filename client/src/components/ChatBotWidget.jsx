// // components/ChatBotWidget.jsx
// import React, { useState } from 'react';
// import { FaComments, FaTimes, FaRobot } from 'react-icons/fa';

// const ChatBotWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { from: 'bot', text: '👋 Hello! How can I assist you today?' }
//   ]);
//   const [input, setInput] = useState('');

//   const handleSend = () => {
//     if (input.trim() === '') return;

//     setMessages([...messages, { from: 'user', text: input }]);
//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         { from: 'bot', text: `🤖 You asked: "${input}" — here's a helpful response!` }
//       ]);
//     }, 500);

//     setInput('');
//   };

//   const handlePromptClick = (prompt) => {
//     setMessages([...messages, { from: 'user', text: prompt }]);
//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         { from: 'bot', text: `✅ Here's more info about "${prompt}".` }
//       ]);
//     }, 500);
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {/* Floating Icon */}
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-full shadow-lg animate-bounce"
//         >
//           <FaRobot size={24} />
//         </button>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="w-80 h-[450px] bg-white rounded-xl shadow-2xl flex flex-col animate-fade-in-up border border-gray-200 transition-all duration-300">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-t-xl flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <FaRobot size={20} />
//               <span className="font-semibold">Evoltriv ChatBot</span>
//             </div>
//             <button onClick={() => setIsOpen(false)} className="hover:text-red-200 transition">
//               <FaTimes size={18} />
//             </button>
//           </div>

//           {/* Messages Area */}
//           <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-2 bg-gray-50 scroll-smooth">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`px-3 py-2 max-w-[70%] rounded-lg text-sm ${
//                   msg.from === 'bot'
//                     ? 'bg-gray-200 text-gray-900 self-start'
//                     : 'bg-indigo-500 text-white self-end'
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>

//           {/* Quick Prompt Buttons */}
//           <div className="flex flex-wrap gap-2 p-2 border-t bg-white">
//             {['Pricing', 'Book Demo', 'Contact Info'].map((prompt, i) => (
//               <button
//                 key={i}
//                 onClick={() => handlePromptClick(prompt)}
//                 className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 text-xs px-2 py-1 rounded-full transition"
//               >
//                 {prompt}
//               </button>
//             ))}
//           </div>

//           {/* Input Area */}
//           <div className="flex items-center border-t p-2 bg-white">
//             <input
//               type="text"
//               placeholder="Type your message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//               className="flex-1 border border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none"
//             />
//             <button
//               onClick={handleSend}
//               className="ml-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 rounded-full text-sm transition"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBotWidget;


import React, { useState } from 'react';
import { FaComments, FaTimes, FaRobot } from 'react-icons/fa';
import qaData from '../../src/data/qadata'; // ✅ import the separate JSON

const ChatBotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: '👋 Hi! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  const getAnswer = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    const matched = qaData.find((item) =>
      item.keywords.some((keyword) => lowerInput.includes(keyword))
    );

    return matched
      ? matched.answer
      : '🤖 Sorry, I didn’t understand that. You can contact us at evoltriv@gmail.com or WhatsApp us at +91 97051 30846.';
  };

  const handleSend = () => {
    if (input.trim() === '') return;
    const answer = getAnswer(input);

    setMessages((prev) => [
      ...prev,
      { from: 'user', text: input },
      { from: 'bot', text: answer }
    ]);
    setInput('');
  };

  const handlePromptClick = (prompt) => {
    const answer = getAnswer(prompt);

    setMessages((prev) => [
      ...prev,
      { from: 'user', text: prompt },
      { from: 'bot', text: answer }
    ]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Open Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-full shadow-lg animate-bounce"
        >
          <FaRobot size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-[450px] bg-white rounded-xl shadow-2xl flex flex-col animate-fade-in-up border border-gray-200 transition-all duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaRobot size={20} />
              <span className="font-semibold">Evoltriv ChatBot</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-red-200 transition">
              <FaTimes size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-2 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`px-3 py-2 max-w-[70%] rounded-lg text-sm ${
                  msg.from === 'bot'
                    ? 'bg-gray-200 text-gray-900 self-start'
                    : 'bg-indigo-500 text-white self-end'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Prompt Buttons */}
         {/* Custom Prompt Buttons */}
<div className="flex flex-wrap gap-2 p-2 border-t bg-white">
  <button
    onClick={() => handlePromptClick('solar')}
    className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 text-xs px-2 py-1 rounded-full transition"
  >
    🌞 Solar
  </button>
  <button
    onClick={() => handlePromptClick('e-bike')}
    className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 text-xs px-2 py-1 rounded-full transition"
  >
    🚲 E-Bike
  </button>
  <button
    onClick={() => handlePromptClick('student training')}
    className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 text-xs px-2 py-1 rounded-full transition"
  >
    🧠 Student Training
  </button>
  <button
    onClick={() => handlePromptClick('support')}
    className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 text-xs px-2 py-1 rounded-full transition"
  >
    🆘 Support
  </button>
</div>


          {/* Input Box */}
          <div className="flex items-center border-t p-2 bg-white">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 border border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 rounded-full text-sm transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotWidget;
