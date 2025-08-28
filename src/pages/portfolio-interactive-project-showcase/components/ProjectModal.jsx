import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: 'Eye' },
    { id: 'technical', label: 'Detalhes Técnicos', icon: 'Code' },
    { id: 'challenges', label: 'Desafios', icon: 'Zap' },
    { id: 'results', label: 'Resultados', icon: 'TrendingUp' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project?.gallery?.length - 1 : prev - 1
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-6xl max-h-[90vh] bg-surface border border-border rounded-2xl overflow-hidden shadow-glow-intense"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e?.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Briefcase" size={24} className="text-background" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{project?.title}</h2>
                  <p className="text-primary font-medium">{project?.category}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-all duration-200"
              >
                <Icon name="X" size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex h-[calc(90vh-120px)]">
              {/* Sidebar */}
              <div className="w-64 border-r border-border p-6 overflow-y-auto">
                {/* Navigation Tabs */}
                <nav className="space-y-2 mb-6">
                  {tabs?.map((tab) => (
                    <button
                      key={tab?.id}
                      onClick={() => setActiveTab(tab?.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeTab === tab?.id
                          ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/10'
                      }`}
                    >
                      <Icon name={tab?.icon} size={16} />
                      <span>{tab?.label}</span>
                    </button>
                  ))}
                </nav>

                {/* Quick Info */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Status</h4>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      project?.status === 'live' ?'bg-success/20 text-success border border-success/30' 
                        : project?.status === 'development' ?'bg-warning/20 text-warning border border-warning/30' :'bg-muted/20 text-muted-foreground border border-muted/30'
                    }`}>
                      {project?.status === 'live' && <Icon name="Globe" size={12} className="mr-1" />}
                      {project?.status === 'development' && <Icon name="Code" size={12} className="mr-1" />}
                      {project?.status === 'archived' && <Icon name="Archive" size={12} className="mr-1" />}
                      {project?.status?.charAt(0)?.toUpperCase() + project?.status?.slice(1)}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Duração</h4>
                    <p className="text-sm text-muted-foreground">{project?.duration}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Equipe</h4>
                    <p className="text-sm text-muted-foreground">{project?.team}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-4">
                    {project?.demoUrl && (
                      <Button
                        variant="default"
                        size="sm"
                        fullWidth
                        iconName="ExternalLink"
                        iconPosition="right"
                        onClick={() => window.open(project?.demoUrl, '_blank')}
                      >
                        Ver Demo
                      </Button>
                    )}
                    {project?.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        fullWidth
                        iconName="Github"
                        iconPosition="right"
                        onClick={() => window.open(project?.githubUrl, '_blank')}
                      >
                        Código Fonte
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 overflow-y-auto">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    {/* Image Gallery */}
                    {project?.gallery && project?.gallery?.length > 0 && (
                      <div className="relative">
                        <div className="relative h-80 rounded-xl overflow-hidden">
                          <Image
                            src={project?.gallery?.[currentImageIndex]}
                            alt={`${project?.title} - Imagem ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {project?.gallery?.length > 1 && (
                            <>
                              <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
                              >
                                <Icon name="ChevronLeft" size={20} className="text-primary" />
                              </button>
                              <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
                              >
                                <Icon name="ChevronRight" size={20} className="text-primary" />
                              </button>
                            </>
                          )}
                        </div>
                        {project?.gallery?.length > 1 && (
                          <div className="flex justify-center mt-4 space-x-2">
                            {project?.gallery?.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                  index === currentImageIndex ? 'bg-primary' : 'bg-muted/40'
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Sobre o Projeto</h3>
                      <p className="text-muted-foreground leading-relaxed">{project?.fullDescription}</p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Tecnologias Utilizadas</h3>
                      <div className="flex flex-wrap gap-2">
                        {project?.technologies?.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-lg border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'technical' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Arquitetura do Sistema</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{project?.architecture}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Principais Funcionalidades</h3>
                      <ul className="space-y-2">
                        {project?.features?.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project?.codeSnippet && (
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Exemplo de Código</h3>
                        <div className="bg-background border border-border rounded-lg p-4 overflow-x-auto">
                          <pre className="text-sm text-muted-foreground font-mono">
                            <code>{project?.codeSnippet}</code>
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'challenges' && (
                  <div className="space-y-6">
                    {project?.challenges?.map((challenge, index) => (
                      <div key={index} className="p-4 bg-muted/10 border border-muted/20 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center">
                          <Icon name="AlertTriangle" size={16} className="text-warning mr-2" />
                          {challenge?.title}
                        </h4>
                        <p className="text-muted-foreground mb-3">{challenge?.description}</p>
                        <div className="flex items-start space-x-2">
                          <Icon name="Lightbulb" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-sm font-medium text-primary">Solução:</span>
                            <p className="text-sm text-muted-foreground mt-1">{challenge?.solution}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'results' && (
                  <div className="space-y-6">
                    {/* Metrics */}
                    {project?.metrics && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {project?.metrics?.map((metric, index) => (
                          <div key={index} className="text-center p-4 bg-muted/10 border border-muted/20 rounded-lg">
                            <div className="text-2xl font-bold text-primary mb-1">{metric?.value}</div>
                            <div className="text-sm text-muted-foreground">{metric?.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Testimonials */}
                    {project?.testimonials && (
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-4">Depoimentos</h3>
                        <div className="space-y-4">
                          {project?.testimonials?.map((testimonial, index) => (
                            <div key={index} className="p-4 bg-surface border border-border rounded-lg">
                              <p className="text-muted-foreground italic mb-3">"{testimonial?.content}"</p>
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                                  <span className="text-background font-semibold text-sm">
                                    {testimonial?.author?.split(' ')?.map(n => n?.[0])?.join('')}
                                  </span>
                                </div>
                                <div>
                                  <div className="font-medium text-foreground">{testimonial?.author}</div>
                                  <div className="text-sm text-muted-foreground">{testimonial?.role}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;