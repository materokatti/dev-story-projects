interface ProjectCardProps {
    href: string;
    title: string;
    description: string;
}

export const ProjectCard = ({ href, title, description }: ProjectCardProps) => (
    <a
        href={href}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 hover:border-gray-500 hover:dark:border-neutral-700"
        rel="noopener noreferrer"
    >
        <h2 className="mb-3 text-2xl font-semibold">
            {title}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
            </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">{description}</p>
    </a>
);
