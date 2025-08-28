import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      title: "substore.org",
      description: `Plataforma de gerenciamento de assinaturas e serviços digitais.\nInterface moderna e intuitiva para controle de múltiplas assinaturas.\nSistema de notificações e alertas personalizáveis para renovação.`,
      image: "https://i.imgur.com/DRqxbVM.png",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      github: "https://github.com/roootunk/substore",
      live: "https://substore.org",
      stars: 156,
      commits: 89,
      status: "Em produção"
    },
    {
      id: 2,
      title: "necrum.store",
      description: `E-commerce especializado em produtos únicos e exclusivos.\nDesign dark e elegante com foco em experiência premium do usuário.\nSistema de busca avançada e categorização inteligente de produtos.`,
      image: "https://i.imgur.com/0ud1MnQ.png",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Vercel"],
      github: "https://github.com/roootunk/necrum-store",
      live: "https://necrum.store",
      stars: 203,
      commits: 134,
      status: "Em produção"
    },
    {
      id: 3,
      title: "Ethereal",
      description: `Aplicação de design minimalista e elegante para criação de conteúdo.\nInterface fluida com animações suaves e transições responsivas.\nFoco na produtividade e experiência visual excepcional.`,
      image: "https://i.imgur.com/ApLnAhJ.png",
      tech: ["React", "Framer Motion", "Tailwind CSS", "Vite", "Netlify"],
      github: "https://github.com/roootunk/ethereal",
      live: "https://ethereal.app",
      stars: 98,
      commits: 67,
      status: "Em desenvolvimento"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('project-showcase');
    if (element) observer?.observe(element);

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects?.length]);

  const currentProject = projects?.[activeProject];

  return (
    <section id="project-showcase" className="py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-primary font-mono text-sm mb-4">
            // Projetos em destaque
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Últimos</span>
            <span className="text-primary orange-glow"> Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções inovadoras que combinam tecnologia de ponta com experiência do usuário excepcional
          </p>
        </div>

        {/* Main Project Display */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Project Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg border border-border shadow-glow">
              <Image
                src={currentProject?.image}
                alt={currentProject?.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Project Status Badge */}
              <div className="absolute top-4 left-4">
                <div className="px-3 py-1 bg-primary/90 text-background text-sm font-medium rounded-full">
                  {currentProject?.status}
                </div>
              </div>

              {/* GitHub Stats Overlay */}
              <div className="absolute bottom-4 right-4 flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center space-x-1 px-2 py-1 bg-background/90 rounded-full">
                  <Icon name="Star" size={14} className="text-warning" />
                  <span className="text-xs font-medium">{currentProject?.stars}</span>
                </div>
                <div className="flex items-center space-x-1 px-2 py-1 bg-background/90 rounded-full">
                  <Icon name="GitCommit" size={14} className="text-success" />
                  <span className="text-xs font-medium">{currentProject?.commits}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                {currentProject?.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {currentProject?.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <div className="text-sm text-muted-foreground mb-3 font-mono">
                // Stack tecnológico
              </div>
              <div className="flex flex-wrap gap-2">
                {currentProject?.tech?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                className="glow-hover"
                iconName="ExternalLink"
                iconPosition="right"
                iconSize={16}
              >
                Ver Demo
              </Button>
              
              <Button
                variant="outline"
                className="glow-hover"
                iconName="Github"
                iconPosition="left"
                iconSize={16}
              >
                Código Fonte
              </Button>
            </div>
          </div>
        </div>

        {/* Project Navigation */}
        <div className={`flex items-center justify-center space-x-4 mb-12 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {projects?.map((project, index) => (
            <button
              key={project?.id}
              onClick={() => setActiveProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeProject
                  ? 'bg-primary shadow-glow'
                  : 'bg-muted hover:bg-primary/50'
              }`}
              aria-label={`Ver projeto ${project?.title}`}
            />
          ))}
        </div>

        {/* GitHub Activity */}
        <div className={`text-center transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-4 px-6 py-4 bg-surface border border-border rounded-lg">
            <Icon name="Github" size={24} className="text-foreground" />
            <div className="text-left">
              <div className="text-foreground font-medium">GitHub Activity</div>
              <div className="text-muted-foreground text-sm">
                127 contribuições este mês • 15 repositórios públicos
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-success rounded-full pulse-orange"></div>
              <span className="text-success text-sm font-medium">Ativo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;