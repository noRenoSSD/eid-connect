import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import HeroSection from "@/components/HeroSection";
import MusicToggle from "@/components/MusicToggle";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [musicReady, setMusicReady] = useState(false);

  const handleEnter = () => {
    setShowSplash(false);
    setMusicReady(true);
  };

  return (
    <div className="h-screen overflow-hidden relative">
      {/* ── Splash screen ── */}
      {showSplash && <SplashScreen onEnter={handleEnter} />}

      {/* ── Main content ── */}
      {!showSplash && (
        <div className="relative z-10 h-screen overflow-hidden">
          <main>
            <HeroSection />
          </main>
          <MusicToggle shouldPlay={musicReady} />
        </div>
      )}
    </div>
  );
};

export default Index;
