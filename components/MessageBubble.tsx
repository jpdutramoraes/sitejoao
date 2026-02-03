import React from 'react';
import { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isBot = message.sender === 'bot';

  // Simple parser for bold text using **markdown** syntax
  const renderContent = (content: string) => {
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const avatarUrl = isBot 
    ? "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces"
    : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=faces";

  const senderName = isBot ? "Ana" : "Você";

  const handleLinkClick = () => {
    setTimeout(() => {
      try {
        window.close();
      } catch (e) {}
      
      document.body.innerHTML = `
        <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;background:#f0fdfa;font-family:'Inter',sans-serif;text-align:center;padding:20px;">
          <div style="background:white;padding:2rem;border-radius:1rem;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">
            <h1 style="color:#0d9488;font-size:1.5rem;font-weight:bold;margin-bottom:1rem;">Atendimento Finalizado</h1>
            <p style="color:#4b5563;">Você já foi encaminhado para o WhatsApp.</p>
            <p style="color:#6b7280;font-size:0.875rem;margin-top:0.5rem;">Pode fechar esta página.</p>
          </div>
        </div>
      `;
    }, 2000);
  };

  return (
    <div className={`flex w-full ${isBot ? 'justify-start' : 'justify-end'} mb-6 group`}>
      <div 
        className={`flex max-w-[90%] md:max-w-[85%] ${isBot ? 'flex-row' : 'flex-row-reverse'} items-end gap-3`}
      >
        
        {/* Avatar */}
        <div className={`flex-shrink-0 flex flex-col items-center gap-1 ${isBot ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.1s'}}>
          <img 
            src={avatarUrl} 
            alt={senderName} 
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-white shadow-sm"
          />
        </div>

        <div className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}>
          {/* Name Label */}
          <span className={`text-[10px] text-gray-400 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isBot ? 'ml-2 text-left' : 'mr-2 text-right'}`}>
            {senderName}
          </span>

          {/* Bubble */}
          <div 
            className={`
              px-5 py-3.5 text-[15px] md:text-base leading-relaxed whitespace-pre-line relative shadow-sm
              animate-message-pop-in
              ${isBot 
                ? 'bg-white text-gray-800 rounded-2xl rounded-bl-none border border-gray-100 origin-bottom-left' 
                : 'bg-gradient-to-br from-primary-600 to-primary-500 text-white rounded-2xl rounded-br-none origin-bottom-right shadow-md'
              }
            `}
          >
            {renderContent(message.content)}
            
            {message.type === 'link' && message.linkUrl && (
              <div className="mt-4 mb-1">
                <a 
                  href={message.linkUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="
                    flex items-center justify-center gap-2 w-full px-5 py-3 
                    bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl 
                    transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-green-200
                    animate-bounce
                  "
                  style={{ animationDuration: '2s' }}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Participar do Grupo VIP
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};