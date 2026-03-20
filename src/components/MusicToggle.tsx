import { Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface MusicToggleProps {
  shouldPlay: boolean;
}

const MusicToggle = ({ shouldPlay }: MusicToggleProps) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create a silent audio context as placeholder
    // In production, replace with a real audio URL
    if (!audioRef.current) {
      audioRef.current = new Audio("/music.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
  }, []);

  useEffect(() => {
    if (shouldPlay && audioRef.current?.src) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [shouldPlay]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center
        hover:shadow-lg active:scale-95 transition-all duration-200 border border-border"
      aria-label={playing ? "Mute" : "Unmute"}
    >
      {playing ? (
        <Volume2 className="text-eid-blue" size={18} />
      ) : (
        <VolumeX className="text-eid-text-muted" size={18} />
      )}
    </button>
  );
};

export default MusicToggle;
