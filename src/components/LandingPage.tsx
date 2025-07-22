import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Target, TrendingUp, BookOpen, Star, Users, Zap, Calculator, Atom, Globe, Feather, PenTool, Brain, Award, Calendar } from 'lucide-react';
import dashboardMockup from '@/assets/dashboard-mockup.png';
import student1 from '@/assets/student-1.jpg';
import student2 from '@/assets/student-2.jpg';
import logo from '@/assets/logo.png';
import Navigation from './Navigation';
import SubjectCard from './SubjectCard';

interface LandingPageProps {
  onNavigateToDashboard: () => void;
}

export default function LandingPage({ onNavigateToDashboard }: LandingPageProps) {
  const [timeToEnem, setTimeToEnem] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const enemDate = new Date('2025-11-12T08:00:00');
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = enemDate.getTime() - now;

      if (distance > 0) {
        setTimeToEnem({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-success" />,
      title: "Progresso Visual",
      description: "Marque matérias estudadas e veja seu progresso em tempo real"
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Foco no que Importa",
      description: "Matérias organizadas por peso e importância no ENEM"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-warning" />,
      title: "Análise por Área",
      description: "Acompanhe seu desempenho em cada área do conhecimento"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-destructive" />,
      title: "Sistema de Revisão",
      description: "Marque matérias que precisam de revisão e organize seus estudos"
    }
  ];

  const subjects = [
    {
      title: "Matemática",
      icon: Calculator,
      description: "Resolução de problemas e raciocínio lógico",
      topics: ["Funções", "Geometria", "Estatística", "Probabilidade", "Trigonometria", "Logaritmos"],
      color: "bg-blue-500"
    },
    {
      title: "Física",
      icon: Atom,
      description: "Fenômenos naturais e leis da física",
      topics: ["Mecânica", "Eletricidade", "Óptica", "Ondas", "Termologia", "Física Moderna"],
      color: "bg-purple-500"
    },
    {
      title: "Geografia",
      icon: Globe,
      description: "Espaço geográfico e sociedade",
      topics: ["Geopolítica", "Climatologia", "Demografia", "Urbanização", "Cartografia", "Globalização"],
      color: "bg-green-500"
    },
    {
      title: "Português",
      icon: Feather,
      description: "Interpretação e produção textual",
      topics: ["Gramática", "Literatura", "Redação", "Interpretação", "Figuras de Linguagem", "Gêneros Textuais"],
      color: "bg-red-500"
    },
    {
      title: "Redação",
      icon: PenTool,
      description: "Produção de texto dissertativo-argumentativo",
      topics: ["Estrutura", "Argumentação", "Coesão", "Competências", "Temas Atuais", "Proposta de Intervenção"],
      color: "bg-orange-500"
    },
    {
      title: "Filosofia",
      icon: Brain,
      description: "Reflexão crítica e pensamento filosófico",
      topics: ["Ética", "Política", "Metafísica", "Epistemologia", "Estética", "Filosofia Moderna"],
      color: "bg-indigo-500"
    }
  ];

  const testimonials = [
    {
      name: "Ana Silva",
      photo: student1,
      text: "Com o RotaENEM consegui organizar meus estudos e aumentei minha nota em 200 pontos!",
      rating: 5
    },
    {
      name: "Carlos Santos",
      photo: student2,
      text: "Finalmente saí da desorganização. Agora sei exatamente o que estudar e quando revisar.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      {/* Navigation */}
      <Navigation onNavigateToDashboard={onNavigateToDashboard} />

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo Principal */}
            <div className="space-y-8">
              <Badge variant="outline" className="text-sm px-4 py-2 inline-flex items-center gap-2">
                <Award className="h-4 w-4" />
                Sua jornada rumo à aprovação
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Painel de Estudos
                </span>
                <br />
                <span className="text-foreground">ENEM</span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  "O que não se pode medir, não se pode melhorar." — Lord Kelvin
                </p>
                <p className="text-lg text-primary font-semibold">
                  Meça sua preparação e evolua rumo à aprovação no ENEM.
                </p>
                <p className="text-base text-muted-foreground">
                  Pare de se perder nos estudos. Encontre sua rota até a aprovação.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={onNavigateToDashboard}
                  variant="hero" 
                  size="lg" 
                  className="text-lg px-8 py-6 animate-pulse-glow"
                >
                  <Zap className="h-6 w-6 mr-2" />
                  Quero transformar meus estudos
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => document.getElementById('conteudos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <BookOpen className="h-6 w-6 mr-2" />
                  Ver conteúdos
                </Button>
              </div>
            </div>

            {/* Imagem/Mockup */}
            <div className="relative">
              <img 
                src={dashboardMockup} 
                alt="Preview do Painel de Estudos" 
                className="rounded-lg shadow-card border border-primary/20 max-w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Countdown ENEM */}
      <section id="cronograma" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="shadow-glow border-primary/30 bg-gradient-card-hover">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-3 text-3xl">
                <Clock className="h-10 w-10 text-warning" />
                Contagem Regressiva ENEM 2025
              </CardTitle>
              <p className="text-lg text-primary font-semibold mt-2">
                Faltam {timeToEnem.days} dias para sua aprovação! 🚀
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-primary bg-gradient-primary bg-clip-text text-transparent">
                    {timeToEnem.days}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Dias</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-primary bg-gradient-primary bg-clip-text text-transparent">
                    {timeToEnem.hours}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Horas</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-primary bg-gradient-primary bg-clip-text text-transparent">
                    {timeToEnem.minutes}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Minutos</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-primary bg-gradient-primary bg-clip-text text-transparent">
                    {timeToEnem.seconds}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Segundos</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conteúdos ENEM */}
      <section id="conteudos" className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Conteúdos <span className="text-primary">relevantes</span> para o ENEM
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore as principais disciplinas e temas que mais aparecem no exame
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <SubjectCard 
                key={index}
                title={subject.title}
                icon={subject.icon}
                topics={subject.topics}
                description={subject.description}
                color={subject.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="sobre" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Funcionalidades que <span className="text-primary">transformam</span> seus estudos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Todas as ferramentas que você precisa para organizar sua preparação para o ENEM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {feature.icon}
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Por que escolher o <span className="text-primary">RotaENEM?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">100% Editável</h3>
              <p className="text-muted-foreground">
                Personalize completamente suas matérias, dificuldades e progresso
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Rápido de Começar</h3>
              <p className="text-muted-foreground">
                Em poucos cliques você já está organizando seus estudos
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Responsivo</h3>
              <p className="text-muted-foreground">
                Funciona perfeitamente no celular, tablet e computador
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              O que nossos <span className="text-primary">estudantes</span> dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Estudante ENEM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Pronto para transformar seus estudos?
          </h2>
          <p className="text-xl opacity-90">
            Pare de procrastinar e comece a medir seu progresso hoje mesmo.
          </p>
          <Button 
            onClick={onNavigateToDashboard}
            variant="secondary" 
            size="lg" 
            className="text-xl px-8 py-6 bg-white text-primary hover:bg-white/90"
          >
            <Target className="h-6 w-6 mr-2" />
            Começar agora gratuitamente
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-12 px-4 border-t bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <img src={logo} alt="RotaENEM" className="h-10 w-10" />
                <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">RotaENEM</span>
              </div>
              <p className="text-muted-foreground max-w-md">
                Sua jornada rumo à aprovação no ENEM começa aqui. Organize seus estudos e acompanhe seu progresso de forma visual e eficiente.
              </p>
            </div>

            {/* Links Rápidos */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">Início</a></li>
                <li><a href="#conteudos" className="text-muted-foreground hover:text-primary transition-colors">Conteúdos</a></li>
                <li><a href="#cronograma" className="text-muted-foreground hover:text-primary transition-colors">Cronograma</a></li>
                <li><a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a></li>
              </ul>
            </div>

            {/* Contato */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Contato</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 contato@rotaenem.com</p>
                <p>📱 (11) 9999-9999</p>
                <div className="flex gap-3 pt-2">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">YouTube</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-6 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 RotaENEM. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}