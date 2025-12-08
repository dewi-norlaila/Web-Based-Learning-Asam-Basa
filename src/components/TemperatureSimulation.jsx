import React, { useState } from 'react';
import { Calculator, Droplets } from 'lucide-react';

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
      fenolftalein: { range: [0, 8.2, 10, 14], colors: ['rgba(200,200,200,0.5)', 'rgba(200,200,200,0.5)', '#ff69b4', '#ff69b4'] },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-emerald-500/20 rounded-lg">
              <Calculator className="w-6 h-6 text-emerald-400" />
            </div>
            <h1 className="text-4xl font-bold text-white">Kalkulator pH</h1>
          </div>
          <p className="text-white/60">Hitung pH larutan berdasarkan konsentrasi dan jenis zat</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Panel */}
          <div className="space-y-6">
            <div className="rounded-2xl border-2 border-emerald-200/30 bg-emerald-50/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">Input Data Larutan</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-white/70 text-sm mb-2 block">Jenis Larutan:</label>
                  <select 
                    value={solutionType}
                    onChange={(e) => setSolutionType(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-emerald-400/50 text-white focus:border-emerald-400 focus:outline-none"
                  >
                    <option value="strong-acid" className="bg-slate-800">Asam Kuat (HCl, H₂SO₄)</option>
                    <option value="strong-base" className="bg-slate-800">Basa Kuat (NaOH, KOH)</option>
                    <option value="weak-acid" className="bg-slate-800">Asam Lemah (CH₃COOH)</option>
                    <option value="weak-base" className="bg-slate-800">Basa Lemah (NH₃)</option>
                  </select>
                </div>

                <div>
                  <label className="text-white/70 text-sm mb-2 block">Konsentrasi (mol/L):</label>
                  <input 
                    type="number"
                    min="0.001"
                    max="1"
                    step="0.001"
                    value={concentration}
                    onChange={(e) => setConcentration(parseFloat(e.target.value))}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-emerald-400/50 text-white focus:border-emerald-400 focus:outline-none"
                  />
                  <p className="text-white/50 text-xs mt-1">Nilai: {concentration.toFixed(3)} M</p>
                </div>

                <div>
                  <label className="text-white/70 text-sm mb-2 block">Indikator:</label>
                  <select 
                    value={selectedIndicator}
                    onChange={(e) => setSelectedIndicator(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-emerald-400/50 text-white focus:border-emerald-400 focus:outline-none"
                  >
                    <option value="lakmus" className="bg-slate-800">Lakmus</option>
                    <option value="fenolftalein" className="bg-slate-800">Fenolftalein</option>
                    <option value="metil-orange" className="bg-slate-800">Metil Orange</option>
                  </select>
                </div>
              </div>

              <button 
                onClick={handleCalculate}
                className="w-full mt-6 py-3 rounded-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 hover:shadow-lg hover:shadow-emerald-500/50"
              >
                <Droplets className="w-5 h-5 inline mr-2" />
                Hitung pH
              </button>
            </div>
          </div>

          {/* Result Panel */}
          <div className="space-y-6">
            {pH !== null && (
              <>
                <div className="rounded-2xl border-2 border-amber-200/30 bg-gradient-to-br from-amber-950/50 to-orange-950/50 p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-amber-400 mb-4">Hasil Perhitungan</h3>
                  
                  <div className="space-y-4">
                    <div className="rounded-lg bg-white/10 p-4 border border-amber-400/30">
                      <p className="text-white/60 text-sm mb-1">Nilai pH:</p>
                      <p className="text-4xl font-bold text-amber-400">{pH.toFixed(2)}</p>
                    </div>

                    <div className="rounded-lg bg-white/10 p-4 border border-amber-400/30">
                      <p className="text-white/60 text-sm mb-2">Sifat Larutan:</p>
                      <p className="text-xl font-bold text-white">
                        {pH < 7 && '🔴 ASAM'}
                        {pH === 7 && '🟢 NETRAL'}
                        {pH > 7 && '🔵 BASA'}
                      </p>
                    </div>

                    <div className="rounded-lg bg-white/10 p-4 border border-amber-400/30">
                      <p className="text-white/60 text-sm mb-3">Warna Indikator {selectedIndicator}:</p>
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-16 h-16 rounded-lg border-2 border-white/30 shadow-lg"
                          style={{ backgroundColor: indicatorColor }}
                        ></div>
                        <p className="text-white font-semibold">{selectedIndicator}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {pH === null && (
              <div className="rounded-2xl border-2 border-indigo-200/30 bg-indigo-50/10 p-6 backdrop-blur-sm text-center">
                <p className="text-white/60">Masukkan data dan klik "Hitung pH" untuk melihat hasil</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureSimulation;