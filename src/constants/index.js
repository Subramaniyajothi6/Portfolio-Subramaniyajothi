import { fill } from "three/src/extras/TextureUtils.js";

export const myProjects = [
  {
    id: 1,
    title: "Placement Management System",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "https://placementmanagementsystem-project.netlify.app/",
    logo: "",
    image: "assets/projects/Placement Mangement System.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/node-js.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongo-db.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
{
  id: 2,
  title: "QuickCart - Full-Stack E-Commerce Platform",
  description:
    "A modern full-stack e-commerce application featuring customer shopping, real-time cart management, seller dashboard, and secure order processing with role-based authentication.",
subDescription: [
  "Built with Next.js 15, MongoDB, and Clerk Authentication for role-based customer and seller interfaces.",
  "Features real-time cart persistence, product filtering, order tracking, and multi-address management.",
  "Seller dashboard includes product CRUD operations, order processing, and sales overview.",
  "Integrated Cloudinary uploads, Inngest background jobs, and responsive Tailwind CSS design.",
],
  href: "https://github.com/Subramaniyajothi6/QuickCart", // Your GitHub repo
  logo: "",
  image: "/assets/projects/QuickCart.png",
  tags: [
    {
      id: 1,
      name: "Next.js",
      path: "/assets/logos/next-js.svg",
    },
    {
      id: 2,
      name: "MongoDB",
      path: "/assets/logos/mongo-db.svg",
    },
    {
      id: 3,
      name: "Clerk",
      path: "/assets/logos/Clerk.svg",
    },
    {
      id: 4,
      name: "TailwindCSS",
      path: "/assets/logos/tailwindcss.svg",
    },
  ],
}
,
  {
  id: 3,
  title: "Online Book Store Application",
  description:
    "A full-featured platform for browsing, purchasing, and managing books online, offering users a seamless reading and shopping experience.",
  subDescription: [
    "Developed a full-stack web application using the MERN stack (MongoDB, Express.js, React, Node.js) with scalable architecture and modular design.",
    "Implemented secure authentication and authorization for users and admins, enabling cart management, order tracking, and book inventory control.",
    "Built an intuitive, responsive UI using React and Tailwind CSS with search, filter, and category-based book exploration.",
    "Integrated payment gateway for seamless checkout, Cloudinary for image storage, and SMTP-based email notifications for order updates.",
  ],
  href: "https://book-store-app-frontend-s1mp.vercel.app/",
  logo: "",
  image: "/assets/projects/Book Store App.png",
  tags: [
    {
      id: 1,
      name: "MongoDB",
      path: "/assets/logos/mongo-db.svg",
    },
    {
      id: 2,
      name: "React",
      path: "/assets/logos/react.svg",
    },
    {
      id: 3,
      name: "Node.js",
      path: "/assets/logos/node-js.svg",
    },
    {
      id: 4,
      name: "TailwindCSS",
      path: "/assets/logos/tailwindcss.svg",
    },
  ],
}
,

  
  // {
  //   id: 5,
  //   title: "WordPress Custom Theme",
  //   description:
  //     "A fully customizable WordPress theme optimized for performance and SEO.",
  //   subDescription: [
  //     "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
  //     "Integrated Tailwind CSS for modern styling and UI enhancements.",
  //     "Optimized SEO and page speed using Vite.js for fast builds.",
  //     "Implemented custom widgets and plugin compatibility for extended functionality.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/wordpress-theme.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "WordPress",
  //       path: "/assets/logos/wordpress.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "HTML5",
  //       path: "/assets/logos/html5.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "CSS3",
  //       path: "/assets/logos/css3.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "Vite.js",
  //       path: "/assets/logos/vitejs.svg",
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
  //   subDescription: [
  //     "Built using Blazor WebAssembly for a seamless SPA experience.",
  //     "Implemented video streaming with Azure Media Services.",
  //     "Added a quiz system with dynamic question generation and real-time grading.",
  //     "Integrated Stripe API for secure payment processing.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/elearning.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "Blazor",
  //       path: "/assets/logos/blazor.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "Azure",
  //       path: "/assets/logos/azure.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "Stripe",
  //       path: "/assets/logos/stripe.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "TailwindCSS",
  //       path: "/assets/logos/tailwindcss.svg",
  //     },
  //   ],
  // },
];

export const mySocials = [

  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/subramaniyajothi-s-b45926248/",
    icon: "/assets/socials/linkedIn.svg",
    
  },
  {
    name: "GitHub",
    href: "https://github.com/Subramaniyajothi6",
    icon: "/assets/socials/github-b.svg",
  },
];


export const experiences = [
  {
    title: "Full-Stack Developer Intern",
    job: "Bigzel",
    date: "2024-2025",
    contents: [
      "Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js) for client projects and internal tools.",
      "Built responsive user interfaces with React and Tailwind CSS, implementing component-based architecture and modern development practices.",
      "Designed and implemented RESTful APIs using Express.js and Node.js, handling authentication, data validation, and database operations.",
      "Collaborated with senior developers on code reviews, debugging processes, and deployment strategies using Git version control.",
      "Gained hands-on experience with database design, API integration, and troubleshooting production issues in a professional environment.",
    ],
  },
  {
    title: "Full-Stack Developer",
    job: "Course Development & Self-Learning",
    date: "2023-Present",
    contents: [
      "Completed comprehensive Full Stack Developer certification program, mastering modern web development technologies and methodologies.",
      "Built a comprehensive Placement Management System using the MERN stack, featuring student-company matching, application tracking, and interview scheduling with video conferencing integration.",
      "Developed responsive portfolio websites using React, Vite, and Tailwind CSS with modern UI/UX design principles and deployment optimization.",
      "Actively participating in competitive coding challenges and hackathons to enhance problem-solving skills and stay current with industry trends.",
      "Continuously expanding technical expertise through self-directed learning in React ecosystem, backend API development, and cloud deployment strategies.",
    ],
  },
];


export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
