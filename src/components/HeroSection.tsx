import Globe from "./Globe";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const titleRef = useScrollReveal();
  const subtitleRef = useScrollReveal(0.15);
  const globeRef = useScrollReveal(0.3);

  return (
    <section className="eid-section pt-12 md:pt-20">
      <div className="eid-container text-center">
        <h1
          ref={titleRef}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-eid-blue leading-tight md:leading-[1.1] tracking-tight"
        >
          Selamat Idul Fitri,
          <br />
          Teman-teman!
        </h1>

        <p
          ref={subtitleRef}
          className="font-body text-base md:text-lg text-eid-text-muted mt-6 max-w-xl mx-auto leading-relaxed"
          style={{ textWrap: "pretty" }}
        >
          Mohon Maaf Lahir &amp; Batin. Meskipun jarak memisahkan, doa kita
          tetap menyatu.
        </p>

        <div ref={globeRef} className="mt-10">
          <Globe />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
