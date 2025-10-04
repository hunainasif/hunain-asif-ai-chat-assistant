import { create } from "zustand";

interface SingleMessage {
  role: string;
  content: string;
}

interface MessageStore {
  messages: SingleMessage[];
  text: string;
  setMessages: (message: SingleMessage) => void;
  setText: (text: string) => void;
}

export const useMessageStore = create<MessageStore>((set) => ({
  text: "",
  messages: [],
  setMessages: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
  setText: (text) => set({ text }),
}));
