import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsMatrix = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: 'Monitor',
      skills: [
        { name: 'React', level: 95, experience: '4 anos', icon: 'Code' },
        { name: 'TypeScript', level: 90, experience: '3 anos', icon: 'FileCode' },
        { name: 'Next.js', level: 88, experience: '2 anos', icon: 'Zap' },
        { name: 'Tailwind CSS', level: 92, experience: '3 anos', icon: 'Palette' },
        { name: 'Vue.js', level: 75, experience: '2 anos', icon: 'Code2' },
        { name: 'Angular', level: 70, experience: '1 ano', icon: 'Triangle' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: 'Server',
      skills: [
        { name: 'Node.js', level: 93, experience: '4 anos', icon: 'Server' },
        { name: 'Python', level: 89, experience: '5 anos', icon: 'Terminal' },
        { name: 'PostgreSQL', level: 85, experience: '3 anos', icon: 'Database' },
        { name: 'MongoDB', level: 82, experience: '2 anos', icon: 'HardDrive' },
        { name: 'Redis', level: 78, experience: '2 anos', icon: 'Zap' },
        { name: 'GraphQL', level: 80, experience: '2 anos', icon: 'Share2' }
      ]
    },
    devops: {
      title: 'DevOps & Cloud',
      icon: 'Cloud',
      skills: [
        { name: 'AWS', level: 87, experience: '3 anos', icon: 'Cloud' },
        { name: 'Docker', level: 90, experience: '3 anos', icon: 'Package' },
        { name: 'Kubernetes', level: 75, experience: '1 ano', icon: 'Layers' },
        { name: 'CI/CD', level: 85, experience: '2 anos', icon: 'GitBranch' },
        { name: 'Terraform', level: 70, experience: '1 ano', icon: 'Settings' },
        { name: 'Nginx', level: 80, experience: '2 anos', icon: 'Globe' }
      ]
    },
    tools: {
      title: 'Tools & Workflow',
      icon: 'Wrench',
      skills: [
        { name: 'Git', level: 95, experience: '5 anos', icon: 'GitBranch' },
        { name: 'VS Code', level: 98, experience: '5 anos', icon: 'Code' },
        { name: 'Figma', level: 85, experience: '3 anos', icon: 'Figma' },
        { name: 'Postman', level: 90, experience: '4 anos', icon: 'Send' },
        { name: 'Jira', level: 80, experience: '2 anos', icon: 'Trello' },
        { name: 'Slack', level: 95, experience: '4 anos', icon: 'MessageSquare' }
      ]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills-matrix');
    if (element) observer?.observe(element);

    return () => observer?.disconnect();
  }, []);

  const currentCategory = skillCategories?.[activeCategory];

  return (
    <section id="skills-matrix" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-primary font-mono text-sm mb-4">
            // Competências técnicas
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Stack</span>
            <span className="text-primary orange-glow"> Tecnológico</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experiência sólida em tecnologias modernas para desenvolvimento full-stack
          </p>
        </div>

        {/* Category Navigation */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {Object.entries(skillCategories)?.map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-primary text-background shadow-glow'
                  : 'bg-surface text-muted-foreground hover:text-foreground hover:bg-surface/80 border border-border'
              }`}
            >
              <Icon 
                name={category?.icon} 
                size={18} 
                className={activeCategory === key ? 'text-background' : 'text-primary'}
              />
              <span>{category?.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={`transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory?.skills?.map((skill, index) => (
              <div
                key={skill?.name}
                className="bg-surface border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 glow-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                      <Icon name={skill?.icon} size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{skill?.name}</h3>
                      <p className="text-xs text-muted-foreground">{skill?.experience}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">{skill?.level}%</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill?.level}%` : '0%',
                        transitionDelay: `${index * 100 + 800}ms`
                      }}
                    ></div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full shadow-glow-intense opacity-0 animate-pulse"
                    style={{ 
                      animationDelay: `${index * 100 + 1500}ms`,
                      opacity: isVisible ? 1 : 0
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { label: 'Anos de Experiência', value: '5+', icon: 'Calendar' },
            { label: 'Projetos Concluídos', value: '50+', icon: 'CheckCircle' },
            { label: 'Tecnologias', value: '20+', icon: 'Code' },
            { label: 'Certificações', value: '8', icon: 'Award' }
          ]?.map((stat, index) => (
            <div
              key={stat?.label}
              className="text-center p-6 bg-surface/50 border border-border rounded-lg"
            >
              <Icon name={stat?.icon} size={24} className="text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
              <div className="text-sm text-muted-foreground">{stat?.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;