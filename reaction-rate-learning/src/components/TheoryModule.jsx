import React from 'react';

const TheoryModule = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Materi Teori Asam Basa</h2>
      
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Apa itu Asam dan Basa?</h3>
        <p className="text-gray-700 mb-4">
          <strong>Asam</strong> adalah zat yang menghasilkan ion H⁺ (hidrogen) dalam larutan air. Asam memiliki rasa asam dan dapat mengubah lakmus biru menjadi merah.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Basa</strong> adalah zat yang menghasilkan ion OH⁻ (hidroksida) dalam larutan air. Basa terasa licin dan dapat mengubah lakmus merah menjadi biru.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Skala pH</h3>
        <p className="text-gray-700 mb-4">
          Skala pH adalah ukuran keasaman atau kebasaan suatu larutan. Skala ini berkisar dari 0 hingga 14.
        </p>
        <div className="bg-gradient-to-r from-red-500 via-green-500 to-blue-500 h-12 rounded-lg mb-4 relative">
          <div className="absolute top-0 left-0 text-white font-bold p-2">0 - Asam Kuat</div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white font-bold p-2">7 - Netral</div>
          <div className="absolute top-0 right-0 text-white font-bold p-2">14 - Basa Kuat</div>
        </div>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>pH {'<'} 7 = Asam</li>
          <li>pH = 7 = Netral</li>
          <li>pH {'>'} 7 = Basa</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Contoh Zat dalam Kehidupan Sehari-hari</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-red-600 mb-2">Asam:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Cuka (pH 2.4-3.4)</li>
              <li>Jus lemon (pH 2-3)</li>
              <li>Soda (pH 2.5-4)</li>
              <li>Lambung manusia (pH 1.5-3.5)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-blue-600 mb-2">Basa:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Sabun (pH 9-10)</li>
              <li>Pemutih (pH 12-13)</li>
              <li>Pasta gigi (pH 8-9)</li>
              <li>Antasida (pH 8-9)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Asam Kuat vs Asam Lemah</h3>
        <p className="text-gray-700 mb-4">
          <strong>Asam Kuat:</strong> Terionisasi sempurna dalam air (HCl, H₂SO₄, HNO₃)
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Asam Lemah:</strong> Terionisasi sebagian dalam air (CH₃COOH, H₃PO₄)
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Basa Kuat:</strong> Terionisasi sempurna dalam air (NaOH, KOH)
        </p>
        <p className="text-gray-700">
          <strong>Basa Lemah:</strong> Terionisasi sebagian dalam air (NH₃, Al(OH)₃)
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Rumus Menghitung pH</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-700 mb-2"><strong>Asam Kuat:</strong> pH = -log[H⁺]</p>
          <p className="text-gray-700 mb-2"><strong>Basa Kuat:</strong> pOH = -log[OH⁻], pH = 14 - pOH</p>
          <p className="text-gray-700 mb-2"><strong>Asam Lemah:</strong> [H⁺] = √(Ka × M)</p>
          <p className="text-gray-700"><strong>Basa Lemah:</strong> [OH⁻] = √(Kb × M)</p>
        </div>
      </div>
    </div>
  );
};

export default TheoryModule;