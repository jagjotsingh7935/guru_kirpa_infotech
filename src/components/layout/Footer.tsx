import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { profileData } from '@/data/profile';

export const Footer: React.FC = () => (
  <footer className="gk-footer">
    <div className="gk-container">
      <div className="gk-footer-grid">
        <div>
          <Link to="/" aria-label="Guru Kirpa Infotech home"><Logo /></Link>
          <p>A software and web design company in Doraha, Punjab. We design and build websites, web apps, desktop software and mobile apps that help businesses run better.</p>
        </div>
        <div>
          <h4>Company</h4>
          <div className="gk-footer-col">
            <Link to="/about">About us</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/testimonials">Client reviews</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <div className="gk-footer-col">
            <Link to="/services">Website design</Link>
            <Link to="/services">Web applications</Link>
            <Link to="/services">Desktop software</Link>
            <Link to="/services">Mobile apps</Link>
          </div>
        </div>
        <div>
          <h4>Get in touch</h4>
          <div className="gk-footer-col">
            <a className="row" href={'tel:' + profileData.phone.replace(/\s/g, '')}><Phone size={16} /> {profileData.phone}</a>
            <a className="row" href={'mailto:' + profileData.email}><Mail size={16} /> {profileData.email}</a>
            <span className="row"><MapPin size={16} /> {profileData.address}</span>
          </div>
        </div>
      </div>
      <div className="gk-footer-bottom">
        <span>© {new Date().getFullYear()} Guru Kirpa Infotech. All rights reserved.</span>
        <span>MSME Udyam Registration: <span className="gk-udyam">{profileData.msme}</span></span>
      </div>
    </div>
  </footer>
);
