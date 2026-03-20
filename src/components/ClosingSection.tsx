import { Share2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";

const ClosingSection = () => {
  const ref = useScrollReveal();
  const btnRef = useScrollReveal(0.2);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: "Selamat Idul Fitri!", url });
    } else {
      await navigator.clipboard.writeText(url);
      toast("Link disalin!");
    }
  };

  return (
    <section className="eid-section pb-24">
      <div className="eid-container text-center">
        <p
          ref={ref}
          className="font-display text-xl md:text-2xl text-eid-brown leading-relaxed max-w-lg mx-auto"
          style={{ textWrap: "balance" }}
        >
          Semoga keberkahan Idul Fitri menyertai langkah kita semua. Tetap jalin
          silaturahmi!
        </p>

        <div ref={btnRef} className="mt-8">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-eid-brown/30 text-eid-brown font-body text-sm
              hover:bg-eid-brown/10 active:scale-[0.97] transition-all duration-200"
          >
            <Share2 size={16} />
            Bagikan
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
