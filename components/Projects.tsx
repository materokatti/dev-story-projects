import { useEffect, useRef, useState } from "react";
import { ProjectCard } from "./ui/ProjectCard";
import { projectsData } from "@/lib/data/projectData";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      className="h-screen w-full p-24 mb-32 lg:mb-0 lg:w-full"
      style={{
        transition: "opacity 1s ease-out, transform 1s ease-out",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
      }}
      ref={ref}
    >
      <h1 className="text-3xl font-semibold text-center mb-10">Projects</h1>
      <div className="grid gap-4 text-center lg:grid-cols-4 lg:text-left">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;