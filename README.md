# 🚀 Root Portfolio - Portfólio Digital Interativo

> **Digital Craftsman | Full-Stack Developer | Software Engineer**

Um portfólio digital moderno e interativo desenvolvido com React, Vite e Tailwind CSS, apresentando projetos, habilidades técnicas e experiência profissional de forma elegante e responsiva.

![Portfolio Preview](https://i.imgur.com/LwxGM9F.png)

## ✨ Características Principais

### 🎯 **Design & UX**
- **Interface Moderna**: Design dark elegante com tema laranja personalizado
- **Responsivo**: Otimizado para todos os dispositivos e resoluções
- **Animações Suaves**: Transições e efeitos visuais com Framer Motion
- **Terminal Interativo**: Simulação de terminal com comandos reais
- **Navegação Intuitiva**: Menu de navegação fixo com scroll suave

### 🛠️ **Funcionalidades Técnicas**
- **Terminal Animado**: Comandos interativos que alternam automaticamente
- **Showcase de Projetos**: Apresentação dinâmica dos projetos principais
- **Matriz de Habilidades**: Visualização interativa das competências técnicas
- **Seção de Testimonials**: Depoimentos de clientes e colegas
- **Formulário de Contato**: Sistema de contato funcional
- **Portfólio Interativo**: Página dedicada com filtros e modal de detalhes

### 📱 **PWA Ready**
- **Instalação como App**: Manifest.json configurado
- **Offline Support**: Estrutura preparada para cache
- **Ícones Personalizados**: Favicon e ícones do PWA
- **Meta Tags SEO**: Otimização para motores de busca

## 🚀 Tecnologias Utilizadas

### **Frontend**
- ![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react) React 18.2.0
- ![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?logo=vite) Vite 5.0.0
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.6-38B2AC?logo=tailwind-css) Tailwind CSS 3.4.6
- ![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.4-0055FF?logo=framer) Framer Motion 10.16.4

### **UI Components**
- ![Radix UI](https://img.shields.io/badge/Radix_UI-1.2.3-161618) Radix UI Components
- ![Lucide React](https://img.shields.io/badge/Lucide_React-0.484.0-000000?logo=lucide) Lucide React Icons
- ![Class Variance Authority](https://img.shields.io/badge/CVA-0.7.1-000000) Class Variance Authority

### **Ferramentas de Desenvolvimento**
- ![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?logo=typescript) TypeScript Support
- ![PostCSS](https://img.shields.io/badge/PostCSS-8.4.8-DD3A0A?logo=postcss) PostCSS
- ![ESLint](https://img.shields.io/badge/ESLint-Config-4B32C3?logo=eslint) ESLint Configuration

## 📁 Estrutura do Projeto

```
root_portfolio/
├── public/
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/           # Componentes base (Button, Input, etc.)
│   │   ├── AppIcon.jsx   # Sistema de ícones
│   │   └── AppImage.jsx  # Componente de imagem otimizado
│   ├── pages/
│   │   ├── homepage-animated-developer-portal/     # Página principal
│   │   │   ├── components/
│   │   │   │   ├── HeroSection.jsx        # Terminal interativo
│   │   │   │   ├── ProjectShowcase.jsx    # Projetos em destaque
│   │   │   │   ├── SkillsMatrix.jsx       # Matriz de habilidades
│   │   │   │   ├── TestimonialsSection.jsx # Depoimentos
│   │   │   │   ├── ContactSection.jsx     # Formulário de contato
│   │   │   │   └── Footer.jsx             # Rodapé
│   │   │   └── index.jsx
│   │   └── portfolio-interactive-project-showcase/ # Portfólio detalhado
│   │       ├── components/
│   │       │   ├── ProjectCard.jsx        # Card de projeto
│   │       │   ├── ProjectModal.jsx       # Modal de detalhes
│   │       │   ├── FilterBar.jsx          # Filtros de busca
│   │       │   ├── StatsOverview.jsx      # Estatísticas
│   │       │   └── TechStackGrid.jsx      # Grid de tecnologias
│   │       └── index.jsx
│   ├── styles/
│   │   ├── tailwind.css   # Configuração do Tailwind
│   │   └── index.css      # Estilos globais
│   ├── utils/
│   │   └── cn.js          # Utilitário para classes CSS
│   ├── App.jsx            # Componente principal
│   ├── Routes.jsx         # Configuração de rotas
│   └── index.jsx          # Ponto de entrada
├── package.json
├── tailwind.config.js
├── vite.config.mjs
└── README.md
```

## 🎨 Componentes Principais

### **HeroSection.jsx**
- Terminal interativo com comandos reais
- Animações de digitação
- Comandos que alternam automaticamente
- Design responsivo e moderno

### **ProjectShowcase.jsx**
- Apresentação dos projetos principais
- Carrossel automático de projetos
- Informações técnicas e links
- Status e métricas dos projetos

### **SkillsMatrix.jsx**
- Visualização interativa das habilidades
- Categorização por área técnica
- Animações e transições suaves
- Design responsivo

### **Portfólio Interativo**
- Filtros por categoria e tecnologia
- Modal detalhado de cada projeto
- Galeria de imagens
- Métricas e informações técnicas

## 🚀 Como Executar

### **Pré-requisitos**
- Node.js 18+ 
- npm ou yarn

### **Instalação**
```bash
# Clone o repositório
git clone https://github.com/roootunk/root-portfolio.git

# Entre no diretório
cd root-portfolio

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm start

# Build para produção
npm run build

# Preview da build
npm run serve
```

### **Scripts Disponíveis**
```json
{
  "start": "vite",           // Servidor de desenvolvimento
  "build": "vite build",     // Build para produção
  "serve": "vite preview"    // Preview da build
}
```

## 🌐 Deploy

### **Netlify (Recomendado)**
1. Conecte seu repositório GitHub
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`
4. Deploy automático a cada push

### **Vercel**
1. Importe o projeto do GitHub
2. Framework preset: Vite
3. Deploy automático configurado

### **GitHub Pages**
1. Configure o workflow de GitHub Actions
2. Build e deploy automático
3. Disponível em: `https://roootunk.github.io/root-portfolio`

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Touch Friendly**: Interações otimizadas para touch
- **Performance**: Lazy loading e otimizações de imagem

## 🎯 SEO & Performance

### **Meta Tags**
- Open Graph para redes sociais
- Twitter Cards
- Schema.org para dados estruturados
- Meta description otimizada

### **Performance**
- Vite para build rápido
- Code splitting automático
- Lazy loading de componentes
- Otimização de imagens

## 🔧 Configuração

### **Variáveis de Ambiente**
```bash
# .env (opcional)
VITE_APP_TITLE=Root Portfolio
VITE_APP_DESCRIPTION=Portfolio digital interativo
```

### **Personalização**
- Cores no arquivo `tailwind.config.js`
- Componentes em `src/components/ui/`
- Estilos globais em `src/styles/`

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email**: contato@rootunk.xyz
- **GitHub**: [@roootunk](https://github.com/roootunk)
- **LinkedIn**: [Kaio Silva](https://linkedin.com/in/kaiosilva)
- **Instagram**: [@kaio.engineer](https://www.instagram.com/kaio.engineer/)
- **Website**: [rootunk.xyz](https://rootunk.xyz)

## 🙏 Agradecimentos

- Comunidade React e Vite
- Tailwind CSS por um framework CSS incrível
- Framer Motion por animações suaves
- Todos os contribuidores e testadores

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela! ⭐**

*Desenvolvido com ❤️ por [Kaio Silva](https://github.com/roootunk)*

</div>
