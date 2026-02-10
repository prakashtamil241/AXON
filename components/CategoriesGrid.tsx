
import React from 'react';

const row1 = [
  { icon: '📄', name: 'Hindi Content Writing' },
  { icon: '📱', name: 'Regional Social Media' },
  { icon: '🎁', name: 'Wedding Services' },
  { icon: '🛒', name: 'E-Commerce Setup' },
  { icon: '⚖️', name: 'GST & Accounting' },
];

const row2 = [
  { icon: '💻', name: 'Web Development' },
  { icon: '🎨', name: 'Graphic Design' },
  { icon: '🎬', name: 'Video Editing' },
  { icon: '🎞️', name: 'Sales Editing' },
  { icon: '📸', name: 'Photography' },
];

export const CategoriesGrid: React.FC = () => {
  return (
    <section className="space-y-12 overflow-hidden py-4">
      <div className="flex items-center justify-center gap-4 text-[#8D6E63] font-bold">
        <span>◆</span>
        <h2 className="text-2xl md:text-3xl text-[#5D4037]">Explore Top Categories</h2>
        <span>◆</span>
      </div>

      <div className="space-y-6">
        {/* Top Row: Moves Left to Right */}
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee-right whitespace-nowrap gap-4 py-2">
            {[...row1, ...row1, ...row1].map((cat, idx) => (
              <CategoryCard key={`row1-${idx}`} icon={cat.icon} name={cat.name} />
            ))}
          </div>
          {/* Duplicate for seamless effect */}
          <div className="absolute top-0 flex animate-marquee-right whitespace-nowrap gap-4 py-2 translate-x-[-100%]">
            {[...row1, ...row1, ...row1].map((cat, idx) => (
              <CategoryCard key={`row1-dup-${idx}`} icon={cat.icon} name={cat.name} />
            ))}
          </div>
        </div>

        {/* Bottom Row: Moves Right to Left */}
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee-left whitespace-nowrap gap-4 py-2">
            {[...row2, ...row2, ...row2].map((cat, idx) => (
              <CategoryCard key={`row2-${idx}`} icon={cat.icon} name={cat.name} />
            ))}
          </div>
          {/* Duplicate for seamless effect */}
          <div className="absolute top-0 flex animate-marquee-left whitespace-nowrap gap-4 py-2 translate-x-[100%]">
            {[...row2, ...row2, ...row2].map((cat, idx) => (
              <CategoryCard key={`row2-dup-${idx}`} icon={cat.icon} name={cat.name} />
            ))}
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-8 pt-8 opacity-80">
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#DED0C1] text-xs font-bold text-[#5D4037] shadow-sm">
          <span className="text-orange-500">⭐</span> Verified by PMKVY
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#DED0C1] text-xs font-bold text-[#5D4037] shadow-sm">
          <span className="text-green-600">✔️</span> Secure UPI Payments
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#DED0C1] text-xs font-bold text-[#5D4037] shadow-sm">
          <span className="text-blue-500">👥</span> 2500+ Happy Freelancers
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .animate-marquee-left:hover, .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const CategoryCard: React.FC<{ icon: string; name: string }> = ({ icon, name }) => (
  <div className="inline-flex flex-col items-center justify-center bg-[#F5EFE6] border border-[#DED0C1] rounded-2xl p-6 min-w-[180px] md:min-w-[220px] text-center gap-4 hover:shadow-lg transition-all cursor-pointer group hover:-translate-y-1">
    <div className="text-4xl group-hover:scale-125 transition-transform duration-300 transform-gpu">{icon}</div>
    <span className="text-sm font-bold text-[#5D4037] whitespace-normal leading-tight">{name}</span>
  </div>
);
