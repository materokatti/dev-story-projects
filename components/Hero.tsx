import Image from "next/image";

const Hero = () => {
  return (
    <>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
                <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                >
                By 
                <span className="text-lg font-semibold bg-[#F8C44C] px-3 rounded-md text-black">
                    DevStory
                </span>
                </a>
            </div>
        </div>

        <div className="relative translate-y-1/4 bg-slate-100 flex rounded-full">
            <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/logo.svg"
            alt="DevStory Logo"
            width={180}
            height={37}
            priority
            />
        </div>
    </>
  );
};

export default Hero;
