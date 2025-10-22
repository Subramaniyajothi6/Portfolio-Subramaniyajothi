// import { twMerge } from "tailwind-merge";
// import Marquee from "../components/Marquee";
// import { reviews } from "../constants";
// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

// const ReviewCard = ({ img, name, username, body }) => {
//   return (
//     <figure
//       className={twMerge(
//         "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img
//           className="rounded-full bg-white/10"
//           width="32"
//           height="32"
//           alt=""
//           src={img}
//         />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium text-white">
//             {name}
//           </figcaption>
//           <p className="text-xs font-medium text-white/40">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm">{body}</blockquote>
//     </figure>
//   );
// };

// export default function Testimonial() {
//   return (
//     <div className="items-start mt-25 md:mt-35 c-space">
//       <h2 className="text-heading">Hear From My Clients</h2>
//       <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
//         <Marquee pauseOnHover className="[--duration:20s]">
//           {firstRow.map((review) => (
//             <ReviewCard key={review.username} {...review} />
//           ))}
//         </Marquee>
//         <Marquee reverse pauseOnHover className="[--duration:20s]">
//           {secondRow.map((review) => (
//             <ReviewCard key={review.username} {...review} />
//           ))}
//         </Marquee>
//         <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
//         <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
//       </div>
//     </div>
//   );
// }


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
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
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
      <h2 className="text-heading">My Journey & Achievements</h2>
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
