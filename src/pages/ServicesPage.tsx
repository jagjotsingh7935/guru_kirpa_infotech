import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Code2 } from 'lucide-react';
import { servicesData } from '@/data/services';
import { PageHero } from '@/components/common/PageHero';
import { Reveal } from '@/components/common/Reveal';
import { iconTone, serviceIcons } from '@/lib/serviceIcons';

export const ServicesPage: React.FC = () => (
  <div className="gk-page">
    <PageHero
      crumb="Services"
      kicker="What we do"
      title={<>Everything you need to <span className="gk-grad">launch and run</span> your software.</>}
      text="Website design, web applications, Windows desktop software, mobile apps and the integrations and hosting behind them. One team, from first sketch to production."
    />

    <section className="gk-section">
      <div className="gk-container">
        <div className="gk-grid-2">
          {servicesData.map((service, i) => {
            const Icon = serviceIcons[service.iconName] ?? Code2;
            return (
              <Reveal key={service.id} delay={(i % 2) * 80}>
                <article className="gk-card" style={{ height: '100%' }}>
                  <span className="gk-card-num">{service.number}</span>
                  <span className={'gk-icon ' + iconTone[i % iconTone.length]}><Icon size={24} /></span>
                  <h3 className="gk-h3" style={{ marginTop: 22 }}>{service.title}<small>{service.subtitle}</small></h3>
                  <p>{service.description}</p>
                  <ul className="gk-checks">
                    {service.deliverables.map((item) => <li key={item}><CheckCircle2 size={17} /><span>{item}</span></li>)}
                  </ul>
                  <div className="gk-tags">{service.tags.map((tag) => <span className="gk-tag" key={tag}>{tag}</span>)}</div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="gk-cta" style={{ marginTop: 72 }}>
            <div>
              <h2>Not sure which service you need?</h2>
              <p>Describe your business and what you want to achieve. We will recommend the simplest solution that works.</p>
            </div>
            <div className="gk-actions">
              <Link className="gk-btn gk-btn--light" to="/contact">Talk to us <ArrowUpRight size={18} /></Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);
