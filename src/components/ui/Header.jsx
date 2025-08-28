import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme toggle functionality
  useEffect(() => {
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement?.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement?.setAttribute('data-theme', newTheme);
  };

  const navigationItems = [
    {
      name: 'Home',
      path: '/homepage-animated-developer-portal',
      icon: 'Home'
    },
    {
      name: 'Portfolio',
      path: '/portfolio-interactive-project-showcase',
      icon: 'Briefcase'
    },
    {
      name: 'About',
      path: '/about',
      icon: 'User'
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: 'Mail'
    }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-glow' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage-animated-developer-portal" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-glow group-hover:shadow-glow-intense transition-all duration-300">
                <span className="text-background font-mono font-bold text-lg">R</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full pulse-orange"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-mono font-bold text-lg text-foreground group-hover:text-glow transition-all duration-300">
                root@unk
              </h1>
              <p className="text-xs text-muted-foreground font-sans">
                Digital Craftsman
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  isActivePath(item?.path)
                    ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-surface'
                }`}
              >
                <Icon 
                  name={item?.icon} 
                  size={18} 
                  className={`transition-all duration-300 ${
                    isActivePath(item?.path) 
                      ? 'text-primary' :'group-hover:text-primary'
                  }`}
                />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface transition-all duration-300 glow-hover"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <Icon 
                name={theme === 'dark' ? 'Sun' : 'Moon'} 
                size={20} 
                className="transition-transform duration-300 hover:rotate-180"
              />
            </button>

            {/* Availability Status */}
            <div className="hidden md:flex items-center space-x-2 px-3 py-1 bg-success/10 border border-success/20 rounded-full">
              <div className="w-2 h-2 bg-success rounded-full pulse-orange"></div>
              <span className="text-xs font-medium text-success">Available</span>
            </div>

            {/* Primary CTA */}
            <div className="hidden sm:block">
              <Button
                variant="default"
                size="sm"
                className="glow-hover perspective-hover"
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={16}
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface transition-all duration-300"
              aria-label="Toggle menu"
            >
              <Icon 
                name={isMenuOpen ? 'X' : 'Menu'} 
                size={24} 
                className="transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 border-b border-border' :'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-surface/95 backdrop-blur-md">
            <nav className="px-6 py-4 space-y-2">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 text-muted-foreground hover:text-foreground hover:bg-background/50"
              >
                <Icon 
                  name={theme === 'dark' ? 'Sun' : 'Moon'} 
                  size={20}
                />
                <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
              </button>

              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActivePath(item?.path)
                      ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-background/50'
                  }`}
                >
                  <Icon 
                    name={item?.icon} 
                    size={20} 
                    className={isActivePath(item?.path) ? 'text-primary' : ''}
                  />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {/* Mobile Availability Status */}
              <div className="flex items-center justify-between px-4 py-3 mt-4 bg-success/10 border border-success/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full pulse-orange"></div>
                  <span className="text-sm font-medium text-success">Available for Projects</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="px-4 pt-2">
                <Button
                  variant="default"
                  size="default"
                  fullWidth
                  className="glow-hover"
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={closeMenu}
                >
                  Let's Talk
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;