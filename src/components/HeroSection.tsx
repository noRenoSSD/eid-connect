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
      {/* Mobile overlay */}
      <div className="block lg:hidden absolute inset-0 bg-black/40 z-10" />

      {/* Desktop: fotobooth cards - miring */}
      <div
        className="hidden lg:block absolute z-20"
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
      <div className="hidden lg:block absolute left-0 bottom-0 z-20 px-6 pb-8 text-left">
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

      {/* Mobile content */}
      <div className="block lg:hidden relative z-20 flex flex-col items-center px-4 py-8 min-h-screen justify-start">
        {/* Greeting - Heading */}
        <h1
          ref={titleRef}
          className="text-3xl md:text-4xl font-semibold text-white text-center leading-tight tracking-tight mb-2 mt-8"
        >
          Selamat Hari Raya
          <br />
          Idul Fitri
        </h1>

        {/* Sub-heading */}
        <p className="text-white/90 text-lg md:text-xl text-center mb-6 font-light">
          Minal Aidzin Wal Faizin, Mohon Maaf Lahir dan Batin
        </p>

        {/* Photobooth frame - foto 1, video, foto 2 jadi satu */}
        <div className="flex justify-center mb-6 w-full">
          <div
            className="p-2 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col items-center animate-float"
            style={{ transform: "rotate(-6deg)" }}
          >
            {/* Foto 1 - landscape */}
            <img
              src="/foto1.jpg"
              alt="Foto 1"
              className="w-[200px] md:w-[240px] h-auto object-cover rounded mb-2"
            />
            {/* Video */}
            <div className="bg-gradient-to-br from-white via-gray-50 to-white p-1 rounded-md border border-gray-200 mb-2">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-[200px] md:w-[240px] aspect-video object-cover rounded-sm"
              >
                <source src="/video.mp4" type="video/mp4" />
              </video>
            </div>
            {/* Foto 2 - landscape */}
            <img
              src="/foto2.jpg"
              alt="Foto 2"
              className="w-[200px] md:w-[240px] h-auto object-cover rounded mb-2"
            />
            {/* Label */}
            <span
              style={{
                fontSize: "0.9rem",
                color: "#555",
                fontWeight: "bold",
              }}
            >
              lugri-dp-sospol
            </span>
          </div>

          {/* Repan di kanan photocard - menumpuk dikit */}
          <img
            src="/repan.png"
            alt="Repan"
            className="w-[125px] md:w-[100px] h-auto rounded-full absolute"
            style={{
              transform: "translateX(135px) rotate(5deg)",
              marginTop: "10px",
            }}
          />
        </div>

        {/* Doa baik */}
        <p className="text-white/95 text-sm md:text-base text-center max-w-xs mb-6 leading-relaxed">
          Semoga kita semua diberi kesehatan, kebahagiaan, dan keberkahan.
          <br />
          Amin.
        </p>
      </div>

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
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(-6deg);
          }
          50% {
            transform: translateY(-10px) rotate(-6deg);
          }
        }
        .animate-float1 {
          animation: float1 3s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 3s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
