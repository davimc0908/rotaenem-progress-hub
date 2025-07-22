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
  { id: '1', name: 'Interpretação de textos', area: 'linguagens', weight: 10, studied: false, difficulty: 'medio', needsReview: false },
  { id: '2', name: 'Teoria da comunicação', area: 'linguagens', weight: 8, studied: false, difficulty: 'facil', needsReview: false },
  { id: '3', name: 'Literatura - Introdução', area: 'linguagens', weight: 9, studied: false, difficulty: 'medio', needsReview: false },
  { id: '4', name: 'Literatura - Realismo', area: 'linguagens', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '5', name: 'Literatura - Romantismo', area: 'linguagens', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '6', name: 'Literatura - Modernismo (3ª fase)', area: 'linguagens', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '7', name: 'Literatura - Pré-modernismo', area: 'linguagens', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  { id: '8', name: 'Literatura - Vanguardas europeias', area: 'linguagens', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  { id: '9', name: 'Literatura - Elementos da narrativa', area: 'linguagens', weight: 7, studied: false, difficulty: 'facil', needsReview: false },
  { id: '10', name: 'Literatura - Gêneros narrativos', area: 'linguagens', weight: 6, studied: false, difficulty: 'facil', needsReview: false },
  { id: '11', name: 'Literatura - Contemporaneidade', area: 'linguagens', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  
  // Matemática
  { id: '12', name: 'Matemática básica - Razão e proporção', area: 'matematica', weight: 9, studied: false, difficulty: 'medio', needsReview: false },
  { id: '13', name: 'Matemática básica - Porcentagem', area: 'matematica', weight: 9, studied: false, difficulty: 'facil', needsReview: false },
  { id: '14', name: 'Matemática básica - Sistema de numeração', area: 'matematica', weight: 7, studied: false, difficulty: 'facil', needsReview: false },
  { id: '15', name: 'Matemática básica - MMC e MDC', area: 'matematica', weight: 6, studied: false, difficulty: 'facil', needsReview: false },
  { id: '16', name: 'Funções - Gráfico', area: 'matematica', weight: 10, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '17', name: 'Funções - Função afim', area: 'matematica', weight: 9, studied: false, difficulty: 'medio', needsReview: false },
  { id: '18', name: 'Funções - Função quadrática', area: 'matematica', weight: 9, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '19', name: 'Funções - Trigonométricas', area: 'matematica', weight: 8, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '20', name: 'Funções - Exponencial e logaritmo', area: 'matematica', weight: 8, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '21', name: 'Geometria plana', area: 'matematica', weight: 10, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '22', name: 'Geometria analítica', area: 'matematica', weight: 8, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '23', name: 'Geometria espacial', area: 'matematica', weight: 7, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '24', name: 'Estatística - Gráficos', area: 'matematica', weight: 9, studied: false, difficulty: 'medio', needsReview: false },
  { id: '25', name: 'Estatística - Média, moda e mediana', area: 'matematica', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '26', name: 'Estatística - Média aritmética', area: 'matematica', weight: 7, studied: false, difficulty: 'facil', needsReview: false },
  { id: '27', name: 'Estatística - Média ponderada', area: 'matematica', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '28', name: 'Probabilidade', area: 'matematica', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '29', name: 'Combinação', area: 'matematica', weight: 7, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '30', name: 'Princípio fundamental da contagem', area: 'matematica', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '31', name: 'Permutação', area: 'matematica', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  
  // Ciências da Natureza - Biologia
  { id: '32', name: 'Ecologia', area: 'natureza', weight: 10, studied: false, difficulty: 'medio', needsReview: false },
  { id: '33', name: 'Botânica', area: 'natureza', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '34', name: 'Bioenergética', area: 'natureza', weight: 8, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '35', name: 'Fisiologia animal', area: 'natureza', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '36', name: 'Biologia molecular', area: 'natureza', weight: 9, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '37', name: 'Evolução', area: 'natureza', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '38', name: 'Genética', area: 'natureza', weight: 9, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '39', name: 'Bioquímica', area: 'natureza', weight: 7, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '40', name: 'Microbiologia', area: 'natureza', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  { id: '41', name: 'Histologia', area: 'natureza', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  { id: '42', name: 'Núcleo e divisão celular', area: 'natureza', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '43', name: 'Zoologia', area: 'natureza', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  { id: '44', name: 'Citologia', area: 'natureza', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  
  // Ciências da Natureza - Química
  { id: '45', name: 'Físico-química - Soluções', area: 'natureza', weight: 9, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '46', name: 'Físico-química - Equilíbrio', area: 'natureza', weight: 8, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '47', name: 'Físico-química - Termoquímica', area: 'natureza', weight: 8, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '48', name: 'Físico-química - Eletroquímica', area: 'natureza', weight: 7, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '49', name: 'Físico-química - Radioatividade', area: 'natureza', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  { id: '50', name: 'Físico-química - Cinética', area: 'natureza', weight: 7, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '51', name: 'Físico-química - Propriedades coligativas', area: 'natureza', weight: 6, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '52', name: 'Química básica', area: 'natureza', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '53', name: 'Estequiometria', area: 'natureza', weight: 9, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '54', name: 'Funções inorgânicas', area: 'natureza', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '55', name: 'Oxi-redução', area: 'natureza', weight: 7, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '56', name: 'Atomística', area: 'natureza', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '57', name: 'Forças intermoleculares', area: 'natureza', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  { id: '58', name: 'Ligações químicas', area: 'natureza', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '59', name: 'Modelos atômicos', area: 'natureza', weight: 6, studied: false, difficulty: 'facil', needsReview: false },
  { id: '60', name: 'Química orgânica - Reações', area: 'natureza', weight: 8, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '61', name: 'Química orgânica - Isomeria', area: 'natureza', weight: 7, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '62', name: 'Química orgânica - Cadeias carbônicas', area: 'natureza', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '63', name: 'Química orgânica - Funções orgânicas', area: 'natureza', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '64', name: 'Química orgânica - Polímeros', area: 'natureza', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  
  // Ciências da Natureza - Física
  { id: '65', name: 'Eletrodinâmica - Circuitos elétricos', area: 'natureza', weight: 9, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '66', name: 'Eletrodinâmica - Potência e energia', area: 'natureza', weight: 8, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '67', name: 'Eletrodinâmica - Leis de Ohm', area: 'natureza', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '68', name: 'Dinâmica - Trabalho e energia', area: 'natureza', weight: 9, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '69', name: 'Dinâmica - Leis de Newton', area: 'natureza', weight: 9, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '70', name: 'Dinâmica - Atrito e força elástica', area: 'natureza', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '71', name: 'Dinâmica - Quantidade de movimento', area: 'natureza', weight: 7, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '72', name: 'Ondulatória - Fenômenos ondulatórios', area: 'natureza', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '73', name: 'Ondulatória - Fundamentos', area: 'natureza', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  { id: '74', name: 'Termologia - Calorimetria', area: 'natureza', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  
  // Ciências Humanas - Geografia
  { id: '75', name: 'Geografia geral - Física', area: 'humanas', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '76', name: 'Geografia geral - Geopolítica mundial', area: 'humanas', weight: 9, studied: false, difficulty: 'medio', needsReview: false },
  { id: '77', name: 'Geografia geral - Humana', area: 'humanas', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '78', name: 'Geografia geral - Econômica', area: 'humanas', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '79', name: 'Geografia geral - Questões ambientais', area: 'humanas', weight: 9, studied: false, difficulty: 'medio', needsReview: false },
  { id: '80', name: 'Geografia do Brasil - Humana', area: 'humanas', weight: 9, studied: false, difficulty: 'medio', needsReview: false },
  { id: '81', name: 'Geografia do Brasil - Econômica', area: 'humanas', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '82', name: 'Geografia do Brasil - Física', area: 'humanas', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '83', name: 'Geografia do Brasil - Questões ambientais', area: 'humanas', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  
  // Ciências Humanas - Filosofia
  { id: '84', name: 'Filosofia contemporânea - David Hume', area: 'humanas', weight: 6, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '85', name: 'Filosofia contemporânea - Iluminismo', area: 'humanas', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '86', name: 'Filosofia contemporânea - Revolução Científica', area: 'humanas', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  { id: '87', name: 'Filosofia contemporânea - Escola de Frankfurt', area: 'humanas', weight: 6, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '88', name: 'Filosofia contemporânea - Michel Foucault', area: 'humanas', weight: 6, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '89', name: 'Filosofia antiga - Sócrates', area: 'humanas', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '90', name: 'Filosofia antiga - Sofistas', area: 'humanas', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  { id: '91', name: 'Filosofia antiga - Aristóteles', area: 'humanas', weight: 7, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '92', name: 'Filosofia antiga - Pré-Socráticos', area: 'humanas', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  { id: '93', name: 'Filosofia antiga - Helenismo', area: 'humanas', weight: 5, studied: false, difficulty: 'medio', needsReview: false },
  { id: '94', name: 'Filosofia medieval - Santo Agostinho', area: 'humanas', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  { id: '95', name: 'Filosofia medieval - Tomás de Aquino', area: 'humanas', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  { id: '96', name: 'Filosofia moderna - René Descartes', area: 'humanas', weight: 7, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '97', name: 'Filosofia moderna - Immanuel Kant', area: 'humanas', weight: 8, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '98', name: 'Filosofia moderna - Contratualismo', area: 'humanas', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '99', name: 'Bioética', area: 'humanas', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  { id: '100', name: 'Friedrich Nietzsche', area: 'humanas', weight: 6, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '101', name: 'Existencialismo', area: 'humanas', weight: 6, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '102', name: 'Lógica e Teoria do Conhecimento', area: 'humanas', weight: 6, studied: false, difficulty: 'dificil', needsReview: false },
  
  // Ciências Humanas - Sociologia
  { id: '103', name: 'Cultura', area: 'humanas', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '104', name: 'Trabalho', area: 'humanas', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '105', name: 'Economia', area: 'humanas', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '106', name: 'Diversidade cultural', area: 'humanas', weight: 8, studied: false, difficulty: 'facil', needsReview: false },
  { id: '107', name: 'Estratificação social', area: 'humanas', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '108', name: 'Gênero', area: 'humanas', weight: 7, studied: false, difficulty: 'facil', needsReview: false },
  { id: '109', name: 'Desigualdades sociais', area: 'humanas', weight: 9, studied: false, difficulty: 'medio', needsReview: false },
  { id: '110', name: 'Cultura popular e erudita', area: 'humanas', weight: 6, studied: false, difficulty: 'facil', needsReview: false },
  { id: '111', name: 'Questão racial', area: 'humanas', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '112', name: 'Identidade', area: 'humanas', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '113', name: 'Questão indígena', area: 'humanas', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '114', name: 'Cidadania e direitos', area: 'humanas', weight: 8, studied: false, difficulty: 'facil', needsReview: false },
  { id: '115', name: 'Democracia', area: 'humanas', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '116', name: 'Política brasileira', area: 'humanas', weight: 7, studied: false, difficulty: 'medio', needsReview: false },
  { id: '117', name: 'Participação política', area: 'humanas', weight: 6, studied: false, difficulty: 'medio', needsReview: false },
  { id: '118', name: 'Teoria sociológica', area: 'humanas', weight: 7, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '119', name: 'Max Weber', area: 'humanas', weight: 6, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '120', name: 'Sociologia contemporânea', area: 'humanas', weight: 6, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '121', name: 'Metodologia', area: 'humanas', weight: 5, studied: false, difficulty: 'medio', needsReview: false },
  
  // Redação
  { id: '122', name: 'Estrutura da Redação', area: 'redacao', weight: 10, studied: false, difficulty: 'medio', needsReview: false },
  { id: '123', name: 'Argumentação', area: 'redacao', weight: 10, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '124', name: 'Proposta de Intervenção', area: 'redacao', weight: 9, studied: false, difficulty: 'dificil', needsReview: false },
  { id: '125', name: 'Coesão e Coerência', area: 'redacao', weight: 9, studied: false, difficulty: 'medio', needsReview: false },
  { id: '126', name: 'Repertório Sociocultural', area: 'redacao', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '127', name: 'Competências da Redação', area: 'redacao', weight: 8, studied: false, difficulty: 'medio', needsReview: false },
  { id: '128', name: 'Temas Atuais', area: 'redacao', weight: 7, studied: false, difficulty: 'facil', needsReview: false },
];