
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F3EAD3] mt-12 pt-12 pb-8 px-8 rounded-t-3xl border-t border-[#DED0C1]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="font-bold text-[#5D4037] text-lg">Quick Links</h4>
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-[#8D6E63] font-medium">
            <a href="#" className="hover:text-orange-600">About Us</a>
            <a href="#" className="hover:text-orange-600">How It Works</a>
            <a href="#" className="hover:text-orange-600">Pricing</a>
            <a href="#" className="hover:text-orange-600">FAQs</a>
            <a href="#" className="hover:text-orange-600">Blog</a>
            <a href="#" className="hover:text-orange-600">Contact Us</a>
          </nav>

          <div className="pt-8 space-y-4">
             <div className="flex items-center gap-8 flex-wrap">
               <div className="text-2xl font-black text-[#5D4037] opacity-50">PMKVY</div>
               <div className="flex items-center gap-2 font-bold text-green-700 bg-white p-2 rounded border border-green-100 shadow-sm">
                  🛡️ Secure UPI
               </div>
               <div className="flex -space-x-2">
                  {[1,2,3,4].map(n => (
                    <img key={n} src={`https://picsum.photos/30/30?random=${n}`} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-800 border-2 border-white">2.5k+</div>
               </div>
             </div>
          </div>
        </div>

        {/* Chat Bubbles / Social */}
        <div className="space-y-6 flex flex-col items-end">
          <div className="space-y-3 w-full max-w-xs">
            <div className="flex gap-2 items-center bg-white p-3 rounded-2xl rounded-tr-none shadow-sm border border-gray-100">
               <img src="https://picsum.photos/40/40?random=11" className="w-8 h-8 rounded-full" />
               <div className="flex-1 h-2 bg-gray-100 rounded-full"></div>
            </div>
            <div className="flex gap-2 items-center bg-white p-3 rounded-2xl rounded-tr-none shadow-sm border border-gray-100 ml-4">
               <img src="https://picsum.photos/40/40?random=12" className="w-8 h-8 rounded-full" />
               <div className="flex-1 h-2 bg-gray-100 rounded-full"></div>
            </div>
            <div className="flex gap-2 items-center bg-white p-3 rounded-2xl rounded-tr-none shadow-sm border border-gray-100">
               <img src="https://picsum.photos/40/40?random=13" className="w-8 h-8 rounded-full" />
               <div className="flex-1 h-2 bg-gray-100 rounded-full w-2/3"></div>
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity">f</div>
            <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity">t</div>
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity">y</div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-xs text-[#8D6E63] mt-12 pt-4 border-t border-[#DED0C1] opacity-50">
        © 2024 BharatFreelance. Designed for Bharat, by Bharat.
      </div>
    </footer>
  );
};
