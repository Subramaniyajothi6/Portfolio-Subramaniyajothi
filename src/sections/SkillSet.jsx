// import { useState, useEffect } from 'react';

// const SkillSet = () => {
//   const [isVisible, setIsVisible] = useState(false);

// const skills = [
//   { name: "HTML5", level: 95, color: "from-orange-500 to-orange-600", icon: "assets/logos/html5.svg" },
//   { name: "CSS3", level: 90, color: "from-cyan-400 to-teal-500", icon: "assets/logos/css3.svg" },
//   { name: "Tailwind CSS", level: 88, color: "from-teal-400 to-cyan-500", icon: "assets/logos/tailwindcss.svg" },
//   { name: "Bootstrap", level: 82, color: "from-purple-500 to-fuchsia-600", icon: "assets/logos/bootstrap.svg" },
//   { name: "JavaScript", level: 85, color: "from-orange-400 to-orange-500", icon: "assets/logos/javascript.svg" },
//   { name: "TypeScript", level: 20, color: "from-cyan-500 to-blue-600", icon: "assets/logos/typescript.svg" },
//   { name: "React", level: 90, color: "from-cyan-400 to-cyan-600", icon: "assets/logos/react.svg" },
//   { name: "Next.js", level: 30, color: "from-slate-700 to-slate-900", icon: "assets/logos/next-js.svg" },
//   { name: "Node.js", level: 80, color: "from-green-500 to-teal-600", icon: "assets/logos/node-js.svg" },
//   { name: "Express.js", level: 78, color: "from-slate-600 to-slate-800", icon: "assets/logos/Express.svg" },
//   { name: "MongoDB", level: 75, color: "from-green-500 to-green-700", icon: "assets/logos/mongo-db.svg" },
// ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 200);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="c-space section-spacing">
//       <div className="flex flex-col justify-center h-full p-4 max-w-6xl mx-auto">
//         <div className="z-10 mb-12">
// <div className="z-10 mb-12">
//   <h2 className="text-heading mb-3">Technical Skills</h2>
//   <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mb-4"></div>
//   <p className="subtext">My proficiency across the full-stack development ecosystem</p>
// </div>
//           <p className="text-heading">Technical Skills</p>
//           <p className="subtext">My proficiency in core technologies</p>
//         </div>

//         <div className="w-full">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {skills.map((skill, index) => (
//               <div 
//                 key={index} 
//                 className="space-y-3 opacity-0 animate-fadeIn"
//                 style={{ 
//                   animationDelay: `${index * 150}ms`,
//                   animationFillMode: 'forwards'
//                 }}
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className="w-14 h-14 sm:w-16 sm:h-16 bg-neutral-800 rounded-lg flex items-center justify-center p-2">
//                       <img 
//                         src={skill.icon} 
//                         alt={skill.name}
//                         className="w-full h-full object-contain"
//                       />
//                     </div>
//                     <span className="text-white font-semibold text-base">{skill.name}</span>
//                   </div>
//                   <span className="text-neutral-300 font-bold text-lg">{skill.level}%</span>
//                 </div>
//                 <div className="relative w-full bg-neutral-800 rounded-full h-4 overflow-hidden shadow-inner">
//                   <div
//                     className={`bg-gradient-to-r ${skill.color} h-4 rounded-full transition-all duration-[2500ms] ease-out relative overflow-hidden`}
//                     style={{ 
//                       width: isVisible ? `${skill.level}%` : '0%',
//                       transitionDelay: `${index * 150}ms`,
//                       boxShadow: isVisible ? '0 0 10px rgba(59, 130, 246, 0.5)' : 'none'
//                     }}
//                   >
//                     {/* Shine effect */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillSet;

import { useState, useEffect, useRef } from 'react';

const SkillSet = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

const skills = [
  { name: "HTML5", level: 95, color: "from-orange-500 to-orange-600", icon: "assets/logos/html5.svg" },
  { name: "CSS3", level: 90, color: "from-cyan-400 to-teal-500", icon: "assets/logos/css3.svg" },
  { name: "Tailwind CSS", level: 88, color: "from-teal-400 to-cyan-500", icon: "assets/logos/tailwindcss.svg" },
  { name: "Bootstrap", level: 82, color: "from-purple-500 to-purple-700", icon: "assets/logos/bootstrap.svg" },
  { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-500", icon: "assets/logos/javascript.svg" },
  { name: "TypeScript", level: 20, color: "from-blue-500 to-blue-700", icon: "assets/logos/typescript.svg" }, // ✅ Changed to 20%
  { name: "React", level: 90, color: "from-cyan-400 to-blue-500", icon: "assets/logos/react.svg" },
  { name: "Next.js", level: 30, color: "from-slate-700 to-black", icon: "assets/logos/next-js.svg" }, // ✅ Changed to 30%
  { name: "Node.js", level: 80, color: "from-green-500 to-green-700", icon: "assets/logos/node-js.svg" },
  { name: "Express.js", level: 78, color: "from-slate-600 to-slate-800", icon: "assets/logos/Express.svg" },
  { name: "MongoDB", level: 75, color: "from-green-500 to-green-700", icon: "assets/logos/mongo-db.svg" },
];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="c-space section-spacing" id="skills" ref={sectionRef}>
      <div className="flex flex-col justify-center h-full p-4 max-w-6xl mx-auto">
        <div className="z-10 mb-12">
          <h2 className="text-heading mb-3">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mb-4"></div>
          <p className="subtext">My proficiency across the full-stack development ecosystem</p>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group space-y-3 opacity-0 animate-fadeIn"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-20 rounded-lg blur-md group-hover:opacity-40 transition-opacity duration-300`}></div>
                      <div className="relative w-full h-full bg-neutral-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center p-2 border border-neutral-700/50 group-hover:border-neutral-600/50 transition-all duration-300 group-hover:scale-110">
                        <img
                          src={skill.icon}
                          alt={`${skill.name} logo`}
                          className="w-full h-full object-contain drop-shadow-lg"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <span className="text-white font-semibold text-base sm:text-lg group-hover:text-teal-300 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-neutral-300 font-bold text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar - FIXED: Gray background stays full, but grid pattern ONLY in filled area */}
                <div className="relative w-full bg-neutral-800/60 backdrop-blur-sm rounded-full h-3 sm:h-4 border border-neutral-700/30">

                  {/* Animated progress bar container - THIS controls what shows the grid */}
                  <div
                    className="relative h-full overflow-hidden rounded-full"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transition: 'width 2500ms ease-out',
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    {/* FIXED: Grid pattern NOW ONLY inside the filled area */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}></div>

                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${skill.color} blur-sm opacity-60`}
                      style={{ filter: 'blur(8px)' }}
                    ></div>

                    {/* Solid progress bar */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} shadow-lg`}>
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />

                      {/* Pulse effect on the right edge */}
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/60 animate-pulse"></div>

                      {/* Inner highlight */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent h-1/2"></div>
                    </div>
                  </div>
                </div>

                {/* Skill level description */}
                <div className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-1.5 text-teal-400">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full animate-pulse"></span>
                    {skill.level >= 85 ? 'Expert Level' : skill.level >= 70 ? 'Advanced' : skill.level >= 50 ? 'Intermediate' : 'Learning'}
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { 
            transform: translateX(-100%); 
          }
          100% { 
            transform: translateX(100%); 
          }
        }
        
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SkillSet;
