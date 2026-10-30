import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SmoothScroll } from './components/layout/SmoothScroll';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((module) => ({ default: module.ServicesPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then((module) => ({ default: module.ProjectsPage })));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage').then((module) => ({ default: module.TestimonialsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((module) => ({ default: module.ContactPage })));

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col antialiased selection:bg-indigo-500 selection:text-white">
          {/* Persistent Multi-Page Navigation Header */}
          <Navbar />

          {/* Independent Multi-Page Routes */}
          <main className="flex-grow">
            <Suspense fallback={<div className="min-h-[60vh] grid place-items-center text-slate-500 text-sm">Loading…</div>}>
            <Routes>
              {/* Route 1: Home */}
              <Route path="/" element={<HomePage />} />

              {/* Route 2: About */}
              <Route path="/about" element={<AboutPage />} />

              {/* Route 3: Services */}
              <Route path="/services" element={<ServicesPage />} />

              {/* Route 4: Projects */}
              <Route path="/projects" element={<ProjectsPage />} />

              {/* Route 5: Testimonials */}
              <Route path="/testimonials" element={<TestimonialsPage />} />

              {/* Route 6: Contacts */}
              <Route path="/contact" element={<ContactPage />} />

              {/* Catch-all Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            </Suspense>
          </main>

          {/* Persistent Footer */}
          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
};

export default App;
