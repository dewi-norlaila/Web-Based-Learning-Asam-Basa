import React from "react";
import {
  BookOpen,
  FlaskConical,
  Calculator,
  Beaker,
  ClipboardCheck,
  Leaf,
  Droplets,
} from "lucide-react";

const LandingPage = ({ onNavigate }) => {
  const features = [
    {
      id: "theory",
      icon: BookOpen,
      title: "Materi Teori",
      desc: "Pelajari konsep dasar asam basa dan skala pH",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      textColor: "text-green-700",
      borderColor: "border-green-300",
      emoji: "📚",
    },
    {
      id: "calculator",
      icon: Calculator,
      title: "Kalkulator pH",
      desc: "Hitung pH larutan asam dan basa dengan mudah",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      textColor: "text-amber-700",
      borderColor: "border-amber-300",
      emoji: "🧮",
    },
    {
      id: "indicator",
      icon: FlaskConical,
      title: "Indikator Warna",
      desc: "Lihat perubahan warna indikator pada berbagai pH",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-300",
      emoji: "🎨",
    },
    {
      id: "database",
      icon: Beaker,
      title: "Database Zat",
      desc: "Jelajahi berbagai zat asam dan basa",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
      textColor: "text-cyan-700",
      borderColor: "border-cyan-300",
      emoji: "🔬",
    },
    {
      id: "quiz",
      icon: ClipboardCheck,
      title: "Quiz Interaktif",
      desc: "Uji pemahamanmu dengan soal-soal menarik",
      color: "from-red-500 to-rose-600",
      bgColor: "bg-gradient-to-br from-red-50 to-rose-50",
      textColor: "text-red-700",
      borderColor: "border-red-300",
      emoji: "❓",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 relative overflow-hidden">
      {/* Nature Background Elements - Colorful Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full opacity-30 blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-tr from-blue-300 to-cyan-300 rounded-full opacity-30 blur-3xl -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tr from-orange-300 to-amber-400 rounded-full opacity-25 blur-3xl -z-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-25 blur-3xl -z-10 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      {/* Header */}
      <div className="relative overflow-hidden pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300">
            <Leaf className="w-4 h-4 text-green-700" />
            <span className="text-sm text-green-800 font-medium">Pembelajaran Interaktif Alami</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 text-transparent bg-clip-text">Asam Basa</span>
            <span className="block text-gray-800">Pelajari Alam Kimia</span>
          </h1>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            🌿 Jelajahi dunia asam dan basa melalui simulasi interaktif, visualisasi warna, dan quiz menyenangkan
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                onClick={() => onNavigate(feature.id)}
                className="group relative cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Card with Shadow */}
                <div
                  className={`relative rounded-3xl border-2 ${feature.borderColor} ${feature.bgColor} p-8 transition-all duration-300 hover:shadow-2xl group-hover:-translate-y-2 overflow-hidden`}
                >
                  {/* Decorative Element */}
                  <div className="absolute -top-8 -right-8 w-24 h-24 opacity-10 group-hover:opacity-30 transition-opacity">
                    <Droplets className="w-full h-full" />
                  </div>

                  {/* Icon Container with Nature Colors */}
                  <div
                    className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Emoji */}
                  <div className="text-3xl mb-2">{feature.emoji}</div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold ${feature.textColor} mb-3 relative z-10`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                    {feature.desc}
                  </p>

                  {/* CTA Button */}
                  <button className={`relative z-10 px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:shadow-lg transform`}>
                    Mulai →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer with Nature Theme */}
      <div className="border-t border-green-200 bg-gradient-to-r from-green-100 to-emerald-100">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <p className="text-green-800 font-medium">🌱 Aplikasi Pembelajaran Asam Basa • Dibuat untuk Pendidikan 🌱</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
