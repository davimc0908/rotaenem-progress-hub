import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Target, Clock, TrendingUp, Filter, RotateCcw } from 'lucide-react';
import { Subject, SubjectArea, Difficulty, SUBJECT_AREAS, DIFFICULTY_LABELS, ENEM_SUBJECTS } from '@/types/subjects';

export default function StudyDashboard() {
  const [subjects, setSubjects] = useState<Subject[]>(ENEM_SUBJECTS);
  const [selectedArea, setSelectedArea] = useState<SubjectArea | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [showReviewOnly, setShowReviewOnly] = useState(false);

  // Cálculo do progresso
  const progress = useMemo(() => {
    const totalWeight = subjects.reduce((acc, subject) => acc + subject.weight, 0);
    const studiedWeight = subjects
      .filter(subject => subject.studied)
      .reduce((acc, subject) => acc + subject.weight, 0);
    
    const overallProgress = Math.round((studiedWeight / totalWeight) * 100);
    
    const areaProgress = Object.keys(SUBJECT_AREAS).map(area => {
      const areaSubjects = subjects.filter(subject => subject.area === area);
      const areaTotalWeight = areaSubjects.reduce((acc, subject) => acc + subject.weight, 0);
      const areaStudiedWeight = areaSubjects
        .filter(subject => subject.studied)
        .reduce((acc, subject) => acc + subject.weight, 0);
      
      return {
        area: area as SubjectArea,
        progress: areaTotalWeight > 0 ? Math.round((areaStudiedWeight / areaTotalWeight) * 100) : 0,
        studied: areaSubjects.filter(s => s.studied).length,
        total: areaSubjects.length
      };
    });

    return { overallProgress, areaProgress };
  }, [subjects]);

  // Filtros
  const filteredSubjects = useMemo(() => {
    return subjects.filter(subject => {
      if (selectedArea !== 'all' && subject.area !== selectedArea) return false;
      if (selectedDifficulty !== 'all' && subject.difficulty !== selectedDifficulty) return false;
      if (showReviewOnly && !subject.needsReview) return false;
      return true;
    });
  }, [subjects, selectedArea, selectedDifficulty, showReviewOnly]);

  // Countdown para o ENEM (exemplo: 12 de novembro de 2024)
  const enemDate = new Date('2024-11-12');
  const today = new Date();
  const daysToEnem = Math.max(0, Math.ceil((enemDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));

  const updateSubject = (id: string, updates: Partial<Subject>) => {
    setSubjects(prev => prev.map(subject => 
      subject.id === id ? { ...subject, ...updates } : subject
    ));
  };

  const getDifficultyColor = (difficulty: Difficulty) => {
    switch (difficulty) {
      case 'facil': return 'bg-success';
      case 'medio': return 'bg-warning';
      case 'dificil': return 'bg-destructive';
    }
  };

  const getAreaIcon = (area: SubjectArea) => {
    switch (area) {
      case 'linguagens': return '📚';
      case 'matematica': return '🔢';
      case 'natureza': return '🧪';
      case 'humanas': return '🌍';
      case 'redacao': return '✍️';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            RotaENEM
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            "O que não se pode medir, não se pode melhorar." — Lord Kelvin
          </p>
          <p className="text-primary font-medium">
            Descubra sua rota até a aprovação.
          </p>
        </div>

        {/* Cards principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Progresso Geral */}
          <Card className="shadow-card border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progresso Geral</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary mb-2">
                {progress.overallProgress}%
              </div>
              <Progress value={progress.overallProgress} className="h-3" />
              <p className="text-xs text-muted-foreground mt-2">
                {subjects.filter(s => s.studied).length} de {subjects.length} matérias estudadas
              </p>
            </CardContent>
          </Card>

          {/* Countdown ENEM */}
          <Card className="shadow-card border-warning/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Countdown ENEM</CardTitle>
              <Clock className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning mb-2">
                {daysToEnem} dias
              </div>
              <p className="text-xs text-muted-foreground">
                Foco total até 12 de novembro!
              </p>
            </CardContent>
          </Card>

          {/* Para Revisar */}
          <Card className="shadow-card border-destructive/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Para Revisar</CardTitle>
              <RotateCcw className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive mb-2">
                {subjects.filter(s => s.needsReview).length}
              </div>
              <p className="text-xs text-muted-foreground">
                matérias precisam de revisão
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Progresso por Área */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Progresso por Área
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {progress.areaProgress.map(({ area, progress: areaProgress, studied, total }) => (
                <div key={area} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium flex items-center gap-1">
                      {getAreaIcon(area)} {SUBJECT_AREAS[area]}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {studied}/{total}
                    </span>
                  </div>
                  <Progress value={areaProgress} className="h-2" />
                  <span className="text-xs font-medium text-primary">
                    {areaProgress}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Filtros */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              Filtros
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Select value={selectedArea} onValueChange={(value) => setSelectedArea(value as SubjectArea | 'all')}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filtrar por área" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as áreas</SelectItem>
                  {Object.entries(SUBJECT_AREAS).map(([key, label]) => (
                    <SelectItem key={key} value={key}>{label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDifficulty} onValueChange={(value) => setSelectedDifficulty(value as Difficulty | 'all')}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filtrar por dificuldade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as dificuldades</SelectItem>
                  {Object.entries(DIFFICULTY_LABELS).map(([key, label]) => (
                    <SelectItem key={key} value={key}>{label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant={showReviewOnly ? "default" : "outline"}
                onClick={() => setShowReviewOnly(!showReviewOnly)}
                className="flex items-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                {showReviewOnly ? "Mostrando revisão" : "Mostrar apenas revisão"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Lista de Matérias */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Matérias ({filteredSubjects.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredSubjects.map((subject) => (
                <div key={subject.id} className={`
                  flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg border transition-all duration-200
                  ${subject.studied ? 'bg-success-light border-success/30' : 'bg-card hover:shadow-soft'}
                `}>
                  <div className="flex items-center gap-3 flex-1">
                    <Checkbox
                      checked={subject.studied}
                      onCheckedChange={(checked) => updateSubject(subject.id, { studied: !!checked })}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-medium ${subject.studied ? 'line-through text-muted-foreground' : ''}`}>
                          {subject.name}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          Peso: {subject.weight}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {SUBJECT_AREAS[subject.area]}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Select
                      value={subject.difficulty}
                      onValueChange={(value) => updateSubject(subject.id, { difficulty: value as Difficulty })}
                    >
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(DIFFICULTY_LABELS).map(([key, label]) => (
                          <SelectItem key={key} value={key}>{label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <div className="flex items-center gap-2">
                      <Checkbox
                        checked={subject.needsReview}
                        onCheckedChange={(checked) => updateSubject(subject.id, { needsReview: !!checked })}
                      />
                      <span className="text-xs text-muted-foreground">Revisar</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}