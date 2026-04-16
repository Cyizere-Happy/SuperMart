"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  type: "user" | "bot";
  text: string;
  timestamp: Date;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"faqs" | "messages">("messages");
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Hello! I'm Simba, your shopping assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const faqs = [
    { q: "What are your delivery hours?", a: "We deliver from 8:00 AM to 9:00 PM daily." },
    { q: "Where do you source your products?", a: "All our products are sourced directly from local organic farms." },
    { q: "Do you offer home delivery?", a: "Yes! We offer same-day delivery for all orders placed before 4:00 PM." },
    { q: "What is your return policy?", a: "If you're not happy with your produce, we offer a no-questions-asked replacement within 24 hours." },
  ];

  const shoppingSuggestions = [
    "What are today's deals?",
    "Where is my order?",
    "Do you have fresh milk?",
    "What are your opening hours?",
    "How can I pay?",
  ];

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");

    // Simulate bot thinking and responding
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: botResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("deal") || lowerInput.includes("offer")) {
      return "Today's top deal: Buy 1 Get 1 Free on all fresh berries! Check our 'Shop' page for more.";
    }
    if (lowerInput.includes("order") || lowerInput.includes("track")) {
      return "You can track your order by clicking the track link in your confirmation email or by providing your order ID here.";
    }
    if (lowerInput.includes("milk") || lowerInput.includes("dairy")) {
      return "Yes, we have fresh organic milk delivered daily from our local partner farms.";
    }
    if (lowerInput.includes("hour") || lowerInput.includes("open")) {
      return "We are open from 7:00 AM to 10:00 PM, seven days a week!";
    }
    if (lowerInput.includes("pay") || lowerInput.includes("payment")) {
      return "We accept all major credit cards, Mobile Money (MTN/Airtel), and Cash on Delivery.";
    }
    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      return "Hi there! I'm ready to help with your shopping. What's on your list?";
    }
    return "That's a great question! I'm still learning, but I can definitely help with orders, deals, and product availability. Feel free to ask about those!";
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#fc7d00] rounded-full flex items-center justify-center text-white shadow-2xl z-[9999] hover:scale-110 active:scale-95 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.svg
              key="chat"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </motion.svg>
          ) : (
            <motion.svg
              key="close"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[360px] max-h-[660px] h-[85vh] bg-white rounded-[32px] overflow-hidden shadow-2xl z-[9998] flex flex-col border border-gray-100"
          >
            {/* Header */}
            <div className="p-6 pb-4 border-b border-gray-50 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fc7d00]/10 flex items-center justify-center text-[#fc7d00] font-bold text-lg">
                    SA
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 leading-none mb-1">Simba Assistant</h3>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                      <span className="text-xs text-[#10b981] font-medium">Ready to help</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Tabs Bar */}
            <div className="flex border-b border-gray-100 bg-gray-50/50">
              <button
                onClick={() => setActiveTab("faqs")}
                className={`flex-1 py-4 text-sm font-semibold transition-all relative ${
                  activeTab === "faqs" ? "text-[#fc7d00]" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                FAQs
                {activeTab === "faqs" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fc7d00]"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("messages")}
                className={`flex-1 py-4 text-sm font-semibold transition-all relative ${
                  activeTab === "messages" ? "text-[#fc7d00]" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Assistant
                {activeTab === "messages" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fc7d00]"
                  />
                )}
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50/30 custom-scrollbar">
              {activeTab === "faqs" ? (
                <div className="space-y-4 p-2">
                  {faqs.map((faq, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-4 rounded-2xl bg-white border border-gray-100 hover:border-[#fc7d00]/30 transition-colors cursor-pointer group shadow-sm"
                    >
                      <h4 className="text-sm font-bold text-gray-800 mb-2 group-hover:text-[#fc7d00] transition-colors">
                        {faq.q}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-medium">
                        {faq.a}
                      </p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-4 rounded-3xl text-sm font-medium leading-relaxed ${
                          msg.type === "user"
                            ? "bg-[#fc7d00] text-white rounded-br-none shadow-lg shadow-[#fc7d00]/20"
                            : "bg-white text-gray-800 border border-gray-100 rounded-bl-none shadow-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                  
                  {/* Suggestions as pill buttons */}
                  {messages.length < 3 && (
                    <div className="pt-4 flex flex-wrap gap-2">
                      {shoppingSuggestions.map((suggestion, i) => (
                        <motion.button
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          onClick={() => handleSendMessage(suggestion)}
                          className="bg-white border border-gray-200 text-gray-600 text-[11px] font-bold py-2 px-4 rounded-full hover:border-[#fc7d00] hover:text-[#fc7d00] transition-all shadow-sm active:scale-95"
                        >
                          {suggestion}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputText);
                }}
                className="flex items-center gap-3"
              >
                <div className="flex-1 bg-gray-50 rounded-full px-4 h-11 flex items-center border border-gray-100 focus-within:border-[#fc7d00]/50 transition-colors">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type a message..."
                    className="bg-transparent w-full text-sm font-medium focus:outline-none placeholder:text-gray-400"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={!inputText.trim()}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                    !inputText.trim() ? "bg-gray-100 text-gray-300" : "bg-[#fc7d00] text-white hover:scale-105 active:scale-95 shadow-lg shadow-[#fc7d00]/20"
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
