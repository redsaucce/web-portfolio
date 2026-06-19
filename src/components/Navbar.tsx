import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      let found = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-300 ease-out ${
        scrolled
          ? "bg-white/78 backdrop-blur-xl shadow-[0_12px_32px_-24px_rgba(88,28,135,0.24)]"
          : "bg-white/0 backdrop-blur-0 shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left — Logo */}
          <a
            href="#home"
            className="text-lg sm:text-xl font-bold tracking-tight shrink-0 bg-gradient-to-r from-primary-800 via-primary-700 to-accent-600 bg-clip-text text-transparent"
          >
            Alex Chen
          </a>

          {/* Center — Nav links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary-600 active"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right — CTA + Mobile toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              className="hidden md:inline-flex px-5 py-2 rounded-full bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-primary-600/25"
            >
              Download CV
            </a>
            <button
              className="md:hidden text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-lg px-4 py-4 space-y-1 border-t border-slate-200/60">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-primary-600 bg-primary-50"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block mx-4 mt-3 px-5 py-3 rounded-full bg-primary-600 text-white text-sm font-semibold text-center"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
