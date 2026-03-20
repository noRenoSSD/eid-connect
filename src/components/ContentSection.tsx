import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CameraFrameProps {
  src: string;
  label: string;
  delay?: number;
  meta?: { aperture: string; shutter: string; iso: string };
}

const CameraFrame = ({
  src,
  label,
  delay = 0,
  meta = { aperture: "f/1.8", shutter: "1/250", iso: "ISO 400" },
}: CameraFrameProps) => {
  const ref = useScrollReveal(delay);

  return (
    <div ref={ref} className="group">
      {/* Camera body */}
      <div className="relative bg-[#0f0f0f] rounded overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
        {/* Viewfinder corner brackets */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-white/50" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-white/50" />
          <div className="absolute bottom-8 left-3 w-5 h-5 border-b border-l border-white/50" />
          <div className="absolute bottom-8 right-3 w-5 h-5 border-b border-r border-white/50" />
        </div>

        {/* Center crosshair – shows on hover */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="relative w-6 h-6">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/30" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/30" />
          </div>
        </div>

        {/* Subtle scanlines overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,1) 2px, rgba(0,0,0,1) 4px)",
          }}
        />

        {/* Photo */}
        <img
          src={src}
          alt={label}
          className="w-full aspect-[4/3] object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
        />

        {/* Camera HUD bar */}
        <div className="absolute bottom-0 left-0 right-0 h-7 bg-black/75 backdrop-blur-sm flex items-center justify-between px-3">
          <span className="font-mono text-[8px] text-white/40 tracking-wider">
            {meta.aperture}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/70 animate-pulse" />
            <span className="font-mono text-[8px] text-white/40 tracking-wider">
              {meta.shutter}
            </span>
          </div>
          <span className="font-mono text-[8px] text-white/40 tracking-wider">
            {meta.iso}
          </span>
        </div>
      </div>

      {/* Caption */}
      <p className="font-body text-sm text-eid-text-muted text-center mt-3 tracking-wide">
        {label}
      </p>
    </div>
  );
};

const ContentSection = () => {
  const titleRef = useScrollReveal();
  const subtitleRef = useScrollReveal(0.15);

  return (
    <section className="eid-section">
      <div className="eid-container">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className="font-display text-2xl md:text-4xl font-semibold text-eid-text"
          >
            Momen Kita
          </h2>
          <p
            ref={subtitleRef}
            className="font-body text-sm text-eid-text-muted mt-2 tracking-wide"
          >
            diabadikan dengan sepenuh hati
          </p>
        </div>

        {/* Camera frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-3xl mx-auto">
          <CameraFrame
            src="/foto1.jpg"
            label="Momen Kita · I"
            delay={0.1}
            meta={{ aperture: "f/2.0", shutter: "1/320", iso: "ISO 200" }}
          />
          <CameraFrame
            src="/foto2.jpg"
            label="Momen Kita · II"
            delay={0.25}
            meta={{ aperture: "f/1.8", shutter: "1/250", iso: "ISO 400" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
