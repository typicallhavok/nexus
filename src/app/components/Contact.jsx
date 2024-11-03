"use client";
import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <>
            <div className="max-w-2xl mx-auto w-full space-y-6 py-12">
                <div className="text-6xl font-bold text-center">
                    Get in touch!
                </div>
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full hover:border-primary transition-all duration-300 p-4 rounded-full border border-secondary/10 bg-white/80 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full hover:border-primary transition-all duration-300 p-4 rounded-full border border-secondary/10 bg-white/80 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>
                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="4"
                        className="w-full hover:border-primary transition-all duration-300 p-4 rounded-3xl border border-secondary/10 bg-white/80 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    />
                    <div className="flex justify-center">
                        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                            Send It!
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4 pt-8">
                    <h3 className="text-6xl font-bold text-foreground">
                        Contact Us
                    </h3>
                    <p className="text-foreground text-2xl leading-relaxed">
                        Phone: Number <br />
                        Email: info@pesuniversityclub.com <br />
                        Address: 100 Feet Ring Road, Banashankari Stage III,
                        Dwaraka Nagar, Banashankari, Bengaluru, Karnataka 560085
                        <br />
                        Hours: Mon-Fri: 9 AM - 5 PM
                    </p>
                </div>
            </div>
        </>
    );
};

export default Contact;
