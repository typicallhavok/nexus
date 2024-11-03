"use client";
import { useState } from "react";
import Image from "next/image";

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            title: "NoteVault",
            domain: "Web dev",
            description:
                "NoteVault is a web-app that allows you to take down notes, store them and access them whenever and wherever you want. It comes in with features like Markdown Formatting and many more to come.",
            image: "/NoteVault.png",
            link: "https://nexus-pes.vercel.app/projects/1",
            github: "https://github.com/Nexus-PES/NoteVault",
        },
        {
            title: "Nexus",
            domain: "Web dev",
            description:
                "Explore our Next.js-powered website, a sleek creation by the Nexus Tech Club's web development team. Discover our standout projects, relive past events, and register seamlessly for upcoming ones. Experience technology at its finest through our intuitive interface, showcasing the pinnacle of web development.",
            image: "/Nexus.png",
            link: "https://nexus-pes.vercel.app/projects/2",
            github: "#projects",
        },
        {
            title: "NexHunt",
            domain: "Web dev",
            description:
                "Introducing NexHunt Project, a dynamic Next.js website tailored for hosting NexHunt, a unique 2-hour Treasure Hunt conducted on March 9th. The site boasts real-time leaderboard updates and engaging features, offering students a fun and play-way method to explore diverse domains of Computer Science.",
            image: "/NexHunt.png",
            link: "https://nexus-pes.vercel.app/projects/3",
            github: "https://github.com/Nexus-PES/NexHunt",
        },
    ]);

    return (
        <section className="mt-10 w-[80%] mx-auto mb-10 p-4">
            <h2 className="text-6xl font-bold text-center mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg aspect-[4/3]"
                    >
                        {project.image && (
                            <Image
                                src={project.image}
                                alt={`${project.title} Website`}
                                width={1000}
                                height={800}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                        )}
                        <div className="absolute inset-0 bg-black/60 flex flex-col p-6 pt-12">
                            <h3 className="text-background text-6xl text-center font-bold mb-4">
                                {project.title}
                            </h3>
                            <p className="text-tertiary text-2xl text-center font-bold mb-4">
                                &lt; {project.domain} &gt;
                            </p>
                            <p className="text-background text-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden line-clamp-4 group-hover:line-clamp-none">
                                {project.description}
                            </p>
                            <div className="flex justify-between mt-auto">
                                <a
                                    href={project.link}
                                    className="text-background text-xl font-bold mt-auto relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-background after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full"
                                >
                                    Learn More
                                </a>
                                <a
                                    href={project.github}
                                    className="text-background text-xl font-bold mt-auto"
                                >
                                    <img
                                        src="/github-mark.png"
                                        alt="Github"
                                        className="w-10 h-10 opacity-100 group-hover:opacity-0 absolute transition-opacity duration-300"
                                    />
                                    <img
                                        src="/github-mark-white.png"
                                        alt="Github"
                                        className="w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
