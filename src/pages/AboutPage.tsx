import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Cloud, Cpu, Database, Globe, Layers, MonitorSmartphone } from 'lucide-react';
import { profileData } from '@/data/profile';
import { LogoMark } from '@/components/brand/Logo';
import { PageHero } from '@/components/common/PageHero';
import { Reveal } from '@/components/common/Reveal';
import { iconTone } from '@/lib/serviceIcons';

const skillIcons: Record<string, React.ElementType> = {
  'Backend & Systems': Cpu,
  'Frontend & Mobile': Layers,
  'Desktop Software': MonitorSmartphone,
  'Databases & Caching': Database,
  'Cloud, DevOps & Tooling': Cloud,
  'Third-Party Integrations': Globe,
};

export const AboutPage: React.FC = () => (
  <div className="gk-page">
    <PageHero
      crumb="About"
      kicker="About us"
      title={<>A software company that <span className="gk-grad">treats your product as its own.</span></>}
      text={profileData.bio}
    />

    <div className="gk-container">
      <div className="gk-stat-row">
        {profileData.stats.map((stat) => (
          <div className="gk-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <b>{stat.label}</b>
            <span>{stat.subtext}</span>
          </div>
        ))}
      </div>
    </div>

    <section className="gk-section">
      <div className="gk-container gk-split">
        <Reveal>
          <span className="gk-kicker">Our story</span>
          <h2 className="gk-h2">Built in Doraha,<br />serving clients worldwide.</h2>
          <p className="gk-lead" style={{ marginTop: 20 }}>Guru Kirpa Infotech was founded by {profileData.founder} to give local businesses the same quality of software that large companies take for granted: fast websites, dependable billing and management systems, and apps people enjoy using.</p>
          <p className="gk-lead" style={{ marginTop: 16 }}>Today we work with clients in retail, legal and tax services, education, healthcare, manufacturing and town planning, in India and Australia. Each project gets full ownership from us: we plan it, design it, build it, deploy it and keep it running.</p>
          <p style={{ marginTop: 28 }}><Link className="gk-link" to="/projects">See what we have built <ArrowUpRight size={17} /></Link></p>
        </Reveal>
        <Reveal delay={120}>
          <div className="gk-company">
            <LogoMark className="gk-logo-mark" />
            <h3 className="gk-h3" style={{ marginTop: 22, fontSize: 26 }}>Company details</h3>
            <dl>
              <div><dt>Company</dt><dd>Guru Kirpa Infotech</dd></div>
              <div><dt>Business</dt><dd>Software &amp; web design</dd></div>
              <div><dt>Address</dt><dd>{profileData.address}</dd></div>
              <div><dt>Phone</dt><dd>{profileData.phone}</dd></div>
              <div><dt>MSME Udyam No.</dt><dd className="gk-udyam">{profileData.msme}</dd></div>
              <div><dt>Founder</dt><dd>{profileData.founder}</dd></div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="gk-section gk-section--white">
      <div className="gk-container">
        <Reveal>
          <div className="gk-head gk-head--center">
            <span className="gk-kicker">Our toolbox</span>
            <h2 className="gk-h2">Modern, proven technology.</h2>
            <p className="gk-lead">We choose tools that are fast, secure and easy to maintain, so your product stays healthy long after launch.</p>
          </div>
        </Reveal>
        <div className="gk-grid-3">
          {profileData.skills.map((group, i) => {
            const Icon = skillIcons[group.category] ?? Layers;
            return (
              <Reveal key={group.category} delay={(i % 3) * 80}>
                <div className="gk-card gk-skillbox" style={{ height: '100%' }}>
                  <h3><span className={'gk-icon ' + iconTone[i % iconTone.length]}><Icon size={18} /></span>{group.category}</h3>
                  <div className="gk-tags">{group.items.map((item) => <span className="gk-tag" key={item}>{item}</span>)}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    <section className="gk-section gk-section--dark">
      <div className="gk-glow" style={{ bottom: -240, right: -100, background: '#ff7a1a', opacity: 0.22 }} />
      <div className="gk-container" style={{ position: 'relative' }}>
        <Reveal>
          <div className="gk-head gk-head--center">
            <span className="gk-kicker">How we deliver</span>
            <h2 className="gk-h2">From first call to live product.</h2>
          </div>
        </Reveal>
        <div className="gk-steps">
          {profileData.workflowSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 80}>
              <div className="gk-step" style={{ height: '100%' }}>
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <ul>{step.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="gk-section">
      <div className="gk-container">
        <Reveal>
          <div className="gk-cta">
            <div>
              <h2>Ready to start your project?</h2>
              <p>Tell us what you are planning. We will get back to you with next steps.</p>
            </div>
            <div className="gk-actions"><Link className="gk-btn gk-btn--light" to="/contact">Contact us <ArrowUpRight size={18} /></Link></div>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);
