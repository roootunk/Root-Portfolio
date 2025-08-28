import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import axios from 'axios';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact-section');
    if (element) observer?.observe(element);

    return () => observer?.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Discord webhook integration
  const sendToDiscord = async (data) => {
    const webhookUrl = 'https://discord.com/api/webhooks/1410695359600005223/BqlPLstC8YUApE-Fx-FFzb1E6PNdsTYguPJyNlsUuzv9DjlT7HCOnpOajxVMNPhR4b4v';
    
    const embed = {
      title: '📩 Nova Mensagem do Portfolio',
      description: 'Alguém entrou em contato através do site!',
      color: 16741429, // Orange color in decimal
      fields: [
        {
          name: '👤 Nome',
          value: data?.name || 'Não informado',
          inline: true
        },
        {
          name: '📧 Email',
          value: data?.email || 'Não informado',
          inline: true
        },
        {
          name: '🏢 Empresa',
          value: data?.company || 'Não informada',
          inline: true
        },
        {
          name: '💬 Mensagem',
          value: data?.message || 'Sem mensagem',
          inline: false
        }
      ],
      footer: {
        text: 'Portfolio - Kaio Silva',
        icon_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      timestamp: new Date()?.toISOString()
    };

    try {
      await axios?.post(webhookUrl, {
        username: 'Portfolio Bot',
        embeds: [embed]
      });
      return true;
    } catch (error) {
      console.error('Erro ao enviar para Discord:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });
    
    try {
      // Send to Discord webhook
      const success = await sendToDiscord(formData);
      
      if (success) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
        setSubmitStatus({
          type: 'success',
          message: '✅ Mensagem enviada com sucesso! Retornarei em breve.'
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: '❌ Erro ao enviar mensagem. Tente novamente.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: '❌ Erro inesperado. Tente novamente mais tarde.'
      });
    }
    
    setIsSubmitting(false);
    
    // Clear status message after 5 seconds
    setTimeout(() => {
      setSubmitStatus({ type: '', message: '' });
    }, 5000);
  };

  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
              value: 'contato@rootunk.xyz',
      description: 'Respondo em até 24 horas',
      action: 'mailto:contato@rootunk.xyz'
    },
    {
      icon: 'Phone',
      title: 'WhatsApp',
      value: '+55 (11) 98606-3429',
      description: '3 anos de experiência',
      action: 'https://wa.me/5511986063429'
    },
    {
      icon: 'MapPin',
      title: 'Localização',
      value: 'São Paulo, SP',
      description: 'Disponível para remoto',
      action: '#'
    },
    {
      icon: 'Calendar',
      title: 'Agenda',
      value: 'Agendar reunião',
      description: 'Calendly ou Google Meet',
      action: '#'
    }
  ];

  const socialLinks = [
    { icon: 'Github', url: 'https://github.com/roootunk', label: 'GitHub' },
    { icon: 'Linkedin', url: 'https://linkedin.com/in/kaiosilva', label: 'LinkedIn' },
    { icon: 'Twitter', url: 'https://twitter.com/kaiosilva', label: 'Twitter' },
    { icon: 'Instagram', url: 'https://www.instagram.com/kaio.engineer/', label: 'Instagram' }
  ];

  return (
    <section id="contact-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'fade-in-up visible' : 'fade-in-up'
        }`}>
          <div className="text-primary font-mono text-sm mb-4">
            // Vamos trabalhar juntos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Entre em</span>
            <span className="text-primary orange-glow"> Contato</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pronto para transformar suas ideias em realidade? Vamos conversar sobre seu próximo projeto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'slide-in-left visible' : 'slide-in-left'
          }`}>
            <div className="bg-surface border border-border rounded-lg p-8 shadow-glow">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Envie uma mensagem
                </h3>
                <p className="text-muted-foreground">
                  Preencha o formulário e retornarei em breve
                </p>
              </div>

              {/* Status Message */}
              {submitStatus?.message && (
                <div className={`mb-6 p-4 rounded-lg border ${
                  submitStatus?.type === 'success' ?'bg-success/10 border-success/20 text-success' :'bg-error/10 border-error/20 text-error'
                } fade-in-up visible`}>
                  {submitStatus?.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Nome completo"
                    type="text"
                    name="name"
                    value={formData?.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    required
                  />
                  
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <Input
                  label="Empresa (opcional)"
                  type="text"
                  name="company"
                  value={formData?.company}
                  onChange={handleInputChange}
                  placeholder="Nome da empresa"
                />

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData?.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Conte-me sobre seu projeto..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  className="glow-hover"
                  iconName="Send"
                  iconPosition="right"
                  iconSize={18}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-600 ${
            isVisible ? 'slide-in-right visible' : 'slide-in-right'
          }`}>
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Outras formas de contato
              </h3>
              
              {contactMethods?.map((method, index) => (
                <a
                  key={method?.title}
                  href={method?.action}
                  className={`flex items-center space-x-4 p-4 bg-surface/50 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 glow-hover group fade-in-stagger ${
                    isVisible ? 'visible' : ''
                  }`}
                  style={{ animationDelay: `${(index * 100) + 800}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon name={method?.icon} size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{method?.title}</div>
                    <div className="text-primary text-sm">{method?.value}</div>
                    <div className="text-muted-foreground text-xs">{method?.description}</div>
                  </div>
                  <Icon name="ExternalLink" size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className={`bg-success/10 border border-success/20 rounded-lg p-6 scale-bounce ${
              isVisible ? 'visible' : ''
            }`} style={{ animationDelay: '1200ms' }}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-success rounded-full pulse-orange"></div>
                <h4 className="font-semibold text-success">Status: Disponível</h4>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Atualmente aceitando novos projetos para início em Janeiro 2025
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} className="text-success" />
                  <span className="text-muted-foreground">Resposta em até 24h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Globe" size={14} className="text-success" />
                  <span className="text-muted-foreground">Trabalho remoto ou presencial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={14} className="text-success" />
                  <span className="text-muted-foreground">Projetos individuais ou em equipe</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={`rotate-fade ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '1400ms' }}>
              <h4 className="font-semibold text-foreground mb-4">Redes sociais</h4>
              <div className="flex space-x-4">
                {socialLinks?.map((social, index) => (
                  <a
                    key={social?.label}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-surface border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 glow-hover group scale-bounce ${
                      isVisible ? 'visible' : ''
                    }`}
                    style={{ animationDelay: `${1600 + (index * 100)}ms` }}
                    aria-label={social?.label}
                  >
                    <Icon 
                      name={social?.icon} 
                      size={20} 
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-300" 
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;