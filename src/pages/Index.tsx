import React, { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import StudyDashboard from '@/components/StudyDashboard';

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');

  return (
    <>
      {currentView === 'landing' ? (
        <LandingPage onNavigateToDashboard={() => setCurrentView('dashboard')} />
      ) : (
        <StudyDashboard />
      )}
    </>
  );
};

export default Index;
