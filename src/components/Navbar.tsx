import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showTransparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent
          ? "bg-transparent"
          : "bg-ace-surface shadow-md border-b border-border"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-purple flex items-center justify-center">
            <span className="font-heading font-black text-sm text-accent">A</span>
          </div>
          <span className={`font-heading font-bold text-xl ${showTransparent ? "text-ace-surface" : "text-ace-text"}`}>
            ACE <span className="text-ace-gold">Sports</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-medium transition-colors flex items-center gap-1 hover:text-ace-gold ${
                showTransparent ? "text-ace-surface" : "text-ace-text"
              } ${location.pathname === link.href ? "text-ace-gold" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-pill bg-ace-gold text-ace-text font-heading font-bold text-sm hover:bg-ace-gold-bright transition-colors"
        >
          Book Free Trial
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ${showTransparent ? "text-ace-surface" : "text-ace-text"}`}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-ace-surface z-40 flex flex-col p-6 gap-4 animate-in slide-in-from-right">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className={`font-heading font-semibold text-lg py-3 border-b border-border ${
                location.pathname === link.href ? "text-ace-gold" : "text-ace-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 text-center px-6 py-3 rounded-pill bg-ace-gold text-ace-text font-heading font-bold"
          >
            Book Free Trial
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
