import React, { useState, useEffect, useRef } from 'react';
import { Message, FlowStep, City } from './types';
import { MessageBubble } from './components/MessageBubble';
import { TypingIndicator } from './components/TypingIndicator';
import { ChatControls } from './components/ChatControls';
import { Share2, X } from 'lucide-react';

// Links ofuscados para segurança básica (Base64)
// Pelotas: https://chat.whatsapp.com/Clt1dSGpGtrDOE7XiZ9iaf?mode=gi_t
const _0x1 = "aHR0cHM6Ly9jaGF0LndoYXRzYXBwLmNvbS9DbHQxZFNHcEd0ckRPRTdYaVo5aWFmP21vZGU9Z2lfdA==";
// Gravataí: https://chat.whatsapp.com/KLI9dkHHRsh0yn8f6OoyUe?mode=gi_t
const _0x2 = "aHR0cHM6Ly9jaGF0LndoYXRzYXBwLmNvbS9LTEk5ZGtISFJzaDB5bjhmNk9veVVlP21vZGU9Z2lfdA==";

const decodeLink = (str: string) => {
  try {
    return atob(str);
  } catch (e) {
    return "#";
  }
};

const ShareModal = ({ onClose }: { onClose: () => void }) => {
  const url = window.location.href;
  const text = "Olha que oportunidade legal na área da saúde! 🏥✨";
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${text} ${url}`);
    alert("Link copiado para a área de transferência!");
  };

  return (
     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
        <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl animate-scale-in relative border border-gray-100">
           <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
             <X size={24} />
           </button>
           
           <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Compartilhar</h3>
           
           <div className="grid grid-cols-3 gap-4">
              {/* WhatsApp */}
              <a 
                href={`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg shadow-green-100 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
                <span className="text-xs font-medium text-gray-600">WhatsApp</span>
              </a>

              {/* Facebook */}
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                 <div className="w-14 h-14 bg-[#1877F2] rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.956-2.971 3.594v.376h5.358l-.61 3.667h-4.748v7.98h-4.844Z"/></svg>
                 </div>
                 <span className="text-xs font-medium text-gray-600">Facebook</span>
              </a>

              {/* Instagram (Copy Link) */}
              <button 
                onClick={handleCopy}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                 <div className="w-14 h-14 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-100 group-hover:scale-110 transition-transform">
                   <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                 </div>
                 <span className="text-xs font-medium text-gray-600">Instagram</span>
              </button>
           </div>
           
           <p className="text-center text-gray-400 text-xs mt-6">
             Clique no Instagram para copiar o link e postar no Stories.
           </p>
        </div>
     </div>
  );
};

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<FlowStep>(FlowStep.INIT);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [selectedCity, setSelectedCity] = useState<City>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  
  // Captcha State
  const [captchaAnswer, setCaptchaAnswer] = useState<string>('');
  const [captchaOptions, setCaptchaOptions] = useState<string[]>([]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Initial Startup
  useEffect(() => {
    if (currentStep === FlowStep.INIT) {
      triggerBotMessage(
        "Olá! 👋\nEstamos entrando em contato com pessoas interessadas em atuar em uma **área da saúde** que atualmente tem **boa procura no mercado** e pode gerar rendimentos de até **R$ 5.000 por mês**.\n\nPosso te fazer uma pergunta rápida?",
        FlowStep.INTRO_QUESTION,
        800
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addMessage = (content: string, sender: 'bot' | 'user', type: 'text' | 'link' = 'text', linkUrl?: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender,
      content,
      type,
      linkUrl
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const triggerBotMessage = (text: string, nextStep: FlowStep, delay = 1000, type: 'text'|'link' = 'text', linkUrl?: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(text, 'bot', type, linkUrl);
      setCurrentStep(nextStep);
    }, delay);
  };

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 9) + 1; // 1 to 9
    const num2 = Math.floor(Math.random() * 9) + 1; // 1 to 9
    const answer = num1 + num2;
    
    // Generate wrong answers that are close to the real one
    let wrong1 = answer + (Math.random() > 0.5 ? 1 : -1);
    let wrong2 = answer + (Math.random() > 0.5 ? 2 : -2);
    
    // Ensure no duplicates and no negatives
    if (wrong1 === answer) wrong1 += 1;
    if (wrong2 === answer || wrong2 === wrong1) wrong2 += 3;
    
    const opts = [answer.toString(), wrong1.toString(), wrong2.toString()];
    
    // Shuffle options
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opts[i], opts[j]] = [opts[j], opts[i]];
    }
    
    setCaptchaAnswer(answer.toString());
    setCaptchaOptions(opts);
    
    return `Quanto é ${num1} + ${num2}?`;
  };

  const handleUserSelection = (value: string, label: string) => {
    // 1. Add User Response immediately
    addMessage(label, 'user');
    
    // 2. Clear current step to hide buttons while thinking
    const previousStep = currentStep;
    setCurrentStep(FlowStep.INIT); // Intermediate state to hide buttons

    // 3. Process Logic
    setTimeout(() => {
      processFlow(previousStep, value);
    }, 500);
  };

  const processFlow = (step: FlowStep, value: string) => {
    switch (step) {
      case FlowStep.INTRO_QUESTION: // MESSAGE 1
        if (value === 'YES') {
          triggerBotMessage(
            "Você teria interesse em trabalhar em uma **área da saúde** que está em **crescimento** e com **boa demanda no mercado**?",
            FlowStep.INTEREST_CHECK
          );
        } else {
          triggerBotMessage(
            "Sem problemas, agradecemos sua atenção. Caso mude de ideia, estamos à disposição. 😊",
            FlowStep.REJECTED_EARLY
          );
        }
        break;

      case FlowStep.INTEREST_CHECK: // MESSAGE 2
        if (value === 'YES') {
          triggerBotMessage(
            "Você teria interesse em um **curso de formação rápida**, com **preço acessível**, em **formato intensivo** e com **certificado reconhecido**, para se preparar para essa área?",
            FlowStep.COURSE_OFFER
          );
        } else {
          triggerBotMessage(
            "Entendido. Agradecemos sua resposta e ficamos à disposição caso tenha interesse no futuro. 😊",
            FlowStep.REJECTED_LATE
          );
        }
        break;

      case FlowStep.COURSE_OFFER: // MESSAGE 3
        if (value === 'YES') {
          triggerBotMessage(
            "Para que eu possa te direcionar corretamente, me diga:\n**em qual cidade você prefere participar?**",
            FlowStep.CITY_SELECTION
          );
        } else {
          triggerBotMessage(
            "Entendi. No momento então não vou te encaminhar para o grupo, para não te enviar informações que talvez não sejam úteis para você.\nCaso mude de ideia, é só nos chamar novamente. 😊",
            FlowStep.REJECTED_FINAL
          );
        }
        break;

      case FlowStep.CITY_SELECTION: // MESSAGE 4
        const city = value === 'PELOTAS' ? 'Pelotas' : 'Gravataí';
        setSelectedCity(city);
        
        // Instead of going straight to completed, we do CAPTCHA
        const question = generateCaptcha();
        triggerBotMessage(
          `Certo! Antes de liberar o link do grupo, preciso apenas fazer uma verificação de segurança rápida. 🔒\n\n**${question}**`,
          FlowStep.CAPTCHA_CHALLENGE
        );
        break;

      case FlowStep.CAPTCHA_CHALLENGE:
        if (value === captchaAnswer) {
           // Correct Answer -> Show Group
           if (selectedCity === 'Pelotas') {
            triggerBotMessage(
              "Correto! ✅\n\nVou te encaminhar agora para o **grupo oficial no WhatsApp da sua cidade**, onde você receberá **todas as informações**.",
              FlowStep.COMPLETED_PELOTAS,
              800,
              'link',
              decodeLink(_0x1)
            );
          } else {
            triggerBotMessage(
              "Correto! ✅\n\nVou te encaminhar agora para o **grupo oficial no WhatsApp da sua cidade**, onde você receberá **todas as informações**.",
              FlowStep.COMPLETED_GRAVATAI,
              800,
              'link',
              decodeLink(_0x2)
            );
          }
        } else {
          // Wrong Answer -> Retry
          const newQuestion = generateCaptcha();
          triggerBotMessage(
            `Ops, resposta incorreta. Vamos tentar de novo? 🤔\n\n**${newQuestion}**`,
            FlowStep.CAPTCHA_CHALLENGE
          );
        }
        break;
        
      default:
        break;
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'W Treinamento',
          text: 'Descubra se você tem perfil para a área da saúde que mais cresce!',
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      setShowShareModal(true);
    }
  };

  // Calculate Progress Percentage based on Step
  const getProgress = () => {
    switch (currentStep) {
      case FlowStep.INIT: return 5;
      case FlowStep.INTRO_QUESTION: return 20;
      case FlowStep.INTEREST_CHECK: return 40;
      case FlowStep.COURSE_OFFER: return 60;
      case FlowStep.CITY_SELECTION: return 80;
      case FlowStep.CAPTCHA_CHALLENGE: return 90;
      case FlowStep.COMPLETED_PELOTAS: 
      case FlowStep.COMPLETED_GRAVATAI: return 100;
      case FlowStep.REJECTED_EARLY: 
      case FlowStep.REJECTED_LATE:
      case FlowStep.REJECTED_FINAL: return 100;
      default: return 0;
    }
  };

  return (
    <div className="flex flex-col h-full bg-lab-pattern max-w-md mx-auto shadow-2xl overflow-hidden relative border-x border-gray-200">
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md px-6 py-4 border-b border-gray-200/50 flex items-center justify-between z-10 sticky top-0">
        <div className="flex items-center gap-3">
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces" 
              alt="Ana"
              className="w-12 h-12 rounded-full object-cover border-2 border-primary-100 shadow-sm transition-transform group-hover:scale-105" 
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-gray-800 text-lg leading-none">W Treinamento</h1>
            <div className="flex items-center gap-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <p className="text-[11px] text-primary-600 font-medium tracking-wide">
                ONLINE
              </p>
            </div>
          </div>
        </div>
        
        {/* Share Button */}
        <button 
          onClick={handleShare}
          className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-all active:scale-95"
          aria-label="Compartilhar"
        >
          <Share2 size={20} />
        </button>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-gray-100 h-1">
        <div 
          className="bg-gradient-to-r from-primary-400 to-primary-600 h-1 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(20,184,166,0.5)]" 
          style={{ width: `${getProgress()}%` }}
        ></div>
      </div>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-5 space-y-2 scroll-smooth">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        
        {isTyping && (
          <TypingIndicator />
        )}
        
        <div ref={messagesEndRef} className="h-2" />
      </main>

      {/* Controls Area */}
      <ChatControls 
        currentStep={currentStep} 
        onOptionSelect={handleUserSelection}
        disabled={isTyping}
        captchaOptions={captchaOptions}
      />
      
      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm border-t border-gray-100 py-4 px-6 flex justify-center items-center z-10">
        <p className="text-[11px] text-gray-500 font-medium text-center">
          © {new Date().getFullYear()} W Treinamento. Todos os direitos reservados.
        </p>
      </footer>

      {/* Share Modal */}
      {showShareModal && <ShareModal onClose={() => setShowShareModal(false)} />}

    </div>
  );
};

export default App;