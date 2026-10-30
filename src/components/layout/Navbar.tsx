import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, MapPin, Menu, Phone, X } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { profileData } from '@/data/profile';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Reviews', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);

  return (
    <>
      <div className="gk-topbar">
        <div className="gk-container gk-topbar-inner">
          <div className="gk-topbar-group">
            <a href={'tel:' + profileData.phone.replace(/\s/g, '')}><Phone size={14} /> {profileData.phone}</a>
            <span className="gk-topbar-group--extra"><MapPin size={14} /> {profileData.address}</span>
          </div>
          <div className="gk-topbar-group gk-topbar-group--extra">
            <span className="gk-msme">MSME · {profileData.msme}</span>
          </div>
        </div>
      </div>
      <header className="gk-header">
        <div className="gk-container gk-nav">
          <Link to="/" aria-label="Guru Kirpa Infotech home"><Logo /></Link>
          <nav className="gk-desktop-nav" aria-label="Primary navigation">
            {links.map((link) => (
              <Link key={link.to} to={link.to} aria-current={location.pathname === link.to ? 'page' : undefined}>{link.label}</Link>
            ))}
          </nav>
          <Link className="gk-btn gk-btn--primary gk-btn--sm" to="/contact">Get a quote <ArrowUpRight size={16} /></Link>
          <button className="gk-menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <nav id="mobile-navigation" className="gk-mobile-nav" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link key={link.to} to={link.to} aria-current={location.pathname === link.to ? 'page' : undefined}>{link.label}</Link>
            ))}
            <Link className="gk-btn gk-btn--primary" to="/contact">Get a quote <ArrowUpRight size={17} /></Link>
          </nav>
        )}
      </header>
    </>
  );
};
