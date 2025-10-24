import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="c-space py-8">
      {/* Top Divider with Gradient */}
      <div className="relative mb-8">
        <div className="bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent h-[2px] w-full" />
      </div>
           
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Copyright */}
          <div className="text-sm text-neutral-400 order-3 md:order-1 text-center md:text-left">
            <p>© 2025 Subramaniyajothi. All rights reserved.</p>
          </div>

          {/* Center - Social Links */}
          <div className="flex gap-4 order-1 md:order-2 md:-ml-[8rem] lg:-ml-[10rem]">
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
                  className="w-5 h-5  group-hover:scale-110 transition-transform" 
                  alt={social.name}
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </a>
            ))}
          </div>

          {/* Right - Links */}
          <div className="flex gap-4 text-sm text-neutral-400 order-2 md:order-3 text-center md:text-right">
            <a href="#terms" className="hover:text-cyan-400 transition-colors">Terms</a>
            <span className="text-neutral-600">•</span>
            <a href="#privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
