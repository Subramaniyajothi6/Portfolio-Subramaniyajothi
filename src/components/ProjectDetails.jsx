import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={closeModal}
    >
      <motion.div
        className="relative w-full max-w-2xl flex flex-col rounded-2xl bg-gradient-to-l from-midnight to-navy border border-white/10 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={closeModal}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-midnight/80 backdrop-blur-sm hover:bg-gray-600 transition-colors"
        >
          <img src="assets/close.svg" className="w-4 h-4" alt="Close" />
        </button>

        {/* Project image */}
        <img
          src={image}
          alt={title}
          className="w-full h-52 sm:h-60 object-cover flex-shrink-0"
        />

        {/* Content area — no scroll, compact layout */}
        <div className="p-4">
          <h5 className="mb-1.5 text-sm font-bold text-white">{title}</h5>
          <p className="mb-1 text-xs text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-1 text-xs text-neutral-400">
              {subDesc}
            </p>
          ))}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-3">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-8 hover-animation"
                />
              ))}
            </div>
            <a
              className="inline-flex items-center gap-1 text-sm font-medium cursor-pointer hover-animation flex-shrink-0"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project{" "}
              <img src="assets/arrow-up.svg" className="size-4" alt="" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
