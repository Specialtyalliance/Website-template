declare global {
  interface Window {
    voiceflow?: { chat: { open: () => void } };
  }
}

export function openChatWidget() {
  const haqeraBtn = document.getElementById('hq-btn');
  if (haqeraBtn) {
    const win = document.getElementById('hq-win');
    const isOpen = win?.classList.contains('open');
    if (!isOpen) {
      haqeraBtn.click();
    }
    return;
  }

  if (window.voiceflow?.chat) {
    window.voiceflow.chat.open();
  }
}
