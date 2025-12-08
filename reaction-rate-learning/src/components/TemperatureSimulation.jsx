import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const TemperatureSimulation = () => {
  const [concentration, setConcentration] = useState(0.1);
  const [solutionType, setSolutionType] = useState('strong-acid');
  const [pH, setPH] = useState(null);
  const [selectedIndicator, setSelectedIndicator] = useState('lakmus');
  const [indicatorColor, setIndicatorColor] = useState('#fff');

  const calculatePH = (conc, type) => {
    let result;
    if (type === 'strong-acid') {
      result = -Math.log10(conc);
    } else if (type === 'strong-base') {
      const pOH = -Math.log10(conc);
      result = 14 - pOH;
    } else if (type === 'weak-acid') {
      const Ka = 1.8e-5;
      const H = Math.sqrt(Ka * conc);
      result = -Math.log10(H);
    } else if (type === 'weak-base') {
      const Kb = 1.8e-5;
      const OH = Math.sqrt(Kb * conc);
      const pOH = -Math.log10(OH);
      result = 14 - pOH;
    }
    return result;
  };

  const getIndicatorColor = (pHValue, indicator) => {
    const indicators = {
      lakmus: { range: [0, 4.5, 8.3, 14], colors: ['#ff4444', '#ff4444', '#4444ff', '#4444ff'] },
      fenolftalein: { range: [0, 8.2, 10, 14], colors: ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', '#ff69b4', '#ff69b4'] },
      'metil-orange': { range: [0, 3.1, 4.4, 14], colors: ['#ff4444', '#ff9944', '#ffff44', '#ffff44'] }
    };
    
    const ind = indicators[indicator];
    for (let i = 0; i < ind.range.length - 1; i++) {
      if (pHValue >= ind.range[i] && pHValue < ind.range[i + 1]) {
        return ind.colors[i];
      }
    }
    return ind.colors[ind.colors.length - 1];
  };

  const handleCalculate = () => {
    const calculatedPH = calculatePH(concentration, solutionType);
    setPH(calculatedPH);
    const color = getIndicatorColor(calculatedPH, selectedIndicator);
    setIndicatorColor(color);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-green-900 mb-6">Kalkulator pH</h2>
      
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Input Data Larutan</h3>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Jenis Larutan:</label>
          <select 
            value={solutionType}
            onChange={(e) => setSolutionType(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
          >
            <option value="strong-acid">Asam Kuat</option>
            <option value="strong-base">Basa Kuat</option>
            <option value="weak-acid">Asam Lemah</option>
            <option value="weak-base">Basa Lemah</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Konsentrasi (M): {concentration}
          </label>
          <input 
            type="range"
            min="0.001"
            max="1"
            step="0.001"
            value={concentration}
            onChange={(e) => setConcentration(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>0.001 M</span>
            <span>1 M</span>
          </div>
        </div>

        <button 
          onClick={handleCalculate}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
        >
          <Calculator className="w-5 h-5" />
          Hitung pH
        </button>
      </div>

      {pH !== null && (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Hasil Perhitungan</h3>
          <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-lg text-center">
            <p className="text-gray-700 mb-2">pH Larutan:</p>
            <p className="text-5xl font-bold text-green-900">{pH.toFixed(2)}</p>
            <p className="text-gray-700 mt-4">
              {pH < 7 ? '🔴 Larutan bersifat ASAM' : pH === 7 ? '🟢 Larutan bersifat NETRAL' : '🔵 Larutan bersifat BASA'}
            </p>
          </div>
        </div>
      )}

      {pH !== null && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Indikator Warna</h3>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Pilih Indikator:</label>
            <select 
              value={selectedIndicator}
              onChange={(e) => {
                setSelectedIndicator(e.target.value);
                const color = getIndicatorColor(pH, e.target.value);
                setIndicatorColor(color);
              }}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
            >
              <option value="lakmus">Lakmus</option>
              <option value="fenolftalein">Fenolftalein</option>
              <option value="metil-orange">Metil Orange</option>
            </select>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4 font-bold">Warna Indikator:</p>
            <div 
              className="w-32 h-32 mx-auto rounded-full border-4 border-gray-300 shadow-lg"
              style={{ backgroundColor: indicatorColor }}
            ></div>
            <p className="text-gray-600 mt-4">
              {selectedIndicator === 'lakmus' && (pH < 4.5 ? 'Merah (Asam)' : pH < 8.3 ? 'Merah (Asam)' : 'Biru (Basa)')}
              {selectedIndicator === 'fenolftalein' && (pH < 8.2 ? 'Tidak Berwarna' : 'Pink (Basa)')}
              {selectedIndicator === 'metil-orange' && (pH < 3.1 ? 'Merah' : pH < 4.4 ? 'Oranye' : 'Kuning')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemperatureSimulation;