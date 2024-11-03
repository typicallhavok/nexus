const Reviews = () => {
    const teamMembers = [
        {
            name: "Ayush Sinha",
            role: "Non Technical",
            position: "HEAD",
            description:
                "Our club aims to introduce the students to the new emerging technologies and its applications. Development of student's skills through peer-to-peer interaction by regular workshops based on the wide range of domains under our technical team. Develop their ability solving real life problems. Expanding a student's social network by constant interaction with their mentors. Provide students with a first-hand idea of the core principles in various domains and let them figure out their interests and pursue that domain accordingly.",
        },
        {
            name: "Akash Kamalesh",
            role: "AI/ML",
            position: "DOMAIN HEAD",
            description: "Exploring the potential of AI/ML technology.",
        },
        {
            name: "Sowmesh Sharma",
            role: "App Development",
            position: "DOMAIN HEAD",
            description:
                "For people who enjoy development in general and love to build real world projects.",
        },
        {
            name: "Madhuravarshini",
            role: "Design",
            position: "DOMAIN HEAD",
            description:
                "Design is the key to effective communication. It is in the designer's hand how people perceive about things around them. The design domain of the Nexus club aims to aesthetically communicate the ideas and information about the happenings and the events of the club.",
        },
        {
            name: "M Niveditha",
            role: "Design",
            position: "DOMAIN HEAD",
            description:
                "Explore the captivating realm of design within our club, where creativity knows no bounds. We bring ideas to life through innovative concepts and artistic expressions.",
        },
        {
            name: "Saransh Mehta",
            role: "Sponsorship",
            position: "DOMAIN HEAD",
            description:
                "Sponsorship is one of the most exciting domains in which you have to pitch and market your event to brands and companies and show how your event will bring value to them and in return you try to get support in financial and other forms from the companies.",
        },
        {
            name: "Sarang Kumar",
            role: "Web Development",
            position: "DOMAIN HEAD",
            description:
                "The Web Development domain in our technical club is responsible for creating and maintaining web-based projects, enhancing the club's online presence, fostering technical expertise, collaborating across domains, promoting innovation, and building a sense of community. Members can expect to learn, code, manage projects, and develop valuable skills for future careers while having fun and staying creative in the dynamic world of web development. Once someone becomes a part of the domain they will be trained and after that we will start working on project, that can be of some value for them and for their resume",
        },
        {
            name: "Pari Maheshwari",
            role: "Campaigning",
            position: "DOMAIN HEAD",
            description:
                "A vital component of Nexus, responsible for spreading the word, engaging the community, and creating a buzz around our events, contests, and hackathons. It's a bridge connecting our club to the world, ensuring that our initiatives reach every enthusiastic student in the university.",
        },
        {
            name: "Agnel Elizabeth",
            role: "EVM and Hospitality",
            position: "DOMAIN HEAD",
            description:
                "Event Management and Hospitality is a core non-technical domain. Our mission is to create remarkable and impactful events that leave a lasting impression. Whether it's a hackathon that pushes the boundaries of technology, a workshop that empowers individuals with new skills, or a networking event that fosters collaboration and creativity, we are the driving force behind it all. You will be expected to have good organisational and communication skills to be able to work in the team and decide on the flow and execution of any event. Afterall, a well-planned and successful event doesn't happen by accident.",
        },
        {
            name: "Avanish Shenoy",
            role: "Web Development",
            position: "CORE",
            description: "There is lot more to learn and lot more to give.",
        },
        {
            name: "Pavani B R",
            role: "Public Relations",
            position: "DOMAIN HEAD",
            description:
                "PR combined with social media and video editing is a domain where storytelling meets digital creativity. It involves managing online presence, and utilizing video editing skills to create visually captivating content that resonates with audiences across various platforms, driving brand awareness and engagement to new heights.",
        },
        {
            name: "ShreyaNaveen",
            role: "Content",
            position: "DOMAIN HEAD",
            description:
                "Content writing aims to communicate information, engage the audience, and often serves the specific goal of promoting the club or conveying ideas and calling in people to participate in unleashing their true potentials through technology",
        },
        {
            name: "Shubh Kanodia",
            role: "App Development",
            position: "DOMAIN HEAD",
            description: "",
        },
    ];

    const firstHalf = teamMembers.slice(0, Math.ceil(teamMembers.length / 2));
    const secondHalf = teamMembers.slice(Math.ceil(teamMembers.length / 2));

    return (
        <div className="flex flex-col gap-8 overflow-hidden py-4">
            <span className="text-6xl font-bold m-5 mx-auto">
                From Our <span className="text-primary">Team</span>
            </span>
            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex gap-6 pr-6">
                    {firstHalf.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 backdrop-blur-sm w-[400px] h-[300px] flex-shrink-0 flex flex-col"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-tertiary">
                                    {member.name}
                                </h3>
                                <div className="text-sm text-gray-400">
                                    {member.role}
                                </div>
                                <div className="text-xs text-gray-500 mb-2 text-primary">
                                    {member.position}
                                </div>
                            </div>
                            <div className="flex-grow overflow-y-auto">
                                <p className="text-sm text-foreground whitespace-normal">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-6 pr-6">
                    {firstHalf.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 backdrop-blur-sm w-[400px] h-[300px] flex-shrink-0 flex flex-col"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-tertiary">
                                    {member.name}
                                </h3>
                                <div className="text-sm text-gray-400">
                                    {member.role}
                                </div>
                                <div className="text-xs text-gray-500 mb-2 text-primary">
                                    {member.position}
                                </div>
                            </div>
                            <div className="flex-grow overflow-y-auto">
                                <p className="text-sm text-foreground whitespace-normal">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee-reverse whitespace-nowrap flex gap-6 pr-6">
                    {secondHalf.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 backdrop-blur-sm w-[400px] h-[300px] flex-shrink-0 flex flex-col"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-tertiary">
                                    {member.name}
                                </h3>
                                <div className="text-sm text-gray-400">
                                    {member.role}
                                </div>
                                <div className="text-xs text-gray-500 mb-2 text-primary">
                                    {member.position}
                                </div>
                            </div>
                            <div className="flex-grow overflow-y-auto">
                                <p className="text-sm text-foreground whitespace-normal">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute top-0 animate-marquee2-reverse whitespace-nowrap flex gap-6 pr-6">
                    {secondHalf.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 backdrop-blur-sm w-[400px] h-[300px] flex-shrink-0 flex flex-col"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-tertiary">
                                    {member.name}
                                </h3>
                                <div className="text-sm text-gray-400">
                                    {member.role}
                                </div>
                                <div className="text-xs text-gray-500 mb-2 text-primary">
                                    {member.position}
                                </div>
                            </div>
                            <div className="flex-grow overflow-y-auto">
                                <p className="text-sm text-foreground whitespace-normal">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
