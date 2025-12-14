import { MessageCircle, Send, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
interface Message {
  id: number;
  text: string;
  sender: "user" | "shop";
  timestamp: Date;
}
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Xin chào! Cửa Đẹp Việt có thể giúp gì cho bạn hôm nay?",
      sender: "shop",
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
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    const newUserMessage: Message = {
      id: Date.now(),
      text: message,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setMessage("");
    // Simulate shop response
    setTimeout(() => {
      const shopResponse: Message = {
        id: Date.now() + 1,
        text: "Cảm ơn bạn đã nhắn tin. Nhân viên tư vấn sẽ phản hồi trong giây lát!",
        sender: "shop",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, shopResponse]);
    }, 1000);
  };
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col transition-all duration-300 ease-in-out transform origin-bottom-right animate-in fade-in slide-in-from-bottom-10">
          {/* Header */}
          <div className="bg-amber-700 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Hỗ trợ trực tuyến</h3>
                <p className="text-xs text-amber-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Đang hoạt động
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {/* Messages Area */}
          <div className="flex-1 h-80 overflow-y-auto p-4 bg-stone-50 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-amber-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm"
                  }`}
                >
                  <p>{msg.text}</p>
                  <p
                    className={`text-[10px] mt-1 ${
                      msg.sender === "user" ? "text-amber-100" : "text-gray-400"
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Input Area */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-white border-t border-gray-100"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Nhập tin nhắn..."
                className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="p-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${
          isOpen
            ? "bg-gray-200 text-gray-600 rotate-90"
            : "bg-amber-600 text-white hover:bg-amber-700"
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
