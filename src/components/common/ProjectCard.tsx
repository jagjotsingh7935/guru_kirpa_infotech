import React from 'react';
import { ArrowUpRight, ExternalLink, Monitor, Play } from 'lucide-react';
import type { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project, playTour?: boolean) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpen }) => {
  const isDesktop = project.platform === 'desktop';
  return (
    <article
      className="gk-work"
      role="button"
      tabIndex={0}
      aria-label={'View case study: ' + project.title}
      onClick={() => onOpen(project)}
      onKeyDown={(event) => {
        if (event.target === event.currentTarget && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
          onOpen(project);
        }
      }}
    >
      <div className={'gk-work-media' + (project.coverImage ? '' : ' bg-gradient-to-tr ' + project.imageGradient)}>
        {project.coverImage ? (
          <img src={project.coverImage} alt={'Screenshot of ' + project.title} loading="lazy" />
        ) : (
          <span className="gk-work-mono" aria-hidden="true">{project.title.replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean).slice(0, 2).map((word) => word[0]).join('')}</span>
        )}
        <div className="gk-work-badges">
          {isDesktop ? (
            <span className="gk-badge gk-badge--desktop"><Monitor size={13} /> Windows desktop app</span>
          ) : project.liveUrl ? (
            <span className="gk-badge gk-badge--live"><i /> Live</span>
          ) : <span />}
        </div>
        {project.tourVideo && (
          <button
            type="button"
            className="gk-play"
            onClick={(event) => { event.stopPropagation(); onOpen(project, true); }}
            aria-label={'Play video tour of ' + project.title}
          >
            <Play size={13} fill="currentColor" /> {project.tourLabel ?? 'Watch tour'}
          </button>
        )}
      </div>
      <div className="gk-work-body">
        <span className="gk-work-cat">{project.categoryLabel}</span>
        <h3>{project.title.split(' — ')[0]}</h3>
        <p>{project.description}</p>
        <div className="gk-tags">
          {project.tags.slice(0, 4).map((tag) => <span className="gk-tag" key={tag}>{tag}</span>)}
        </div>
        <div className="gk-work-foot">
          <span>Case study <ArrowUpRight size={15} /></span>
          {project.liveUrl && (
            <a
              className="gk-work-visit"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              Visit site <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
