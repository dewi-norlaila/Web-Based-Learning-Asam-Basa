import React from 'react';
import { BookOpen, Zap, Microscope, Home } from 'lucide-react';

const TheoryModule = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Nature Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full opacity-15 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-300 to-red-400 rounded-full opacity-15 blur-3xl -z-10"></div>
      
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header with Back Button */}
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
          <button onClick={() => onNavigate('landing')} className="p-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl text-white hover:shadow-lg transition-all hover:scale-105">
            <Home className="w-6 h-6" />
          </button>
        </div>

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

        {/* pH Scale */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">📊 Skala pH</h2>
          <div className="relative rounded-3xl border-3 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-lg">
            <p className="text-gray-800 mb-6 text-lg">
              Skala pH adalah ukuran keasaman atau kebasaan suatu larutan. Skala ini berkisar dari 0 hingga 14.
            </p>
            
            {/* pH Gradient Bar */}
            <div className="mb-6">
              <div className="h-20 rounded-2xl bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-600 shadow-xl relative border-2 border-white">
                <div className="absolute -top-8 left-0 text-gray-800 text-sm font-bold">🔴 0 (Asam)</div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-gray-800 text-sm font-bold">🟢 7 (Netral)</div>
                <div className="absolute -top-8 right-0 text-gray-800 text-sm font-bold">🔵 14 (Basa)</div>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-red-200 to-orange-200 border-2 border-red-400 shadow-md">
                    <span className="text-red-700 font-bold">🔴 Asam</span>
                  </div>
                  <p className="text-gray-700 text-sm mt-2 font-medium">pH &lt; 7</p>
                </div>
                <div className="text-center">
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-200 to-emerald-200 border-2 border-green-400 shadow-md">
                    <span className="text-green-700 font-bold">🟢 Netral</span>
                  </div>
                  <p className="text-gray-700 text-sm mt-2 font-medium">pH = 7</p>
                </div>
                <div className="text-center">
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-200 to-cyan-200 border-2 border-blue-400 shadow-md">
                    <span className="text-blue-700 font-bold">🔵 Basa</span>
                  </div>
                  <p className="text-gray-700 text-sm mt-2 font-medium">pH &gt; 7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl border-3 border-red-300 bg-gradient-to-br from-red-50 to-orange-50 p-6 shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold text-red-700 mb-4">🌶️ Contoh Asam</h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span>🍋 Cuka (pH 2.4-3.4)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                <span>🍊 Jus lemon (pH 2-3)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span>🥤 Soda (pH 2.5-4)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-600"></span>
                <span>😋 Lambung (pH 1.5-3.5)</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border-3 border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold text-blue-700 mb-4">🧼 Contoh Basa</h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>🧴 Sabun (pH 9-10)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
                <span>🧽 Pencuci piring (pH 8-11)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                <span>💨 Amonia (pH 11-13)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-cyan-600"></span>
                <span>💧 Air jernih (pH 7)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoryModule;