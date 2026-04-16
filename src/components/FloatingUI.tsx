import { useState, useEffect } from "react";
import { MessageCircle, Phone, Instagram, Youtube, Twitter, X } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "Instagram", icon: Instagram, href: "#", color: "hover:bg-[#E1306C]" },
  { label: "YouTube", icon: Youtube, href: "#", color: "hover:bg-[#FF0000]" },
  { label: "X / Twitter", icon: Twitter, href: "#", color: "hover:bg-[#000000]" },
  { label: "WhatsApp", icon: MessageCircle, href: "https://wa.me/918452094237", color: "hover:bg-ace-whatsapp" },
];

const FloatingUI = () => {
  const [socialOpen, setSocialOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* DESKTOP SIDE PANEL */}
      <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col items-end">
        {SOCIAL_LINKS.map((s, i) => {
          const Icon = s.icon;
          return (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{ transitionDelay: `${i * 30}ms` }}
              className={`
                group flex items-center overflow-hidden
                h-11 bg-ace-purple/80 backdrop-blur-sm
                border-l border-t border-b border-ace-purple/40
                text-ace-surface
                w-11 hover:w-auto hover:pr-4 hover:pl-3
                transition-all duration-300 ease-in-out
                ${i === 0 ? "rounded-tl-xl" : ""}
                ${i === SOCIAL_LINKS.length - 1 ? "rounded-bl-xl" : ""}
                ${s.color}
              `}
            >
              <Icon size={18} className="flex-shrink-0 mx-auto group-hover:mx-0" />
              <span className="text-xs font-bold whitespace-nowrap max-w-0 group-hover:max-w-[80px] overflow-hidden transition-all duration-300">
                &nbsp;{s.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* DESKTOP WHATSAPP BUTTON */}
      <a
        href="https://wa.me/918452094237"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex fixed bottom-8 right-6 z-50 w-14 h-14 rounded-full bg-ace-whatsapp items-center justify-center shadow-xl hover:scale-110 transition-all duration-200"
      >
        <MessageCircle className="text-white" size={26} />
      </a>

      {/* MOBILE BAR */}
      <div
        className={`
          lg:hidden fixed bottom-0 left-0 right-0 z-50
          transition-transform duration-300
          ${scrolled ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <div className="mx-3 mb-3 rounded-2xl bg-white shadow-xl overflow-hidden">

          {/* SOCIAL ROW */}
          <div
            className={`
              flex justify-around px-4 overflow-hidden
              transition-all duration-300
              ${socialOpen ? "h-12 border-b" : "h-0"}
            `}
          >
            {SOCIAL_LINKS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-purple-200"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          {/* MAIN CTA */}
          <div className="flex gap-2 p-2.5">

            {/* TOGGLE */}
            <button
              onClick={() => setSocialOpen((v) => !v)}
              className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center"
            >
              {socialOpen ? <X size={18} /> : <Instagram size={18} />}
            </button>

            {/* CALL */}
            <a
              href="tel:+918452094237"
              className="flex-1 h-11 rounded-xl bg-purple-600 text-white flex items-center justify-center gap-1.5"
            >
              <Phone size={14} />
              Call
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/918452094237"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-11 rounded-xl bg-green-500 text-white flex items-center justify-center gap-1.5"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>

            {/* JOIN */}
            <a
              href="#contact"
              className="flex-1 h-11 rounded-xl bg-yellow-400 text-black flex items-center justify-center"
            >
              Join Now
            </a>

          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingUI;