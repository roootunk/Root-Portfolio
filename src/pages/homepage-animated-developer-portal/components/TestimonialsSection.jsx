import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Shacall",
      role: "Senior Developer",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: `Kaio é simplesmente incrível! Sua habilidade de resolver problemas complexos\ne transformar ideias em código funcional é impressionante.\nTrabalhar com ele foi uma experiência que mudou minha perspectiva sobre desenvolvimento.`,
      rating: 5,
      project: "Sistema de Automação"
    },
    {
      id: 2,
      name: "Bruno",
      role: "Tech Lead",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `O Kaio tem uma abordagem única para arquitetura de software.\nSua capacidade de pensar em escalabilidade desde o início\ne implementar soluções elegantes é algo que raramente vejo.`,
      rating: 5,
      project: "Plataforma de Microserviços"
    },
    {
      id: 3,
      name: "Darlan Tallison",
      role: "CTO",
      company: "Digital Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `Kaio é um desenvolvedor que realmente entende o negócio.\nEle não apenas escreve código, mas cria soluções que\ngeram valor real para os usuários finais. Um profissional excepcional.`,
      rating: 5,
      project: "Sistema de Analytics"
    },
    {
      id: 4,
      name: "Dilma Paula",
      role: "Product Manager",
      company: "FutureTech",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `Trabalhar com o Kaio foi uma experiência transformadora.\nSua criatividade técnica e atenção aos detalhes\nresultaram em um produto que superou todas as expectativas.`,
      rating: 5,
      project: "Aplicação Mobile"
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

    const element = document.getElementById('testimonials-section');
    if (element) observer?.observe(element);

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const currentReview = testimonials?.[currentTestimonial];

  return (
    <section id="testimonials-section" className="py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-primary font-mono text-sm mb-4">
            // Feedback da comunidade
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">O que dizem</span>
            <span className="text-primary orange-glow"> sobre mim</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Depoimentos de colegas e clientes que trabalharam comigo em projetos reais
          </p>
        </div>

        {/* Main Testimonial */}
        <div className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-surface border border-border rounded-lg p-8 md:p-12 shadow-glow">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
                <Icon name="Quote" size={24} className="text-primary" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8">
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 whitespace-pre-line">
                "{currentReview?.content}"
              </blockquote>

              {/* Rating Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(currentReview?.rating)]?.map((_, index) => (
                  <Icon
                    key={index}
                    name="Star"
                    size={20}
                    className="text-warning fill-current"
                  />
                ))}
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="relative">
                <Image
                  src={currentReview?.avatar}
                  alt={currentReview?.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success border-2 border-surface rounded-full flex items-center justify-center">
                  <Icon name="Check" size={12} className="text-background" />
                </div>
              </div>
              
              <div className="text-left">
                <div className="font-semibold text-foreground">{currentReview?.name}</div>
                <div className="text-muted-foreground text-sm">
                  {currentReview?.role} • {currentReview?.company}
                </div>
                <div className="text-primary text-xs font-medium">
                  Projeto: {currentReview?.project}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className={`flex items-center justify-center space-x-4 mb-12 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {testimonials?.map((testimonial, index) => (
            <button
              key={testimonial?.id}
              onClick={() => setCurrentTestimonial(index)}
              className={`relative transition-all duration-300 ${
                index === currentTestimonial ? 'scale-110' : 'hover:scale-105'
              }`}
              aria-label={`Ver depoimento de ${testimonial?.name}`}
            >
              <Image
                src={testimonial?.avatar}
                alt={testimonial?.name}
                className={`w-12 h-12 rounded-full object-cover border-2 transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'border-primary shadow-glow'
                    : 'border-border hover:border-primary/50'
                }`}
              />
              {index === currentTestimonial && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full pulse-orange"></div>
              )}
            </button>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { 
              icon: 'Users', 
              value: '25+', 
              label: 'Clientes Satisfeitos',
              color: 'text-success'
            },
            { 
              icon: 'Star', 
              value: '4.9', 
              label: 'Avaliação Média',
              color: 'text-warning'
            },
            { 
              icon: 'Briefcase', 
              value: '50+', 
              label: 'Projetos Entregues',
              color: 'text-primary'
            },
            { 
              icon: 'Award', 
              value: '100%', 
              label: 'Taxa de Sucesso',
              color: 'text-secondary'
            }
          ]?.map((stat, index) => (
            <div
              key={stat?.label}
              className="text-center p-6 bg-background/50 border border-border rounded-lg hover:border-primary/30 transition-all duration-300"
            >
              <Icon 
                name={stat?.icon} 
                size={24} 
                className={`${stat?.color} mx-auto mb-3`} 
              />
              <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
              <div className="text-sm text-muted-foreground">{stat?.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;