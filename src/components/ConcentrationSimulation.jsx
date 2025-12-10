import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const ConcentrationSimulation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubstance, setSelectedSubstance] = useState(null);

  const acidBaseDatabase = [
    { 
      name: 'HCl (Asam Klorida)', 
      type: 'Asam Kuat', 
      pH: '0-1', 
      formula: 'HCl',
      description: 'Asam klorida adalah asam kuat yang terionisasi sempurna dalam air.',
      uses: 'Digunakan dalam industri, pembersih, dan pengolahan makanan.'
    },
    { 
      name: 'H₂SO₄ (Asam Sulfat)', 
      type: 'Asam Kuat', 
      pH: '0-1', 
      formula: 'H₂SO₄',
      description: 'Asam sulfat adalah asam kuat diprotik yang sangat korosif.',
      uses: 'Digunakan dalam pembuatan pupuk, baterai aki, dan industri kimia.'
    },
    { 
      name: 'HNO₃ (Asam Nitrat)', 
      type: 'Asam Kuat', 
      pH: '0-1', 
      formula: 'HNO₃',
      description: 'Asam nitrat adalah asam kuat yang sangat oksidatif dan korosif.',
      uses: 'Digunakan dalam pembuatan pupuk, bahan peledak, dan industri logam.'
    },
    { 
      name: 'CH₃COOH (Asam Asetat)', 
      type: 'Asam Lemah', 
      pH: '2.4-3.4', 
      formula: 'CH₃COOH',
      description: 'Asam asetat adalah asam lemah yang terionisasi sebagian.',
      uses: 'Komponen utama cuka, digunakan dalam pengawetan makanan.'
    },
    { 
      name: 'H₃PO₄ (Asam Fosfat)', 
      type: 'Asam Lemah', 
      pH: '2.1-2.8', 
      formula: 'H₃PO₄',
      description: 'Asam fosfat adalah asam lemah triprotik yang tidak terlalu korosif.',
      uses: 'Digunakan dalam minuman ringan, pupuk, dan pembersih karat.'
    },
    { 
      name: 'H₂CO₃ (Asam Karbonat)', 
      type: 'Asam Lemah', 
      pH: '3-4', 
      formula: 'H₂CO₃',
      description: 'Asam karbonat terbentuk dari CO₂ terlarut dalam air.',
      uses: 'Terdapat dalam minuman bersoda dan air mineral.'
    },
    { 
      name: 'C₆H₈O₇ (Asam Sitrat)', 
      type: 'Asam Lemah', 
      pH: '2.2-3.5', 
      formula: 'C₆H₈O₇',
      description: 'Asam sitrat adalah asam organik lemah yang terdapat di buah jeruk.',
      uses: 'Digunakan sebagai pengawet, perasa makanan, dan pembersih.'
    },
    { 
      name: 'HCOOH (Asam Format)', 
      type: 'Asam Lemah', 
      pH: '2.3-2.5', 
      formula: 'HCOOH',
      description: 'Asam format adalah asam karboksilat paling sederhana.',
      uses: 'Digunakan dalam pengawet pakan ternak dan industri tekstil.'
    },
    { 
      name: 'NaOH (Natrium Hidroksida)', 
      type: 'Basa Kuat', 
      pH: '13-14', 
      formula: 'NaOH',
      description: 'Natrium hidroksida adalah basa kuat yang sangat korosif.',
      uses: 'Digunakan dalam pembuatan sabun, kertas, dan pembersih saluran.'
    },
    { 
      name: 'KOH (Kalium Hidroksida)', 
      type: 'Basa Kuat', 
      pH: '13-14', 
      formula: 'KOH',
      description: 'Kalium hidroksida adalah basa kuat yang sangat higroskopis.',
      uses: 'Digunakan dalam pembuatan sabun lunak, baterai alkalin, dan biodiesel.'
    },
    { 
      name: 'Ca(OH)₂ (Kalsium Hidroksida)', 
      type: 'Basa Kuat', 
      pH: '12-13', 
      formula: 'Ca(OH)₂',
      description: 'Kalsium hidroksida atau kapur tohor adalah basa kuat dengan kelarutan terbatas.',
      uses: 'Digunakan dalam konstruksi, pengolahan air, dan industri gula.'
    },
    { 
      name: 'NH₃ (Amonia)', 
      type: 'Basa Lemah', 
      pH: '11-12', 
      formula: 'NH₃',
      description: 'Amonia adalah basa lemah dengan bau menyengat.',
      uses: 'Digunakan dalam pupuk, pembersih, dan industri refrigeran.'
    },
    { 
      name: 'NaHCO₃ (Natrium Bikarbonat)', 
      type: 'Basa Lemah', 
      pH: '8-9', 
      formula: 'NaHCO₃',
      description: 'Natrium bikarbonat atau soda kue adalah basa lemah yang aman.',
      uses: 'Digunakan dalam kue, antasida, pembersih, dan pemadam kebakaran.'
    },
    { 
      name: 'Mg(OH)₂ (Magnesium Hidroksida)', 
      type: 'Basa Lemah', 
      pH: '9-10', 
      formula: 'Mg(OH)₂',
      description: 'Magnesium hidroksida adalah basa lemah dengan kelarutan rendah.',
      uses: 'Digunakan sebagai antasida dan pencahar (milk of magnesia).'
    },
    { 
      name: 'Na₂CO₃ (Natrium Karbonat)', 
      type: 'Basa Lemah', 
      pH: '11-12', 
      formula: 'Na₂CO₃',
      description: 'Natrium karbonat atau soda abu adalah basa lemah yang larut dalam air.',
      uses: 'Digunakan dalam pembuatan kaca, deterjen, dan pelembut air.'
    },
  ];

  const filteredDatabase = acidBaseDatabase.filter(substance =>
    substance.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    substance.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    substance.formula.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTypeColor = (type) => {
    if (type === 'Asam Kuat') return 'from-red-400 to-red-600';
    if (type === 'Asam Lemah') return 'from-orange-400 to-orange-600';
    if (type === 'Basa Kuat') return 'from-blue-400 to-blue-600';
    if (type === 'Basa Lemah') return 'from-cyan-400 to-cyan-600';
    return 'from-gray-400 to-gray-600';
  };

  const getTypeBg = (type) => {
    if (type === 'Asam Kuat') return 'bg-red-50/10 border-red-200/30';
    if (type === 'Asam Lemah') return 'bg-orange-50/10 border-orange-200/30';
    if (type === 'Basa Kuat') return 'bg-blue-50/10 border-blue-200/30';
    if (type === 'Basa Lemah') return 'bg-cyan-50/10 border-cyan-200/30';
    return 'bg-gray-50/10 border-gray-200/30';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-orange-500/20 rounded-lg">
              <Search className="w-6 h-6 text-orange-400" />
            </div>
            <h1 className="text-4xl font-bold text-white">Database Zat Asam dan Basa</h1>
          </div>
          <p className="text-white/60">Jelajahi berbagai zat asam dan basa beserta karakteristiknya</p>
        </div>

        {/* Search */}
        <div className="mb-8 rounded-2xl border-2 border-orange-200/30 bg-orange-50/10 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-orange-400" />
            <input 
              type="text"
              placeholder="Cari zat berdasarkan nama, jenis, atau rumus..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-white/10 border border-orange-400/50 text-white px-4 py-3 rounded-lg focus:border-orange-400 focus:outline-none placeholder-white/50"
            />
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {filteredDatabase.map((substance, index) => (
            <div 
              key={index}
              onClick={() => setSelectedSubstance(substance)}
              className={`group relative rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${getTypeBg(substance.type)}`}
            >
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold text-white text-lg flex-1">{substance.name}</h4>
                </div>
                
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(substance.type)} text-white text-xs font-bold mb-3`}>
                  {substance.type}
                </div>

                <div className="space-y-2 text-white/70 text-sm">
                  <p><strong>Rumus:</strong> {substance.formula}</p>
                  <p><strong>pH:</strong> {substance.pH}</p>
                </div>

                <div className="mt-4 text-orange-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Lihat detail →
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDatabase.length === 0 && (
          <div className="rounded-2xl border-2 border-indigo-200/30 bg-indigo-50/10 p-12 text-center backdrop-blur-sm">
            <p className="text-white/60 text-lg">Tidak ada zat yang ditemukan. Coba kata kunci lain.</p>
          </div>
        )}

        {/* Detail Modal */}
        {selectedSubstance && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="rounded-2xl border-2 border-white/20 bg-gradient-to-br from-slate-900 to-slate-800 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-sm">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedSubstance.name}</h2>
                <button 
                  onClick={() => setSelectedSubstance(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="space-y-6">
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${getTypeColor(selectedSubstance.type)} text-white font-bold`}>
                  {selectedSubstance.type}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-white/10 p-4 border border-white/20">
                    <p className="text-white/60 text-sm mb-1">Rumus Kimia</p>
                    <p className="text-xl font-bold text-white">{selectedSubstance.formula}</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4 border border-white/20">
                    <p className="text-white/60 text-sm mb-1">Rentang pH</p>
                    <p className="text-xl font-bold text-white">{selectedSubstance.pH}</p>
                  </div>
                </div>

                <div className="rounded-lg bg-white/10 p-4 border border-white/20">
                  <h3 className="font-bold text-white mb-2">Deskripsi</h3>
                  <p className="text-white/70">{selectedSubstance.description}</p>
                </div>

                <div className="rounded-lg bg-white/10 p-4 border border-white/20">
                  <h3 className="font-bold text-white mb-2">Kegunaan</h3>
                  <p className="text-white/70">{selectedSubstance.uses}</p>
                </div>

                <button 
                  onClick={() => setSelectedSubstance(null)}
                  className="w-full py-3 rounded-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-500/50"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConcentrationSimulation;