import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechStackGrid = ({ techStacks }) => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Stack <span className="text-primary">Tecnológico</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tecnologias e ferramentas que domino para criar soluções robustas e escaláveis
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {techStacks?.map((tech, index) => (
          <motion.div
            key={index}
            className="group relative p-4 bg-surface/50 backdrop-blur-sm border border-border rounded-xl text-center glow-hover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -4, scale: 1.05 }}
          >
            <div className="relative">
              {/* Tech Icon/Logo */}
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                <Icon 
                  name={tech?.icon} 
                  size={24} 
                  className="text-primary group-hover:text-secondary transition-colors duration-300" 
                />
              </div>
              
              {/* Tech Name */}
              <h3 className="font-medium text-foreground text-sm mb-1 group-hover:text-primary transition-colors duration-300">
                {tech?.name}
              </h3>
              
              {/* Experience Level */}
              <div className="flex justify-center mb-2">
                {[...Array(5)]?.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full mx-0.5 ${
                      i < tech?.level 
                        ? 'bg-primary group-hover:bg-secondary' :'bg-muted/30'
                    } transition-colors duration-300`}
                  />
                ))}
              </div>
              
              {/* Project Count */}
              <p className="text-xs text-muted-foreground">
                {tech?.projectCount} projeto{tech?.projectCount !== 1 ? 's' : ''}
              </p>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl border border-primary/50 opacity-0 pointer-events-none"
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)'
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStackGrid;