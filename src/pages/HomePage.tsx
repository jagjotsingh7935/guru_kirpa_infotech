import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BadgeCheck, Code2, Handshake, Layers3, MapPin, Rocket, ShieldCheck } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { servicesData } from '@/data/services';
import { profileData } from '@/data/profile';
import { LogoMark } from '@/components/brand/Logo';
import { ProjectCard } from '@/components/common/ProjectCard';
import { Reveal } from '@/components/common/Reveal';
import { iconTone, serviceIcons } from '@/lib/serviceIcons';
import { useSeo } from '@/lib/seo';

const homeServices = ['website-design', 'web-apps', 'desktop-apps', 'flutter-apps', 'rest-apis', 'business-automation'];

const clients = ['PermitsHub', 'Suhag Jewellers', 'Hazura Singh Trading', 'Ekam Cloth House', 'MGS Machining', 'Tax Control India'];

const reasons = [
  { icon: Code2, title: 'One team, start to finish', text: 'Design, development, deployment and support under one roof, so nothing gets lost between vendors.' },
  { icon: ShieldCheck, title: 'Built to be dependable', text: 'Secure sign-in, tested money and data logic, and production hosting with SSL and backups.' },
  { icon: Handshake, title: 'Plain, honest communication', text: 'Clear scope, regular demos and direct access to the people building your product.' },
  { icon: Rocket, title: 'Local team, global standards', text: 'Based in Doraha, delivering to clients across India and Australia.' },
];

