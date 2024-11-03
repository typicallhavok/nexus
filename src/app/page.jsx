"use client";

import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Description from "./components/Description";
import Projects from "./components/Projects";
import Events from "./components/Events";
import Contact from "./components/Contact";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const marqueeElements =
                document.querySelectorAll(".animate-marquee3");

            marqueeElements.forEach((element) => {
                const baseSpeed = 60;
                const speedFactor = Math.max(0.5, 1 - scrollPosition / 10);
                element.style.animationDuration = `${baseSpeed * speedFactor}s`;
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className="bg-gray-100 border-gray-75 opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out fixed top-4 left-1/2 -translate-x-1/2 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] w-11/12 max-w-screen-xl z-20">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="/nexus.ico"
                            className="h-8"
                            alt="Nexus Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-foreground">
                            Nexus
                        </span>
                    </a>
                    <div className="flex md:order-2">
                        <button
                            onClick={() => {
                                window.location.href = "#contact";
                            }}
                            type="button"
                            className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary rounded-lg text-sm px-3 py-2 md:p-4 hover:bg-secondary hover:text-foreground transition-all duration-300 ease-in-out text-center font-bold"
                        >
                            Join Us
                        </button>
                    </div>
                    <div
                        className="items-center justify-between w-full md:flex md:w-auto md:order-1"
                        id="navbar-cta"
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <a
                                    href="#home"
                                    className="block p-2 text-foreground hover:bg-secondary hover:text-foreground rounded transition-all duration-300 ease-in-out font-bold"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="block p-2 text-foreground hover:bg-secondary hover:text-foreground rounded transition-all duration-300 ease-in-out font-bold"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="block p-2 text-foreground hover:bg-secondary hover:text-foreground rounded transition-all duration-300 ease-in-out font-bold"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#events"
                                    className="block p-2 text-foreground hover:bg-secondary hover:text-foreground rounded transition-all duration-300 ease-in-out font-bold"
                                >
                                    Events
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main>
                <div id="home">
                    <section className="h-screen relative">
                        <video
                            src="intro.mp4"
                            className="w-screen h-screen object-cover absolute top-0 left-0 z-[-1]"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <span className="text-4xl md:text-8xl font-bold text-center text-tertiary absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                            NEXUS
                        </span>
                        <span className="text-lg md:text-2xl text-center text-white absolute top-[78%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4">
                            Unleashing Creativity and Innovation in PES University
                        </span>
                        <button className="text-white border-2 border-tertiary rounded-[2rem] text-lg px-8 py-4 text-center font-bold absolute top-[87%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                            Get Started
                        </button>
                    </section>
                    <section className="h-auto w-full flex flex-col md:flex-row items-center md:items-top justify-center mt-20 mb-20 px-4">
                        <span className="text-3xl md:text-5xl font-bold text-center md:text-right text-tertiary w-full md:w-1/2 mb-8 md:mb-0">
                            Unlocking Tomorrow's <br />
                            Technology Today!
                        </span>
                        <span className="text-lg md:text-2xl text-center md:text-left text-foreground md:ml-20 w-full md:w-1/2">
                            Charting the Course of Innovation: Spearheading{" "}
                            <br />
                            Revolutionary Advancements and Transformations in{" "}
                            <br /> the Dynamic Landscape of Technology <br />{" "}
                            and Engineering. <br />
                            <br />
                            At Nexus, we believe in pushing boundaries <br />
                            and challenging the status quo. Whether you’re a
                            coding ninja, <br />a design guru, or just someone
                            who loves to brainstorm <br />
                            wild ideas, there’s a place for you here. We’re not
                            just a club;
                            <br /> we’re a movement, and we’re on a mission to
                            change the world, <br />
                            one crazy idea at a time! <br />
                            <br />
                            Join us for workshops, hackathons, and events <br />
                            that will make your brain explode with excitement.{" "}
                            <br />
                            Together, we’ll create, collaborate, and conquer the
                            future!
                        </span>
                    </section>
                </div>
                <div id="about" className="mt-16 py-20 bg-skin">
                    <Description />
                    <Reviews />
                    <FAQ />
                </div>
                <div id="projects" className="pt-8">
                    <Projects />
                    <div className="relative flex overflow-hidden bg-background py-4 w-full">
                        <div className="animate-marquee3 whitespace-nowrap">
                            <span className="text-6xl mx-4 font-bold">
                                Development * Innovative Ideas * Next Gen
                                Leaders * Collaborative spirit * Fun Activities
                                * Networking Opportunities * Skill Development *
                            </span>
                        </div>
                        <div className="animate-marquee3 whitespace-nowrap">
                            <span className="text-6xl mx-4 font-bold">
                                Development * Innovative Ideas * Next Gen
                                Leaders * Collaborative spirit * Fun Activities
                                * Networking Opportunities * Skill Development *
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-around items-center pt-8 bg-background px-4 md:px-[25%] space-y-8 md:space-y-0">
                        {[
                            { number: "50+", label: "Active Members" },
                            { number: "50+", label: "Exciting Events" },
                            { number: "10+", label: "Successful Projects" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <h3 className="text-6xl font-bold text-primary mb-2">
                                    {stat.number}
                                </h3>
                                <p className="text-xl text-foreground">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="events" className="mt-8 pt-8">
                    <Events />
                </div>
                <div id="contact" className="mt-6 px-8 pt-8 bg-skin">
                    <Contact />
                </div>
            </main>
            <footer className="bg-black text-white py-8 px-4 md:px-8">
                <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-sm">
                        © 2024 Nexus Club. All rights reserved.
                    </div>
                    <div className="flex gap-4">
                        <a 
                            href="#contact" 
                            className="text-sm relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gray-300 after:transition-all after:duration-300"
                        >
                            Contact us
                        </a>
                        <a 
                            href="https://github.com/Nexus-PES" 
                            className="relative w-6 h-6 mt-[-3px] group"
                        >
                            <img 
                                src="/github-mark.png" 
                                alt="Github" 
                                className="w-6 h-6 absolute transition-opacity duration-300 group-hover:opacity-0"
                            />
                            <img 
                                src="/github-mark-white.png" 
                                alt="Github" 
                                className="w-6 h-6 absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </a>
                        <a 
                            href="https://www.linkedin.com/company/nexus-pes/" 
                            className="relative w-8 h-8 mt-[-3px]"
                        >
                            <img 
                                src="/linked.png"
                                alt="LinkedIn" 
                                className="w-7 h-6 absolute transition-opacity duration-300 brightness-0 invert opacity-70 hover:opacity-100"
                            />
                        </a>
                        <a 
                            href="https://www.instagram.com/nexus.pesu/" 
                            className="relative w-6 h-6 mt-[-3px]"
                        >
                            <img 
                                src="/ig.png"
                                alt="Instagram" 
                                className="w-6 h-6 absolute transition-opacity duration-300 brightness-0 invert opacity-70 hover:opacity-100"
                            />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;
