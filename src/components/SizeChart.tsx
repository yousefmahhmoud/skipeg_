import React from 'react';
import { X } from 'lucide-react';

interface SizeChartProps {
  isOpen: boolean;
  onClose: () => void;
  productType?: 'tops' | 'pants';
}

const SizeChart: React.FC<SizeChartProps> = ({ isOpen, onClose, productType = 'tops' }) => {
  if (!isOpen) return null;

  const topsSizeData = [
    { size: 'S', length: '53', bust: '68', sleeve: '53' },
    { size: 'M', length: '55', bust: '72', sleeve: '55' },
    { size: 'L', length: '56', bust: '76', sleeve: '57' },
    { size: 'XL', length: '58', bust: '80', sleeve: '59' },
  ];

  const pantsSizeData = [
    { size: 'S', waist: '30', length: '105', inseam: '62' },
    { size: 'M', waist: '32', length: '107', inseam: '64' },
    { size: 'L', waist: '34', length: '108', inseam: '66' },
    { size: 'XL', waist: '36', length: '110', inseam: '68' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {productType === 'tops' ? 'Tops Size Chart' : 'Pants Size Chart'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>

          {/* Tops Size Chart Table */}
          {productType === 'tops' && (
            <>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-orange-500">
                      <th className="border border-orange-600 px-4 py-3 text-center font-bold text-white text-lg">Size</th>
                      <th className="border border-orange-600 px-4 py-3 text-center font-bold text-white text-lg">Length (cm)</th>
                      <th className="border border-orange-600 px-4 py-3 text-center font-bold text-white text-lg">Bust (cm)</th>
                      <th className="border border-orange-600 px-4 py-3 text-center font-bold text-white text-lg">Sleeve (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topsSizeData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-200 px-4 py-3 font-bold text-center text-gray-800">{item.size}</td>
                        <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">{item.length}</td>
                        <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">{item.bust}</td>
                        <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">{item.sleeve}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Measurement Guide for Tops */}
              <div className="bg-orange-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">How to Measure:</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Length:</strong> Measure from the highest point of the shoulder to the bottom hem.</p>
                  <p><strong>Bust:</strong> Measure around the fullest part of your chest, keeping the tape horizontal.</p>
                  <p><strong>Sleeve:</strong> Measure from the shoulder seam to the end of the sleeve.</p>
                </div>
              </div>
            </>
          )}

          {/* Pants Size Chart Table */}
          {productType === 'pants' && (
            <>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-orange-500">
                      <th className="border border-orange-600 px-4 py-3 text-center font-bold text-white text-lg">Size</th>
                      <th className="border border-orange-600 px-4 py-3 text-center font-bold text-white text-lg">Waist (inches)</th>
                      <th className="border border-orange-600 px-4 py-3 text-center font-bold text-white text-lg">Length (cm)</th>
                      <th className="border border-orange-600 px-4 py-3 text-center font-bold text-white text-lg">Inseam (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pantsSizeData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-200 px-4 py-3 font-bold text-center text-gray-800">{item.size}</td>
                        <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">{item.waist}</td>
                        <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">{item.length}</td>
                        <td className="border border-gray-200 px-4 py-3 text-center text-gray-700">{item.inseam}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Measurement Guide for Pants */}
              <div className="bg-orange-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">How to Measure:</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Waist:</strong> Measure around your natural waistline, keeping the tape comfortably loose.</p>
                  <p><strong>Length:</strong> Measure from the waistband to the bottom hem of the pants.</p>
                  <p><strong>Inseam:</strong> Measure from the crotch seam to the bottom hem along the inside of the leg.</p>
                </div>
              </div>
            </>
          )}

          {/* Size Guide Visual */}
          <div className="overflow-x-auto mb-6">
            <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4 text-center">Size Guide</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {(productType === 'tops' ? topsSizeData : pantsSizeData).map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-lg">{item.size}</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      {productType === 'tops' ? `Bust: ${item.bust}cm` : `Waist: ${item.waist}"`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-4">
              Still unsure about sizing? Contact us through our social media channels for personalized assistance.
            </p>
            <button
              onClick={onClose}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200"
            >
              Close Size Chart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeChart;