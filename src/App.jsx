import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Footer from './components/Footer';

import ShowreelModal from './components/ShowreelModal';
import ProjectEstimatorModal from './components/ProjectEstimatorModal';
import ContactModal from './components/ContactModal';
import AiAssistantDrawer from './components/AiAssistantDrawer';

export default function App() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [projectWizardOpen, setProjectWizardOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#05080e', color: '#f8fafc', overflowX: 'hidden' }}>
      {/* Navigation Header */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      {/* Hero Section (Matching Exact User Mockup) */}
      <Hero
        onOpenProjectWizard={() => setProjectWizardOpen(true)}
        onOpenShowreel={() => setShowreelOpen(true)}
      />

      {/* About & Monolith Vision */}
      <About />

      {/* Capabilities & Services */}
      <Services onOpenProjectWizard={() => setProjectWizardOpen(true)} />

      {/* Featured Projects & Case Studies */}
      <Projects onOpenContact={() => setContactOpen(true)} />

      {/* Blog & Insights */}
      <Blog />

      {/* Footer */}
      <Footer
        onOpenContact={() => setContactOpen(true)}
        onOpenProjectWizard={() => setProjectWizardOpen(true)}
      />

      {/* Interactive Modals */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        onOpenProjectWizard={() => setProjectWizardOpen(true)}
      />

      <ProjectEstimatorModal
        isOpen={projectWizardOpen}
        onClose={() => setProjectWizardOpen(false)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      {/* Floating AI Solution Assistant */}
      <AiAssistantDrawer
        onOpenProjectWizard={() => setProjectWizardOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />
    </div>
  );
}
