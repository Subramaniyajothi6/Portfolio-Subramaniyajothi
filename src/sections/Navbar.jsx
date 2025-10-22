import { useState } from "react";
import { motion } from "motion/react";
function Navigation() {
  return (
    <ul className="nav-ul ">
      <li className="nav-li">
        <a className="nav-link" 
         onClick={() => {
                // Add your contact logic here
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }} >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link cursor-pointer" 
        
         onClick={() => {
                // Add your contact logic here
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}>
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link cursor-pointer" 
         onClick={() => {
                // Add your contact logic here
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }}
        
        >
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link cursor-pointer" 
         onClick={() => {
                // Add your contact logic here
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
          Contact
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            <Navigation />
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
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
