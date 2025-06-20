import React from 'react';
import './StorySection.css';

const timeline = [
  {
    year: '1985',
    icon: '🏛️',
    title: 'Our Beginning',
    description: 'Zorbas Bakery + Foods began producing high quality, delicious, and healthy Greek foods.'
  },
  {
    year: '1990 - 1992',
    icon: '🌍',
    title: 'Growth & Expansion',
    description: 'Distribution expanded to all of BC, parts of Western Canada, and the Yukon, prompting a move to our current location in Burnaby.'
  },
  {
    year: '2005',
    icon: '✅',
    title: 'Commitment to Quality',
    description: 'Zorbas became an HAACP compliant operation.'
  },
  {
    year: '2018',
    icon: '🌱',
    title: 'Our Mission Continues',
    description: 'Zorbas continues to inspire a healthy life through delicious foods.'
  }
];

function StorySection() {
  return (
    <section className="zorbas-story-section">
      <h2 className="zorbas-story-title">Our Story</h2>
      <div className="zorbas-timeline">
        {timeline.map((event, idx) => (
          <div className="zorbas-timeline-event" key={event.year}>
            <div className="zorbas-timeline-icon">{event.icon}</div>
            <div className="zorbas-timeline-content">
              <div className="zorbas-timeline-year">{event.year}</div>
              <div className="zorbas-timeline-title">{event.title}</div>
              <div className="zorbas-timeline-desc">{event.description}</div>
            </div>
            {idx < timeline.length - 1 && <div className="zorbas-timeline-connector" />}
          </div>
        ))}
      </div>
    </section>
  );
}

export default StorySection; 