import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";

const achievements = [
  {
    title: "MERN Stack Mastery",
    description: "Built full-stack applications with MongoDB, Express, React, and Node.js",
    icon: "🚀"
  },
  {
    title: "Postman Certified",
    description: "Completed Postman API Fundamentals Student Expert certification",
    icon: "📜"
  },
  {
    title: "BigZel Internship",
    description: "4-month full-stack development internship building real-world applications",
    icon: "💼"
  },
  {
    title: "Portfolio Projects",
    description: "Created QuickCart e-commerce platform and placement management system",
    icon: "🎨"
  },
  {
    title: "Modern Tools",
    description: "Proficient in Git, GitHub, Cloudinary, JWT Auth, and deployment on Vercel/Netlify",
    icon: "⚡"
  },
  {
    title: "Responsive Design",
    description: "Expert in Tailwind CSS and creating mobile-first, accessible interfaces",
    icon: "📱"
  }
];

const firstRow = achievements.slice(0, 3);
const secondRow = achievements.slice(3);

const AchievementCard = ({ title, description, icon }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r from-indigo to-storm hover:from-royal hover:to-lavender hover-animation transition-all duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-3">
        <span className="text-3xl">{icon}</span>
        <figcaption className="text-base font-semibold text-white">
          {title}
        </figcaption>
      </div>
      <blockquote className="text-sm text-neutral-300">{description}</blockquote>
    </figure>
  );
};

export default function Achievements() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading mb-3">My Journey & Achievements</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mb-4"></div>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
