import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/homepage-animated-developer-portal' },
    { name: 'Portfolio', path: '/portfolio-interactive-project-showcase' },
    { name: 'Sobre', path: '/about' },
    { name: 'Contato', path: '/contact' }
  ];

  const services = [
    'Desenvolvimento Frontend',
    'Desenvolvimento Backend',
    'Arquitetura de Sistemas',
    'Consultoria Técnica',
    'Code Review',
    'Mentoria'
  ];

  const socialLinks = [
    { icon: 'Github', url: 'https://github.com/roootunk', label: 'GitHub' },
    { icon: 'Linkedin', url: 'https://linkedin.com/in/kaiosilva', label: 'LinkedIn' },
    { icon: 'Instagram', url: 'https://www.instagram.com/kaio.engineer/', label: 'Instagram' },
    { icon: 'Twitter', url: 'https://twitter.com/kaiosilva', label: 'Twitter' },
    { icon: 'Mail', url: 'mailto:contato@rootunk.xyz', label: 'Email' }
  ];

  const techStack = [
    'React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-glow">
                <span className="text-background font-mono font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="font-mono font-bold text-xl text-foreground">
                  Kaio Silva
                </h3>
                <p className="text-sm text-muted-foreground">
                  Digital Craftsman
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Desenvolvedor Full-Stack apaixonado por criar soluções inovadoras 
              que fazem a diferença. Transformando ideias em código desde 2019.
            </p>

            {/* Availability Status */}
            <div className="flex items-center space-x-2 px-4 py-2 bg-success/10 border border-success/20 rounded-full">
              <div className="w-2 h-2 bg-success rounded-full pulse-orange"></div>
              <span className="text-success text-sm font-medium">Disponível para projetos</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Navegação</h4>
            <ul className="space-y-3">
              {quickLinks?.map((link) => (
                <li key={link?.name}>
                  <Link
                    to={link?.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center space-x-2 group"
                  >
                    <Icon 
                      name="ArrowRight" 
                      size={14} 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    />
                    <span>{link?.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services?.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm flex items-center space-x-2">
                    <Icon name="Code" size={14} className="text-primary" />
                    <span>{service}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Contato</h4>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-primary" />
                <a 
                  href="mailto:contato@rootunk.xyz"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  contato@rootunk.xyz
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">
                  São Paulo, SP - Brasil
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">
                  GMT-3 (Horário de Brasília)
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="font-medium text-foreground mb-3 text-sm">Redes Sociais</h5>
              <div className="flex space-x-3">
                {socialLinks?.map((social) => (
                  <a
                    key={social?.label}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 glow-hover group"
                    aria-label={social?.label}
                  >
                    <Icon 
                      name={social?.icon} 
                      size={16} 
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-300" 
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="py-8 border-t border-border">
          <div className="text-center mb-6">
            <h4 className="font-mono text-sm text-muted-foreground mb-4">
              // Stack tecnológico principal
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {techStack?.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Kaio Silva. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-muted-foreground">
                Feito com
              </span>
              <div className="flex items-center space-x-2">
                <Icon name="Heart" size={14} className="text-error fill-current" />
                <span className="text-muted-foreground">e</span>
                <Icon name="Coffee" size={14} className="text-warning" />
                <span className="text-muted-foreground">em São Paulo</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <a 
                href="#privacy" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacidade
              </a>
              <span className="text-border">•</span>
              <a 
                href="#terms" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Termos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;