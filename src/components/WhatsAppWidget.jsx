"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppWidget() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);

  // New WhatsApp number from user request
  const phone = "919592520666"; 

  // Initial greeting messages from chatbot
  const initialMessages = [
    {
      id: 1,
      text: "Hello! Welcome to Hair Raiserz-66A Luxe. 💇✨",
      sender: "bot",
      time: "Just Now",
    },
    {
      id: 2,
      text: "I am your booking assistant. How can we help you today?",
      sender: "bot",
      time: "Just Now",
      hasOptions: true,
    }
  ];

  useEffect(() => {
    setMounted(true);
    setMessages(initialMessages);
  }, []);

  // Smooth scroll to bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  if (!mounted) return null;

  const handleOptionClick = (option) => {
    // 1. Add user clicked option as message
    const userMsg = {
      id: Date.now(),
      text: option,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, userMsg]);
    
    // 2. Trigger typing effect
    setIsTyping(true);

    // 3. Bot responds and redirects to WhatsApp Web/App
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = {
        id: Date.now() + 1,
        text: "Sure! Connecting you directly to our reservation desk on WhatsApp...",
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botResponse]);

      // 4. Redirect after brief delay
      setTimeout(() => {
        const text = `Hello Hair Raiserz-66A Luxe, I'd like to book/inquire: ${option}`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
      }, 1200);

    }, 1000);
  };

  const handleSendCustomMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    setInputValue("");

    // 1. Add user custom typed message
    const userMsg = {
      id: Date.now(),
      text: userText,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages((prev) => [...prev, userMsg]);

    // 2. Trigger typing effect
    setIsTyping(true);

    // 3. Bot responds
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = {
        id: Date.now() + 1,
        text: "Connecting you to our team on WhatsApp with your query...",
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botResponse]);

      // 4. Redirect with custom text
      setTimeout(() => {
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(userText)}`, "_blank");
      }, 1200);

    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end font-sans">
      {/* WhatsApp Chatbot Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[360px] max-w-[calc(100vw-2rem)] h-[470px] rounded-2xl border border-gold-primary/20 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)] bg-white flex flex-col mb-4"
          >
            {/* Chatbot Header */}
            <div className="bg-[#1c1c1e] text-white border-b border-gold-primary/10 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo.png" 
                    alt="Hair Raiserz-66A Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-serif tracking-wider font-bold text-xs text-gold-primary uppercase">Hair Raiserz-66A Luxe</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                    <span className="text-[10px] text-neutral-400 font-sans font-light">Online &bull; Concierge</span>
                  </div>
                </div>
              </div>
              
              {/* Close Icon */}
              <button 
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors p-1"
                aria-label="Close chat"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chatbot Conversation Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FAF8F5]">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                  <div 
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed font-sans shadow-sm ${
                      msg.sender === "user" 
                        ? "bg-[#25D366] text-white rounded-tr-none" 
                        : "bg-white text-neutral-800 border border-neutral-200/50 rounded-tl-none"
                    }`}
                  >
                    <p className="whitespace-pre-line font-light">{msg.text}</p>
                    
                    {/* Render Quick Option Selection Buttons */}
                    {msg.hasOptions && (
                      <div className="mt-3 space-y-2 pt-2 border-t border-neutral-100/70">
                        <button 
                          onClick={() => handleOptionClick("📅 Book an Appointment")}
                          className="w-full text-left bg-neutral-50 hover:bg-gold-primary/10 border border-neutral-200 hover:border-gold-primary rounded-xl px-3 py-2 text-[10.5px] font-sans text-neutral-700 hover:text-black font-semibold transition-all duration-200"
                        >
                          📅 Book an Appointment
                        </button>
                        <button 
                          onClick={() => handleOptionClick("💇 View Services & Prices")}
                          className="w-full text-left bg-neutral-50 hover:bg-gold-primary/10 border border-neutral-200 hover:border-gold-primary rounded-xl px-3 py-2 text-[10.5px] font-sans text-neutral-700 hover:text-black font-semibold transition-all duration-200"
                        >
                          💇 View Services & Prices
                        </button>
                        <button 
                          onClick={() => handleOptionClick("📍 Find Salon Location")}
                          className="w-full text-left bg-neutral-50 hover:bg-gold-primary/10 border border-neutral-200 hover:border-gold-primary rounded-xl px-3 py-2 text-[10.5px] font-sans text-neutral-700 hover:text-black font-semibold transition-all duration-200"
                        >
                          📍 Find Salon Location
                        </button>
                        <button 
                          onClick={() => handleOptionClick("💬 Chat with Stylist")}
                          className="w-full text-left bg-neutral-50 hover:bg-gold-primary/10 border border-neutral-200 hover:border-gold-primary rounded-xl px-3 py-2 text-[10.5px] font-sans text-neutral-700 hover:text-black font-semibold transition-all duration-200"
                        >
                          💬 Chat with Stylist
                        </button>
                      </div>
                    )}
                  </div>
                  <span className="text-[8.5px] text-neutral-400 mt-1 px-1 font-light tracking-wide">{msg.time}</span>
                </div>
              ))}

              {/* Bot Typing Simulator */}
              {isTyping && (
                <div className="flex flex-col items-start">
                  <div className="bg-white border border-neutral-200/50 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Chatbot Form Input Footer */}
            <form onSubmit={handleSendCustomMessage} className="p-3 border-t border-neutral-100 bg-white flex items-center gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-neutral-50 border border-neutral-200 focus:border-gold-primary focus:bg-white rounded-full px-4 py-2 text-xs font-sans tracking-wide text-[#1a1a1a] focus:outline-none transition-all duration-200"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center disabled:opacity-50 hover:bg-[#20ba59] active:scale-90 transition-all duration-200 shrink-0 shadow-md"
                aria-label="Send message"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 ml-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button - Clean Static SVG with no animations */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_6px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.5)] border border-[#25D366]/40 hover:border-gold-primary flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.012 14.07 1.02 11.45 1.02c-5.438 0-9.863 4.373-9.867 9.801-.001 1.736.467 3.43 1.354 4.938l-.993 3.623 3.713-.974zm11.005-5.108c-.244-.122-1.45-.714-1.671-.795-.222-.081-.383-.122-.544.122-.16.244-.622.795-.763.957-.14.163-.28.183-.524.061-.243-.122-.982-.361-1.87-1.151-.69-.614-1.157-1.372-1.292-1.616-.135-.244-.015-.376.107-.497.111-.11.244-.28.365-.42.122-.14.162-.244.243-.406.082-.162.041-.305-.02-.427-.06-.122-.544-1.31-.746-1.796-.197-.476-.399-.413-.544-.42l-.465-.007c-.162 0-.424.06-.647.305-.223.244-.85.83-.85 2.025 0 1.194.87 2.348.99 2.51.122.163 1.712 2.612 4.148 3.66 1.93.83 2.58.667 3.033.626.544-.049 1.45-.591 1.653-1.162.203-.572.203-1.061.142-1.162-.06-.1-.223-.163-.467-.285z" />
        </svg>
      </button>
    </div>
  );
}
