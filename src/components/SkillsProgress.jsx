const SkillsProgress = () => {
const skills = [
  { name: "HTML", level: 95, color: "bg-mint" }, // Your custom coral color
  { name: "CSS", level: 90, color: "bg-aqua" }, // Your custom royal color  
  { name: "React", level: 90, color: "bg-aqua" }, // Your custom aqua color
  { name: "JavaScript", level: 85, color: "bg-royal" }, // Your custom sand color
  { name: "Node.js", level: 80, color: "bg-mint" }, // Your custom mint color  
  { name: "MongoDB", level: 75, color: "bg-mint" }, 
  { name: "Tailwind CSS", level: 88, color: "bg-aqua" }, // Your custom aqua color
  { name: "Express.js", level: 78, color: "bg-lavender" }, // Your custom lavender color
];



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-white font-medium">{skill.name}</span>
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
