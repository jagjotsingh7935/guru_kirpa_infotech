import React from 'react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  crumb: string;
  kicker: string;
  title: React.ReactNode;
  text: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ crumb, kicker, title, text }) => (
  <section className="gk-pagehero">
    <div className="gk-container">
      <nav className="gk-crumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><span>{crumb}</span></nav>
      <span className="gk-kicker">{kicker}</span>
      <h1 className="gk-h1">{title}</h1>
      <p className="gk-lead">{text}</p>
    </div>
  </section>
);
