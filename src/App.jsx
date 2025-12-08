import React, { useState } from 'react';
import { Home } from 'lucide-react';
import LandingPage from './components/LandingPage';
import TheoryModule from './components/TheoryModule';
import TemperatureSimulation from './components/TemperatureSimulation';
import ConcentrationSimulation from './components/ConcentrationSimulation';
import VirtualLab from './components/VirtualLab';
import Assessment from './components/Assessment';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const renderPage = () => {
    switch(currentPage) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'theory':
        return <TheoryModule />;
      case 'calculator':
        return <TemperatureSimulation />;
      case 'indicator':
        return <VirtualLab />;
      case 'database':
        return <ConcentrationSimulation />;
      case 'quiz':
        return <Assessment />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage !== 'landing' && (
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-blue-900">Aplikasi Asam Basa</h1>
              <button 
                onClick={() => setCurrentPage('landing')}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Home className="w-5 h-5" />
                Beranda
              </button>
            </div>
          </div>
        </nav>
      )}
      
      <main>
        {renderPage()}
      </main>
      
      {currentPage !== 'landing' && (
        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm">© 2024 Aplikasi Pembelajaran Asam Basa. Dibuat untuk pendidikan.</p>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;