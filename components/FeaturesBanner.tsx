
import React from 'react';

export const FeaturesBanner: React.FC = () => {
  return (
    <div className="w-full bg-[#F5EFE6] border-y border-[#DED0C1] py-4 flex flex-wrap justify-around items-center gap-6 text-[#5D4037] font-semibold text-sm md:text-base px-4">
      <div className="flex items-center gap-2">
        <span className="text-orange-600">◆</span>
        <span>₹0 Payment Gateway Fees on UPI</span>
      </div>
      <div className="hidden md:block text-[#DED0C1]">|</div>
      <div className="flex items-center gap-2">
        <span className="text-yellow-600">📁</span>
        <span>Support in 5 Languages</span>
      </div>
      <div className="hidden md:block text-[#DED0C1]">|</div>
      <div className="flex items-center gap-2">
        <span className="text-green-600">✅</span>
        <span>Only 8% Platform Fee</span>
        <span className="text-orange-600">◆</span>
      </div>
    </div>
  );
};
