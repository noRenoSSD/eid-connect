import { useState } from "react";
import { Moon, Star } from "lucide-react";

interface SplashScreenProps {
  onEnter: () => void;
}

const SplashScreen = ({ onEnter }: SplashScreenProps) => {
  const [exiting, setExiting] = useState(false);

  const handleClick = () => {
    setExiting(true);
    setTimeout(onEnter, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-eid-beige transition-opacity duration-600 ${
        exiting ? "splash-exit" : ""
      }`}
    >
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-eid-brown/30 animate-eid-reveal"
            style={{
              top: `${15 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              width: 10 + Math.random() * 14,
              animationDelay: `${i * 0.15}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Moon */}
      <div
        className="animate-eid-reveal animate-float mb-8"
        style={{ animationDelay: "0.2s" }}
      >
        <Moon
          className="text-eid-blue"
          size={72}
          strokeWidth={1.2}
          fill="hsl(var(--eid-blue-light))"
        />
      </div>

      {/* Title */}
      <h1
        className="font-display text-3xl md:text-5xl font-semibold text-eid-text text-center px-8 animate-eid-reveal"
        style={{ animationDelay: "0.5s" }}
      >
        Selamat Idul Fitri
      </h1>
      <p
        className="font-display text-xl md:text-2xl text-eid-blue mt-2 animate-eid-reveal"
        style={{ animationDelay: "0.7s" }}
      >
        1447 H
      </p>

      {/* Button */}
      <button
        onClick={handleClick}
        className="mt-12 px-8 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide
          hover:shadow-lg active:scale-[0.97] transition-all duration-200 animate-eid-reveal"
        style={{ animationDelay: "1.1s" }}
      >
        Buka Ucapan
      </button>
    </div>
  );
};

export default SplashScreen;
