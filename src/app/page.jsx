"use client";

import Link from 'next/link';
import Image from 'next/image';
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Description from "./components/Description";
import Projects from "./components/Projects";
import Events from "./components/Events";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";

const Home = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [isVideoLoading, setIsVideoLoading] = useState(true);

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

            setShowBackToTop(scrollPosition > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <nav className="bg-gray-100 border-gray-75 opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out fixed top-4 left-1/2 -translate-x-1/2 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] w-11/12 max-w-screen-xl z-20">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <Image
                            src="/nexus.ico"
                            alt="Nexus Logo"
                            width={32}
                            height={32}
                            className="h-6 md:h-8 w-auto"
                        />
                        <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap text-foreground">
                            Nexus
                        </span>
                    </Link>
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                {isMobileMenuOpen ? (
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                ) : (
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div className="flex md:order-2">
                        <Link
                            href="#contact"
                            className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary rounded-lg text-sm px-3 py-2 md:p-4 hover:bg-secondary hover:text-foreground transition-all duration-300 ease-in-out text-center font-bold"
                        >
                            Join Us
                        </Link>
                    </div>
                    <div
                        className={`${
                            isMobileMenuOpen ? 'block' : 'hidden'
                        } w-full md:block md:w-auto md:order-1`}
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <Link
                                    href="#home"
                                    className="block p-2 text-foreground hover:bg-secondary hover:text-foreground rounded transition-all duration-300 ease-in-out font-bold"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#about"
                                    className="block p-2 text-foreground hover:bg-secondary hover:text-foreground rounded transition-all duration-300 ease-in-out font-bold"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#projects"
                                    className="block p-2 text-foreground hover:bg-secondary hover:text-foreground rounded transition-all duration-300 ease-in-out font-bold"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#events"
                                    className="block p-2 text-foreground hover:bg-secondary hover:text-foreground rounded transition-all duration-300 ease-in-out font-bold"
                                >
                                    Events
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {isVideoLoading && (
                <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
            <main>
                <div id="home">
                    <section className="h-screen relative">
                        <div className="relative h-screen w-screen overflow-hidden" style={{ overflowX: 'hidden' }}>
                            <div className="absolute top-1/2 left-1/2 w-[100%] h-[150%] -translate-x-1/2 -translate-y-1/2" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none', '::WebkitScrollbar': { display: 'none' } }}>
                                <iframe
                                    className="w-[100%] h-[100%] absolute top-0 left-0 z-[-1]"
                                    src="https://www.youtube.com/embed/FnFpNIREV78?autoplay=1&mute=1&loop=1&playlist=FnFpNIREV78&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&version=3&playerapiid=ytplayer"
                                    title="Background video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    onLoad={() => setIsVideoLoading(false)}
                                    style={{
                                        pointerEvents: 'none',
                                        border: 'none'
                                    }}
                                ></iframe>
                            </div>
                        </div>
                        <span className="text-3xl md:text-8xl font-bold text-center text-tertiary absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                            NEXUS
                        </span>
                        <span className="text-base md:text-2xl text-center text-white absolute top-[78%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4">
                            Unleashing Creativity and Innovation in PES University
                        </span>
                        <button onClick={() => window.location.href = "#about"} className="text-white border-2 border-tertiary rounded-[2rem] text-base md:text-lg px-6 md:px-8 py-3 md:py-4 text-center font-bold absolute top-[87%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                            Get Started
                        </button>
                    </section>
                    <section className="h-auto w-full flex flex-col md:flex-row items-center md:items-top justify-center mt-20 mb-20 px-4">
                        <span className="text-2xl md:text-5xl font-bold text-center md:text-right text-tertiary w-full md:w-1/2 mb-8 md:mb-0">
                            Unlocking Tomorrow&apos;s <br />
                            Technology Today!
                        </span>
                        <span className="text-base md:text-2xl text-center md:text-left text-foreground md:ml-20 w-full md:w-1/2">
                            Charting the Course of Innovation: Spearheading{" "}
                            <br />
                            Revolutionary Advancements and Transformations in{" "}
                            <br /> the Dynamic Landscape of Technology <br />{" "}
                            and Engineering. <br />
                            <br />
                            At Nexus, we believe in pushing boundaries <br />
                            and challenging the status quo. Whether you&apos;re a
                            coding ninja, <br />a design guru, or just someone
                            who loves to brainstorm <br />
                            wild ideas, there&apos;s a place for you here. We&apos;re not
                            just a club;
                            <br /> we&apos;re a movement, and we&apos;re on a mission to
                            change the world, <br />
                            one crazy idea at a time! <br />
                            <br />
                            Join us for workshops, hackathons, and events <br />
                            that will make your brain explode with excitement.{" "}
                            <br />
                            Together, we&apos;ll create, collaborate, and conquer the
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
                                <h3 className="text-4xl md:text-6xl font-bold text-primary mb-2">
                                    {stat.number}
                                </h3>
                                <p className="text-lg md:text-xl text-foreground">
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
                        <Link 
                            href="#contact" 
                            className="text-sm relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gray-300 after:transition-all after:duration-300"
                        >
                            Contact us
                        </Link>
                        <Link 
                            href="https://github.com/Nexus-PES" 
                            className="relative w-6 h-6 mt-[-3px] group"
                            target="_blank"
                        >
                            <Image 
                                src="/github-mark.png" 
                                alt="Github" 
                                width={24}
                                height={24}
                                className="w-6 h-6 absolute transition-opacity duration-300 group-hover:opacity-0"
                            />
                            <Image 
                                src="/github-mark-white.png" 
                                alt="Github" 
                                width={24}
                                height={24}
                                className="w-6 h-6 absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </Link>
                        <Link 
                            href="https://www.linkedin.com/company/nexus-pes/" 
                            className="relative w-8 h-8 mt-[-3px]"
                            target="_blank"
                        >
                            <Image 
                                src="/linked.png"
                                alt="LinkedIn" 
                                width={28}
                                height={24}
                                className="w-7 h-6 absolute transition-opacity duration-300 brightness-0 invert opacity-70 hover:opacity-100"
                            />
                        </Link>
                        <Link 
                            href="https://www.instagram.com/nexus.pesu/" 
                            className="relative w-6 h-6 mt-[-3px]"
                            target="_blank"
                        >
                            <Image 
                                src="/ig.png"
                                alt="Instagram" 
                                width={24}
                                height={24}
                                className="w-6 h-6 absolute transition-opacity duration-300 brightness-0 invert opacity-70 hover:opacity-100"
                            />
                        </Link>
                    </div>
                </div>
            </footer>

            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 bg-primary hover:bg-secondary text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
                    showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                aria-label="Back to top"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>
            </button>
        </>
    );
};

export default Home;
