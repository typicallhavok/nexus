"use client";

import { useState } from "react";
import Image from "next/image";
const Events = () => {
    const [events, setEvents] = useState([
        {
            title: "NexCode",
            date: "Sat Jan 22 2022",
            image: "/NexCode.png",
            description:
                "The event was majorly marketed using popular social media platforms WhatsApp and Instagram. There were various posts and messages designed to pique the students interests on competitive coding and its merits. These were circulated at spaced intervals for maximum impact in the week prior to the competition. Over 1080 participants registered from both EC and RR campuses and the demographic was spread across all the four years. The event was started with an orientation and a QnA session session from 11:00 AM to 12:00 AM where all the participants were briefed about the event. This was followed by a half an hour break. The coding begun at 12:30 PM on the HackerRank platform. The participants were given 10 problems of varying difficulty. The participants solved the problems till the deadline of 3:30 PM. The event was largely appreciated by the students and we received a lot of positive feedback and constructive feedback. There were also many requests for more such future events.",
        },
        {
            title: "NexHunt",
            date: "Wed Mar 9 2022",
            image: "/NexHunt-event.png",
            description:
                "Around 300 participants registered from various departments pursuing B.Tech. The participants were given 10 problems of varying difficulty, requiring them to explore various useful online tools and websites. Questions ranged from Machine Learning, Blockchain, Web Development, Algorithms and much more. On solving every question, you get a clue which would be helpful for solving the special 11 th question. The participants solved the problems by the deadline of 6:00 PM.",
        },
        {
            title: "NeuroNex",
            date: "Sat Sep 9 2023",
            image: "/NeuroNex.png",
            description:
                "The event started with a small introduction from 08:00 AM to 08:30 AM where all the participants were briefed about the event. The main competition began at 08:30 AM. The submissions were allowed till 05:30 PM and the winners were announced and certificates were provided. The event concluded by 06:00 PM. The selected teams from the online round were eligible to participate in this offline event. The event was held in college on an online platform called Kaggle, which required the students to be grouped in teams of 5 to solve a common problem statement.The judging process for this event was completely automated and provided to us by Kaggle.",
        },
    ]);

    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
        <div className="bg-background min-h-screen py-16">
            <h1 className="text-6xl font-bold text-center mb-12">Events</h1>
            <div className="flex flex-col gap-8 max-w-6xl mx-auto px-4">
                {events.map((event, index) => (
                    <div 
                        key={index} 
                        className="bg-cardBg p-6 rounded-xl flex gap-8 hover:bg-secondary/5 transition-all duration-300 border border-secondary/10"
                        onMouseEnter={() => setExpandedIndex(index)}
                        onMouseLeave={() => setExpandedIndex(null)}
                    >
                        <Image 
                            src={event.image} 
                            alt={event.title} 
                            width={300} 
                            height={200} 
                            className="rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex flex-col gap-4 justify-center">
                            <h2 className="text-4xl font-bold hover:text-primary transition-colors">{event.title}</h2>
                            <p className="text-sm text-foreground/60 font-medium">
                                {event.date}
                            </p>
                            <p className="text-base text-foreground/80 leading-relaxed max-w-2xl transition-all duration-300 ease-in-out overflow-hidden">
                                {expandedIndex === index 
                                    ? event.description
                                    : event.description.slice(0, 150) + "..."}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
