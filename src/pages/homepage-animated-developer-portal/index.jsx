import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProjectShowcase from './components/ProjectShowcase';
import SkillsMatrix from './components/SkillsMatrix';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const HomepageAnimatedDeveloperPortal = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      const target = e?.target?.closest('a[href^="#"]');
      if (target) {
        e?.preventDefault();
        const targetId = target?.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  useEffect(() => {
    // Keyboard shortcuts for power users
    const handleKeyboardShortcuts = (e) => {
      // Alt + P for Portfolio
      if (e?.altKey && e?.key === 'p') {
        e?.preventDefault();
        window.location.href = '/portfolio-interactive-project-showcase';
      }
      
      // Alt + C for Contact
      if (e?.altKey && e?.key === 'c') {
        e?.preventDefault();
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          contactSection?.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      // Alt + H for Home/Top
      if (e?.altKey && e?.key === 'h') {
        e?.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    document.addEventListener('keydown', handleKeyboardShortcuts);
    return () => document.removeEventListener('keydown', handleKeyboardShortcuts);
  }, []);

  useEffect(() => {
    // Enhanced fade in animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in animation elements
    const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-stagger, .slide-in-left, .slide-in-right, .scale-bounce, .rotate-fade');
    fadeElements?.forEach((el) => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Kaio Silva - Desenvolvedor Full-Stack | Portfolio Digital</title>
        <meta 
          name="description" 
          content="Desenvolvedor Full-Stack especializado em React, Node.js e Python. Transformando ideias em soluções digitais inovadoras. Disponível para projetos em São Paulo." 
        />
        <meta name="keywords" content="desenvolvedor, full-stack, react, nodejs, python, são paulo, portfolio, kaio silva" />
        <meta name="author" content="Kaio Silva" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kaio Silva - Desenvolvedor Full-Stack" />
        <meta property="og:description" content="Portfolio digital de Kaio Silva, desenvolvedor especializado em tecnologias modernas" />
        <meta property="og:url" content="https://rootunk.xyz" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kaio Silva - Desenvolvedor Full-Stack" />
        <meta name="twitter:description" content="Portfolio digital de Kaio Silva, desenvolvedor especializado em tecnologias modernas" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Kaio Silva",
            "jobTitle": "Desenvolvedor Full-Stack",
            "description": "Desenvolvedor especializado em React, Node.js e Python",
            "url": "https://rootunk.xyz",
            "sameAs": [
              "https://github.com/roootunk",
              "https://linkedin.com/in/kaiosilva",
              "https://twitter.com/kaiosilva"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "São Paulo",
              "addressRegion": "SP",
              "addressCountry": "BR"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* Header Navigation */}
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Section with Animated Introduction */}
          <HeroSection />

          {/* Dynamic Project Showcase */}
          <ProjectShowcase />

          {/* Skills Matrix */}
          <SkillsMatrix />

          {/* Testimonials from Brazilian Tech Community */}
          <TestimonialsSection />

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Keyboard Shortcuts Help (Hidden, for screen readers) */}
        <div className="sr-only">
          <h2>Atalhos do Teclado</h2>
          <ul>
            <li>Alt + H: Voltar ao topo</li>
            <li>Alt + P: Ir para Portfolio</li>
            <li>Alt + C: Ir para Contato</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomepageAnimatedDeveloperPortal;