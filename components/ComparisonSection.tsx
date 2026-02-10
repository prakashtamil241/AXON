
import React from 'react';

export const ComparisonSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-center gap-4 text-[#8D6E63] font-bold">
        <span>◆</span>
        <h2 className="text-2xl md:text-3xl text-[#5D4037]">Tired of This?</h2>
        <span>◆</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Fee Card */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E7D9C9] overflow-hidden">
          <div className="bg-[#D85B1B] text-white py-3 px-4 text-center font-bold">
            Stop Losing to Fees
          </div>
          <div className="p-6 flex flex-col items-center justify-center gap-4 bg-[#FDF9F3]">
            <div className="text-3xl font-bold flex items-center gap-3">
              <span className="text-red-800 line-through decoration-2">20%</span>
              <span className="text-orange-600">➔</span>
              <span className="text-green-700">8%</span>
            </div>
          </div>
        </div>

        {/* Language Card */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E7D9C9] overflow-hidden">
          <div className="bg-[#1A365D] text-white py-3 px-4 text-center font-bold">
            Work in your comfortable language
          </div>
          <div className="p-6 flex flex-col items-center justify-center gap-2 bg-[#FDF9F3]">
             <p className="text-[#1A365D] font-medium">English Only ➔ Multi-Language</p>
          </div>
        </div>

        {/* Payment Card */}
        <div className="bg-white rounded-xl shadow-sm border border-[#E7D9C9] overflow-hidden">
          <div className="bg-[#2D3748] text-white py-3 px-4 text-center font-bold">
            Get Paid in ₹
          </div>
          <div className="p-6 flex flex-col items-center justify-center gap-2 bg-[#FDF9F3]">
             <p className="text-green-700 font-medium">USD Hassle ➔ UPI Instant</p>
          </div>
        </div>
      </div>
    </section>
  );
};
