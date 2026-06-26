'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

interface VoiceAssistantProps {
  onTranscript?: (text: string) => void;
  onWakeWord?: () => void;
  isSpeaking?: boolean;
}

export default function VoiceAssistant({ onTranscript, onWakeWord, isSpeaking }: VoiceAssistantProps) {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [isWakeWordMode, setIsWakeWordMode] = useState(true);

  useEffect(() => {
    // Initialize Speech Recognition
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.continuous = true;
      recog.interimResults = true;
      recog.lang = 'en-US';

      recog.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join('')
          .toLowerCase();

        if (isWakeWordMode) {
          if (transcript.includes('hey nehpal') || transcript.includes('hello nehpal')) {
            onWakeWord?.();
            setIsWakeWordMode(false); // Switch to listening for actual command
            stopListening();
            speak("Yes, I am listening.");
            setTimeout(() => startListening(), 1000);
          }
        } else {
          onTranscript?.(transcript);
          // Auto-reset wake word mode after a silence
        }
      };

      setRecognition(recog);
    }
  }, [onWakeWord, onTranscript, isWakeWordMode]);

  const startListening = useCallback(() => {
    if (recognition) {
      try {
        recognition.start();
        setIsListening(true);
      } catch (e) {
        console.error("Recognition already started");
      }
    }
  }, [recognition]);

  const stopListening = useCallback(() => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  }, [recognition]);

  const speak = (text: string) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1.1;
    utterance.rate = 1.0;
    synth.speak(utterance);
  };

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={isListening ? stopListening : startListening}
        className={`p-2 rounded-full transition-all ${isListening ? 'bg-red-500/20 text-red-500 animate-pulse' : 'bg-gold/10 text-gold hover:bg-gold/20'}`}
        title={isListening ? "Stop Listening" : "Start Listening"}
      >
        {isListening ? <Mic size={20} /> : <MicOff size={20} />}
      </button>
      {isSpeaking && <Volume2 size={20} className="text-gold animate-bounce" />}
    </div>
  );
}
