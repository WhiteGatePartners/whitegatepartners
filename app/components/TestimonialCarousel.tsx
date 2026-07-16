"use client";

import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    quote: [
      "It has always been a great experience working with Asher. Throughout the recruitment process, he consistently demonstrates professionalism, responsiveness, and a strong understanding of our hiring needs.",
      "He provides quality candidates within a reasonable timeframe and maintains clear communication at every stage of the recruitment process. He is also proactive in following up and refining the candidate search based on our feedback, ensuring that the profiles presented are well aligned with our requirements.",
      "I truly appreciate Asher's dedication and commitment to delivering excellent service. I would be happy to recommend him to any organization looking for a reliable, professional, and results-oriented recruitment partner.",
    ],
    source: "Regional HR Manager, Pharmaceuticals MNC",
  },
  {
    quote: [
      "We've had the pleasure of working with Asher on several recruitment initiatives, and their service has consistently exceeded our expectations. From the outset, they demonstrated a clear understanding of our hiring needs, delivered top-tier candidates, and maintained excellent communication throughout the process. Asher and his team are not only responsive and professional but also committed to finding the right fit, both in terms of skillset and company culture. Thanks to their support, we've successfully filled several roles with highly qualified individuals who are already making a positive impact.",
      "We truly value our partnership with Asher and his team and look forward to continued collaboration. Highly recommended for any organization looking for a reliable and results driven recruitment partner.",
    ],
    source: "HR Manager, Global Aerospace Company",
  },
  {
    quote: [
      "Johari has supported us on several critical pharmaceutical hiring assignments and consistently delivered strong results. His sector knowledge, regional network and honest market insights helped us secure high-quality talent for challenging roles. He was professional, responsive and took time to understand our business, culture and technical requirements.",
    ],
    source: "Global TA Leader, Pharmaceuticals MNC",
  },
  {
    quote: [
      "White Gate Partners has been a trusted recruitment partner for our Asia-Pacific pharmaceutical business. Their industry understanding, rigorous screening standards and responsiveness have helped us achieve consistent, high-quality hiring outcomes. We value their professionalism and would recommend their services to other organisations.",
    ],
    source: "General Manager, China-headquartered Company",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const go = useCallback((i: number) => {
    setIndex((i + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [index]);

  const current = testimonials[index];

  return (
    <div className="tc">
      <div className="tc-slide" key={index}>
        <span className="qmark">&ldquo;</span>
        <blockquote>
          {current.quote.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </blockquote>
        <div className="tc-source">{current.source}</div>
      </div>

      <div className="tc-nav">
        <button
          type="button"
          className="tc-arrow"
          onClick={() => go(index - 1)}
          aria-label="Previous testimonial"
        >
          ←
        </button>
        <div className="tc-dots">
          {testimonials.map((_, i) => (
            <button
              type="button"
              key={i}
              className={`tc-dot${i === index ? " active" : ""}`}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          className="tc-arrow"
          onClick={() => go(index + 1)}
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
    </div>
  );
}
