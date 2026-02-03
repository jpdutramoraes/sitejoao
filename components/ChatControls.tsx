import React from 'react';
import { FlowStep } from '../types';

interface ChatControlsProps {
  currentStep: FlowStep;
  onOptionSelect: (option: string, label: string) => void;
  disabled: boolean;
  captchaOptions?: string[];
}

export const ChatControls: React.FC<ChatControlsProps> = ({ 
  currentStep, 
  onOptionSelect, 
  disabled,
  captchaOptions = [] 
}) => {
  if (disabled) return null;

  // Modern button styles
  const btnPrimaryClass = "flex-1 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-medium py-3.5 px-6 rounded-xl transition-all active:scale-95 shadow-lg shadow-primary-200 animate-fade-in-up";
  
  const btnSecondaryClass = "flex-1 bg-white hover:bg-gray-50 text-gray-600 font-medium py-3.5 px-6 rounded-xl border border-gray-200 transition-all active:scale-95 shadow-sm animate-fade-in-up";

  const renderButtons = () => {
    switch (currentStep) {
      case FlowStep.INTRO_QUESTION:
        return (
          <div className="flex gap-3 w-full">
            <button
              onClick={() => onOptionSelect('YES', 'Sim')}
              className={btnPrimaryClass}
            >
              Sim
            </button>
            <button
              onClick={() => onOptionSelect('NO', 'Não')}
              className={btnSecondaryClass}
            >
              Não
            </button>
          </div>
        );

      case FlowStep.INTEREST_CHECK:
        return (
          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={() => onOptionSelect('YES', 'Sim, tenho interesse')}
              className={btnPrimaryClass}
            >
              Sim, tenho interesse
            </button>
            <button
              onClick={() => onOptionSelect('NO', 'Não tenho interesse')}
              className={btnSecondaryClass}
            >
              Não tenho interesse
            </button>
          </div>
        );

      case FlowStep.CITY_SELECTION:
        return (
          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={() => onOptionSelect('PELOTAS', 'Pelotas')}
              className={btnPrimaryClass}
            >
              Pelotas
            </button>
            <button
              onClick={() => onOptionSelect('GRAVATAI', 'Gravataí')}
              className={btnPrimaryClass}
            >
              Gravataí
            </button>
          </div>
        );

      case FlowStep.COURSE_OFFER:
        return (
          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={() => onOptionSelect('YES', 'Sim, teria interesse')}
              className={btnPrimaryClass}
            >
              Sim, teria interesse
            </button>
            <button
              onClick={() => onOptionSelect('NO', 'Não teria interesse')}
              className={btnSecondaryClass}
            >
              Não teria interesse
            </button>
          </div>
        );

      case FlowStep.CAPTCHA_CHALLENGE:
        return (
          <div className="flex gap-3 w-full justify-center">
            {captchaOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => onOptionSelect(opt, opt)}
                className={`${btnPrimaryClass} text-lg font-bold`}
              >
                {opt}
              </button>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const content = renderButtons();
  if (!content) return null;

  return (
    <div className="p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 w-full animate-slide-up pb-6">
      <div className="max-w-3xl mx-auto">
        {content}
      </div>
    </div>
  );
};