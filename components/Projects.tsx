import {useEffect, useRef, useState} from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {threshold: 0.5}
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`h-screen w-full p-24 mb-32 lg:mb-0 lg:w-full`}
      style={{
        transition: "opacity 1s ease-out, transform 1s ease-out",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
      }}
      ref={ref}
    >
      <h1 className='text-3xl font-semibold text-center mb-10'>Projects</h1>
      <div className='grid gap-4 text-center lg:grid-cols-4 lg:text-left'>
        <a
          href='/pong'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:dark:border-neutral-700'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>
            Pong{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-50'>
            Pong by Atari released on 29 November 1972, is one of the earliest
            arcade video games.
          </p>
        </a>
        <a
          href='/particlesParty'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:dark:border-neutral-700'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>
            Particle Party{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-50'>
            Spreading Particles image with canvas
          </p>
        </a>
      </div>
    </div>
  );
};

export default Projects;
