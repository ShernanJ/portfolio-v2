'use client';

import { useState, useEffect, useRef } from 'react';

interface UseAudioBeatProps {
  audioUrl?: string;
  sensitivity?: number;
  onBeat?: () => void;
}

export function useAudioBeat({ audioUrl, sensitivity = 0.3, onBeat }: UseAudioBeatProps = {}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!audioUrl) return;

    // Create audio element
    audioRef.current = new Audio(audioUrl);
    audioRef.current.crossOrigin = 'anonymous';

    // Create audio context and analyser
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    analyserRef.current = audioContextRef.current.createAnalyser();
    analyserRef.current.fftSize = 256;
    analyserRef.current.smoothingTimeConstant = 0.8;

    // Connect audio to analyser
    const source = audioContextRef.current.createMediaElementSource(audioRef.current);
    source.connect(analyserRef.current);
    analyserRef.current.connect(audioContextRef.current.destination);

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [audioUrl]);

  const detectBeat = () => {
    if (!analyserRef.current || !isPlaying) return;

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyserRef.current.getByteFrequencyData(dataArray);

    // Calculate average frequency
    let sum = 0;
    for (let i = 0; i < bufferLength; i++) {
      sum += dataArray[i];
    }
    const average = sum / bufferLength;

    // Detect beat based on threshold
    if (average > 128 * sensitivity) {
      setCurrentBeat(prev => prev + 1);
      onBeat?.();
    }

    animationFrameRef.current = requestAnimationFrame(detectBeat);
  };

  const play = async () => {
    if (!audioRef.current || !audioContextRef.current) return;
    
    try {
      await audioRef.current.play();
      if (audioContextRef.current.state === 'suspended') {
        await audioContextRef.current.resume();
      }
      setIsPlaying(true);
      detectBeat();
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
  };

  return {
    isPlaying,
    currentBeat,
    play,
    pause,
    stop,
  };
}
