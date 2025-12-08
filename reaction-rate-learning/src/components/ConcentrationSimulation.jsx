import React, { useState } from 'react';
import { Beaker } from 'lucide-react';

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
      description: 'Asam nitrat adalah asam kuat yang bersifat oksidator kuat.',
      uses: 'Digunakan dalam pembuatan pupuk, bahan peledak, dan pewarna.'
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
      pH: '1.5-2.2', 
      formula: 'H₃PO₄',
      description: 'Asam fosfat adalah asam lemah triprotik.',
      uses: 'Digunakan dalam minuman bersoda, pupuk, dan deterjen.'
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
      description: 'Kalium hidroksida adalah basa kuat yang higroskopis.',
      uses: 'Digunakan dalam pembuatan sabun cair dan baterai alkalin.'
    },
    { 
      name: 'Ca(OH)₂ (Kalsium Hidroksida)', 
      type: 'Basa Kuat', 
      pH: '12-13', 
      formula: 'Ca(OH)₂',
      description: 'Kalsium hidroksida atau kapur tohor adalah basa kuat.',
      uses: 'Digunakan dalam konstruksi, pengolahan air, dan pertanian.'
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
      name: 'Al(OH)₃ (Aluminium Hidroksida)', 
      type: 'Basa Lemah', 
      pH: '9-10', 
      formula: 'Al(OH)₃',
      description: 'Aluminium hidroksida adalah basa lemah amfoter.',
      uses: 'Digunakan dalam antasida dan pengolahan air.'
    },
  ];

  const filteredDatabase = acidBaseDatabase.filter(substance =>
    substance.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    substance.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    substance.formula.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTypeColor = (type) => {
    if (type.includes('Asam Kuat')) return 'bg-red-100 text-red-800';
    if (type.includes('Asam Lemah')) return 'bg-orange-100 text-orange-800';
    if (type.includes('Basa Kuat')) return 'bg-blue-100 text-blue-800';
    if (type.includes('Basa Lemah')) return 'bg-cyan-100 text-cyan-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-orange-900 mb-6">Database Zat Asam dan Basa</h2>
      
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Beaker className="w-6 h-6 text-orange-600" />
          <h3 className="text-xl font-bold text-gray-800">Cari Zat</h3>
        </div>
        <input 
          type="text"
          placeholder="Cari berdasarkan nama, jenis, atau rumus..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {filteredDatabase.map((substance, index) => (
          <div 
            key={index}
            onClick={() => setSelectedSubstance(substance)}
            className="bg-white rounded-xl shadow-lg p-4 cursor-pointer hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-gray-800 text-lg">{substance.name}</h4>
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${getTypeColor(substance.type)}`}>
                {substance.type}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-2">Rumus: <strong>{substance.formula}</strong></p>
            <p className="text-gray-600 text-sm">pH: <strong>{substance.pH}</strong></p>
          </div>
        ))}
      </div>

      {filteredDatabase.length === 0 && (
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <p className="text-gray-600">Tidak ada zat yang ditemukan. Coba kata kunci lain.</p>
        </div>
      )}

      {selectedSubstance && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Detail Zat</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700 mb-2"><strong>Nama:</strong> {selectedSubstance.name}</p>
              <p className="text-gray-700 mb-2"><strong>Rumus Kimia:</strong> {selectedSubstance.formula}</p>
              <p className="text-gray-700 mb-2"><strong>Jenis:</strong> {selectedSubstance.type}</p>
              <p className="text-gray-700 mb-2"><strong>Rentang pH:</strong> {selectedSubstance.pH}</p>
            </div>
            <div>
              <p className="text-gray-700 mb-2"><strong>Deskripsi:</strong></p>
              <p className="text-gray-600 mb-4">{selectedSubstance.description}</p>
              <p className="text-gray-700 mb-2"><strong>Kegunaan:</strong></p>
              <p className="text-gray-600">{selectedSubstance.uses}</p>
            </div>
          </div>
          <button 
            onClick={() => setSelectedSubstance(null)}
            className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Tutup Detail
          </button>
        </div>
      )}
    </div>
  );
};

export default ConcentrationSimulation;