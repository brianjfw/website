import React from 'react';
import './StorySection.css';

const timeline = [
  {
    year: '1969',
    icon: '🏛️',
    title: 'Founded in Vancouver',
    description: 'Zorbas Bakery opens its doors, bringing authentic Greek recipes to the local community.'
  },
  {
    year: '1985',
    icon: '🍞',
    title: 'Artisan Breads',
    description: 'Our artisan breads become a staple in homes and restaurants across the city.'
  },
  {
    year: '2005',
    icon: '🌱',
    title: 'Healthy Expansion',
    description: 'We introduce vegan, gluten-free, and non-GMO options, staying true to our roots while embracing modern tastes.'
  },
  {
    year: 'Today',
    icon: '🌍',
    title: 'A Greek Tradition',
    description: 'Still family-owned, Zorbas continues to share the flavors and warmth of Greece with every customer.'
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