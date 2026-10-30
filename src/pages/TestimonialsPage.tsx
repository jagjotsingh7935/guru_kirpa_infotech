import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Star } from 'lucide-react';
import { testimonialsData } from '@/data/testimonials';
import { PageHero } from '@/components/common/PageHero';
import { Reveal } from '@/components/common/Reveal';

export const TestimonialsPage: React.FC = () => (
  <div className="gk-page">
    <PageHero
      crumb="Reviews"
      kicker="Client reviews"
      title={<>What our clients <span className="gk-grad">say about working with us.</span></>}
      text="Feedback from the businesses we have built software for, across legal services, education, mobility and health."
    />

    <section className="gk-section">
      <div className="gk-container">
        <div className="gk-grid-2">
          {testimonialsData.map((item, i) => (
            <Reveal key={item.id} delay={(i % 2) * 80}>
              <figure className="gk-card gk-quote" style={{ height: '100%', margin: 0 }}>
                <div className="gk-stars" aria-label={item.rating + ' out of 5 stars'}>
                  {Array.from({ length: item.rating }).map((_, star) => <Star key={star} size={18} fill="currentColor" />)}
                </div>
                <blockquote>“{item.content}”</blockquote>
                <span className="gk-quote-project">{item.project}</span>
                <figcaption className="gk-author">
                  <span className="gk-avatar" aria-hidden="true">{item.avatarLetter}</span>
                  <span><strong>{item.name}</strong><small>{item.role}, {item.company}</small></span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="gk-cta" style={{ marginTop: 72 }}>
            <div>
              <h2>Your project could be next.</h2>
              <p>Tell us what you are building and we will show you how we can help.</p>
            </div>
            <div className="gk-actions"><Link className="gk-btn gk-btn--light" to="/contact">Start a conversation <ArrowUpRight size={18} /></Link></div>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);
