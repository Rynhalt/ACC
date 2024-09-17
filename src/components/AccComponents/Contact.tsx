'use client'
import React, { useState } from "react";
import "../../app/globals.css";
import FadeInSection from "./FadeInSection";

// The actual email is SUPPOSED to be sent to slime123@bu.edu

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message, to: 'slime123@bu.edu'  }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-4xl font-bold mb-8 text-center ar-one-sans">Contact Us</h2>
        </FadeInSection>
        <FadeInSection>
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-black rounded ar-one-sans"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-black rounded ar-one-sans"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 text-black rounded ar-one-sans"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors ar-one-sans"
            >
              Send Message
            </button>
          </form>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Contact;
