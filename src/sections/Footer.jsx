import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="c-space py-8">
      <div className="relative mb-8">
        <div className="bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent h-[2px] w-full" />
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          {/* Left - Copyright */}
          <div className="text-sm text-neutral-400 text-center md:text-left order-3 md:order-1">
            <p>© {new Date().getFullYear()} Subramaniyajothi. All rights reserved.</p>
          </div>

          {/* Center - Social Links */}
          <div className="flex gap-4 justify-center order-1 md:order-2">
            {mySocials.map((social, index) => (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="grid place-items-center w-12 h-12 rounded-lg bg-gradient-to-b from-storm to-indigo hover:from-royal hover:to-lavender transition-all duration-300 hover:scale-110 group"
              >
                <img
                  src={social.icon}
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  alt={social.name}
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </a>
            ))}
          </div>

          {/* Right - Links */}
          <div className="flex gap-4 text-sm text-neutral-400 order-2 md:order-3 justify-center md:justify-end">
            <a
              href="https://github.com/Subramaniyajothi6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <span className="text-neutral-600">•</span>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-cyan-400 transition-colors"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