export const HomePage: React.FC = () => {
  useSeo({
    title: 'Software & Web Design Company in Doraha, Punjab',
    description: 'Guru Kirpa Infotech designs and builds websites, web applications, Windows desktop software and mobile apps for businesses in India and Australia.',
    path: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: profileData.name,
      url: window.location.origin,
      telephone: profileData.phone,
      email: profileData.email,
      address: { '@type': 'PostalAddress', streetAddress: 'Railway Road', addressLocality: 'Doraha', addressRegion: 'Punjab', addressCountry: 'IN' },
    },
  });

  const featured = projectsData.filter((project) => project.featured).slice(0, 6);
  const services = homeServices.map((id) => servicesData.find((service) => service.id === id)!).filter(Boolean);


  return (
    <div className="gk-page">
      <section className="gk-hero" aria-labelledby="home-title">
        <div className="gk-container gk-hero-grid">
          <div>
            <span className="gk-pill"><i /> Software &amp; web design company · Doraha, Punjab</span>
            <h1 id="home-title" className="gk-h1">We build software that <span className="gk-grad">grows your business.</span></h1>
            <p className="gk-lead">Guru Kirpa Infotech designs and develops websites, business web apps, Windows desktop software and mobile apps, from the first idea to a live product that your team and customers rely on.</p>
            <div className="gk-actions">
              <Link className="gk-btn gk-btn--primary" to="/contact">Start your project <ArrowUpRight size={18} /></Link>
              <Link className="gk-btn gk-btn--ghost" to="/projects">View our projects <ArrowRight size={18} /></Link>
            </div>
            <div className="gk-hero-proof">
              {profileData.stats.slice(0, 3).map((stat) => (
                <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
              ))}
            </div>
          </div>

          <div className="gk-stage" role="img" aria-label="A live business website and a Windows billing desktop app built by Guru Kirpa Infotech">
            <div className="gk-window gk-window--a">
              <div className="gk-window-bar"><i /><i /><i /><span>permitshub.com.au</span></div>
              <img src="/projects/permitshub.webp" alt="" />
            </div>
            <div className="gk-window gk-window--b">
              <div className="gk-window-bar gk-window-bar--app"><i /><i /><i /><span style={{ background: 'transparent', color: '#b9c4de' }}>Billing · Windows desktop app</span></div>
              <img src="/projects/billing/02-billing-dashboard.webp" alt="" />
            </div>
            <div className="gk-chip gk-chip--a">
              <span className="gk-chip-icon"><BadgeCheck size={20} /></span>
              <span><strong>MSME registered</strong><small>Udyam · Punjab</small></span>
            </div>
            <div className="gk-chip gk-chip--b">
              <span className="gk-chip-icon"><Layers3 size={20} /></span>
              <span><strong>Web · Desktop · Mobile</strong><small>One connected team</small></span>
            </div>
          </div>
        </div>
      </section>

      <div className="gk-strip">
        <div className="gk-container gk-strip-inner">
          <span className="gk-strip-label">Trusted by</span>
          <div className="gk-strip-list">{clients.map((name) => <span key={name}>{name}</span>)}</div>
        </div>
      </div>

      <section className="gk-section" aria-labelledby="services-title">
        <div className="gk-container">
          <Reveal>
            <div className="gk-head">
              <div><span className="gk-kicker">What we do</span><h2 id="services-title" className="gk-h2">Software and web services<br />for growing businesses.</h2></div>
              <p className="gk-lead">From a simple business website to a billing system for your counter, we pick the right technology for the job and see it through to launch.</p>
            </div>
          </Reveal>
          <div className="gk-grid-3">
            {services.map((service, i) => {
              const Icon = serviceIcons[service.iconName] ?? Code2;
              return (
                <Reveal key={service.id} delay={(i % 3) * 80}>
                  <Link to="/services" className="gk-card" style={{ display: 'block', height: '100%' }}>
                    <span className={'gk-icon ' + iconTone[i % iconTone.length]}><Icon size={24} /></span>
                    <h3>{service.title}</h3>
                    <p>{service.description.split('. ')[0].replace(/\.$/, '')}.</p>
                    <div className="gk-tags">{service.tags.slice(0, 3).map((tag) => <span className="gk-tag" key={tag}>{tag}</span>)}</div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <Reveal><p style={{ marginTop: 34 }}><Link className="gk-link" to="/services">See all services <ArrowRight size={17} /></Link></p></Reveal>
        </div>
      </section>

      <section className="gk-section gk-section--white" aria-labelledby="work-title">
        <div className="gk-container">
          <Reveal>
            <div className="gk-head">
              <div><span className="gk-kicker">Selected projects</span><h2 id="work-title" className="gk-h2">Live products we have<br />designed and built.</h2></div>
              <p className="gk-lead">Real websites and software used by real businesses. Open any project to see screens, a walkthrough and the technology behind it.</p>
            </div>
          </Reveal>
          <div className="gk-work-grid">
            {featured.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 80}><ProjectCard project={project} /></Reveal>
            ))}
          </div>
          <Reveal><p style={{ marginTop: 40, textAlign: 'center' }}><Link className="gk-btn gk-btn--outline" to="/projects">View all {projectsData.length} projects <ArrowRight size={17} /></Link></p></Reveal>
        </div>
      </section>

      <section className="gk-section" aria-labelledby="why-title">
        <div className="gk-container gk-split">
          <Reveal>
            <span className="gk-kicker">Why Guru Kirpa Infotech</span>
            <h2 id="why-title" className="gk-h2">A software partner you<br />can call, visit and trust.</h2>
            <p className="gk-lead" style={{ marginTop: 18 }}>We are a registered MSME based on Railway Road, Doraha. You deal directly with the people designing and building your software.</p>
            <div className="gk-feature-list">
              {reasons.map(({ icon: Icon, title, text }, i) => (
                <div className="gk-feature" key={title}>
                  <span className={'gk-icon ' + iconTone[i % iconTone.length]}><Icon size={21} /></span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="gk-company">
              <LogoMark className="gk-logo-mark" />
              <h3 className="gk-h3" style={{ marginTop: 22, fontSize: 26 }}>Guru Kirpa Infotech</h3>
              <p style={{ marginTop: 6, color: '#9fb0d3' }}>Software &amp; web design company</p>
              <dl>
                <div><dt>Address</dt><dd>{profileData.address}</dd></div>
                <div><dt>Phone</dt><dd>{profileData.phone}</dd></div>
                <div><dt>MSME Udyam</dt><dd className="gk-udyam">{profileData.msme}</dd></div>
                <div><dt>Founded by</dt><dd>{profileData.founder}</dd></div>
              </dl>
              <a className="gk-btn gk-btn--light" style={{ marginTop: 26 }} href="https://www.google.com/maps/search/?api=1&query=Railway+Road+Doraha+Punjab" target="_blank" rel="noreferrer"><MapPin size={17} /> Find us on the map</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="gk-section gk-section--dark" aria-labelledby="process-title">
        <div className="gk-glow" style={{ top: -200, left: -120, background: '#3d6bff' }} />
        <div className="gk-container" style={{ position: 'relative' }}>
          <Reveal>
            <div className="gk-head gk-head--center">
              <span className="gk-kicker">How we work</span>
              <h2 id="process-title" className="gk-h2">A clear path from idea to launch.</h2>
              <p className="gk-lead">Every project follows the same four steps, so you always know what is happening and what comes next.</p>
            </div>
          </Reveal>
          <div className="gk-steps">
            {profileData.workflowSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 80}>
                <div className="gk-step" style={{ height: '100%' }}>
                  <span>{step.step}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="gk-section" aria-label="Start a project">
        <div className="gk-container">
          <Reveal>
            <div className="gk-cta">
              <div>
                <span className="gk-kicker" style={{ color: '#7be8ff' }}>Let's work together</span>
                <h2 className="gk-h2">Have a website or software idea?<br /><span className="gk-grad-warm">Let's build it right.</span></h2>
                <p>Tell us what you need. We will reply with honest advice, a clear scope and a fair quote.</p>
              </div>
              <div className="gk-actions">
                <Link className="gk-btn gk-btn--light" to="/contact">Get a free quote <ArrowUpRight size={18} /></Link>
                <a className="gk-btn gk-btn--ghost" href={'tel:' + profileData.phone.replace(/\s/g, '')}>Call {profileData.phone}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
};
