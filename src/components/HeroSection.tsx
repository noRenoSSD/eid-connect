import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const titleRef = useScrollReveal();
  const subtitleRef = useScrollReveal(0.15);

  return (
    <section className="relative min-h-screen overflow-hidden bg-cover bg-center">
      {/* Desktop video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden lg:block absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      {/* Overlay for desktop video */}
      <div className="hidden lg:block absolute inset-0 bg-black/30 z-0" />
      {/* Mobile background */}
      <div
        className="block lg:hidden absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url(/foto5.jpg)" }}
      />
      {/* ── video background ── */}
      {/* Mobile video */}
      <div className="block lg:hidden w-full flex flex-col items-center mb-6 z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-md rounded-lg shadow-lg"
          style={{ zIndex: 2 }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── black overlay for readability (darker) ── */}

      {/* ── Mobile greeting above video ── */}
      <div className="block lg:hidden w-full px-4 pt-8 z-10 text-center">
        <h1
          ref={titleRef}
          className="font-display text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight mb-2"
        >
          Selamat Idul Fitri,
          <br />
          Teman-teman!
        </h1>
        <p className="text-white text-base mb-4">
          Semoga kita semua diberi kesehatan, kebahagiaan, dan keberkahan. Amin.
        </p>
      </div>

      {/* ── floating foto 1 & 2 (mobile only) ── */}
      {/* Mobile: fotobooth card gabungan */}
      <div className="block lg:hidden flex flex-col items-center justify-center mt-4 z-10">
        <div
          className="p-2 bg-white rounded-lg shadow-xl border-4 border-gray-300 relative flex flex-col items-center animate-float"
          style={{ transform: "rotate(-6deg)" }}
        >
          <div className="flex flex-row gap-2">
            <img
              src="/foto1.jpg"
              alt="Floating foto 1"
              className="w-32 h-32 object-cover rounded"
              style={{}}
            />
            <img
              src="/foto2.jpg"
              alt="Floating foto 2"
              className="w-32 h-32 object-cover rounded"
              style={{}}
            />
          </div>
          <div style={{ height: "24px" }}></div>
          <span
            style={{
              marginTop: "-8px",
              fontSize: "1rem",
              color: "#555",
              fontWeight: "bold",
            }}
          >
            foto 1 Lugri & foto 2 Sospol
          </span>
        </div>
      </div>

      {/* Desktop: fotobooth card di kanan agak ke tengah - miring */}
      <div
        className="hidden lg:block absolute z-10"
        style={{ top: "10%", right: "12%" }}
      >
        <div
          className="p-2 bg-white rounded-lg shadow-xl border-4 border-gray-300 relative flex flex-col items-center w-64 animate-float1"
          style={{ transform: "rotate(-12deg)", animationDelay: "0s" }}
        >
          <img
            src="/foto1.jpg"
            alt="Floating foto 1"
            className="w-56 h-56 object-cover rounded"
            style={{}}
          />
          <div style={{ height: "32px" }}></div>
          <span
            style={{
              marginTop: "-16px",
              fontSize: "1rem",
              color: "#555",
              fontWeight: "bold",
            }}
          >
            foto 1 Lugri
          </span>
        </div>
        <div
          className="mt-8 p-2 bg-white rounded-lg shadow-xl border-4 border-gray-300 relative flex flex-col items-center w-64 animate-float2"
          style={{ transform: "rotate(8deg)", animationDelay: "1.5s" }}
        >
          <img
            src="/foto2.jpg"
            alt="Floating foto 2"
            className="w-56 h-56 object-cover rounded"
            style={{}}
          />
          <div style={{ height: "32px" }}></div>
          <span
            style={{
              marginTop: "-16px",
              fontSize: "1rem",
              color: "#555",
              fontWeight: "bold",
            }}
          >
            foto 2 Sospol
          </span>
        </div>
      </div>

      {/* Desktop greeting at bottom left */}
      <div className="hidden lg:block absolute left-0 bottom-0 z-10 px-6 pb-8 text-left">
        <h1
          ref={titleRef}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-2"
        >
          Selamat Idul Fitri,
          <br />
          Teman-teman!
        </h1>
        <p className="text-white text-lg mb-4">
          Semoga kita semua diberi kesehatan, kebahagiaan, dan keberkahan. Amin.
        </p>
      </div>
      {/* Subtitle (desktop only) */}

      <style>{`
        @keyframes float1 {
          0%, 100% {
            transform: translateY(0px) rotate(-12deg);
          }
          25% {
            transform: translateY(-10px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(-12deg);
          }
          75% {
            transform: translateY(-10px) rotate(0deg);
          }
        }
        @keyframes float2 {
          0%, 100% {
            transform: translateY(0px) rotate(8deg);
          }
          25% {
            transform: translateY(-10px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(8deg);
          }
          75% {
            transform: translateY(-10px) rotate(0deg);
          }
        }
        .animate-float1 {
          animation: float1 3s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 3s ease-in-out infinite;
        }
        .animate-float1[style*='animationDelay: 0s'] {
          animation-delay: 0s;
        }
        .animate-float2[style*='animationDelay: 1.5s'] {
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
