import React from 'react';

export function ZaptBadge() {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <a 
        href="https://www.zapt.ai" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-white bg-black rounded opacity-80 hover:opacity-100 transition-opacity"
      >
        Made on ZAPT
      </a>
    </div>
  );
}