import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, BadgeCheck, Check, Copy, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { profileData } from '@/data/profile';
import { PageHero } from '@/components/common/PageHero';

const serviceOptions = ['Website design', 'Web application', 'Windows desktop software', 'Mobile app', 'Backend & APIs', 'Automation & integrations', 'Other / not sure'];

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: serviceOptions[0], message: '' });
  const [draftReady, setDraftReady] = useState(false);
  const [copied, setCopied] = useState(false);

  const body = ['Name: ' + form.name, 'Email: ' + form.email, 'Phone: ' + (form.phone || 'Not provided'), 'Service: ' + form.service, '', 'Project details:', form.message].join('\n');
  const emailUrl = 'mailto:' + profileData.email + '?subject=' + encodeURIComponent('New project enquiry from ' + form.name) + '&body=' + encodeURIComponent(body);
  const digits = profileData.phone.replace(/[^0-9]/g, '');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDraftReady(true);
    window.location.href = emailUrl;
  };

  const copyEnquiry = async () => {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const set = (key: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [key]: event.target.value });

  return (
    <div className="gk-page">
      <PageHero
        crumb="Contact"
        kicker="Get in touch"
        title={<>Let's talk about <span className="gk-grad">your project.</span></>}
        text="Call us, message us on WhatsApp, visit the office or send the details below. We reply to every enquiry."
      />

      <section className="gk-section">
        <div className="gk-container gk-contact-grid">
          <div>
            <span className="gk-kicker">Contact details</span>
            <h2 className="gk-h2">We would love to hear from you.</h2>
            <div className="gk-contact-methods">
              <a href={'tel:' + profileData.phone.replace(/\s/g, '')}><span className="gk-icon"><Phone size={20} /></span><div><small>CALL US</small><strong>{profileData.phone}</strong></div><ArrowUpRight size={18} /></a>
              <a href={'https://wa.me/' + digits} target="_blank" rel="noreferrer"><span className="gk-icon gk-icon--green"><MessageCircle size={20} /></span><div><small>WHATSAPP</small><strong>Start a chat</strong></div><ArrowUpRight size={18} /></a>
              <a href={'mailto:' + profileData.email}><span className="gk-icon gk-icon--cyan"><Mail size={20} /></span><div><small>EMAIL US</small><strong>{profileData.email}</strong></div><ArrowUpRight size={18} /></a>
              <a href="https://www.google.com/maps/search/?api=1&query=Railway+Road+Doraha+Punjab" target="_blank" rel="noreferrer"><span className="gk-icon gk-icon--warm"><MapPin size={20} /></span><div><small>VISIT OUR OFFICE</small><strong>{profileData.address}</strong></div><ArrowUpRight size={18} /></a>
              <div className="row"><span className="gk-icon"><BadgeCheck size={20} /></span><div><small>MSME UDYAM REGISTRATION</small><strong style={{ fontFamily: 'var(--font-mono)' }}>{profileData.msme}</strong></div></div>
            </div>
          </div>

          <div className="gk-form-card">
            <h2>Tell us about your project</h2>
            <p>Fill in the details and your email app will open with a ready-to-send message.</p>
            <form className="gk-form" onSubmit={handleSubmit}>
              <div className="gk-form-row">
                <label><span>Full name <b>*</b></span><input required autoComplete="name" value={form.name} onChange={set('name')} placeholder="Your name" /></label>
                <label><span>Email address <b>*</b></span><input required type="email" autoComplete="email" value={form.email} onChange={set('email')} placeholder="you@company.com" /></label>
              </div>
              <div className="gk-form-row">
                <label>Phone number<input type="tel" autoComplete="tel" value={form.phone} onChange={set('phone')} placeholder="+91 98765 43210" /></label>
                <label>What do you need?<select value={form.service} onChange={set('service')}>{serviceOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
              </div>
              <label><span>Project details <b>*</b></span><textarea required rows={5} value={form.message} onChange={set('message')} placeholder="What would you like to build? Who will use it?" /></label>
              <button className="gk-btn gk-btn--primary" type="submit">Continue in email app <ArrowRight size={18} /></button>
              {draftReady && (
                <div className="gk-form-note" role="status">
                  <span><Check size={17} /> Your draft is ready. Review it in your email app and press Send.</span>
                  <button type="button" onClick={copyEnquiry}><Copy size={15} /> {copied ? 'Copied' : 'Copy enquiry instead'}</button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
