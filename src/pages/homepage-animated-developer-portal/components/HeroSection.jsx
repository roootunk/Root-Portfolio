import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentCommand, setCurrentCommand] = useState(0);
  const [showResponse, setShowResponse] = useState(false);

  const commands = [
    { command: 'whoami', response: 'Digital Craftsman | Software Engineer | Full-Stack Developer' },
    { command: 'pwd', response: '/home/unk/portfolio' },
    { command: 'ls -la', response: 'total 42\ndrwxr-xr-x  .git\n-rw-r--r--  package.json\n-rw-r--r--  README.md\ndrwxr-xr-x  src/\ndrwxr-xr-x  public/' },
    { command: 'cat skills.txt', response: 'React • Node.js • TypeScript • Python • AWS • Docker • Kubernetes' },
    { command: 'git status', response: 'On branch main\nYour branch is up to date with origin/main.\nAll changes committed.' }
  ];

  const fullText = `root@unk:~/portfolio$ ${commands[currentCommand]?.command}`;
  const response = commands[currentCommand]?.response;

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation for command
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText?.length) {
        setCurrentText(fullText?.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setShowCursor(false);
          setShowResponse(true);
        }, 500);
      }
    }, 100);

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, [fullText]);

  // Auto-advance commands
  useEffect(() => {
    const commandInterval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % commands?.length);
      setCurrentText('');
      setShowCursor(true);
      setShowResponse(false);
    }, 8000);

    return () => clearInterval(commandInterval);
  }, [commands?.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 107, 53, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/20 font-mono text-sm animate-pulse">
          {'{ "status": "available" }'}
        </div>
        <div className="absolute top-40 right-20 text-secondary/20 font-mono text-sm animate-pulse delay-1000">
          console.log('Hello World');
        </div>
        <div className="absolute bottom-40 left-20 text-accent/20 font-mono text-sm animate-pulse delay-2000">
          npm run dev
        </div>
        <div className="absolute bottom-20 right-10 text-primary/20 font-mono text-sm animate-pulse delay-500">
          git commit -m "feat: new feature"
        </div>
      </div>
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Terminal Window */}
        <div className={`bg-surface border border-border rounded-lg shadow-glow mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-error rounded-full"></div>
              <div className="w-3 h-3 bg-warning rounded-full"></div>
              <div className="w-3 h-3 bg-success rounded-full"></div>
            </div>
            <div className="text-muted-foreground text-sm font-mono">
              root@unk:~/portfolio
            </div>
            <div className="w-16"></div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-left">
            <div className="text-success mb-2">
              <span className="text-primary">root@unk</span>
              <span className="text-foreground">:</span>
              <span className="text-secondary">~/portfolio</span>
              <span className="text-foreground">$ {currentText}</span>
              {showCursor && <span className="text-primary animate-pulse">|</span>}
            </div>
            
            {!showCursor && showResponse && (
              <div className="text-foreground blur-text-animation">
                {response}
              </div>
            )}
          </div>
        </div>

        {/* Main Heading */}
        <div className={`mb-8 transition-all duration-1500 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-6xl md:text-8xl font-mono font-bold mb-4">
            <span className="text-foreground">Kaio</span>
            <span className="text-primary orange-glow"> Silva</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground font-sans mb-6">
            Transformando ideias em código, código em soluções
          </div>
        </div>

        {/* Status Indicator */}
        <div className={`flex items-center justify-center mb-8 transition-all duration-1500 delay-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center space-x-3 px-6 py-3 bg-success/10 border border-success/20 rounded-full">
            <div className="w-3 h-3 bg-success rounded-full pulse-orange"></div>
            <span className="text-success font-medium">Disponível para projetos</span>
            <Icon name="Zap" size={16} className="text-success" />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1500 delay-2000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Button
            variant="default"
            size="lg"
            className="glow-hover perspective-hover"
            iconName="Code"
            iconPosition="left"
            iconSize={20}
          >
            Ver Projetos
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="glow-hover"
            iconName="MessageCircle"
            iconPosition="left"
            iconSize={20}
          >
            Vamos Conversar
          </Button>
        </div>

        {/* Tech Stack Preview */}
        <div className={`transition-all duration-1500 delay-2500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-muted-foreground text-sm mb-4 font-mono">
            // Principais tecnologias
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { name: 'React', icon: 'Code' },
              { name: 'Node.js', icon: 'Server' },
              { name: 'TypeScript', icon: 'FileCode' },
              { name: 'Python', icon: 'Terminal' },
              { name: 'AWS', icon: 'Cloud' },
              { name: 'Docker', icon: 'Package' }
            ]?.map((tech, index) => (
              <div
                key={tech?.name}
                className="flex items-center space-x-2 px-4 py-2 bg-surface/50 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 glow-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon name={tech?.icon} size={18} className="text-primary" />
                <span className="text-foreground font-medium">{tech?.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;