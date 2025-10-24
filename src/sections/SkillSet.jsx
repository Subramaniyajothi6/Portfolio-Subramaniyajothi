import { useState, useEffect } from 'react';

const SkillSet = () => {
  const [isVisible, setIsVisible] = useState(false);

const skills = [
  { name: "HTML5", level: 95, color: "from-orange-500 to-orange-600", icon: "assets/logos/html5.svg" },
  { name: "CSS3", level: 90, color: "from-cyan-400 to-teal-500", icon: "assets/logos/css3.svg" },
  { name: "Tailwind CSS", level: 88, color: "from-teal-400 to-cyan-500", icon: "assets/logos/tailwindcss.svg" },
  { name: "Bootstrap", level: 82, color: "from-purple-500 to-fuchsia-600", icon: "assets/logos/bootstrap.svg" },
  { name: "JavaScript", level: 85, color: "from-orange-400 to-orange-500", icon: "assets/logos/javascript.svg" },
  { name: "TypeScript", level: 20, color: "from-cyan-500 to-blue-600", icon: "assets/logos/typescript.svg" },
  { name: "React", level: 90, color: "from-cyan-400 to-cyan-600", icon: "assets/logos/react.svg" },
  { name: "Next.js", level: 30, color: "from-slate-700 to-slate-900", icon: "assets/logos/next-js.svg" },
  { name: "Node.js", level: 80, color: "from-green-500 to-teal-600", icon: "assets/logos/node-js.svg" },
  { name: "Express.js", level: 78, color: "from-slate-600 to-slate-800", icon: "assets/logos/Express.svg" },
  { name: "MongoDB", level: 75, color: "from-green-500 to-green-700", icon: "assets/logos/mongo-db.svg" },
];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="c-space section-spacing">
      <div className="flex flex-col justify-center h-full p-4 max-w-6xl mx-auto">
        <div className="z-10 mb-12">
          <p className="text-heading">Technical Skills</p>
          <p className="subtext">My proficiency in core technologies</p>
        </div>
        
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="space-y-3 opacity-0 animate-fadeIn"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-neutral-800 rounded-lg flex items-center justify-center p-2">
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-white font-semibold text-base">{skill.name}</span>
                  </div>
                  <span className="text-neutral-300 font-bold text-lg">{skill.level}%</span>
                </div>
                <div className="relative w-full bg-neutral-800 rounded-full h-4 overflow-hidden shadow-inner">
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-4 rounded-full transition-all duration-[2500ms] ease-out relative overflow-hidden`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 150}ms`,
                      boxShadow: isVisible ? '0 0 10px rgba(59, 130, 246, 0.5)' : 'none'
                    }}
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
