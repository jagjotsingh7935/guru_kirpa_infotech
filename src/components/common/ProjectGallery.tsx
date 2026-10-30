import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, Maximize2, X } from 'lucide-react';
import type { ProjectScreenshot } from '@/types/project';

interface ProjectGalleryProps {
  shots: ProjectScreenshot[];
  heading: string;
}

/** Screenshot gallery with thumbnails, arrow-key navigation and a full-screen lightbox. */
export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ shots, heading }) => {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const count = shots.length;
  const step = (delta: number) => setIndex((current) => (current + delta + count) % count);

  useEffect(() => {
    setIndex(0);
    setLightbox(false);
  }, [shots]);

  useEffect(() => {
    if (!lightbox) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(false);
      else if (count > 1 && event.key === 'ArrowRight') setIndex((current) => (current + 1) % count);
      else if (count > 1 && event.key === 'ArrowLeft') setIndex((current) => (current - 1 + count) % count);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox, count]);

  const current = shots[index];
  if (!current) return null;

  return (
    <>
      <h2 className="gk-detail-h"><Eye size={15} /> {heading} · {index + 1} of {count}</h2>
      <div className="gk-shot-main" onClick={() => setLightbox(true)}>
        <img src={current.url} alt={current.title} />
        <span className="gk-shot-hint"><Maximize2 size={13} /> Enlarge</span>
        {count > 1 && (
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
      {count > 1 && (
        <div className="gk-thumbs">
          {shots.map((shot, i) => (
            <button type="button" key={shot.url} className="gk-thumb" aria-current={i === index} aria-label={'Show ' + shot.title} onClick={() => setIndex(i)}>
              <img src={shot.url} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {lightbox && (
        <div className="gk-lightbox" role="dialog" aria-modal="true" aria-label={current.title} data-lenis-prevent onClick={() => setLightbox(false)}>
          <button type="button" className="gk-modal-close" aria-label="Close enlarged screenshot" onClick={() => setLightbox(false)}><X size={18} /></button>
          <img src={current.url} alt={current.title} onClick={(event) => event.stopPropagation()} />
          <p onClick={(event) => event.stopPropagation()}><strong>{current.title}</strong> — {current.caption}</p>
          {count > 1 && (
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
