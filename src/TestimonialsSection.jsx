import React from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    name: 'Maria P.',
    avatar: '👩🏻',
    quote: 'The bread is just like my grandmother used to make in Greece. Absolutely delicious and fresh every time!'
  },
  {
    name: 'James K.',
    avatar: '👨🏼',
    quote: 'Zorbas dips are a staple at our family gatherings. The flavors are authentic and everyone loves them.'
  },
  {
    name: 'Sophia L.',
    avatar: '👩🏽',
    quote: "I appreciate the healthy, vegan options. It's hard to find such tasty and wholesome Greek food!"
  },
  {
    name: 'Dimitri S.',
    avatar: '👨🏻',
    quote: 'Fast delivery and top-notch quality. Zorbas is my go-to for Mediterranean treats.'
  }
];

function TestimonialsSection() {
  return (
    <section className="zorbas-testimonials-section">
      <h2 className="zorbas-testimonials-title">What Our Customers Say</h2>
      <div className="zorbas-testimonials-list">
        {testimonials.map((t, idx) => (
          <div className="zorbas-testimonial-card" key={t.name + idx}>
            <div className="zorbas-testimonial-avatar">{t.avatar}</div>
            <blockquote className="zorbas-testimonial-quote">"{t.quote}"</blockquote>
            <div className="zorbas-testimonial-name">— {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection; 