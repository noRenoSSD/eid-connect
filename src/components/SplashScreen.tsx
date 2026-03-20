import { useState } from "react";

interface SplashScreenProps {
  onEnter: () => void;
}

const STARS = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 0.5 + Math.random() * 2.5,
  duration: 2 + Math.random() * 3,
  delay: Math.random() * 2,
}));

const SplashScreen = ({ onEnter }: SplashScreenProps) => {
  const [exiting, setExiting] = useState(false);
  const [guessed, setGuessed] = useState(false);
  const [correct, setCorrect] = useState(false);

  const handleGuess = (isCorrect: boolean) => {
    setGuessed(true);
    if (isCorrect) {
      setCorrect(true);
      setTimeout(() => {
        setExiting(true);
        setTimeout(onEnter, 800);
      }, 500);
    }
  };

  const handleRefresh = () => {
    setGuessed(false);
    setCorrect(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0e27 0%, #1a1a3e 50%, #0f0f1e 100%)",
        opacity: exiting ? 0 : 1,
        transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* ── starfield background ── */}
      <div className="absolute inset-0 z-0">
        {STARS.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: 0,
              animation: `twinkleStar ${star.duration}s ease-in-out ${star.delay}s infinite`,
              boxShadow: `0 0 ${star.size * 2}px rgba(255,255,255,0.8)`,
            }}
          />
        ))}
      </div>

      {/* ── animated nebula gradient ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(138,43,226,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(30,144,255,0.15) 0%, transparent 50%)",
          animation: "nebulaPulse 8s ease-in-out infinite",
        }}
      />

      {/* ── pesawat terbang ── */}
      <div
        className="absolute z-10 pointer-events-none"
        style={{
          top: "25%",
          left: "-15%",
          animation: "planeFly 20s cubic-bezier(0.45, 0, 0.55, 1) infinite",
        }}
      >
        <div style={{ animation: "planeFloat 3s ease-in-out infinite" }}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: "drop-shadow(0 0 8px rgba(255,255,255,0.6))",
              transform: "scaleX(-1) rotate(-90deg)",
            }}
          >
            <path
              d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
              fill="rgba(255,255,255,0.9)"
            />
          </svg>
        </div>
      </div>

      {/* ── content centered ── */}
      <div className="relative z-20 flex flex-col items-center px-4 md:px-6 max-w-md w-full">
        {/* Question */}
        <h2
          className="font-display text-white font-semibold text-center mb-6 md:mb-8"
          style={{
            fontSize: "clamp(1.5rem, 6vw, 2.8rem)",
            animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            textShadow: "0 0 20px rgba(138,43,226,0.5)",
          }}
        >
          Mana Aku
          <br />
          Yang Asli?
        </h2>

        {/* Photo Grid - Foto 3 & 4 */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-xs">
          {/* Foto 3 - Correct */}
          <button
            onClick={() => handleGuess(true)}
            disabled={guessed}
            className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
              guessed && !correct
                ? "opacity-50"
                : "hover:scale-105 active:scale-95"
            } ${correct && "scale-105 ring-2 ring-green-400"}`}
            style={{
              animation:
                "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both",
            }}
          >
            <img
              src="/foto3.jpg"
              alt="Foto 3"
              className="w-full aspect-square object-cover group-hover:opacity-90 transition-opacity"
            />
            {guessed && correct && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <span className="text-3xl md:text-4xl">✓</span>
              </div>
            )}
          </button>

          {/* Foto 4 - Wrong */}
          <button
            onClick={() => handleGuess(false)}
            disabled={guessed}
            className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
              guessed && correct
                ? "opacity-50"
                : "hover:scale-105 active:scale-95"
            } ${guessed && !correct && "ring-2 ring-red-400"}`}
            style={{
              animation:
                "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both",
            }}
          >
            <img
              src="/foto4.jpg"
              alt="Foto 4"
              className="w-full aspect-square object-cover group-hover:opacity-90 transition-opacity"
            />
            {guessed && !correct && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <span className="text-3xl md:text-4xl">✗</span>
              </div>
            )}
          </button>
        </div>

        {/* Feedback & Refresh Button */}
        {guessed && !correct && (
          <div
            className="flex flex-col items-center gap-3 mt-4 md:mt-6"
            style={{
              animation: "fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <p className="font-body text-white/60 text-sm">
              Bukan yang itu... coba lagi!
            </p>
            <button
              onClick={handleRefresh}
              className="group flex items-center gap-2 font-body text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-white/50 hover:text-white/90 transition-colors duration-400"
            >
              🔄 Refresh
              <span
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes twinkleStar {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes nebulaPulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes planeFly {
          0% {
            transform: translateX(-15vw) translateY(0) rotate(3deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          25% {
            transform: translateX(20vw) translateY(-15px) rotate(5deg);
          }
          50% {
            transform: translateX(50vw) translateY(0) rotate(3deg);
          }
          75% {
            transform: translateX(80vw) translateY(10px) rotate(2deg);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(125vw) translateY(-5px) rotate(4deg);
            opacity: 0;
          }
        }
        @keyframes planeFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
