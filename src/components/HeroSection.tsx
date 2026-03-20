import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const titleRef = useScrollReveal();
  const subtitleRef = useScrollReveal(0.15);

  return (
    <section className="relative pt-12 md:pt-20 min-h-screen flex items-end overflow-hidden">
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

      {/* ── black overlay for readability ── */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* ── floating foto 1 (right side) ── */}
      <div
        className="absolute z-10 pointer-events-none"
        style={{
          top: "12%",
          right: "4%",
          animation: "float 4s ease-in-out infinite",
          animationDelay: "0s",
        }}
      >
        <img
          src="/foto1.jpg"
          alt="Floating foto 1"
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-lg shadow-2xl"
          style={{
            transform: "rotate(-12deg)",
          }}
        />
      </div>

      {/* ── floating foto 2 (right side below foto 1) ── */}
      <div
        className="absolute z-10 pointer-events-none"
        style={{
          bottom: "15%",
          right: "2%",
          animation: "float 5s ease-in-out infinite",
          animationDelay: "1s",
        }}
      >
        <img
          src="/foto2.jpg"
          alt="Floating foto 2"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-2xl"
          style={{
            transform: "rotate(8deg)",
          }}
        />
      </div>

      {/* ── content at bottom left ── */}
      <div className="relative z-10 eid-container pb-12 md:pb-20 pr-0">
        <div className="max-w-lg">
          <h1
            ref={titleRef}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight md:leading-[1.1] tracking-tight"
          >
            Selamat
            <br />
            Idul Fitri,
            <br />
            Teman-teman!
          </h1>

          <p
            ref={subtitleRef}
            className="font-body text-base md:text-lg text-white/90 mt-6 leading-relaxed"
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
