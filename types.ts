export type Sender = 'bot' | 'user';

export type MessageType = 'text' | 'link';

export interface Message {
  id: string;
  sender: Sender;
  content: string;
  type?: MessageType;
  linkUrl?: string; // Only if type is 'link'
}

export enum FlowStep {
  INIT = 'INIT',
  INTRO_QUESTION = 'INTRO_QUESTION',
  INTEREST_CHECK = 'INTEREST_CHECK',
  CITY_SELECTION = 'CITY_SELECTION',
  COURSE_OFFER = 'COURSE_OFFER',
  CAPTCHA_CHALLENGE = 'CAPTCHA_CHALLENGE',
  COMPLETED_PELOTAS = 'COMPLETED_PELOTAS',
  COMPLETED_GRAVATAI = 'COMPLETED_GRAVATAI',
  REJECTED_EARLY = 'REJECTED_EARLY',
  REJECTED_LATE = 'REJECTED_LATE',
  REJECTED_FINAL = 'REJECTED_FINAL',
}

export type City = 'Pelotas' | 'Gravataí' | null;

export interface AppState {
  messages: Message[];
  currentStep: FlowStep;
  isTyping: boolean;
  selectedCity: City;
}