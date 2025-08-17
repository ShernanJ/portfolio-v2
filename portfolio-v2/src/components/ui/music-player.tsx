'use client';

import { useState } from 'react';

export function MusicPlayer() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
        title="Music Player"
      >
        🎵
      </button>

      {/* Music player panel */}
      {isVisible && (
        <div className="absolute bottom-16 right-0 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-white/20 min-w-[280px]">
          <div className="space-y-4">
            <h3 className="text-white font-medium">Music Player 🎵</h3>
            
            <div className="text-white/60 text-sm">
              <p>Music player coming soon! 🚀</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
