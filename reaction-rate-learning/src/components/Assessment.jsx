import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

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
    if (percentage >= 80) return { text: "Excellent! 🎉", color: "text-green-600" };
    if (percentage >= 60) return { text: "Good Job! 👍", color: "text-blue-600" };
    if (percentage >= 40) return { text: "Cukup Baik 😊", color: "text-yellow-600" };
    return { text: "Perlu Belajar Lagi 📚", color: "text-red-600" };
  };

  if (showResult) {
    const message = getScoreMessage();
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Hasil Quiz</h2>
          <div className="mb-8">
            <p className="text-6xl font-bold text-blue-600 mb-4">{score}/{questions.length}</p>
            <p className={`text-2xl font-bold ${message.color}`}>{message.text}</p>
            <p className="text-gray-600 mt-2">
              Persentase: {((score / questions.length) * 100).toFixed(0)}%
            </p>
          </div>
          <button 
            onClick={handleReset}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <RotateCcw className="w-5 h-5" />
            Ulangi Quiz
          </button>
        </div>
      </div>
    );
  }

  const isAnswered = answeredQuestions.includes(currentQuestion);
  const isCorrect = selectedAnswer === questions[currentQuestion].correct;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-red-900 mb-6">Quiz Asam Basa</h2>
      
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-600">
            Pertanyaan {currentQuestion + 1} dari {questions.length}
          </div>
          <div className="text-sm font-bold text-blue-600">
            Skor: {score}/{questions.length}
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-6">
          {questions[currentQuestion].question}
        </h3>

        <div className="space-y-3 mb-6">
          {questions[currentQuestion].options.map((option, index) => {
            let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all ";
            
            if (!isAnswered) {
              buttonClass += "border-gray-300 hover:border-blue-500 hover:bg-blue-50 cursor-pointer";
            } else {
              if (index === questions[currentQuestion].correct) {
                buttonClass += "border-green-500 bg-green-50";
              } else if (index === selectedAnswer && !isCorrect) {
                buttonClass += "border-red-500 bg-red-50";
              } else {
                buttonClass += "border-gray-300 bg-gray-50 cursor-not-allowed";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={isAnswered}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {isAnswered && index === questions[currentQuestion].correct && (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  )}
                  {isAnswered && index === selectedAnswer && !isCorrect && (
                    <XCircle className="w-6 h-6 text-red-600" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'}`}>
            <p className={`font-bold mb-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
              {isCorrect ? '✓ Benar!' : '✗ Salah!'}
            </p>
            <p className="text-gray-700">{questions[currentQuestion].explanation}</p>
          </div>
        )}

        {isAnswered && (
          <button 
            onClick={handleNext}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            {currentQuestion < questions.length - 1 ? 'Pertanyaan Selanjutnya' : 'Lihat Hasil'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Assessment;