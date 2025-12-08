// Fungsi untuk mendapatkan warna berdasarkan pH
export const getPhColor = (pH) => {
  if (pH < 3) return '#ff0000';
  if (pH < 5) return '#ff6600';
  if (pH < 6) return '#ffaa00';
  if (pH < 7) return '#ffff00';
  if (pH === 7) return '#00ff00';
  if (pH < 9) return '#00aaff';
  if (pH < 11) return '#0066ff';
  return '#0000ff';
};

// Fungsi untuk menghasilkan posisi partikel acak
export const generateParticles = (count, width, height) => {
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 3 + 2
    });
  }
  return particles;
};

// Fungsi untuk memperbarui posisi partikel
export const updateParticles = (particles, width, height) => {
  return particles.map(particle => {
    let newX = particle.x + particle.vx;
    let newY = particle.y + particle.vy;
    let newVx = particle.vx;
    let newVy = particle.vy;

    // Pantulan pada batas
    if (newX <= particle.radius || newX >= width - particle.radius) {
      newVx = -particle.vx;
      newX = newX <= particle.radius ? particle.radius : width - particle.radius;
    }
    if (newY <= particle.radius || newY >= height - particle.radius) {
      newVy = -particle.vy;
      newY = newY <= particle.radius ? particle.radius : height - particle.radius;
    }

    return {
      ...particle,
      x: newX,
      y: newY,
      vx: newVx,
      vy: newVy
    };
  });
};

// Fungsi untuk menghitung kecepatan partikel berdasarkan suhu (simulasi)
export const calculateVelocityFromTemperature = (temperature) => {
  // Suhu dalam Celsius, dikonversi ke faktor kecepatan
  // Semakin tinggi suhu, semakin cepat partikel bergerak
  const baseFactor = 0.5;
  const tempFactor = temperature / 100;
  return baseFactor + tempFactor;
};

// Fungsi untuk menghitung jumlah partikel berdasarkan konsentrasi
export const calculateParticleCount = (concentration) => {
  // Konsentrasi dalam Molar, dikonversi ke jumlah partikel untuk visualisasi
  const minParticles = 20;
  const maxParticles = 100;
  return Math.floor(minParticles + (concentration * (maxParticles - minParticles)));
};

// Fungsi untuk mendeteksi tabrakan antar partikel
export const detectCollision = (p1, p2) => {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < (p1.radius + p2.radius);
};

// Fungsi untuk menangani tabrakan elastis antar partikel
export const handleElasticCollision = (p1, p2) => {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  if (distance === 0) return { p1, p2 };
  
  // Vektor normal
  const nx = dx / distance;
  const ny = dy / distance;
  
  // Vektor tangensial
  const tx = -ny;
  const ty = nx;
  
  // Proyeksi kecepatan ke arah normal dan tangensial
  const v1n = p1.vx * nx + p1.vy * ny;
  const v1t = p1.vx * tx + p1.vy * ty;
  const v2n = p2.vx * nx + p2.vy * ny;
  const v2t = p2.vx * tx + p2.vy * ty;
  
  // Tukar komponen normal (tabrakan elastis dengan massa sama)
  const v1nAfter = v2n;
  const v2nAfter = v1n;
  
  // Konversi kembali ke koordinat kartesian
  const v1xAfter = v1nAfter * nx + v1t * tx;
  const v1yAfter = v1nAfter * ny + v1t * ty;
  const v2xAfter = v2nAfter * nx + v2t * tx;
  const v2yAfter = v2nAfter * ny + v2t * ty;
  
  return {
    p1: { ...p1, vx: v1xAfter, vy: v1yAfter },
    p2: { ...p2, vx: v2xAfter, vy: v2yAfter }
  };
};

// Fungsi untuk animasi gelembung (bubble) naik
export const createBubble = (x, y) => {
  return {
    x,
    y,
    radius: Math.random() * 5 + 3,
    vy: -(Math.random() * 2 + 1), // Kecepatan naik
    opacity: 1
  };
};

// Fungsi untuk memperbarui posisi gelembung
export const updateBubble = (bubble, height) => {
  const newY = bubble.y + bubble.vy;
  const newOpacity = bubble.opacity - 0.01;
  
  // Reset jika mencapai atas atau menghilang
  if (newY < 0 || newOpacity <= 0) {
    return null;
  }
  
  return {
    ...bubble,
    y: newY,
    opacity: newOpacity
  };
};

// Fungsi untuk membuat efek difusi warna
export const createDiffusionEffect = (startColor, endColor, steps) => {
  const start = hexToRgb(startColor);
  const end = hexToRgb(endColor);
  
  const colors = [];
  for (let i = 0; i <= steps; i++) {
    const ratio = i / steps;
    const r = Math.round(start.r + (end.r - start.r) * ratio);
    const g = Math.round(start.g + (end.g - start.g) * ratio);
    const b = Math.round(start.b + (end.b - start.b) * ratio);
    colors.push(`rgb(${r}, ${g}, ${b})`);
  }
  
  return colors;
};

// Helper: Konversi hex ke RGB
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
};

// Fungsi untuk menghitung intensitas warna berdasarkan konsentrasi
export const getColorIntensity = (concentration, maxConcentration) => {
  const intensity = Math.min(concentration / maxConcentration, 1);
  return intensity;
};

// Fungsi untuk menghasilkan pola gerakan molekul
export const generateMolecularMotion = (type) => {
  switch(type) {
    case 'brownian':
      return {
        pattern: 'random',
        speed: 'medium'
      };
    case 'diffusion':
      return {
        pattern: 'outward',
        speed: 'slow'
      };
    case 'reaction':
      return {
        pattern: 'collision',
        speed: 'fast'
      };
    default:
      return {
        pattern: 'random',
        speed: 'medium'
      };
  }
};