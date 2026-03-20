import { useEffect, useRef } from "react";

const Globe = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition =
      "opacity 1s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.2s";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-lg shadow-lg"
      style={{ height: "clamp(260px, 40vw, 420px)" }}
    >
      {/* ── video background ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* ── black overlay layer ── */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default Globe;
