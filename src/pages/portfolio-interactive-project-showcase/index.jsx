import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import FilterBar from './components/FilterBar';
import ProjectModal from './components/ProjectModal';
import StatsOverview from './components/StatsOverview';
import TechStackGrid from './components/TechStackGrid';

const PortfolioInteractiveProjectShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  // Mock data for projects
  const projects = [
    {
      id: 1,
      title: "substore.org",
      category: "Web Application",
      description: "Plataforma de gerenciamento de assinaturas e serviços digitais com interface moderna e sistema de notificações inteligentes.",
      fullDescription: `Uma solução completa para gerenciamento de assinaturas e serviços digitais, desenvolvida para usuários que possuem múltiplas assinaturas online. A plataforma oferece controle centralizado, alertas de renovação, análise de gastos e otimização de custos.\n\nO projeto foi desenvolvido com foco na simplicidade de uso, organização visual e funcionalidades que realmente fazem diferença no dia a dia dos usuários.`,
      image: "https://i.imgur.com/DRqxbVM.png",
      gallery: [
        "https://i.imgur.com/DRqxbVM.png",
        "https://i.imgur.com/DRqxbVM.png",
        "https://i.imgur.com/DRqxbVM.png"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Docker"],
      status: "live",
      duration: "6 meses",
      team: "4 desenvolvedores",
      demoUrl: "https://substore.org",
      githubUrl: "https://github.com/roootunk/substore",
      metrics: [
        { label: "Conversão", value: "+45%" },
        { label: "Performance", value: "98/100" },
        { label: "Usuários", value: "10k+" },
        { label: "Vendas", value: "R$ 2M+" }
      ],
      architecture: `A arquitetura do sistema foi projetada seguindo os princípios de microserviços, com separação clara entre frontend e backend. Utilizamos React para a interface do usuário, Node.js com Express para a API REST, MongoDB como banco de dados principal e Redis para cache. A infraestrutura está hospedada na AWS utilizando containers Docker orquestrados com Kubernetes.`,
      features: [
        "Sistema de autenticação e autorização JWT",
        "Processamento de pagamentos com Stripe",
        "Gestão de inventário em tempo real",
        "Sistema de recomendações com IA",
        "Painel administrativo completo",
        "Analytics e relatórios detalhados",
        "API RESTful documentada",
        "Testes automatizados (95% cobertura)"
      ],
      challenges: [
        {
          title: "Escalabilidade do Sistema de Pagamentos",
          description: "O sistema precisava processar milhares de transações simultâneas durante picos de tráfego.",
          solution: "Implementamos uma arquitetura de filas com Redis e processamento assíncrono, além de load balancing para distribuir a carga entre múltiplas instâncias."
        },
        {
          title: "Performance da Interface",
          description: "A aplicação estava lenta com grandes volumes de produtos e imagens.",
          solution: "Otimizamos com lazy loading, virtualização de listas, compressão de imagens e implementamos CDN para assets estáticos."
        }
      ],
      testimonials: [
        {
          author: "Maria Silva",
          role: "CEO, TechStore",
          content: "A plataforma revolucionou nosso negócio. Aumentamos as vendas em 200% no primeiro ano."
        }
      ],
      codeSnippet: `// Sistema de processamento de pagamentos
const processPayment = async (paymentData) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: paymentData.amount,
      currency: 'brl',
      metadata: { orderId: paymentData.orderId }
    });
    
    await updateOrderStatus(paymentData.orderId, 'processing');
    return { success: true, clientSecret: paymentIntent.client_secret };
  } catch (error) {
    logger.error('Payment processing failed:', error);
    throw new PaymentError('Falha no processamento do pagamento');
  }
};`
    },
    {
      id: 2,
      title: "necrum.store",
      category: "E-commerce",
      description: "E-commerce especializado em produtos únicos e exclusivos com design dark elegante e sistema de busca avançada.",
      fullDescription: `Uma plataforma de e-commerce especializada em produtos únicos e exclusivos, desenvolvida com Next.js e TypeScript. O design dark e elegante oferece uma experiência premium, com foco na qualidade visual e funcionalidades avançadas de busca e categorização.\n\nO projeto foi desenvolvido com foco na performance, SEO otimizado e experiência do usuário excepcional, utilizando as melhores práticas de desenvolvimento web moderno.`,
      image: "https://i.imgur.com/0ud1MnQ.png",
      gallery: [
        "https://i.imgur.com/0ud1MnQ.png",
        "https://i.imgur.com/0ud1MnQ.png",
        "https://i.imgur.com/0ud1MnQ.png"
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Vercel"],
      status: "live",
      duration: "4 meses",
      team: "3 desenvolvedores",
      demoUrl: "https://necrum.store",
      githubUrl: "https://github.com/roootunk/necrum-store",
      metrics: [
        { label: "Downloads", value: "50k+" },
        { label: "Rating", value: "4.8/5" },
        { label: "Retenção", value: "85%" },
        { label: "DAU", value: "15k" }
      ],
      architecture: `Arquitetura mobile-first utilizando React Native com TypeScript para type safety. Firebase como backend-as-a-service para autenticação, banco de dados em tempo real e notificações push. Redux para gerenciamento de estado global e Expo para facilitar o desenvolvimento e deployment.`,
      features: [
        "Sincronização em tempo real",
        "Colaboração em equipe",
        "Notificações push inteligentes",
        "Analytics de produtividade",
        "Modo offline",
        "Integração com calendário",
        "Temas personalizáveis",
        "Backup automático"
      ],
      challenges: [
        {
          title: "Sincronização Offline/Online",
          description: "Manter consistência de dados quando o usuário trabalha offline e depois sincroniza.",
          solution: "Implementamos um sistema de conflict resolution com timestamps e merge strategies inteligentes."
        }
      ],
      testimonials: [
        {
          author: "João Santos",
          role: "Product Manager, StartupXYZ",
          content: "O app transformou nossa produtividade. A interface é intuitiva e as funcionalidades são exatamente o que precisávamos."
        }
      ],
      codeSnippet: `// Hook para sincronização offline/online
const useSyncManager = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [pendingSync, setPendingSync] = useState([]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected);
      if (state.isConnected && pendingSync.length > 0) {
        syncPendingChanges();
      }
    });
    return unsubscribe;
  }, [pendingSync]);

  const syncPendingChanges = async () => {
    // Sync logic here
  };

  return { isOnline, addToPendingSync };
};`
    },
    {
      id: 3,
      title: "Ethereal",
      category: "Design Application",
      description: "Aplicação de design minimalista e elegante para criação de conteúdo com interface fluida e animações suaves.",
      fullDescription: `Uma aplicação de design minimalista e elegante, desenvolvida para criadores de conteúdo que valorizam simplicidade e funcionalidade. A interface fluida com animações suaves e transições responsivas oferece uma experiência de criação excepcional.\n\nO projeto foi desenvolvido com foco na produtividade, experiência visual e usabilidade, utilizando tecnologias modernas para criar uma ferramenta que inspira criatividade.`,
      image: "https://i.imgur.com/ApLnAhJ.png",
      gallery: [
        "https://i.imgur.com/ApLnAhJ.png",
        "https://i.imgur.com/ApLnAhJ.png",
        "https://i.imgur.com/ApLnAhJ.png"
      ],
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite", "Netlify"],
      status: "development",
      duration: "8 meses",
      team: "5 desenvolvedores",
      githubUrl: "https://github.com/roootunk/ethereal",
      metrics: [
        { label: "Dados/dia", value: "1TB+" },
        { label: "Usuários", value: "500+" },
        { label: "Relatórios", value: "10k+" },
        { label: "Uptime", value: "99.9%" }
      ],
      architecture: `Arquitetura de big data com pipeline de processamento em tempo real. Frontend em React com D3.js para visualizações, backend em Python com FastAPI, PostgreSQL para dados estruturados e Apache Kafka para streaming de dados. Toda a infraestrutura containerizada com Docker e orquestrada com Kubernetes.`,
      features: [
        "Visualizações interativas com D3.js",
        "Processamento de dados em tempo real",
        "Relatórios automatizados",
        "Alertas personalizáveis",
        "Export para múltiplos formatos",
        "API RESTful para integração",
        "Sistema de permissões granular",
        "Cache inteligente para performance"
      ],
      challenges: [
        {
          title: "Performance com Big Data",
          description: "Renderizar visualizações complexas com milhões de pontos de dados sem travar a interface.",
          solution: "Implementamos virtualização de dados, agregação inteligente e lazy loading para otimizar a performance."
        }
      ],
      testimonials: [
        {
          author: "Ana Costa",
          role: "Data Analyst, CorpTech",
          content: "O dashboard nos permitiu identificar padrões que não conseguíamos ver antes. A interface é intuitiva e as visualizações são muito claras."
        }
      ],
      codeSnippet: `// Componente de visualização otimizada
const OptimizedChart = memo(({ data, width, height }) => {
  const [aggregatedData, setAggregatedData] = useState([]);
  
  useEffect(() => {
    const worker = new Worker('/data-aggregator.js');
    worker.postMessage({ data, aggregationLevel: getAggregationLevel(data.length) });
    
    worker.onmessage = (e) => {
      setAggregatedData(e.data);
    };
    
    return () => worker.terminate();
  }, [data]);

  return (
    <svg width={width} height={height}>
      {aggregatedData.map(point => (
        <circle key={point.id} cx={point.x} cy={point.y} r={2} />
      ))}
    </svg>
  );
});`
    },
    {
      id: 4,
      title: "AI Chatbot Platform",
      category: "Artificial Intelligence",
      description: "Plataforma de chatbot inteligente com processamento de linguagem natural, integração multi-canal e analytics avançados.",
      fullDescription: `Uma plataforma completa para criação e gerenciamento de chatbots inteligentes, utilizando técnicas avançadas de processamento de linguagem natural e machine learning. A plataforma permite criar bots personalizados para diferentes canais de comunicação com analytics detalhados de performance.\n\nO projeto combina tecnologias de IA de ponta com uma interface intuitiva para usuários não-técnicos.`,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop"
      ],
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Redis"],
      status: "live",
      duration: "10 meses",
      team: "6 desenvolvedores",
      demoUrl: "https://chatbot-platform-demo.com",
      githubUrl: "https://github.com/roootunk/ai-chatbot-platform",
      metrics: [
        { label: "Precisão", value: "94%" },
        { label: "Bots Ativos", value: "1.2k" },
        { label: "Mensagens/dia", value: "100k+" },
        { label: "Satisfação", value: "4.7/5" }
      ],
      architecture: `Arquitetura de microserviços com separação entre engine de NLP, API de gerenciamento e interface web. Python com TensorFlow para modelos de IA, FastAPI para APIs, React para frontend e PostgreSQL para persistência. Redis para cache e sessões de chat.`,
      features: [
        "Processamento de linguagem natural avançado",
        "Treinamento de modelos personalizados",
        "Integração multi-canal (WhatsApp, Telegram, Web)",
        "Analytics e métricas detalhadas",
        "Interface drag-and-drop para criação de fluxos",
        "API RESTful para integrações",
        "Sistema de fallback para humanos",
        "Suporte a múltiplos idiomas"
      ],
      challenges: [
        {
          title: "Precisão do NLP em Português",
          description: "Melhorar a compreensão de contexto e intenções em português brasileiro.",
          solution: "Treinamos modelos específicos com datasets brasileiros e implementamos fine-tuning contínuo baseado em feedback dos usuários."
        }
      ],
      testimonials: [
        {
          author: "Carlos Oliveira",
          role: "CTO, ServiceBot",
          content: "A plataforma superou nossas expectativas. A precisão do NLP é impressionante e a interface é muito fácil de usar."
        }
      ],
      codeSnippet: `// Pipeline de processamento de NLP
class NLPPipeline:
    def __init__(self, model_path):
        self.tokenizer = AutoTokenizer.from_pretrained(model_path)
        self.model = AutoModel.from_pretrained(model_path)
        self.intent_classifier = IntentClassifier()
        
    async def process_message(self, message, context=None):
        # Tokenização e encoding
        inputs = self.tokenizer(message, return_tensors="pt")
        
        # Extração de features
        with torch.no_grad():
            outputs = self.model(**inputs)
            embeddings = outputs.last_hidden_state.mean(dim=1)
        
        # Classificação de intenção
        intent = await self.intent_classifier.predict(embeddings, context)
        
        return {
            "intent": intent,
            "confidence": intent.confidence,
            "entities": self.extract_entities(message)
        }`
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      category: "Blockchain",
      description: "Sistema de votação descentralizado baseado em blockchain com transparência total, segurança criptográfica e auditoria em tempo real.",
      fullDescription: `Um sistema revolucionário de votação eletrônica baseado em tecnologia blockchain, garantindo transparência, segurança e imutabilidade dos votos. O sistema permite votações descentralizadas com auditoria em tempo real e verificação independente dos resultados.\n\nO projeto utiliza smart contracts para garantir a integridade do processo e uma interface web intuitiva para facilitar a participação dos eleitores.`,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop"
      ],
      technologies: ["Solidity", "Web3.js", "React", "Node.js", "IPFS", "MetaMask"],
      status: "archived",
      duration: "7 meses",
      team: "4 desenvolvedores",
      githubUrl: "https://github.com/roootunk/blockchain-voting",
      metrics: [
        { label: "Transações", value: "50k+" },
        { label: "Uptime", value: "100%" },
        { label: "Gas Otimizado", value: "40%" },
        { label: "Auditoria", value: "Aprovada" }
      ],
      architecture: `Arquitetura descentralizada com smart contracts em Solidity na Ethereum, frontend em React com Web3.js para interação com blockchain, IPFS para armazenamento distribuído de dados e Node.js para serviços auxiliares. MetaMask para autenticação e assinatura de transações.`,
      features: [
        "Smart contracts auditados",
        "Votação anônima e verificável",
        "Interface web intuitiva",
        "Integração com MetaMask",
        "Auditoria em tempo real",
        "Armazenamento descentralizado (IPFS)",
        "Otimização de gas fees",
        "Relatórios transparentes"
      ],
      challenges: [
        {
          title: "Escalabilidade e Custos de Gas",
          description: "Reduzir os custos de transação mantendo a segurança e descentralização.",
          solution: "Otimizamos os smart contracts e implementamos batching de transações para reduzir custos em 40%."
        }
      ],
      testimonials: [
        {
          author: "Dr. Roberto Lima",
          role: "Especialista em Segurança Digital",
          content: "O sistema demonstra como a blockchain pode revolucionar processos democráticos. A implementação é sólida e segura."
        }
      ],
      codeSnippet: `// Smart contract para votação
pragma solidity ^0.8.0;

contract VotingSystem {
    struct Vote {
        address voter;
        uint256 candidate;
        uint256 timestamp;
        bytes32 proof;
    }
    
    mapping(address => bool) public hasVoted;
    mapping(uint256 => uint256) public votes;
    Vote[] public voteHistory;
    
    event VoteCast(address indexed voter, uint256 candidate, bytes32 proof);
    
    function castVote(uint256 _candidate, bytes32 _proof) external {
        require(!hasVoted[msg.sender], "Already voted");
        require(_candidate > 0, "Invalid candidate");
        
        hasVoted[msg.sender] = true;
        votes[_candidate]++;
        
        voteHistory.push(Vote({
            voter: msg.sender,
            candidate: _candidate,
            timestamp: block.timestamp,
            proof: _proof
        }));
        
        emit VoteCast(msg.sender, _candidate, _proof);
    }
}`
    },
    {
      id: 6,
      title: "IoT Monitoring Dashboard",
      category: "Internet of Things",
      description: "Dashboard para monitoramento de dispositivos IoT com visualização em tempo real, alertas automáticos e análise preditiva.",
      fullDescription: `Uma solução completa para monitoramento e gerenciamento de dispositivos IoT, oferecendo visualização em tempo real de dados de sensores, alertas automáticos baseados em thresholds personalizáveis e análise preditiva para manutenção preventiva.\n\nO sistema processa milhares de mensagens por segundo de dispositivos distribuídos globalmente, fornecendo insights valiosos para otimização operacional.`,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
      ],
      technologies: ["React", "Node.js", "InfluxDB", "MQTT", "Grafana", "Docker"],
      status: "live",
      duration: "5 meses",
      team: "3 desenvolvedores",
      demoUrl: "https://iot-dashboard-demo.com",
      githubUrl: "https://github.com/roootunk/iot-monitoring",
      metrics: [
        { label: "Dispositivos", value: "10k+" },
        { label: "Mensagens/s", value: "5k" },
        { label: "Uptime", value: "99.8%" },
        { label: "Alertas", value: "1k+/dia" }
      ],
      architecture: `Arquitetura orientada a eventos com MQTT para comunicação com dispositivos, InfluxDB para armazenamento de séries temporais, Node.js para processamento de dados e React para interface. Grafana integrado para visualizações avançadas e Docker para containerização.`,
      features: [
        "Monitoramento em tempo real",
        "Alertas personalizáveis",
        "Análise preditiva com ML",
        "Dashboard customizável",
        "API RESTful para integrações",
        "Suporte a múltiplos protocolos",
        "Histórico de dados completo",
        "Relatórios automatizados"
      ],
      challenges: [
        {
          title: "Processamento de Alto Volume",
          description: "Processar milhares de mensagens por segundo sem perda de dados.",
          solution: "Implementamos uma arquitetura de microserviços com filas de mensagens e processamento assíncrono distribuído."
        }
      ],
      testimonials: [
        {
          author: "Eng. Patricia Mendes",
          role: "Gerente de Operações, IndustrialTech",
          content: "O dashboard nos deu visibilidade completa da nossa operação. Conseguimos reduzir downtime em 60% com os alertas preditivos."
        }
      ],
      codeSnippet: `// Processador de dados IoT em tempo real
const processIoTData = async (deviceData) => {
  try {
    // Validação e normalização dos dados
    const normalizedData = normalizeDeviceData(deviceData);
    
    // Armazenamento em série temporal
    await influxDB.writePoints([{
      measurement: 'device_metrics',
      tags: {
        deviceId: normalizedData.deviceId,
        location: normalizedData.location
      },
      fields: normalizedData.metrics,
      timestamp: new Date()
    }]);
    
    // Verificação de alertas
    const alerts = await checkAlertConditions(normalizedData);
    if (alerts.length > 0) {
      await sendAlerts(alerts);
    }
    
    // Análise preditiva
    await runPredictiveAnalysis(normalizedData);
    
  } catch (error) {
    logger.error('IoT data processing failed:', error);
  }
};`
    }
  ];

  // Mock data for stats
  const stats = {
    completedProjects: "25+",
    linesOfCode: "100k+",
    happyClients: "15+",
    yearsExperience: "5+"
  };

  // Mock data for tech stack
  const techStacks = [
    { name: "React", icon: "Code", level: 5, projectCount: 12 },
    { name: "Node.js", icon: "Server", level: 5, projectCount: 10 },
    { name: "Python", icon: "Code2", level: 4, projectCount: 8 },
    { name: "TypeScript", icon: "FileCode", level: 4, projectCount: 9 },
    { name: "MongoDB", icon: "Database", level: 4, projectCount: 7 },
    { name: "AWS", icon: "Cloud", level: 4, projectCount: 6 },
    { name: "Docker", icon: "Package", level: 4, projectCount: 8 },
    { name: "GraphQL", icon: "Share2", level: 3, projectCount: 5 },
    { name: "Redis", icon: "Zap", level: 3, projectCount: 4 },
    { name: "Kubernetes", icon: "Layers", level: 3, projectCount: 3 },
    { name: "TensorFlow", icon: "Brain", level: 3, projectCount: 2 },
    { name: "Blockchain", icon: "Link", level: 3, projectCount: 2 }
  ];

  // Filter logic
  const filteredProjects = useMemo(() => {
    return projects?.filter(project => {
      const matchesCategory = selectedCategory === 'all' || project?.category === selectedCategory;
      const matchesTech = selectedTech === 'all' || project?.technologies?.some(tech => 
        tech?.toLowerCase()?.includes(selectedTech?.toLowerCase())
      );
      const matchesSearch = searchQuery === '' || 
        project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.technologies?.some(tech => tech?.toLowerCase()?.includes(searchQuery?.toLowerCase()));
      
      return matchesCategory && matchesTech && matchesSearch;
    });
  }, [selectedCategory, selectedTech, searchQuery]);

  // Generate filter options
  const categories = useMemo(() => {
    const categoryCount = projects?.reduce((acc, project) => {
      acc[project.category] = (acc?.[project?.category] || 0) + 1;
      return acc;
    }, {});

    return [
      { value: 'all', label: 'Todas', count: projects?.length },
      ...Object.entries(categoryCount)?.map(([category, count]) => ({
        value: category,
        label: category,
        count
      }))
    ];
  }, []);

  const technologies = useMemo(() => {
    const techCount = projects?.reduce((acc, project) => {
      project?.technologies?.forEach(tech => {
        acc[tech] = (acc?.[tech] || 0) + 1;
      });
      return acc;
    }, {});

    const sortedTechs = Object.entries(techCount)?.sort(([,a], [,b]) => b - a)?.slice(0, 8);

    return [
      { value: 'all', label: 'Todas', count: projects?.length },
      ...sortedTechs?.map(([tech, count]) => ({
        value: tech,
        label: tech,
        count
      }))
    ];
  }, []);

  // Event handlers
  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleViewDemo = (project) => {
    if (project?.demoUrl) {
      window.open(project?.demoUrl, '_blank');
    }
  };

  const handleViewCode = (project) => {
    if (project?.githubUrl) {
      window.open(project?.githubUrl, '_blank');
    }
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedTech('all');
    setSearchQuery('');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Helmet>
        <title>Portfolio - Projetos Interativos | Kaio Silva - Desenvolvedor Full Stack</title>
        <meta name="description" content="Explore meu portfólio interativo com projetos de desenvolvimento web, mobile, IA e blockchain. Demonstrações ao vivo, código fonte e estudos de caso detalhados." />
        <meta name="keywords" content="portfolio, projetos, desenvolvimento web, react, node.js, python, blockchain, IA, mobile" />
        <meta property="og:title" content="Portfolio - Projetos Interativos | Kaio Silva" />
        <meta property="og:description" content="Explore projetos inovadores com demonstrações ao vivo e estudos de caso detalhados" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <Icon name="Briefcase" size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Portfolio Interativo</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 blur-text-animation">
                Projetos que <span className="text-primary orange-glow">Transformam</span> Ideias
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Explore uma coleção curada de projetos que demonstram expertise técnica, 
                criatividade e impacto real. Cada projeto conta uma história de desafios 
                superados e soluções inovadoras.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  className="glow-hover perspective-hover"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explorar Projetos
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Github"
                  iconPosition="left"
                  onClick={() => window.open('https://github.com/roootunk', '_blank')}
                >
                  Ver no GitHub
                </Button>
              </div>
            </motion.div>

            {/* Stats Overview */}
            <StatsOverview stats={stats} />
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 px-6 lg:px-8 bg-surface/30">
          <div className="max-w-7xl mx-auto">
            <TechStackGrid techStacks={techStacks} />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Laboratório de <span className="text-primary">Projetos</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cada projeto é uma jornada de descoberta, experimentação e inovação. 
                Explore os detalhes técnicos, desafios enfrentados e resultados alcançados.
              </p>
            </motion.div>

            {/* Filter Bar */}
            <FilterBar
              categories={categories}
              technologies={technologies}
              selectedCategory={selectedCategory}
              selectedTech={selectedTech}
              searchQuery={searchQuery}
              onCategoryChange={setSelectedCategory}
              onTechChange={setSelectedTech}
              onSearchChange={setSearchQuery}
              onClearFilters={handleClearFilters}
              projectCount={filteredProjects?.length}
            />

            {/* View Mode Toggle */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <Icon name="Filter" size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {filteredProjects?.length} de {projects?.length} projetos
                </span>
              </div>
              
              <div className="flex items-center space-x-2 bg-surface/50 backdrop-blur-sm border border-border rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name="Grid3X3" size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name="List" size={16} />
                </button>
              </div>
            </div>

            {/* Projects Grid */}
            {filteredProjects?.length > 0 ? (
              <motion.div
                className={`grid gap-8 ${
                  viewMode === 'grid' ?'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :'grid-cols-1'
                }`}
                layout
              >
                {filteredProjects?.map((project, index) => (
                  <motion.div
                    key={project?.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    layout
                  >
                    <ProjectCard
                      project={project}
                      onViewDetails={handleViewDetails}
                      onViewDemo={handleViewDemo}
                      onViewCode={handleViewCode}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-muted/20 rounded-full flex items-center justify-center">
                  <Icon name="Search" size={32} className="text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Nenhum projeto encontrado
                </h3>
                <p className="text-muted-foreground mb-6">
                  Tente ajustar os filtros ou termos de busca para encontrar projetos relevantes.
                </p>
                <Button
                  variant="outline"
                  onClick={handleClearFilters}
                  iconName="RotateCcw"
                  iconPosition="left"
                >
                  Limpar Filtros
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-primary/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pronto para o Próximo <span className="text-primary">Projeto?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Vamos transformar sua ideia em realidade. Entre em contato para discutir 
                como posso ajudar a criar soluções inovadoras para seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="glow-hover perspective-hover"
                >
                  Iniciar Conversa
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                >
                  Download CV
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
};

export default PortfolioInteractiveProjectShowcase;