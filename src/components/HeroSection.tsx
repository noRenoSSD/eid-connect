import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const titleRef = useScrollReveal();
  const subtitleRef = useScrollReveal(0.15);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* ── video background ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* ── black overlay for readability (darker) ── */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* ── floating foto 1 (right side - desktop only) ── */}
      <div
        className="absolute z-10 pointer-events-none hidden lg:block"
        style={{
          top: "5%",
          right: "1%",
          animation: "float 4s ease-in-out infinite",
          animationDelay: "0s",
        }}
      >
        <div className="p-2 bg-white rounded-lg shadow-xl">
          <img
            src="/foto1.jpg"
            alt="Floating foto 1"
            className="w-48 h-48 object-cover rounded"
            style={{
              transform: "rotate(-12deg)",
            }}
          />
        </div>
      </div>

      {/* ── floating foto 2 (right side below foto 1 - desktop only) ── */}
      <div
        className="absolute z-10 pointer-events-none hidden lg:block"
        style={{
          bottom: "8%",
          right: "-3%",
          animation: "float 5s ease-in-out infinite",
          animationDelay: "1s",
        }}
      >
        <div className="p-2 bg-white rounded-lg shadow-xl">
          <img
            src="/foto2.jpg"
            alt="Floating foto 2"
            className="w-56 h-56 object-cover rounded"
            style={{
              transform: "rotate(8deg)",
            }}
          />
        </div>
      </div>

      {/* ── content at bottom left ── */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 pb-6 md:pb-12 lg:pb-20">
        <div className="max-w-2xl">
          <h1
            ref={titleRef}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight"
          >
            Selamat
            <br />
            Idul Fitri,
            <br />
            Teman-teman!
          </h1>

          <p
            ref={subtitleRef}
            className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mt-3 md:mt-6 leading-relaxed max-w-xl"
            style={{ textWrap: "pretty" }}
          >
            Mohon Maaf Lahir &amp; Batin. Meskipun jarak memisahkan, doa kita
            tetap menyatu.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(var(--initial-rotation, 0deg));
          }
          50% {
            transform: translateY(-20px) rotate(var(--initial-rotation, 0deg));
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
