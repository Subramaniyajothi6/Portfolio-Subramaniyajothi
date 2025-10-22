import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Subramaniyajothi
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Solutions
          </motion.p>

          <motion.div
            className="flex gap-4 mt-8"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.1 }}
          >
            <button
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"

              onClick={() => {
                // Add your contact logic here
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}

            >
              Connect With Me
            </button>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1h7foS8iwjkXhxYtvpszTI_wBxvR_urF8/view?usp=sharing"
            >
              <button
                className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors duration-300"
               
              >
                Resume
              </button>
            </a>
          </motion.div>

          <div>

          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Subramaniyajothi
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>


        </div>
      </div>
    </div>
  );
};

export default HeroText;
