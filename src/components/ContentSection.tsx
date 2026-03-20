import { Play, Image as ImageIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContentSection = () => {
  const videoRef = useScrollReveal();
  const photo1Ref = useScrollReveal(0.1);
  const photo2Ref = useScrollReveal(0.2);

  return (
    <section className="eid-section">
      <div className="eid-container">
        {/* Video */}
        <div ref={videoRef} className="mb-12">
          <div className="bg-eid-blue/10 rounded-lg overflow-hidden aspect-video flex items-center justify-center relative">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <Play className="text-primary ml-1" size={28} />
              </div>
              <p className="font-display text-lg text-eid-text">
                A Message of Faith
              </p>
              <p className="font-body text-sm text-eid-text-muted mt-1">
                Tap to play
              </p>
            </div>
          </div>
        </div>

        {/* Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
          <div ref={photo1Ref} className="polaroid-frame">
            <div className="aspect-[4/3] bg-eid-brown-light/40 rounded-sm flex items-center justify-center">
              <ImageIcon className="text-eid-brown/50" size={48} />
            </div>
            <p className="font-body text-sm text-eid-text-muted text-center mt-4">
              Momen Kita 1
            </p>
          </div>

          <div ref={photo2Ref} className="polaroid-frame">
            <div className="aspect-[4/3] bg-eid-blue-light/40 rounded-sm flex items-center justify-center">
              <ImageIcon className="text-eid-blue/50" size={48} />
            </div>
            <p className="font-body text-sm text-eid-text-muted text-center mt-4">
              Momen Kita 2
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
