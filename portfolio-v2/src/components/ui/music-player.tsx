'use client';

import { useState, useRef } from 'react';
import { useAudioBeat } from '@/hooks/useAudioBeat';

interface MusicPlayerProps {
  onBeat?: () => void;
}

export function MusicPlayer({ onBeat }: MusicPlayerProps) {
  const [audioUrl, setAudioUrl] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { isPlaying, currentBeat, play, pause, stop } = useAudioBeat({
    audioUrl,
    sensitivity: 0.4,
    onBeat: () => {
      // Trigger beat-synced animations
      onBeat?.();
    }
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
    }
  };

  const handlePlay = async () => {
    if (!audioUrl) {
      // Open file picker if no audio is loaded
      fileInputRef.current?.click();
      return;
    }
    await play();
  };

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
            <h3 className="text-white font-medium">Rave Mode 🎵</h3>
            
            {/* File upload */}
            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-white/10 text-white p-2 rounded border border-white/20 hover:bg-white/20 transition-colors"
              >
                {audioUrl ? 'Change Track' : 'Upload Music'}
              </button>
            </div>

            {/* Audio controls */}
            {audioUrl && (
              <div className="space-y-2">
                <div className="text-white/80 text-sm">
                  Beat Count: {currentBeat}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handlePlay}
                    disabled={isPlaying}
                    className="flex-1 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isPlaying ? 'Playing...' : 'Play'}
                  </button>
                  <button
                    onClick={pause}
                    disabled={!isPlaying}
                    className="flex-1 bg-gray-500 text-white p-2 rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Pause
                  </button>
                  <button
                    onClick={stop}
                    className="flex-1 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
                  >
                    Stop
                  </button>
                </div>
              </div>
            )}

            {/* Instructions */}
            <div className="text-white/60 text-xs">
              <p>Upload your favorite track and watch the lasers sync to the beat! 🎵✨</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
