import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What age groups does ACE Sports cater to?", a: "We welcome athletes of all ages — from school students (8+) to adults. Our programs are designed with age-appropriate training methodologies." },
  { q: "Do I need prior sports experience to join?", a: "Not at all! We have dedicated beginner programs designed to build fundamentals from scratch. Our coaches will guide you every step of the way." },
  { q: "What sports does ACE offer?", a: "We currently offer Football, Calisthenics, Cricket, and Archery — each with multiple program tiers from beginner to advanced." },
  { q: "Where are the training sessions held?", a: "Training sessions are held at Nanji Shamji School Ground, near AADI ALLURE, Kanjurmarg East, Mumbai 400042." },
  { q: "How can I book a free trial?", a: "You can book a free trial by clicking the 'Book Free Trial' button on our website, or reach out via WhatsApp at +91 84520 94237." },
  { q: "What is the schedule for training sessions?", a: "Sessions are held throughout the week with flexible morning and evening slots. Contact us for the latest schedule." },
  { q: "Do you offer school & college coaching programs?", a: "Yes! We provide structured coaching programs for schools and colleges, from PE fundamentals to competitive inter-college training." },
  { q: "What makes ACE different from other academies?", a: "ACE combines discipline-driven coaching, multi-sport expertise, and a performance-first mindset — all under one roof with experienced coaches." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useFadeIn();

  return (
    <section className="py-20 bg-ace-bg-alt">
      <div ref={ref} className="container mx-auto px-4 max-w-3xl section-fade-in">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-2 text-ace-text">
          Frequently Asked <span className="text-ace-purple">QUESTIONS</span>
        </h2>
        <p className="text-center text-ace-text-muted mb-10">
          Quick answers about training, joining, and schedules
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-b border-border overflow-hidden transition-all ${
                open === i ? "border-l-4 border-l-ace-gold pl-4" : ""
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-heading font-semibold text-ace-text pr-4">{faq.q}</span>
                <span className="text-ace-gold flex-shrink-0 transition-transform duration-300" style={{ transform: open === i ? "rotate(45deg)" : "rotate(0)" }}>
                  <Plus size={20} />
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? "200px" : "0px", opacity: open === i ? 1 : 0 }}
              >
                <p className="text-ace-text-muted pb-4 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
