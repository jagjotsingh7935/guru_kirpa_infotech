import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink, Eye, Globe, Layers, Maximize2, Monitor, Play, X } from 'lucide-react';
import type { Project } from '@/types/project';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  autoPlayTour?: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, autoPlayTour = false, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const shots = project?.screenshots ?? [];
  const step = (delta: number) => setIndex((current) => (current + delta + shots.length) % shots.length);

  useEffect(() => {
    setIndex(0);
    setLightbox(false);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (lightbox) setLightbox(false);
        else onClose();
      } else if (shots.length > 1 && event.key === 'ArrowRight') {
        setIndex((current) => (current + 1) % shots.length);
      } else if (shots.length > 1 && event.key === 'ArrowLeft') {
        setIndex((current) => (current - 1 + shots.length) % shots.length);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      previousFocus?.focus();
    };
  }, [project, onClose, lightbox, shots.length]);

  if (!project) return null;

  const current = shots[index];
  const isDesktop = project.platform === 'desktop';
  const arch = project.architecture;

  return (
    <>
      <div className="gk-modal-back" data-lenis-prevent onClick={onClose}>
        <div className="gk-modal" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" onClick={(event) => event.stopPropagation()}>
          <div className="gk-modal-head">
            <button ref={closeRef} type="button" className="gk-modal-close" onClick={onClose} aria-label="Close project details"><X size={18} /></button>
            <div className="gk-modal-badges">
              <span className="gk-badge">{project.categoryLabel}</span>
              {isDesktop && <span className="gk-badge gk-badge--desktop"><Monitor size={13} /> Windows desktop app</span>}
              {!isDesktop && project.liveUrl && <span className="gk-badge gk-badge--live"><i /> Live</span>}
            </div>
            <h3 id="project-dialog-title">{project.title}</h3>
            <p>{project.subtitle}</p>
          </div>

          <div className="gk-modal-body">
            {project.tourVideo && (
              <section aria-label="Project video tour">
                <h4><Play size={14} /> {isDesktop ? 'Desktop app walkthrough' : 'Video tour'}</h4>
                <video
                  key={project.id}
                  className="gk-video"
                  src={project.tourVideo}
                  poster={project.coverImage}
                  controls
                  muted
                  playsInline
                  loop={isDesktop}
                  autoPlay={autoPlayTour}
                  preload={autoPlayTour ? 'auto' : 'metadata'}
                  aria-label={'Video tour of ' + project.title}
                />
              </section>
            )}

            <section>
              <h4><Layers size={14} /> About the project</h4>
              <p>{project.longDescription}</p>
            </section>

            {current && (
              <section aria-label="Screenshots">
                <h4><Eye size={14} /> {isDesktop ? 'App screens' : 'Interface gallery'} · {index + 1} of {shots.length}</h4>
                <div className="gk-shot-main" onClick={() => setLightbox(true)}>
                  <img src={current.url} alt={current.title} />
                  <span className="gk-shot-hint"><Maximize2 size={13} /> Enlarge</span>
                  {shots.length > 1 && (
                    <>
                      <button type="button" className="gk-shot-nav gk-shot-nav--prev" aria-label="Previous screenshot" onClick={(event) => { event.stopPropagation(); step(-1); }}><ChevronLeft size={20} /></button>
                      <button type="button" className="gk-shot-nav gk-shot-nav--next" aria-label="Next screenshot" onClick={(event) => { event.stopPropagation(); step(1); }}><ChevronRight size={20} /></button>
                    </>
                  )}
                </div>
                <div className="gk-shot-caption">
                  <strong>{current.title}</strong>
                  <p>{current.caption}</p>
                </div>
                {shots.length > 1 && (
                  <div className="gk-thumbs">
                    {shots.map((shot, i) => (
                      <button type="button" key={shot.url} className="gk-thumb" aria-current={i === index} aria-label={'Show ' + shot.title} onClick={() => setIndex(i)}>
                        <img src={shot.url} alt="" loading="lazy" />
                      </button>
                    ))}
                  </div>
                )}
              </section>
            )}

            {project.metrics && project.metrics.length > 0 && (
              <div className="gk-metrics">
                {project.metrics.map((metric) => (
                  <div className="gk-metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
                ))}
              </div>
            )}

            <section>
              <h4><CheckCircle2 size={14} /> Key features</h4>
              <ul className="gk-checks">
                {project.features.map((feature) => (
                  <li key={feature}><CheckCircle2 size={17} /><span>{feature}</span></li>
                ))}
              </ul>
            </section>

            <section>
              <h4><Layers size={14} /> Technology</h4>
              <div className="gk-arch">
                {arch.frontend && <div><small>{isDesktop ? 'Desktop client' : 'Frontend'}</small><p>{arch.frontend}</p></div>}
                {arch.backend && <div><small>Backend</small><p>{arch.backend}</p></div>}
                {arch.database && <div><small>Database</small><p>{arch.database}</p></div>}
                {arch.orchestration && <div><small>Orchestration</small><p>{arch.orchestration}</p></div>}
                {arch.services && <div><small>Integrations &amp; infrastructure</small><p>{arch.services.join(', ')}</p></div>}
              </div>
              <div className="gk-tags">
                {project.tags.map((tag) => <span className="gk-tag" key={tag}>{tag}</span>)}
              </div>
            </section>
          </div>

          <div className="gk-modal-foot">
            <span style={{ fontSize: 13.5, color: '#5a6782' }}>Designed and built by <strong style={{ color: '#16213a' }}>Guru Kirpa Infotech</strong></span>
            <div>
              {project.liveUrl && (
                <a className="gk-btn gk-btn--primary gk-btn--sm" href={project.liveUrl} target="_blank" rel="noreferrer"><Globe size={15} /> Visit live site <ExternalLink size={13} /></a>
              )}
              {project.additionalLiveUrls?.map((link) => (
                <a key={link.url} className="gk-btn gk-btn--outline gk-btn--sm" href={link.url} target="_blank" rel="noreferrer"><Globe size={15} /> {link.label}</a>
              ))}
              {project.githubUrl && (
                <a className="gk-btn gk-btn--outline gk-btn--sm" href={project.githubUrl} target="_blank" rel="noreferrer"><GithubIcon className="h-4 w-4" /> Source</a>
              )}
              <Link className="gk-btn gk-btn--outline gk-btn--sm" to="/contact" onClick={onClose}>Request similar <ArrowUpRight size={15} /></Link>
            </div>
          </div>
        </div>
      </div>

      {lightbox && current && (
        <div className="gk-lightbox" role="dialog" aria-modal="true" aria-label={current.title} onClick={() => setLightbox(false)}>
          <button type="button" className="gk-modal-close" aria-label="Close enlarged screenshot" onClick={() => setLightbox(false)}><X size={18} /></button>
          <img src={current.url} alt={current.title} onClick={(event) => event.stopPropagation()} />
          <p onClick={(event) => event.stopPropagation()}><strong>{current.title}</strong> — {current.caption}</p>
          {shots.length > 1 && (
            <>
              <button type="button" className="gk-shot-nav gk-shot-nav--prev" aria-label="Previous screenshot" onClick={(event) => { event.stopPropagation(); step(-1); }}><ChevronLeft size={22} /></button>
              <button type="button" className="gk-shot-nav gk-shot-nav--next" aria-label="Next screenshot" onClick={(event) => { event.stopPropagation(); step(1); }}><ChevronRight size={22} /></button>
            </>
          )}
        </div>
      )}
    </>
  );
};
