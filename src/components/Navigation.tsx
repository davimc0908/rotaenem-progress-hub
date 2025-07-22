import React from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

interface NavigationProps {
  onNavigateToDashboard: () => void;
}

export default function Navigation({ onNavigateToDashboard }: NavigationProps) {
  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Conteúdos', href: '#conteudos' },
    { label: 'Cronograma', href: '#cronograma' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-navbar backdrop-blur-md border-b border-border/50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo e Nome */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="RotaENEM" className="h-12 w-12" />
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              RotaENEM
            </span>
          </div>

          {/* Menu de Navegação */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Botão CTA */}
          <Button 
            onClick={onNavigateToDashboard}
            variant="hero" 
            className="hidden md:flex"
          >
            Acessar Painel
          </Button>

          {/* Menu Mobile */}
          <Button 
            onClick={onNavigateToDashboard}
            variant="outline" 
            className="md:hidden"
          >
            Painel
          </Button>
        </div>
      </div>
    </header>
  );
}