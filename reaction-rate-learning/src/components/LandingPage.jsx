import React from "react";
import {
  BookOpen,
  FlaskConical,
  Calculator,
  Beaker,
  ClipboardCheck,
} from "lucide-react";

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Aplikasi Pembelajaran Asam Basa
          </h1>
          <p className="text-xl text-gray-700">
            Pelajari konsep asam basa dengan interaktif dan menyenangkan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            onClick={() => onNavigate("theory")}
            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all hover:scale-105"
          >
            <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Materi Teori
            </h3>
            <p className="text-gray-600">
              Pelajari konsep dasar asam basa dan skala pH
            </p>
          </div>

          <div
            onClick={() => onNavigate("calculator")}
            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all hover:scale-105"
          >
            <Calculator className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Kalkulator pH
            </h3>
            <p className="text-gray-600">
              Hitung pH larutan asam dan basa dengan mudah
            </p>
          </div>

          <div
            onClick={() => onNavigate("indicator")}
            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all hover:scale-105"
          >
            <FlaskConical className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Indikator Warna
            </h3>
            <p className="text-gray-600">
              Lihat perubahan warna indikator pada berbagai pH
            </p>
          </div>

          <div
            onClick={() => onNavigate("database")}
            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all hover:scale-105"
          >
            <Beaker className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Database Zat
            </h3>
            <p className="text-gray-600">Jelajahi berbagai zat asam dan basa</p>
          </div>

          <div
            onClick={() => onNavigate("quiz")}
            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all hover:scale-105 md:col-span-2"
          >
            <ClipboardCheck className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Quiz Interaktif
            </h3>
            <p className="text-gray-600">
              Uji pemahamanmu dengan soal-soal menarik
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
