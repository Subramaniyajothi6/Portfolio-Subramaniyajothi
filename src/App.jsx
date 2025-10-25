// import About from "./sections/About";
// import Contact from "./sections/Contact";
// import Experiences from "./sections/Experiences";
// import Footer from "./sections/Footer";
// import Hero from "./sections/Hero";
// import Navbar from "./sections/Navbar";
// import Projects from "./sections/Projects";
// import SkillSet from "./sections/SkillSet";
// // import Testimonial from "./sections/Testimonial";

// const App = () => {
//   return (
//     <div className="container mx-auto max-w-7xl">
//       <Navbar />
//       <Hero />
//       <About />
//       <SkillSet/>
//       <Projects />
//       <Experiences />
//       <Contact />
//       <Footer/>

      
//     </div>
//   );
// };

// export default App;


import { lazy, Suspense } from "react";
import Navbar from "./sections/Navbar";

// Lazy load heavy sections
const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const SkillSet = lazy(() => import("./sections/SkillSet"));
const Experiences = lazy(() => import("./sections/Experiences"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

// Simple loader
const Loader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="w-12 h-12 border-4 border-aqua border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      
      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<Loader />}>
        <SkillSet />
      </Suspense>
      
      <Suspense fallback={<Loader />}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<Loader />}>
        <Experiences />
      </Suspense>
      
      <Suspense fallback={<Loader />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
