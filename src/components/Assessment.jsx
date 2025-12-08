import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const questions = [
    {
      question: "Apa yang dimaksud dengan asam menurut teori Arrhenius?",
      options: [
        "Zat yang melepaskan ion OH⁻ dalam air",
        "Zat yang melepaskan ion H⁺ dalam air",
        "Zat yang menerima proton",
        "Zat yang memberikan pasangan elektron"
      ],
      correct: 1,
      explanation: "Menurut Arrhenius, asam adalah zat yang melepaskan ion H⁺ (hidrogen) ketika dilarutkan dalam air."
    },
    {
      question: "Larutan dengan pH 3 bersifat?",
      options: [
        "Basa kuat",
        "Netral",
        "Asam kuat",
        "Basa lemah"
      ],
      correct: 2,
      explanation: "pH < 7 menunjukkan larutan bersifat asam. pH 3 menunjukkan asam yang cukup kuat."
    },
    {
      question: "Indikator lakmus akan berubah warna menjadi biru pada larutan yang bersifat?",
      options: [
        "Asam",
        "Netral",
        "Basa",
        "Garam"
      ],
      correct: 2,
      explanation: "Lakmus merah berubah menjadi biru pada larutan basa (pH > 8.3)."
    },
    {
      question: "Contoh asam lemah adalah?",
      options: [
        "HCl",
        "H₂SO₄",
        "CH₃COOH",
        "HNO₃"
      ],
      correct: 2,
      explanation: "CH₃COOH (asam asetat/cuka) adalah asam lemah yang terionisasi sebagian dalam air."
    },
    {
      question: "Jika pH larutan adalah 9, maka pOH-nya adalah?",
      options: [
        "3",
        "5",
        "7",
        "9"
      ],
      correct: 1,
      explanation: "pH + pOH = 14, maka pOH = 14 - 9 = 5"
    },
    {
      question: "Fenolftalein akan berwarna pink pada pH?",
      options: [
        "pH < 7",
        "pH = 7",
        "pH > 10",
        "pH 3-5"
      ],
      correct: 2,
      explanation: "Fenolftalein tidak berwarna pada pH < 8.2 dan berwarna pink pada pH > 10 (larutan basa)."
    },
    {
      question: "NaOH termasuk ke dalam golongan?",
      options: [
        "Asam kuat",
        "Asam lemah",
        "Basa kuat",
        "Basa lemah"
      ],
      correct: 2,
      explanation: "NaOH (Natrium hidroksida) adalah basa kuat yang terionisasi sempurna dalam air."
    },
    {
      question: "Air murni memiliki pH?",
      options: [
        "0",
        "5",
        "7",
        "14"
      ],
      correct: 2,
      explanation: "Air murni bersifat netral dengan pH = 7, dimana [H⁺] = [OH⁻] = 10⁻⁷ M"
    },
    {
      question: "Dalam kehidupan sehari-hari, cuka memiliki sifat?",
      options: [
        "Asam",
        "Basa",
        "Netral",
        "Garam"
      ],
      correct: 0,
      explanation: "Cuka mengandung asam asetat (CH₃COOH) sehingga bersifat asam dengan pH sekitar 2.4-3.4."
    },
    {
      question: "Reaksi antara asam dan basa disebut?",
      options: [
        "Oksidasi",
        "Reduksi",
        "Netralisasi",
        "Hidrolisis"
      ],
      correct: 2,
      explanation: "Reaksi netralisasi adalah reaksi antara asam dan basa yang menghasilkan garam dan air."
    }
  ];

  const handleAnswer = (index) => {
    if (answeredQuestions.includes(currentQuestion)) return;
    
    setSelectedAnswer(index);
    const newAnswered = [...answeredQuestions, currentQuestion];
    setAnsweredQuestions(newAnswered);
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return { text: "Sempurna! 🎉", color: "text-green-400", emoji: "🏆" };
    if (percentage >= 60) return { text: "Bagus Sekali! 👏", color: "text-blue-400", emoji: "🥇" };
    if (percentage >= 40) return { text: "Cukup Baik 😊", color: "text-yellow-400", emoji: "🥈" };
    return { text: "Perlu Belajar Lagi 📚", color: "text-orange-400", emoji: "💪" };
  };

  if (showResult) {
    const message = getScoreMessage();
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="rounded-2xl border-2 border-rose-200/30 bg-gradient-to-br from-rose-950/50 to-pink-950/50 p-12 text-center backdrop-blur-sm">
            <div className="mb-6">
              <Trophy className="w-20 h-20 mx-auto text-yellow-400 mb-4" />
              <h2 className="text-4xl font-bold text-white mb-2">Hasil Quiz</h2>
            </div>
            
            <div className="mb-8">
              <p className="text-7xl font-bold bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text mb-4">
                {score}/{questions.length}
              </p>
              <p className={`text-2xl font-bold ${message.color}`}>{message.emoji} {message.text}</p>
              <p className="text-white/60 mt-2">
                Persentase: {((score / questions.length) * 100).toFixed(0)}%
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-4 mb-8 border border-white/20">
              <p className="text-white/70 text-sm">
                {score >= 8 ? "Kamu sangat menguasai materi asam basa!" 
                : score >= 6 ? "Kamu sudah cukup memahami materi ini."
                : "Cobalah pelajari kembali materi yang belum dikuasai."}
              </p>
            </div>

            <button 
              onClick={handleReset}
              className="w-full py-3 rounded-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 hover:shadow-lg hover:shadow-pink-500/50"
            >
              <RotateCcw className="w-5 h-5 inline mr-2" />
              Ulangi Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isAnswered = answeredQuestions.includes(currentQuestion);
  const isCorrect = selectedAnswer === questions[currentQuestion].correct;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-rose-500/20 rounded-lg">
              <Trophy className="w-6 h-6 text-rose-400" />
            </div>
            <h1 className="text-4xl font-bold text-white">Quiz Asam Basa</h1>
          </div>
          <p className="text-white/60">Uji pemahaman Anda tentang konsep asam basa</p>
        </div>

        {/* Quiz Container */}
        <div className="rounded-2xl border-2 border-rose-200/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 backdrop-blur-sm">
          {/* Progress */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-white/70 text-sm">
              Pertanyaan <span className="font-bold">{currentQuestion + 1}</span> dari <span className="font-bold">{questions.length}</span>
            </div>
            <div className="text-white font-bold">
              <span className="text-rose-400">Skor: {score}</span>/{questions.length}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/10 rounded-full h-2 mb-8">
            <div 
              className="h-2 rounded-full transition-all duration-300 bg-gradient-to-r from-rose-500 to-pink-600"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question */}
          <h3 className="text-2xl font-bold text-white mb-8 leading-relaxed">
            {questions[currentQuestion].question}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {questions[currentQuestion].options.map((option, index) => {
              let borderColor = 'border-white/20';
              let bgColor = 'bg-white/5 hover:bg-white/10';
              
              if (isAnswered) {
                if (index === questions[currentQuestion].correct) {
                  borderColor = 'border-green-400';
                  bgColor = 'bg-green-500/20';
                } else if (index === selectedAnswer && !isCorrect) {
                  borderColor = 'border-red-400';
                  bgColor = 'bg-red-500/20';
                } else {
                  bgColor = 'bg-white/5 cursor-not-allowed';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={isAnswered}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all ${borderColor} ${bgColor} ${!isAnswered ? 'cursor-pointer hover:border-white/40' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">{option}</span>
                    <div>
                      {isAnswered && index === questions[currentQuestion].correct && (
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      )}
                      {isAnswered && index === selectedAnswer && !isCorrect && (
                        <XCircle className="w-6 h-6 text-red-400" />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {isAnswered && (
            <div className={`p-6 rounded-xl mb-8 border-2 ${isCorrect ? 'border-green-400/50 bg-green-500/20' : 'border-red-400/50 bg-red-500/20'}`}>
              <p className={`font-bold mb-2 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                {isCorrect ? '✓ Benar!' : '✗ Salah!'}
              </p>
              <p className="text-white/80">{questions[currentQuestion].explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <button 
              onClick={handleNext}
              className="w-full py-3 rounded-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 hover:shadow-lg hover:shadow-pink-500/50"
            >
              {currentQuestion < questions.length - 1 ? '➜ Pertanyaan Selanjutnya' : '🎯 Lihat Hasil'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assessment;