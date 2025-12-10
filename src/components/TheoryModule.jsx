import React, { useState } from 'react';
import { BookOpen, Zap, Microscope, Home, ChevronDown, ChevronUp, Atom, Droplet, FlaskConical } from 'lucide-react';

const TheoryModule = ({ onNavigate = () => {} }) => {
  const [expandedTheory, setExpandedTheory] = useState(null);
  const [activeTab, setActiveTab] = useState('teori'); // 'teori' atau 'perhitungan'

  const toggleTheory = (theory) => {
    setExpandedTheory(expandedTheory === theory ? null : theory);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full opacity-15 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-300 to-red-400 rounded-full opacity-15 blur-3xl -z-10"></div>
      
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 text-transparent bg-clip-text">Materi Teori Asam Basa</h1>
            </div>
            <p className="text-gray-700 ml-16">🌿 Pelajari konsep fundamental tentang asam, basa, dan skala pH</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('teori')}
            className={`flex-1 py-4 px-6 rounded-2xl font-bold transition-all ${
              activeTab === 'teori'
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                : 'bg-white/50 text-gray-700 hover:bg-white/80'
            }`}
          >
            📚 Teori-Teori Asam Basa
          </button>
          <button
            onClick={() => setActiveTab('perhitungan')}
            className={`flex-1 py-4 px-6 rounded-2xl font-bold transition-all ${
              activeTab === 'perhitungan'
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                : 'bg-white/50 text-gray-700 hover:bg-white/80'
            }`}
          >
            🧮 Perhitungan pH & pOH
          </button>
        </div>

        {/* Tab Content - Teori */}
        {activeTab === 'teori' && (
          <div>
            {/* Asam & Basa Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-300 to-orange-300 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                <div className="relative rounded-3xl border-3 border-red-300 bg-gradient-to-br from-red-50 to-orange-50 p-8 hover:shadow-2xl transition-all group-hover:-translate-y-1 shadow-md">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-red-400 to-orange-500 text-white mb-4 shadow-lg">
                    <Zap className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-700 mb-3">⚡ Asam</h3>
                  <p className="text-gray-800 leading-relaxed">
                    Zat yang menghasilkan ion H⁺ (hidrogen) dalam larutan air. Asam memiliki rasa asam dan dapat mengubah lakmus biru menjadi merah.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                <div className="relative rounded-3xl border-3 border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 hover:shadow-2xl transition-all group-hover:-translate-y-1 shadow-md">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 text-white mb-4 shadow-lg">
                    <Microscope className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-3">🔬 Basa</h3>
                  <p className="text-gray-800 leading-relaxed">
                    Zat yang menghasilkan ion OH⁻ (hidroksida) dalam larutan air. Basa terasa licin dan dapat mengubah lakmus merah menjadi biru.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Teori */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">📚 Teori-Teori Asam Basa</h2>
              
              {/* Teori Arrhenius */}
              <div className="mb-4">
                <div 
                  onClick={() => toggleTheory('arrhenius')}
                  className="cursor-pointer rounded-3xl border-3 border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl shadow-lg">
                        <Droplet className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-blue-700">Teori Arrhenius</h3>
                        <p className="text-sm text-gray-600">Svante Arrhenius (1884)</p>
                      </div>
                    </div>
                    {expandedTheory === 'arrhenius' ? <ChevronUp className="w-6 h-6 text-blue-600" /> : <ChevronDown className="w-6 h-6 text-blue-600" />}
                  </div>
                  
                  {expandedTheory === 'arrhenius' && (
                    <div className="mt-6 space-y-4">
                      <div className="bg-white/70 rounded-2xl p-5 border-2 border-blue-200">
                        <p className="text-gray-800 leading-relaxed mb-3">
                          Teori pertama yang menjelaskan asam dan basa berdasarkan ion dalam larutan air.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
                            <p className="font-bold text-red-700 mb-2">🔴 Asam: Menghasilkan H⁺</p>
                            <div className="bg-white p-3 rounded-lg">
                              <p className="font-mono text-sm">HCl → H⁺ + Cl⁻</p>
                            </div>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                            <p className="font-bold text-blue-700 mb-2">🔵 Basa: Menghasilkan OH⁻</p>
                            <div className="bg-white p-3 rounded-lg">
                              <p className="font-mono text-sm">NaOH → Na⁺ + OH⁻</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Teori Brønsted-Lowry */}
              <div className="mb-4">
                <div 
                  onClick={() => toggleTheory('bronsted')}
                  className="cursor-pointer rounded-3xl border-3 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl shadow-lg">
                        <Atom className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-green-700">Teori Brønsted-Lowry</h3>
                        <p className="text-sm text-gray-600">Johannes Brønsted (1923)</p>
                      </div>
                    </div>
                    {expandedTheory === 'bronsted' ? <ChevronUp className="w-6 h-6 text-green-600" /> : <ChevronDown className="w-6 h-6 text-green-600" />}
                  </div>
                  
                  {expandedTheory === 'bronsted' && (
                    <div className="mt-6 space-y-4">
                      <div className="bg-white/70 rounded-2xl p-5 border-2 border-green-200">
                        <p className="text-gray-800 leading-relaxed mb-3">
                          Fokus pada transfer proton (H⁺) antara molekul.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
                            <p className="font-bold text-red-700 mb-2">🔴 Asam: Donor Proton</p>
                            <div className="bg-white p-3 rounded-lg">
                              <p className="font-mono text-sm">HCl + H₂O → H₃O⁺ + Cl⁻</p>
                            </div>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                            <p className="font-bold text-blue-700 mb-2">🔵 Basa: Akseptor Proton</p>
                            <div className="bg-white p-3 rounded-lg">
                              <p className="font-mono text-sm">NH₃ + H₂O → NH₄⁺ + OH⁻</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Teori Lewis */}
              <div className="mb-4">
                <div 
                  onClick={() => toggleTheory('lewis')}
                  className="cursor-pointer rounded-3xl border-3 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50 p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl shadow-lg">
                        <FlaskConical className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-purple-700">Teori Lewis</h3>
                        <p className="text-sm text-gray-600">Gilbert N. Lewis (1923)</p>
                      </div>
                    </div>
                    {expandedTheory === 'lewis' ? <ChevronUp className="w-6 h-6 text-purple-600" /> : <ChevronDown className="w-6 h-6 text-purple-600" />}
                  </div>
                  
                  {expandedTheory === 'lewis' && (
                    <div className="mt-6 space-y-4">
                      <div className="bg-white/70 rounded-2xl p-5 border-2 border-purple-200">
                        <p className="text-gray-800 leading-relaxed mb-3">
                          Fokus pada transfer pasangan elektron bebas.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200">
                            <p className="font-bold text-red-700 mb-2">🔴 Asam: Akseptor Elektron</p>
                            <div className="bg-white p-3 rounded-lg">
                              <p className="font-mono text-sm">BF₃ + :NH₃ → F₃B:NH₃</p>
                            </div>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                            <p className="font-bold text-blue-700 mb-2">🔵 Basa: Donor Elektron</p>
                            <div className="bg-white p-3 rounded-lg">
                              <p className="font-mono text-sm">H⁺ + :NH₃ → NH₄⁺</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Skala pH */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">📊 Skala pH</h2>
              <div className="relative rounded-3xl border-3 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-lg mb-6">
                <div className="h-20 rounded-2xl bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-600 shadow-xl relative border-2 border-white">
                  <div className="absolute -top-8 left-0 text-gray-800 text-sm font-bold">🔴 0 (Asam)</div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-gray-800 text-sm font-bold">🟢 7 (Netral)</div>
                  <div className="absolute -top-8 right-0 text-gray-800 text-sm font-bold">🔵 14 (Basa)</div>
                </div>
              </div>

              {/* Contoh Asam dan Basa dalam Kehidupan Sehari-hari */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🏠 Contoh dalam Kehidupan Sehari-hari</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contoh Asam */}
                <div className="rounded-3xl border-3 border-red-300 bg-gradient-to-br from-red-50 to-orange-50 p-6 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                    <span>🔴</span> Contoh Asam (pH &lt; 7)
                  </h3>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                      <span className="text-2xl">🔋</span>
                      <div>
                        <p className="font-bold text-red-700">Asam Sulfat (Aki)</p>
                        <p className="text-sm">pH: 0-1 • Sangat Asam</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                      <span className="text-2xl">😋</span>
                      <div>
                        <p className="font-bold text-red-700">Asam Lambung</p>
                        <p className="text-sm">pH: 1.5-3.5 • Sangat Asam</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                      <span className="text-2xl">🍋</span>
                      <div>
                        <p className="font-bold text-orange-700">Jus Lemon</p>
                        <p className="text-sm">pH: 2-3 • Asam Kuat</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                      <span className="text-2xl">🍅</span>
                      <div>
                        <p className="font-bold text-orange-700">Cuka</p>
                        <p className="text-sm">pH: 2.4-3.4 • Asam Kuat</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                      <span className="text-2xl">🥤</span>
                      <div>
                        <p className="font-bold text-amber-700">Soda/Cola</p>
                        <p className="text-sm">pH: 2.5-4 • Asam</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                      <span className="text-2xl">🍊</span>
                      <div>
                        <p className="font-bold text-amber-700">Jus Jeruk</p>
                        <p className="text-sm">pH: 3-4 • Asam</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                      <span className="text-2xl">🍎</span>
                      <div>
                        <p className="font-bold text-yellow-700">Jus Apel</p>
                        <p className="text-sm">pH: 3.3-4 • Asam Lemah</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                      <span className="text-2xl">☕</span>
                      <div>
                        <p className="font-bold text-yellow-700">Kopi</p>
                        <p className="text-sm">pH: 4.5-6 • Asam Lemah</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                      <span className="text-2xl">🥛</span>
                      <div>
                        <p className="font-bold text-green-700">Susu</p>
                        <p className="text-sm">pH: 6.5-6.7 • Sedikit Asam</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Contoh Basa */}
                <div className="rounded-3xl border-3 border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                    <span>🔵</span> Contoh Basa (pH &gt; 7)
                  </h3>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                      <span className="text-2xl">💧</span>
                      <div>
                        <p className="font-bold text-green-700">Air Murni</p>
                        <p className="text-sm">pH: 7 • Netral</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                      <span className="text-2xl">🩸</span>
                      <div>
                        <p className="font-bold text-cyan-700">Darah Manusia</p>
                        <p className="text-sm">pH: 7.35-7.45 • Sedikit Basa</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                      <span className="text-2xl">💊</span>
                      <div>
                        <p className="font-bold text-cyan-700">Air Laut</p>
                        <p className="text-sm">pH: 7.5-8.4 • Basa Lemah</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                      <span className="text-2xl">🦷</span>
                      <div>
                        <p className="font-bold text-cyan-700">Pasta Gigi</p>
                        <p className="text-sm">pH: 8-9 • Basa</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                      <span className="text-2xl">🍰</span>
                      <div>
                        <p className="font-bold text-blue-700">Soda Kue (NaHCO₃)</p>
                        <p className="text-sm">pH: 8-9 • Basa</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                      <span className="text-2xl">🧴</span>
                      <div>
                        <p className="font-bold text-blue-700">Sabun Mandi</p>
                        <p className="text-sm">pH: 9-10 • Basa</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                      <span className="text-2xl">🧽</span>
                      <div>
                        <p className="font-bold text-blue-700">Deterjen</p>
                        <p className="text-sm">pH: 10-11 • Basa Kuat</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                      <span className="text-2xl">💨</span>
                      <div>
                        <p className="font-bold text-indigo-700">Amonia (Pembersih)</p>
                        <p className="text-sm">pH: 11-12 • Basa Kuat</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-white/50 p-3 rounded-xl">
                      <span className="text-2xl">🚿</span>
                      <div>
                        <p className="font-bold text-indigo-700">Pembersih Saluran</p>
                        <p className="text-sm">pH: 13-14 • Sangat Basa</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content - Perhitungan */}
        {activeTab === 'perhitungan' && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🧮 Perhitungan pH dan pOH</h2>
            
            <div className="rounded-3xl border-3 border-indigo-300 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-indigo-700 mb-4">📐 Konsep Dasar</h3>
              <div className="space-y-4">
                <div className="bg-white/70 rounded-xl p-4 border-2 border-indigo-200">
                  <div className="bg-indigo-100 p-3 rounded-lg font-mono text-center text-lg">pH + pOH = 14</div>
                </div>
                <div className="bg-white/70 rounded-xl p-4 border-2 border-indigo-200">
                  <div className="space-y-2">
                    <div className="bg-indigo-100 p-3 rounded-lg font-mono">pH = -log [H⁺]</div>
                    <div className="bg-indigo-100 p-3 rounded-lg font-mono">pOH = -log [OH⁻]</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border-3 border-red-300 bg-gradient-to-br from-red-50 to-orange-50 p-6 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-red-700 mb-4">🔴 pH Asam Kuat</h3>
              <div className="bg-white/70 rounded-xl p-5 border-2 border-red-200 mb-4">
                <div className="bg-red-100 p-4 rounded-lg">
                  <div className="font-mono text-center space-y-1">
                    <div>[H⁺] = valensi × M</div>
                    <div>pH = -log [H⁺]</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-5 border-2 border-red-300">
                  <p className="font-bold text-red-800 mb-3">📝 Contoh: HCl 0,01 M</p>
                  <div className="bg-white p-4 rounded-lg space-y-2 text-sm">
                    <p>[H⁺] = 1 × 0,01 = 10⁻²</p>
                    <p>pH = -log 10⁻² = 2</p>
                    <div className="bg-red-200 p-2 rounded font-bold text-center">pH = 2</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border-3 border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">🔵 pH Basa Kuat</h3>
              <div className="bg-white/70 rounded-xl p-5 border-2 border-blue-200 mb-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <div className="font-mono text-center space-y-1">
                    <div>[OH⁻] = valensi × M</div>
                    <div>pOH = -log [OH⁻]</div>
                    <div>pH = 14 - pOH</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-5 border-2 border-blue-300">
                  <p className="font-bold text-blue-800 mb-3">📝 Contoh: NaOH 0,01 M</p>
                  <div className="bg-white p-4 rounded-lg space-y-2 text-sm">
                    <p>[OH⁻] = 1 × 0,01 = 10⁻²</p>
                    <p>pOH = -log 10⁻² = 2</p>
                    <p>pH = 14 - 2 = 12</p>
                    <div className="bg-blue-200 p-2 rounded font-bold text-center">pH = 12</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TheoryModule;