'use client'
import React, { useEffect, useState } from "react";
import "../../app/globals.css";
import FadeInSection from "../shared/FadeInSection";

// The actual email is SUPPOSED to be sent to slime123@bu.edu

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  const defaultMessage = "Hello! I'm interested in learning more about ACC...";

  useEffect(() => {
    setTypingIndex(0);
    setMessage("");
  }, []);

  useEffect(() => {
    if (typingIndex < defaultMessage.length) {
      const typingTimer = setTimeout(() => {
        setMessage(prevMessage => prevMessage + defaultMessage[typingIndex]);
        setTypingIndex(prevIndex => prevIndex + 1);
      }, 50);

      return () => clearTimeout(typingTimer);
    }
  }, [typingIndex]);

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
        setTypingIndex(0);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-8 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center ar-one-sans">Experience it Now.</h2>
        </FadeInSection>
        <FadeInSection>
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4 sm:mb-6">
              <label htmlFor="name" className="block mb-2 text-sm sm:text-base">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 sm:py-3 text-black bg-gray-300 rounded ar-one-sans text-sm sm:text-base"
                required
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4 sm:mb-6">
              <label htmlFor="email" className="block mb-2 text-sm sm:text-base">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 sm:py-3 text-black bg-gray-300 rounded ar-one-sans text-sm sm:text-base"
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-4 sm:mb-6">
              <label htmlFor="message" className="block mb-2 text-sm sm:text-base">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 sm:py-3 text-black bg-gray-300 rounded ar-one-sans text-sm sm:text-base"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-white text-black px-6 py-2 sm:py-3 rounded hover:bg-gray-200 transition-colors ar-one-sans text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 sm:mt-12 text-center ar-one-sans">
            <p className="mb-2 sm:mb-3 text-sm sm:text-base">Email: info@regalcore.org</p>
            <p className="mb-2 sm:mb-3 text-sm sm:text-base">Phone: 860-280-4088</p>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base">Location: Imonmitake Building 2F 1-20-1,<br className="hidden sm:inline" /> Shibuya, Shibuya-ku, Tokyo, Japan 150-0002</p>
            <p className="italic text-sm sm:text-base">Regal Core Co.,Ltd</p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Contact;
