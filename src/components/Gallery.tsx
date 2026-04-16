import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { ZoomIn, X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import footballImg from "@/assets/football.jpg";
import cricketImg from "@/assets/cricket.jpg";
import calisthenicsImg from "@/assets/calisthenics.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, footballImg, cricketImg, calisthenicsImg];

const Gallery = () => {
  const ref = useFadeIn();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="py-20 bg-ace-bg-alt">
      <div ref={ref} className="container mx-auto px-4 section-fade-in">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-2 text-ace-text">
          ACE <span className="text-ace-purple">GALLERY</span>
        </h2>
        <p className="text-center text-ace-text-muted mb-10">Experience the GRIND!!</p>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden"
              onClick={() => setLightbox(img)}
            >
              <img src={img} alt={`Gallery ${i + 1}`} className="w-full object-cover rounded-xl" loading="lazy" />
              <div className="absolute inset-0 bg-ace-purple/0 group-hover:bg-ace-purple/60 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-ace-gold opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-3 rounded-pill bg-ace-gold text-ace-text font-heading font-bold text-sm hover:bg-ace-gold-bright transition-colors">
            +20 View More
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-ace-text/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-ace-surface" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <img src={lightbox} alt="Gallery" className="max-w-full max-h-[85vh] rounded-xl object-contain" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
