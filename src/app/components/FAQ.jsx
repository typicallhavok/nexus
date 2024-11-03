"use client";
import { useState } from "react";

const FAQ = () => {
    const [faq, setFaq] = useState([
        {
            question: "What does Nexus do?",
            answer: "Nexus is a tech company that develops and sells tech products.",
            isOpen: false,
        },
        {
            question: "Who can join Nexus?",
            answer: "All students of PES University can be a part of our dynamic team.",
            isOpen: false,
        },
        {
            question: "Why should you join us?",
            answer: "Joining us will not only scale up your technical skills but also let unleash your hidden talents! Join Us to experience it yourself.",
            isOpen: false,
        },
        {
            question: "When can I join the club?",
            answer: "Follow us on Instagram to get updates about the same.",
            isOpen: false,
        }
    ]);

    const toggleAnswer = (index) => {
        setFaq(
            faq.map((item, i) =>
                i === index
                    ? { ...item, isOpen: !item.isOpen }
                    : { ...item, isOpen: false }
            )
        );
    };

    return (
        <>
            <section className="mt-20 w-[50%] mx-auto p-4">
                <h2 className="text-6xl font-bold text-center mb-8">FAQ</h2>
                <div className="space-y-4 block items-center w-full mx-auto my-4">
                    {faq.map((item, index) => (
                        <div key={index} className="border rounded-lg shadow-sm">
                            <div 
                                className="flex justify-between items-center cursor-pointer p-8 bg-background rounded-lg"
                                onClick={() => toggleAnswer(index)}
                            >
                                <h3 className="text-4xl font-bold">
                                    {item.question}
                                </h3>
                                <span className={`text-2xl leading-none transition-transform duration-300 ${item.isOpen ? 'rotate-180' : 'rotate-0'}`}>
                                    ▼
                                </span>
                            </div>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${item.isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                                <div className="p-8 bg-background rounded-b-lg">
                                    <p className="text-lg text-foreground">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default FAQ;
