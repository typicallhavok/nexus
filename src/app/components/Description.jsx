const Description = () => {
    return (
        <section className="max-w-7xl mx-auto mb-8">
                        <div className="mb-20">
                            <h2 className="text-6xl font-bold mb-12">
                                Our <span className="text-tertiary">Goal</span>
                            </h2>

                            <div className="space-y-6 max-w-3xl">
                                <h3 className="text-4xl font-bold">
                                    CSE Tech Innovators: Building a Unified
                                    Community
                                </h3>

                                <p className="text-xl text-foreground/70 leading-relaxed">
                                    Establishing a dedicated community committed
                                    to leveraging technology in order to address
                                    the challenges faced by both the CSE
                                    department and the college.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-6xl font-bold mb-12">
                                Our Tech{" "}
                                <span className="text-primary">Domains</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <a href="#web" className="group">
                                    <div className="p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 bg-white">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                                Web Development
                                            </h3>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-primary"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </a>

                                <a href="#app" className="group">
                                    <div className="p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 bg-white">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                                App Development
                                            </h3>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-primary"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </a>

                                <a href="#aiml" className="group">
                                    <div className="p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 bg-white">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                                AI/ML
                                            </h3>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-primary"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
    );
};

export default Description;