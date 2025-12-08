import React, { useState } from 'react';
import { Droplet, ThermometerSun } from 'lucide-react';

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
        colors: ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', '#ff69b4', '#ff69b4'],
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

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-purple-900 mb-6">Simulasi Indikator Asam Basa</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Kontrol Simulasi</h3>
          
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Nilai pH: {pHValue}</label>
            <input 
              type="range"
              min="0"
              max="14"
              step="0.1"
              value={pHValue}
              onChange={(e) => setPHValue(parseFloat(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
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
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>0 (Asam)</span>
              <span>7 (Netral)</span>
              <span>14 (Basa)</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Pilih Indikator:</label>
            <select 
              value={selectedIndicator}
              onChange={(e) => setSelectedIndicator(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
            >
              <option value="lakmus">Lakmus</option>
              <option value="fenolftalein">Fenolftalein</option>
              <option value="metil-orange">Metil Orange</option>
              <option value="bromtimol-biru">Bromtimol Biru</option>
            </select>
          </div>

          <button 
            onClick={handleAddIndicator}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
          >
            <Droplet className="w-5 h-5" />
            Tambahkan Indikator
          </button>

          <div className="mt-6 p-4 bg-purple-50 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">Informasi Indikator:</h4>
            <div className="text-sm text-gray-700">
              {selectedIndicator === 'lakmus' && (
                <p>Lakmus berubah merah pada pH {'<'} 4.5 dan biru pada pH {'>'} 8.3</p>
              )}
              {selectedIndicator === 'fenolftalein' && (
                <p>Fenolftalein tidak berwarna pada pH {'<'} 8.2 dan pink pada pH {'>'} 10</p>
              )}
              {selectedIndicator === 'metil-orange' && (
                <p>Metil Orange merah pada pH {'<'} 3.1, oranye pada pH 3.1-4.4, kuning pada pH {'>'} 4.4</p>
              )}
              {selectedIndicator === 'bromtimol-biru' && (
                <p>Bromtimol Biru kuning pada pH {'<'} 6, hijau pada pH 6-7.6, biru pada pH {'>'} 7.6</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Hasil Simulasi</h3>
          
          <div className="relative">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <svg width="200" height="300" viewBox="0 0 200 300">
                  <path 
                    d="M 50 50 L 50 200 Q 50 250 100 250 Q 150 250 150 200 L 150 50 Q 150 30 100 30 Q 50 30 50 50" 
                    fill="none" 
                    stroke="#666" 
                    strokeWidth="3"
                  />
                  <ellipse cx="100" cy="50" rx="50" ry="15" fill="none" stroke="#666" strokeWidth="3"/>
                  
                  <path 
                    d="M 50 200 L 50 210 Q 50 245 100 245 Q 150 245 150 210 L 150 200" 
                    fill={result.color}
                    opacity="0.9"
                  />
                  <ellipse cx="100" cy="200" rx="50" ry="15" fill={result.color} opacity="0.9"/>
                  
                  {showAnimation && (
                    <circle cx="100" cy="100" r="5" fill="#000">
                      <animate attributeName="cy" from="60" to="200" dur="1s" />
                      <animate attributeName="opacity" from="1" to="0" dur="1s" />
                    </circle>
                  )}
                </svg>
                <div className="text-center mt-2">
                  <p className="text-sm text-gray-600">Gelas Kimia</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 font-bold">pH Larutan:</p>
                  <p className="text-3xl font-bold" style={{ color: getPhaseColor(pHValue) }}>
                    {pHValue.toFixed(1)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-bold">Warna Indikator:</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div 
                      className="w-12 h-12 rounded-full border-2 border-gray-300"
                      style={{ backgroundColor: result.color }}
                    ></div>
                    <span className="font-bold">{result.label}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
              <p className="text-gray-700 font-bold mb-2">Kesimpulan:</p>
              <p className="text-gray-700">
                {pHValue < 7 && '🔴 Larutan bersifat ASAM'}
                {pHValue === 7 && '🟢 Larutan bersifat NETRAL'}
                {pHValue > 7 && '🔵 Larutan bersifat BASA'}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Indikator {selectedIndicator} menunjukkan warna {result.label.toLowerCase()} pada pH {pHValue.toFixed(1)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Skala pH Visual</h3>
        <div className="relative h-20 rounded-lg overflow-hidden" style={{
          background: 'linear-gradient(to right, #ff0000 0%, #ff6600 14%, #ffaa00 28%, #ffff00 42%, #00ff00 50%, #00aaff 64%, #0066ff 78%, #0000ff 100%)'
        }}>
          <div 
            className="absolute top-0 w-1 h-full bg-black"
            style={{ left: `${(pHValue / 14) * 100}%` }}
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm font-bold whitespace-nowrap">
              pH {pHValue.toFixed(1)}
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>0</span>
          <span>2</span>
          <span>4</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>10</span>
          <span>12</span>
          <span>14</span>
        </div>
      </div>
    </div>
  );
};

export default VirtualLab;