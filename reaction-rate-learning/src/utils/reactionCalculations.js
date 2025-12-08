// Fungsi untuk menghitung pH
export const calculatePH = (concentration, type, strength) => {
  if (type === 'strong-acid') {
    return -Math.log10(concentration);
  } else if (type === 'strong-base') {
    const pOH = -Math.log10(concentration);
    return 14 - pOH;
  } else if (type === 'weak-acid') {
    const Ka = strength || 1.8e-5; // Default Ka untuk asam lemah
    const H = Math.sqrt(Ka * concentration);
    return -Math.log10(H);
  } else if (type === 'weak-base') {
    const Kb = strength || 1.8e-5; // Default Kb untuk basa lemah
    const OH = Math.sqrt(Kb * concentration);
    const pOH = -Math.log10(OH);
    return 14 - pOH;
  }
  return 7;
};

// Fungsi untuk menghitung pOH
export const calculatePOH = (pH) => {
  return 14 - pH;
};

// Fungsi untuk menghitung konsentrasi H+ dari pH
export const calculateHConcentration = (pH) => {
  return Math.pow(10, -pH);
};

// Fungsi untuk menghitung konsentrasi OH- dari pOH
export const calculateOHConcentration = (pOH) => {
  return Math.pow(10, -pOH);
};

// Fungsi untuk mendapatkan warna indikator berdasarkan pH
export const getIndicatorColor = (pH, indicator) => {
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
  if (!ind) return { color: '#ffffff', label: 'Unknown' };
  
  for (let i = 0; i < ind.range.length - 1; i++) {
    if (pH >= ind.range[i] && pH < ind.range[i + 1]) {
      return { color: ind.colors[i], label: ind.labels[i] };
    }
  }
  return { 
    color: ind.colors[ind.colors.length - 1], 
    label: ind.labels[ind.labels.length - 1] 
  };
};

// Database zat asam dan basa
export const acidBaseDatabase = [
  { 
    name: 'HCl (Asam Klorida)', 
    type: 'Asam Kuat', 
    pH: '0-1', 
    formula: 'HCl',
    description: 'Asam klorida adalah asam kuat yang terionisasi sempurna dalam air.',
    uses: 'Digunakan dalam industri, pembersih, dan pengolahan makanan.',
    Ka: null
  },
  { 
    name: 'H₂SO₄ (Asam Sulfat)', 
    type: 'Asam Kuat', 
    pH: '0-1', 
    formula: 'H₂SO₄',
    description: 'Asam sulfat adalah asam kuat diprotik yang sangat korosif.',
    uses: 'Digunakan dalam pembuatan pupuk, baterai aki, dan industri kimia.',
    Ka: null
  },
  { 
    name: 'HNO₃ (Asam Nitrat)', 
    type: 'Asam Kuat', 
    pH: '0-1', 
    formula: 'HNO₃',
    description: 'Asam nitrat adalah asam kuat yang bersifat oksidator kuat.',
    uses: 'Digunakan dalam pembuatan pupuk, bahan peledak, dan pewarna.',
    Ka: null
  },
  { 
    name: 'CH₃COOH (Asam Asetat)', 
    type: 'Asam Lemah', 
    pH: '2.4-3.4', 
    formula: 'CH₃COOH',
    description: 'Asam asetat adalah asam lemah yang terionisasi sebagian.',
    uses: 'Komponen utama cuka, digunakan dalam pengawetan makanan.',
    Ka: 1.8e-5
  },
  { 
    name: 'H₃PO₄ (Asam Fosfat)', 
    type: 'Asam Lemah', 
    pH: '1.5-2.2', 
    formula: 'H₃PO₄',
    description: 'Asam fosfat adalah asam lemah triprotik.',
    uses: 'Digunakan dalam minuman bersoda, pupuk, dan deterjen.',
    Ka: 7.5e-3
  },
  { 
    name: 'NaOH (Natrium Hidroksida)', 
    type: 'Basa Kuat', 
    pH: '13-14', 
    formula: 'NaOH',
    description: 'Natrium hidroksida adalah basa kuat yang sangat korosif.',
    uses: 'Digunakan dalam pembuatan sabun, kertas, dan pembersih saluran.',
    Kb: null
  },
  { 
    name: 'KOH (Kalium Hidroksida)', 
    type: 'Basa Kuat', 
    pH: '13-14', 
    formula: 'KOH',
    description: 'Kalium hidroksida adalah basa kuat yang higroskopis.',
    uses: 'Digunakan dalam pembuatan sabun cair dan baterai alkalin.',
    Kb: null
  },
  { 
    name: 'Ca(OH)₂ (Kalsium Hidroksida)', 
    type: 'Basa Kuat', 
    pH: '12-13', 
    formula: 'Ca(OH)₂',
    description: 'Kalsium hidroksida atau kapur tohor adalah basa kuat.',
    uses: 'Digunakan dalam konstruksi, pengolahan air, dan pertanian.',
    Kb: null
  },
  { 
    name: 'NH₃ (Amonia)', 
    type: 'Basa Lemah', 
    pH: '11-12', 
    formula: 'NH₃',
    description: 'Amonia adalah basa lemah dengan bau menyengat.',
    uses: 'Digunakan dalam pupuk, pembersih, dan industri refrigeran.',
    Kb: 1.8e-5
  },
  { 
    name: 'Al(OH)₃ (Aluminium Hidroksida)', 
    type: 'Basa Lemah', 
    pH: '9-10', 
    formula: 'Al(OH)₃',
    description: 'Aluminium hidroksida adalah basa lemah amfoter.',
    uses: 'Digunakan dalam antasida dan pengolahan air.',
    Kb: 1.0e-9
  },
];

// Fungsi untuk menentukan sifat larutan berdasarkan pH
export const getSolutionNature = (pH) => {
  if (pH < 7) return { nature: 'Asam', emoji: '🔴', color: '#ff4444' };
  if (pH === 7) return { nature: 'Netral', emoji: '🟢', color: '#00ff00' };
  return { nature: 'Basa', emoji: '🔵', color: '#4444ff' };
};

// Fungsi untuk menghitung pH campuran asam kuat dan basa kuat
export const calculateMixturePH = (acidConc, acidVol, baseConc, baseVol) => {
  const molAcid = acidConc * acidVol;
  const molBase = baseConc * baseVol;
  const totalVol = acidVol + baseVol;
  
  if (molAcid > molBase) {
    const excessH = (molAcid - molBase) / totalVol;
    return -Math.log10(excessH);
  } else if (molBase > molAcid) {
    const excessOH = (molBase - molAcid) / totalVol;
    const pOH = -Math.log10(excessOH);
    return 14 - pOH;
  } else {
    return 7; // Titik ekivalen
  }
};