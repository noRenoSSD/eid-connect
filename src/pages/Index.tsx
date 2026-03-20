import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import ClosingSection from "@/components/ClosingSection";
import MusicToggle from "@/components/MusicToggle";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [musicReady, setMusicReady] = useState(false);

  const handleEnter = () => {
    setShowSplash(false);
    setMusicReady(true);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {showSplash && <SplashScreen onEnter={handleEnter} />}

      {!showSplash && (
        <>
          <main className="scroll-smooth">
            <HeroSection />
            <ContentSection />
            <ClosingSection />
          </main>
          <MusicToggle shouldPlay={musicReady} />
        </>
      )}
    </div>
  );
};

export default Index;
