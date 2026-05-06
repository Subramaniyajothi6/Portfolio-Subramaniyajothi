import { useState, useEffect } from "react";
import { motion } from "motion/react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

function Navigation({ activeSection, onLinkClick, onSectionClick }) {
  return (
    <ul className="nav-ul">
      {NAV_LINKS.map(({ id, label }) => (
        <li key={id} className="nav-li">
          <a
            className={`nav-link cursor-pointer relative ${
              activeSection === id ? "text-white" : ""
            }`}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              onSectionClick(id);
              onLinkClick();
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {label}
            {activeSection === id && (
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full" />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const ids = NAV_LINKS.map(({ id }) => id);
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.4;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Subramaniyajothi S
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation activeSection={activeSection} onLinkClick={() => {}} onSectionClick={setActiveSection} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation
              activeSection={activeSection}
              onLinkClick={() => setIsOpen(false)}
              onSectionClick={setActiveSection}
            />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
