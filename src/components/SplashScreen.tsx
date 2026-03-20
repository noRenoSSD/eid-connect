import { useState } from "react";

interface SplashScreenProps {
  onEnter: () => void;
}

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
        background: "#0c0c0c",
        opacity: exiting ? 0 : 1,
        transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* ── content centered ── */}
      <div className="relative z-20 flex flex-col items-center px-6 max-w-md w-full">
        {/* Question */}
        <h2
          className="font-display text-white font-semibold text-center mb-8"
          style={{
            fontSize: "clamp(2rem, 8vw, 3rem)",
            animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          Mana Aku
          <br />
          Yang Asli?
        </h2>

        {/* Photo Grid - Foto 3 & 4 */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
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
              animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both",
            }}
          >
            <img
              src="/foto3.jpg"
              alt="Foto 3"
              className="w-full aspect-square object-cover group-hover:opacity-90 transition-opacity"
            />
            {guessed && correct && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <span className="text-4xl">✓</span>
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
              animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both",
            }}
          >
            <img
              src="/foto4.jpg"
              alt="Foto 4"
              className="w-full aspect-square object-cover group-hover:opacity-90 transition-opacity"
            />
            {guessed && !correct && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <span className="text-4xl">✗</span>
              </div>
            )}
          </button>
        </div>

        {/* Feedback & Refresh Button */}
        {guessed && !correct && (
          <div
            className="flex flex-col items-center gap-3 mt-6"
            style={{
              animation: "fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <p className="font-body text-white/60 text-sm">
              Bukan yang itu... coba lagi!
            </p>
            <button
              onClick={handleRefresh}
              className="group flex items-center gap-2 font-body text-[11px] tracking-[0.25em] uppercase text-white/50 hover:text-white/90 transition-colors duration-400"
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
      `}</style>
    </div>
  );
};

export default SplashScreen;
