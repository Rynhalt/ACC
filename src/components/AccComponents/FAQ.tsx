import React, { useState } from 'react';
import { siteContent } from '../../content/siteContent'; // Import siteContent

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqData = siteContent.faq.items; // Access FAQ items from siteContent

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black p-6">
      <h2 className="text-6xl mb-4 ar-one-sans">{siteContent.faq.title}</h2> {/* Use title from siteContent with the same font class */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
            >
              <span className="text-2xl ar-one-sans">{item.question}</span> {/* Apply font class to question */}
              <span className={`ml-2 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[200px]' : 'max-h-0'}`} // Adjusted max height for smoother transition
            >
              <div className="py-2 text-xl text-black ar-one-sans"> {/* Apply font class to answer */}
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
