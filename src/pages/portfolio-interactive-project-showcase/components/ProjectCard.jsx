import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails, onViewDemo, onViewCode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-surface border border-border rounded-xl overflow-hidden glow-hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project?.status === 'live' ?'bg-success/20 text-success border border-success/30' 
              : project?.status === 'development' ?'bg-warning/20 text-warning border border-warning/30' :'bg-muted/20 text-muted-foreground border border-muted/30'
          }`}>
            {project?.status === 'live' && <Icon name="Globe" size={12} className="inline mr-1" />}
            {project?.status === 'development' && <Icon name="Code" size={12} className="inline mr-1" />}
            {project?.status === 'archived' && <Icon name="Archive" size={12} className="inline mr-1" />}
            {project?.status?.charAt(0)?.toUpperCase() + project?.status?.slice(1)}
          </span>
        </div>

        {/* Quick Actions */}
        <motion.div
          className="absolute top-4 right-4 flex space-x-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
          transition={{ duration: 0.2 }}
        >
          {project?.demoUrl && (
            <button
              onClick={() => onViewDemo(project)}
              className="p-2 bg-background/80 backdrop-blur-sm rounded-lg border border-border hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
              title="View Live Demo"
            >
              <Icon name="ExternalLink" size={16} className="text-primary" />
            </button>
          )}
          {project?.githubUrl && (
            <button
              onClick={() => onViewCode(project)}
              className="p-2 bg-background/80 backdrop-blur-sm rounded-lg border border-border hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
              title="View Source Code"
            >
              <Icon name="Github" size={16} className="text-primary" />
            </button>
          )}
        </motion.div>
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Title and Category */}
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
            {project?.title}
          </h3>
          <p className="text-sm text-primary font-medium">{project?.category}</p>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project?.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies?.slice(0, 4)?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted/20 text-muted-foreground text-xs rounded-md border border-muted/30"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 4 && (
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/30">
              +{project?.technologies?.length - 4} mais
            </span>
          )}
        </div>

        {/* Metrics */}
        {project?.metrics && (
          <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-muted/10 rounded-lg border border-muted/20">
            {project?.metrics?.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-semibold text-primary">{metric?.value}</div>
                <div className="text-xs text-muted-foreground">{metric?.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(project)}
            iconName="Eye"
            iconPosition="left"
            iconSize={14}
            className="flex-1"
          >
            Detalhes
          </Button>
          {project?.demoUrl && (
            <Button
              variant="default"
              size="sm"
              onClick={() => onViewDemo(project)}
              iconName="Play"
              iconPosition="left"
              iconSize={14}
              className="flex-1"
            >
              Demo
            </Button>
          )}
        </div>
      </div>
      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-primary/30 opacity-0 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: isHovered ? '0 0 30px rgba(255, 107, 53, 0.3)' : 'none'
        }}
      />
    </motion.div>
  );
};

export default ProjectCard;