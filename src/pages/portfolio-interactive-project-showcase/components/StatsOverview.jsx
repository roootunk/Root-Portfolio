import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ stats }) => {
  const statItems = [
    {
      icon: 'Briefcase',
      label: 'Projetos Concluídos',
      value: stats?.completedProjects,
      color: 'text-primary'
    },
    {
      icon: 'Code',
      label: 'Linhas de Código',
      value: stats?.linesOfCode,
      color: 'text-success'
    },
    {
      icon: 'Users',
      label: 'Clientes Satisfeitos',
      value: stats?.happyClients,
      color: 'text-warning'
    },
    {
      icon: 'Award',
      label: 'Anos de Experiência',
      value: stats?.yearsExperience,
      color: 'text-secondary'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {statItems?.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center p-6 bg-surface/50 backdrop-blur-sm border border-border rounded-xl glow-hover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -4 }}
        >
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 mb-4`}>
            <Icon name={stat?.icon} size={24} className={stat?.color} />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
          <div className="text-sm text-muted-foreground">{stat?.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsOverview;