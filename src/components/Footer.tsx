import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ace-text pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-purple flex items-center justify-center">
                <span className="font-heading font-black text-sm text-ace-gold">A</span>
              </div>
              <span className="font-heading font-bold text-xl text-ace-surface">
                ACE <span className="text-ace-gold">Sports</span>
              </span>
            </Link>
            <p className="text-ace-surface/60 text-sm leading-relaxed">
              146-F, Nanji Shamji School Ground, near AADI ALLURE, Kanjurmarg East, Mumbai 400042
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-ace-gold mb-4">Contact</h4>
            <div className="space-y-3 text-ace-surface/60 text-sm">
              <a href="tel:+918097255129" className="flex items-center gap-2 hover:text-ace-gold transition-colors">
                <Phone size={14} /> +91 80972 55129
              </a>
              <a href="mailto:acexi.official@gmail.com" className="flex items-center gap-2 hover:text-ace-gold transition-colors">
                <Mail size={14} /> acexi.official@gmail.com
              </a>
              <div className="flex gap-3 pt-2">
                {["Instagram", "WhatsApp", "YouTube", "X"].map((social) => (
                  <a key={social} href="#" className="w-8 h-8 rounded-full bg-ace-surface/10 flex items-center justify-center text-ace-surface/60 hover:bg-ace-gold hover:text-ace-text transition-all text-xs font-bold">
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-ace-gold mb-4">Programs</h4>
            <ul className="space-y-2 text-ace-surface/60 text-sm">
              {["Football", "Calisthenics", "Cricket", "Archery", "School Coaching", "College Coaching"].map((link) => (
                <li key={link}>
                  <Link to="/programs" className="hover:text-ace-gold transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-ace-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-ace-surface/60 text-sm">
              {[
                { label: "About", href: "/about" },
                { label: "Team", href: "/team" },
                { label: "Gallery", href: "/gallery" },
                { label: "Events", href: "/events" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-ace-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-ace-surface/10 pt-6 text-center text-ace-surface/40 text-sm">
          © 2025 ACE Sports Organization. All Rights Reserved. | www.acesports.org.in
        </div>
      </div>
    </footer>
  );
};

export default Footer;
