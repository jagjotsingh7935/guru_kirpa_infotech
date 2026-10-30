import React, { useEffect, useMemo } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, ExternalLink, Globe, Layers, Monitor, Play } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { profileData } from '@/data/profile';
import { GithubIcon } from '@/components/common/Icons';
import { ProjectCard } from '@/components/common/ProjectCard';
import { ProjectGallery } from '@/components/common/ProjectGallery';
import { Reveal } from '@/components/common/Reveal';
import { useSeo } from '@/lib/seo';

const platformLabel: Record<string, string> = { web: 'Web', desktop: 'Windows desktop app', mobile: 'Mobile app' };

export const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams();
  const [params] = useSearchParams();
  const project = projectsData.find((item) => item.id === projectId);
  const autoPlay = params.get('tour') === '1';

  const related = useMemo(() => {
    if (!project) return [];
    const others = projectsData.filter((item) => item.id !== project.id);
    return [...others.filter((item) => item.category === project.category), ...others.filter((item) => item.category !== project.category)].slice(0, 3);
  }, [project]);

  useSeo({
    title: project ? project.title : 'Project not found',
    description: project ? project.description : 'This project could not be found. Browse the projects built by Guru Kirpa Infotech.',
    image: project?.coverImage,
    path: project ? '/projects/' + project.id : undefined,
    noindex: !project,
    jsonLd: project
      ? {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          image: project.coverImage ? window.location.origin + project.coverImage : undefined,
          url: window.location.origin + '/projects/' + project.id,
          keywords: project.tags.join(', '),
          creator: { '@type': 'Organization', name: profileData.name, telephone: profileData.phone, email: profileData.email },
        }
      : null,
  });

  useEffect(() => {
    if (!autoPlay || !project?.tourVideo) return;
    const timer = window.setTimeout(() => document.getElementById('tour')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 350);
    return () => window.clearTimeout(timer);
  }, [autoPlay, project?.id, project?.tourVideo]);

  if (!project) {
    return (
      <div className="gk-page">
        <section className="gk-pagehero">
          <div className="gk-container">
            <nav className="gk-crumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/projects">Projects</Link></nav>
            <h1 className="gk-h1">Project not found</h1>
            <p className="gk-lead">We could not find that project. It may have been renamed or removed.</p>
            <div className="gk-actions"><Link className="gk-btn gk-btn--primary" to="/projects">Browse all projects <ArrowRight size={18} /></Link></div>
          </div>
        </section>
      </div>
    );
  }

  const isDesktop = project.platform === 'desktop';
  const arch = project.architecture;
  const shots = project.screenshots ?? [];

  return (
    <div className="gk-page">
      <section className="gk-pagehero">
        <div className="gk-container">
          <nav className="gk-crumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/projects">Projects</Link><span>/</span><span>{project.title.split(' — ')[0]}</span></nav>
          <div className="gk-detail-badges">
            <span className="gk-badge">{project.categoryLabel}</span>
            {isDesktop && <span className="gk-badge gk-badge--desktop"><Monitor size={13} /> Windows desktop app</span>}
            {!isDesktop && project.liveUrl && <span className="gk-badge gk-badge--live"><i /> Live</span>}
          </div>
          <h1 className="gk-h1">{project.title}</h1>
          <p className="gk-lead">{project.subtitle}</p>
          <div className="gk-actions">
            {project.liveUrl && <a className="gk-btn gk-btn--primary" href={project.liveUrl} target="_blank" rel="noreferrer"><Globe size={17} /> Visit live site <ExternalLink size={14} /></a>}
            {project.additionalLiveUrls?.map((link) => (
              <a key={link.url} className="gk-btn gk-btn--ghost" href={link.url} target="_blank" rel="noreferrer"><Globe size={17} /> {link.label}</a>
            ))}
            {project.githubUrl && <a className="gk-btn gk-btn--ghost" href={project.githubUrl} target="_blank" rel="noreferrer"><GithubIcon className="h-4 w-4" /> Source code</a>}
            {!project.liveUrl && <Link className="gk-btn gk-btn--primary" to="/contact">Request a similar project <ArrowUpRight size={17} /></Link>}
          </div>
        </div>
      </section>

      <section className="gk-section">
        <div className="gk-container gk-detail">
          <div className="gk-detail-main">
            {project.tourVideo && (
              <section id="tour" aria-label="Video tour">
                <h2 className="gk-detail-h"><Play size={14} /> {isDesktop ? 'Desktop app walkthrough' : 'Video tour'}</h2>
                <video
                  key={project.id}
                  className="gk-video"
                  src={project.tourVideo}
                  poster={project.coverImage}
                  controls
                  muted
                  playsInline
                  loop={isDesktop}
                  autoPlay={autoPlay}
                  preload={autoPlay ? 'auto' : 'metadata'}
                  aria-label={'Video tour of ' + project.title}
                />
              </section>
            )}

            <section>
              <h2 className="gk-detail-h"><Layers size={14} /> About the project</h2>
              <p className="gk-prose">{project.longDescription}</p>
            </section>

            {shots.length > 0 && (
              <section aria-label="Screenshots">
                <ProjectGallery shots={shots} heading={isDesktop ? 'App screens' : 'Interface gallery'} />
              </section>
            )}

            <section>
              <h2 className="gk-detail-h"><CheckCircle2 size={14} /> Key features</h2>
              <ul className="gk-checks">
                {project.features.map((feature) => (
                  <li key={feature}><CheckCircle2 size={17} /><span>{feature}</span></li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="gk-detail-h"><Layers size={14} /> Technology</h2>
              <div className="gk-arch">
                {arch.frontend && <div><small>{isDesktop ? 'Desktop client' : 'Frontend'}</small><p>{arch.frontend}</p></div>}
                {arch.backend && <div><small>Backend</small><p>{arch.backend}</p></div>}
                {arch.database && <div><small>Database</small><p>{arch.database}</p></div>}
                {arch.orchestration && <div><small>Orchestration</small><p>{arch.orchestration}</p></div>}
                {arch.services && <div><small>Integrations &amp; infrastructure</small><p>{arch.services.join(', ')}</p></div>}
              </div>
            </section>
          </div>

          <aside className="gk-detail-aside" aria-label="Project summary">
            <div className="gk-fact">
              <h2 className="gk-detail-h">Project at a glance</h2>
              <dl className="gk-facts">
                <div><dt>Type</dt><dd>{project.categoryLabel}</dd></div>
                <div><dt>Platform</dt><dd>{platformLabel[project.platform ?? 'web']}</dd></div>
                {project.metrics?.map((metric) => (
                  <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>
                ))}
              </dl>
              <div className="gk-tags">{project.tags.map((tag) => <span className="gk-tag" key={tag}>{tag}</span>)}</div>
            </div>
            <div className="gk-fact gk-fact--cta">
              <h2 className="gk-h3">Want something similar?</h2>
              <p>Tell us what you need. We will reply with a clear scope and a fair quote.</p>
              <Link className="gk-btn gk-btn--primary" to="/contact">Get a free quote <ArrowUpRight size={17} /></Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="gk-section gk-section--white" aria-labelledby="more-title">
        <div className="gk-container">
          <Reveal>
            <div className="gk-head">
              <div><span className="gk-kicker">More projects</span><h2 id="more-title" className="gk-h2">Explore other work.</h2></div>
              <p className="gk-lead"><Link className="gk-link" to="/projects">View all projects <ArrowRight size={17} /></Link></p>
            </div>
          </Reveal>
          <div className="gk-work-grid">
            {related.map((item, i) => (
              <Reveal key={item.id} delay={i * 80}><ProjectCard project={item} /></Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
