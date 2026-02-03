import React from 'react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex w-full justify-start mb-6 animate-fade-in-up">
       <div className="flex items-end gap-3">
          {/* Avatar Placeholder for consistency */}
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces" 
            alt="Ana" 
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-white shadow-sm"
          />
          
          <div className="flex items-center space-x-1.5 p-4 bg-white rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
            <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
          </div>
       </div>
    </div>
  );
};