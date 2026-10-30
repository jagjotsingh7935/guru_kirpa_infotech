import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '@/data/projects';
import type { Project, ProjectCategory } from '@/types/project';
import { PageHero } from '@/components/common/PageHero';
import { ProjectCard } from '@/components/common/ProjectCard';
import { ProjectModal } from '@/components/common/ProjectModal';
import { Reveal } from '@/components/common/Reveal';

const filters: { label: string; value: ProjectCategory }[] = [
  { label: 'All projects', value: 'all' },
  { label: 'Live websites', value: 'website' },
  { label: 'Desktop apps', value: 'desktop' },
  { label: 'Web applications', value: 'fullstack' },
  { label: 'Enterprise & SaaS', value: 'enterprise' },
  { label: 'Mobile apps', value: 'mobile' },
  { label: 'Automation', value: 'automation' },
];

export const ProjectsPage: React.FC = () => {
  const [category, setCategory] = useState<ProjectCategory>('all');
  const [selected, setSelected] = useState<Project | null>(null);
  const [autoPlay, setAutoPlay] = useState(false);

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: projectsData.length };
    projectsData.forEach((project) => { map[project.category] = (map[project.category] ?? 0) + 1; });
    return map;
  }, []);

  const visible = projectsData.filter((project) => category === 'all' || project.category === category);

  const open = (project: Project, playTour = false) => {
    setAutoPlay(playTour);
    setSelected(project);
  };

  return (
    <div className="gk-page">
      <PageHero
        crumb="Projects"
        kicker="Our work"
        title={<>Products built for <span className="gk-grad">real businesses.</span></>}
        text="Live websites, a Windows billing app, business platforms and mobile apps across retail, planning, education, legal services and healthcare. Open any project for screens, a walkthrough and technical details."
      />

      <section className="gk-section">
        <div className="gk-container">
          <div className="gk-filters" role="group" aria-label="Filter projects">
            {filters.filter((filter) => filter.value === 'all' || counts[filter.value]).map((filter) => (
              <button key={filter.value} type="button" className="gk-filter" aria-pressed={category === filter.value} onClick={() => setCategory(filter.value)}>
                {filter.label} <span style={{ opacity: 0.6 }}>({counts[filter.value]})</span>
              </button>
            ))}
          </div>

          <div className="gk-work-grid">
            {visible.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 70}><ProjectCard project={project} onOpen={open} /></Reveal>
            ))}
          </div>

          <Reveal>
            <div className="gk-cta" style={{ marginTop: 80 }}>
              <div>
                <h2>Want something similar?</h2>
                <p>Whether it is a new website, a desktop app for your counter or a platform for your team, let's talk about what it should do.</p>
              </div>
              <div className="gk-actions">
                <Link className="gk-btn gk-btn--light" to="/contact">Discuss your project <ArrowUpRight size={18} /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ProjectModal project={selected} autoPlayTour={autoPlay} onClose={() => { setSelected(null); setAutoPlay(false); }} />
    </div>
  );
};
