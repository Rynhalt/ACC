import React, { useState } from 'react';
import { siteContent } from '../../content/siteContent'; // Import siteContent

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqData = siteContent.faq.items; // Access FAQ items from siteContent

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white p-6">
      <h2 className="text-3xl mb-4">{siteContent.faq.title}</h2> {/* Use title from siteContent */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
            >
              <span className="text-lg">{item.question}</span>
              <span className={`ml-2 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="py-2 text-gray-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
