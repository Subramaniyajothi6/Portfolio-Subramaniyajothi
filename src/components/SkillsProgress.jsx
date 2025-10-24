// const SkillsProgress = () => {
//  const skills = [
//     { name: "HTML", level: 95, color: "bg-mint" },
//     { name: "CSS", level: 90, color: "bg-aqua" },
//     { name: "JavaScript", level: 85, color: "bg-royal" },
//     { name: "TypeScript", level: 70, color: "bg-lavender" },
//     { name: "React", level: 90, color: "bg-aqua" },
//     { name: "Next.js", level: 75, color: "bg-coral" },
//     { name: "Node.js", level: 80, color: "bg-mint" },
//     { name: "Express.js", level: 78, color: "bg-lavender" },
//     { name: "MongoDB", level: 75, color: "bg-mint" },
//     { name: "Tailwind CSS", level: 88, color: "bg-aqua" },
//     { name: "Bootstrap", level: 82, color: "bg-royal" },
//   ];



//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
//       {skills.map((skill, index) => (
//         <div key={index} className="space-y-2">
//           <div className="flex justify-between text-sm">
            
//             <span className="text-white font-medium">{skill.name}</span>
//             <span className="text-neutral-400">{skill.level}%</span>
//           </div>
//           <div className="w-full bg-neutral-700 rounded-full h-2">
//             <div
//               className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
//               style={{ width: `${skill.level}%` }}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };


// export default SkillsProgress;



const SkillsProgress = () => {
  const skills = [
    { name: "HTML", level: 95, color: "bg-mint", icon: "assets/logos/html5.svg" },
    { name: "CSS", level: 90, color: "bg-aqua", icon: "assets/logos/css3.svg" },
    { name: "JavaScript", level: 85, color: "bg-royal", icon: "assets/logos/javascript.svg" },
    { name: "TypeScript", level: 70, color: "bg-lavender", icon: "assets/logos/typescript.svg" },
    { name: "React", level: 90, color: "bg-aqua", icon: "assets/logos/react.svg" },
    { name: "Next.js", level: 75, color: "bg-coral", icon: "assets/logos/nextjs.svg" },
    { name: "Node.js", level: 80, color: "bg-mint", icon: "assets/logos/node-js.svg" },
    { name: "Express.js", level: 78, color: "bg-lavender", icon: "assets/logos/Express.svg" },
    { name: "MongoDB", level: 75, color: "bg-mint", icon: "assets/logos/mongo-db.svg" },
    { name: "Tailwind CSS", level: 88, color: "bg-aqua", icon: "assets/logos/tailwindcss.svg" },
    { name: "Bootstrap", level: 82, color: "bg-royal", icon: "assets/logos/bootstrap.svg" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <img 
                src={skill.icon} 
                alt={skill.name}
                className="w-6 h-6 object-contain"
              />
              <span className="text-white font-medium">{skill.name}</span>
            </div>
            <span className="text-neutral-400">{skill.level}%</span>
          </div>
          <div className="w-full bg-neutral-700 rounded-full h-2">
            <div
              className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsProgress;

