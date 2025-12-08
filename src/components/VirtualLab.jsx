import React, { useState } from 'react';
import { Droplet, Beaker } from 'lucide-react';

const VirtualLab = () => {
  const [selectedIndicator, setSelectedIndicator] = useState('lakmus');
  const [pHValue, setPHValue] = useState(7);
  const [showAnimation, setShowAnimation] = useState(false);

  const getIndicatorColor = (pH, indicator) => {
    const indicators = {
      lakmus: { 
        range: [0, 4.5, 8.3, 14], 
        colors: ['#ff4444', '#ff4444', '#4444ff', '#4444ff'],
        labels: ['Merah', 'Merah', 'Biru', 'Biru']
      },
      fenolftalein: { 
        range: [0, 8.2, 10, 14], 
        colors: ['rgba(200,200,200,0.5)', 'rgba(200,200,200,0.5)', '#ff69b4', '#ff69b4'],
        labels: ['Tidak Berwarna', 'Tidak Berwarna', 'Pink', 'Pink']
      },
      'metil-orange': { 
        range: [0, 3.1, 4.4, 14], 
        colors: ['#ff4444', '#ff9944', '#ffff44', '#ffff44'],
        labels: ['Merah', 'Oranye', 'Kuning', 'Kuning']
      },
      'bromtimol-biru': {
        range: [0, 6, 7.6, 14],
        colors: ['#ffff00', '#00ff00', '#0066ff', '#0066ff'],
        labels: ['Kuning', 'Hijau', 'Biru', 'Biru']
      }
    };
    
    const ind = indicators[indicator];
    for (let i = 0; i < ind.range.length - 1; i++) {
      if (pH >= ind.range[i] && pH < ind.range[i + 1]) {
        return { color: ind.colors[i], label: ind.labels[i] };
      }
    }
    return { color: ind.colors[ind.colors.length - 1], label: ind.labels[ind.labels.length - 1] };
  };

  const handleAddIndicator = () => {
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 1000);
  };

  const result = getIndicatorColor(pHValue, selectedIndicator);

  const getPhaseColor = (pH) => {
    if (pH < 3) return '#ff0000';
    if (pH < 5) return '#ff6600';
    if (pH < 6) return '#ffaa00';
    if (pH < 7) return '#ffff00';
    if (pH === 7) return '#00ff00';
    if (pH < 9) return '#00aaff';
    if (pH < 11) return '#0066ff';
    return '#0000ff';
  };

  const indicatorInfo = {
    lakmus: "Lakmus berubah merah pada pH < 4.5 dan biru pada pH > 8.3",
    fenolftalein: "Fenolftalein tidak berwarna pada pH < 8.2 dan pink pada pH > 10",
    'metil-orange': "Metil Orange merah pada pH < 3.1, oranye pada pH 3.1-4.4, kuning pada pH > 4.4",
    'bromtimol-biru': "Bromtimol Biru kuning pada pH < 6, hijau pada pH 6-7.6, biru pada pH > 7.6"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-violet-500/20 rounded-lg">
              <Beaker className="w-6 h-6 text-violet-400" />
            </div>
            <h1 className="text-4xl font-bold text-white">Simulasi Indikator Asam Basa</h1>
          </div>
          <p className="text-white/60">Eksplorasi perubahan warna indikator pada berbagai tingkat pH</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Control Panel */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* pH Slider */}
              <div className="rounded-2xl border-2 border-violet-200/30 bg-violet-50/10 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Droplet className="w-5 h-5 text-violet-400" />
                  <label className="text-white font-bold">Kontrol pH</label>
                </div>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-white mb-2">
                    {pHValue.toFixed(1)}
                  </div>
                  <p className="text-white/60 text-sm mb-4">
                    {pHValue < 7 && '🔴 Asam'}
                    {pHValue === 7 && '🟢 Netral'}
                    {pHValue > 7 && '🔵 Basa'}
                  </p>
                </div>

                <input 
                  type="range"
                  min="0"
                  max="14"
                  step="0.1"
                  value={pHValue}
                  onChange={(e) => setPHValue(parseFloat(e.target.value))}
                  className="w-full h-3 rounded-lg appearance-none cursor-pointer accent-violet-500"
                  style={{
                    background: `linear-gradient(to right, 
                      #ff0000 0%, 
                      #ff6600 20%, 
                      #ffff00 40%, 
                      #00ff00 50%, 
                      #00aaff 70%, 
                      #0000ff 100%)`
                  }}
                />
                
                <div className="flex justify-between text-xs text-white/50 mt-2">
                  <span>0 Asam</span>
                  <span>7 Netral</span>
                  <span>14 Basa</span>
                </div>
              </div>

              {/* Indicator Selection */}
              <div className="rounded-2xl border-2 border-emerald-200/30 bg-emerald-50/10 p-6 backdrop-blur-sm">
                <label className="text-white font-bold mb-3 block">Pilih Indikator</label>
                <select 
                  value={selectedIndicator}
                  onChange={(e) => setSelectedIndicator(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-emerald-400/50 text-white focus:border-emerald-400 focus:outline-none transition-colors"
                >
                  <option value="lakmus" className="bg-slate-800">Lakmus</option>
                  <option value="fenolftalein" className="bg-slate-800">Fenolftalein</option>
                  <option value="metil-orange" className="bg-slate-800">Metil Orange</option>
                  <option value="bromtimol-biru" className="bg-slate-800">Bromtimol Biru</option>
                </select>
              </div>

              {/* Info Box */}
              <div className="rounded-2xl border-2 border-cyan-200/30 bg-cyan-50/10 p-6 backdrop-blur-sm">
                <h4 className="font-bold text-cyan-400 mb-3 text-sm">ℹ️ Informasi</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {indicatorInfo[selectedIndicator]}
                </p>
              </div>

              {/* Add Button */}
              <button 
                onClick={handleAddIndicator}
                className="w-full py-4 rounded-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-500/50"
              >
                <Droplet className="w-5 h-5 inline mr-2" />
                Tambahkan Indikator
              </button>
            </div>
          </div>

          {/* Visualization */}
          <div className="lg:col-span-2 space-y-6">
            {/* Flask Visualization */}
            <div className="rounded-2xl border-2 border-cyan-200/30 bg-gradient-to-br from-cyan-950/50 to-blue-950/50 p-8 backdrop-blur-sm flex items-center justify-center min-h-96">
              <div className="relative">
                {/* Flask SVG */}
                <svg width="250" height="350" viewBox="0 0 250 350" className="drop-shadow-2xl">
                  {/* Flask outline */}
                  <g>
                    <ellipse cx="125" cy="80" rx="60" ry="20" fill="none" stroke="#e2e8f0" strokeWidth="2"/>
                    <path d="M 65 80 L 70 180 Q 70 220 125 220 Q 180 220 180 180 L 185 80" fill="none" stroke="#e2e8f0" strokeWidth="3"/>
                    <ellipse cx="125" cy="220" rx="55" ry="20" fill="none" stroke="#e2e8f0" strokeWidth="2"/>
                    
                    {/* Liquid inside */}
                    <ellipse cx="125" cy="140" rx="45" ry="40" fill={result.color} opacity="0.85"/>
                    <path d="M 80 140 Q 80 190 125 200 Q 170 190 170 140" fill={result.color} opacity="0.85"/>
                    
                    {/* Shine effect */}
                    <ellipse cx="110" cy="120" rx="15" ry="25" fill="white" opacity="0.3"/>
                  </g>
                </svg>

                {/* Dripping animation */}
                {showAnimation && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-20 bg-gradient-to-b from-white/80 to-transparent rounded-full animate-pulse"></div>
                  </div>
                )}

                {/* Label */}
                <div className="text-center mt-4">
                  <p className="text-white/70 text-sm">Gelas Kimia</p>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border-2 border-rose-200/30 bg-rose-50/10 p-6 backdrop-blur-sm">
                <p className="text-white/60 text-sm mb-2">Sifat Larutan</p>
                <p className="text-2xl font-bold text-rose-400 mb-2">
                  {pHValue < 7 && 'ASAM'}
                  {pHValue === 7 && 'NETRAL'}
                  {pHValue > 7 && 'BASA'}
                </p>
                <p className="text-white/70 text-xs">pH = {pHValue.toFixed(1)}</p>
              </div>

              <div className="rounded-2xl border-2 border-amber-200/30 bg-amber-50/10 p-6 backdrop-blur-sm">
                <p className="text-white/60 text-sm mb-2">Warna Indikator</p>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full border-2 border-white/30 shadow-lg"
                    style={{ backgroundColor: result.color }}
                  ></div>
                  <p className="font-bold text-amber-400">{result.label}</p>
                </div>
              </div>
            </div>

            {/* pH Scale */}
            <div className="rounded-2xl border-2 border-indigo-200/30 bg-indigo-50/10 p-6 backdrop-blur-sm">
              <p className="text-white/60 text-sm mb-4 font-semibold">Skala pH Visual</p>
              <div className="relative h-12 rounded-xl overflow-hidden shadow-lg" style={{
                background: 'linear-gradient(to right, #ff0000 0%, #ff6600 14%, #ffaa00 28%, #ffff00 42%, #00ff00 50%, #00aaff 64%, #0066ff 78%, #0000ff 100%)'
              }}>
                <div 
                  className="absolute top-0 w-1 h-full bg-white shadow-lg transition-all duration-300"
                  style={{ left: `${(pHValue / 14) * 100}%` }}
                >
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap">
                    {pHValue.toFixed(1)}
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-3 text-xs text-white/50 px-1">
                <span>0</span><span>2</span><span>4</span><span>6</span><span>7</span><span>8</span><span>10</span><span>12</span><span>14</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualLab;