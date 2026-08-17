declare global {
  interface Window {
    voiceflow?: { chat: { open: () => void } };
  }
}

export function openChatWidget() {
  if (window.voiceflow?.chat) {
    window.voiceflow.chat.open();
  }
}
