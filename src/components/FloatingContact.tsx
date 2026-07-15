"use client";

import { useState } from 'react';
import { MessageCircle, Phone, Bot, X, Send } from 'lucide-react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button & Menu */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {/* Menu Items (visible when isOpen is true) */}
        <div className={`flex flex-col items-end gap-3 transition-all duration-300 origin-bottom ${isOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'}`}>
          
          {/* Gọi điện */}
          <a href="tel:0965151040" className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-100 group">
            <span className="font-semibold text-slate-700 group-hover:text-brand-600 transition-colors">Gọi điện</span>
            <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
            </div>
          </a>

          {/* Zalo */}
          <a href="https://zalo.me/0965151040" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-100 group">
            <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">Zalo Chat</span>
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
            </div>
          </a>

          {/* AI Chat */}
          <button onClick={() => { setIsAIChatOpen(true); setIsOpen(false); }} className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-100 group">
            <span className="font-semibold text-slate-700 group-hover:text-purple-600 transition-colors">Trợ lý AI</span>
            <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Bot className="w-5 h-5" />
            </div>
          </button>
        </div>

        {/* Main Toggle Button */}
        <button 
          onClick={() => {
            if (isAIChatOpen) {
              setIsAIChatOpen(false);
            } else {
              setIsOpen(!isOpen);
            }
          }}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 hover:scale-110 ${isOpen || isAIChatOpen ? 'bg-slate-800 rotate-90' : 'bg-brand-600 hover:shadow-brand-500/50'}`}
        >
          {isOpen || isAIChatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>

      {/* AI Chat Window Modal */}
      {isAIChatOpen && (
        <div className="fixed bottom-24 right-6 w-[340px] md:w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-brand-600 p-4 flex items-center justify-between text-white shadow-md z-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm">HTC AI Assistant</div>
                <div className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  Đang trực tuyến
                </div>
              </div>
            </div>
            <button onClick={() => setIsAIChatOpen(false)} className="hover:bg-white/20 p-1.5 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Body */}
          <div className="h-[350px] bg-slate-50 p-4 flex flex-col gap-4 overflow-y-auto">
            <div className="flex gap-3 max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-brand-500 flex-shrink-0 flex items-center justify-center text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 text-sm text-slate-700 leading-relaxed">
                Xin chào! 👋 Mình là trợ lý AI của HTC Môi Trường. Mình có thể giúp bạn giải đáp các vấn đề về pháp lý môi trường, tài nguyên nước, hoặc tư vấn dịch vụ. Bạn cần hỗ trợ gì ạ?
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 pl-11">
              <button className="text-xs bg-purple-50 text-purple-700 border border-purple-100 px-3 py-1.5 rounded-full hover:bg-purple-100 transition-colors">
                Báo cáo ĐTM là gì?
              </button>
              <button className="text-xs bg-brand-50 text-brand-700 border border-brand-100 px-3 py-1.5 rounded-full hover:bg-brand-100 transition-colors">
                Giấy phép môi trường
              </button>
            </div>
          </div>
          
          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-100">
            <div className="relative flex items-center">
              <input 
                type="text" 
                placeholder="Nhập câu hỏi của bạn..." 
                className="w-full bg-slate-100 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-shadow" 
              />
              <button className="absolute right-1 w-9 h-9 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors shadow-sm">
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[10px] text-slate-400">Powered by AI Agent</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
