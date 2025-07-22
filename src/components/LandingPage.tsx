import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Target, TrendingUp, BookOpen, Star, Users, Zap } from 'lucide-react';
import dashboardMockup from '@/assets/dashboard-mockup.png';
import student1 from '@/assets/student-1.jpg';
import student2 from '@/assets/student-2.jpg';
import logo from '@/assets/logo.png';

interface LandingPageProps {
  onNavigateToDashboard: () => void;
}

export default function LandingPage({ onNavigateToDashboard }: LandingPageProps) {
  const [timeToEnem, setTimeToEnem] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const enemDate = new Date('2024-11-12T08:00:00');
    
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
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="RotaENEM" className="h-10 w-10" />
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              RotaENEM
            </span>
          </div>
          <Button onClick={onNavigateToDashboard} variant="outline">
            Acessar Painel
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6 mb-12">
            <Badge variant="outline" className="text-sm px-4 py-2">
              🎯 Sua jornada rumo à aprovação
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Painel de Estudos
              </span>
              <br />
              <span className="text-foreground">ENEM</span>
            </h1>
            
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                "O que não se pode medir, não se pode melhorar." — Lord Kelvin
              </p>
              <p className="text-lg text-primary">
                Meça sua preparação e evolua rumo à aprovação no ENEM.
              </p>
              <p className="text-base text-muted-foreground">
                Pare de se perder nos estudos. Encontre sua rota até a aprovação.
              </p>
            </div>

            <Button 
              onClick={onNavigateToDashboard}
              variant="hero" 
              size="lg" 
              className="text-xl px-8 py-6 animate-pulse-glow"
            >
              <Zap className="h-6 w-6 mr-2" />
              Quero transformar meus estudos
            </Button>
          </div>

          {/* Countdown ENEM */}
          <Card className="max-w-2xl mx-auto shadow-glow border-primary/30 mb-16">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Clock className="h-8 w-8 text-warning" />
                Contagem Regressiva ENEM 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{timeToEnem.days}</div>
                  <div className="text-sm text-muted-foreground">Dias</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{timeToEnem.hours}</div>
                  <div className="text-sm text-muted-foreground">Horas</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{timeToEnem.minutes}</div>
                  <div className="text-sm text-muted-foreground">Minutos</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{timeToEnem.seconds}</div>
                  <div className="text-sm text-muted-foreground">Segundos</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dashboard Preview */}
          <div className="relative">
            <img 
              src={dashboardMockup} 
              alt="Preview do Painel de Estudos" 
              className="rounded-lg shadow-card border border-primary/20 max-w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-card/30">
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
      <footer className="py-8 px-4 border-t bg-card/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logo} alt="RotaENEM" className="h-8 w-8" />
            <span className="text-xl font-bold">RotaENEM</span>
          </div>
          <p className="text-muted-foreground">
            Sua jornada rumo à aprovação no ENEM começa aqui.
          </p>
        </div>
      </footer>
    </div>
  );
}