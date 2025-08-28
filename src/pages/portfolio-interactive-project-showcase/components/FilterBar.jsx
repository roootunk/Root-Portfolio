import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterBar = ({ 
  categories, 
  technologies, 
  selectedCategory, 
  selectedTech, 
  searchQuery,
  onCategoryChange, 
  onTechChange, 
  onSearchChange,
  onClearFilters,
  projectCount 
}) => {
  const hasActiveFilters = selectedCategory !== 'all' || selectedTech !== 'all' || searchQuery?.trim() !== '';

  return (
    <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Icon 
          name="Search" 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
        />
        <input
          type="text"
          placeholder="Buscar projetos por nome, descrição ou tecnologia..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <Icon name="X" size={16} />
          </button>
        )}
      </div>
      {/* Filter Categories */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Category Filter */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3 flex items-center">
            <Icon name="Folder" size={16} className="mr-2 text-primary" />
            Categoria
          </h4>
          <div className="flex flex-wrap gap-2">
            {categories?.map((category) => (
              <motion.button
                key={category?.value}
                onClick={() => onCategoryChange(category?.value)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category?.value
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'bg-muted/20 text-muted-foreground hover:bg-muted/30 hover:text-foreground border border-muted/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category?.label}
                <span className="ml-2 text-xs opacity-75">({category?.count})</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Technology Filter */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3 flex items-center">
            <Icon name="Code" size={16} className="mr-2 text-primary" />
            Tecnologia
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies?.map((tech) => (
              <motion.button
                key={tech?.value}
                onClick={() => onTechChange(tech?.value)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedTech === tech?.value
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'bg-muted/20 text-muted-foreground hover:bg-muted/30 hover:text-foreground border border-muted/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech?.label}
                <span className="ml-2 text-xs opacity-75">({tech?.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      {/* Results Summary and Clear Filters */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Filter" size={16} />
          <span>
            {projectCount} projeto{projectCount !== 1 ? 's' : ''} encontrado{projectCount !== 1 ? 's' : ''}
          </span>
        </div>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            iconSize={14}
            className="text-muted-foreground hover:text-foreground"
          >
            Limpar Filtros
          </Button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;