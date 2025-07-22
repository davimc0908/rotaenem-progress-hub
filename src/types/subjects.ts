export interface Subject {
  id: string;
  name: string;
  area: SubjectArea;
  weight: number;
  studied: boolean;
  difficulty: Difficulty;
  needsReview: boolean;
}

export type SubjectArea = 'linguagens' | 'matematica' | 'natureza' | 'humanas' | 'redacao';

export type Difficulty = 'facil' | 'medio' | 'dificil';

export const SUBJECT_AREAS = {
  linguagens: 'Linguagens e Códigos',
  matematica: 'Matemática',
  natureza: 'Ciências da Natureza',
  humanas: 'Ciências Humanas',
  redacao: 'Redação'
};

export const DIFFICULTY_LABELS = {
  facil: 'Fácil',
  medio: 'Médio',
  dificil: 'Difícil'
};

export const ENEM_SUBJECTS: Subject[] = [
  // Linguagens e Códigos
  { id: '1', name: 'Interpretação de Texto', area: 'linguagens', weight: 10, studied: false, difficulty: 'medio', needsReview: false },
  { id: '2', name: 'Literatura Brasileira', area: 'linguagens', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '3', name: 'Gramática', area: 'linguagens', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '4', name: 'Inglês/Espanhol', area: 'linguagens', weight: 6, studied: false, difficulty: 'facil', needsReview: false },
  { id: '5', name: 'Artes', area: 'linguagens', weight: 5, studied: false, difficulty: 'facil', needsReview: false },
  
  // Matemática
  { id: '6', name: 'Funções', area: 'matematica', weight: 10, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '7', name: 'Geometria Plana', area: 'matematica', weight: 9, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '8', name: 'Estatística e Probabilidade', area: 'matematica', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '9', name: 'Análise de Gráficos', area: 'matematica', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '10', name: 'Razão e Proporção', area: 'matematica', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  
  // Ciências da Natureza
  { id: '11', name: 'Ecologia', area: 'natureza', weight: 9, studied: false, difficulty: 'medio', needsReview: false },
  { id: '12', name: 'Química Orgânica', area: 'natureza', weight: 8, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '13', name: 'Física - Mecânica', area: 'natureza', weight: 8, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '14', name: 'Genética', area: 'natureza', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '15', name: 'Termodinâmica', area: 'natureza', weight: 6, studied: false, difficulty: 'dificil', needsReview: false },
  
  // Ciências Humanas
  { id: '16', name: 'História do Brasil', area: 'humanas', weight: 9, studied: false, difficulty: 'medio', needsReview: false },
  { id: '17', name: 'Geografia Física', area: 'humanas', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '18', name: 'Sociologia', area: 'humanas', weight: 7, studied: false, difficulty: 'facil', needsReview: false },
  { id: '19', name: 'Filosofia', area: 'humanas', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '20', name: 'Geopolítica', area: 'humanas', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  
  // Redação
  { id: '21', name: 'Estrutura da Redação', area: 'redacao', weight: 10, studied: false, difficulty: 'medio', needsReview: false },
  { id: '22', name: 'Argumentação', area: 'redacao', weight: 9, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '23', name: 'Proposta de Intervenção', area: 'redacao', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '24', name: 'Coesão e Coerência', area: 'redacao', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '25', name: 'Repertório Sociocultural', area: 'redacao', weight: 6, studied: false, difficulty: 'facil', needsReview: false },
];