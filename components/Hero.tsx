import React from 'react';

interface HeroProps {
  onLogin?: (isClient: boolean) => void;
}

const goldGradient = 'bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#996515] border-white/40 shadow-lg';

const freelancerOrbits = [
  { icon: '💻', color: goldGradient, delay: '0s' },
  { icon: '🎨', color: goldGradient, delay: '-2s' },
  { icon: '✍️', color: goldGradient, delay: '-4s' },
  { icon: '📷', color: goldGradient, delay: '-6s' },
];

const clientOrbits = [
  { icon: '📈', color: goldGradient, delay: '0s' },
  { icon: '🤝', color: goldGradient, delay: '-2.5s' },
  { icon: '🏢', color: goldGradient, delay: '-5s' },
  { icon: '🛡️', color: goldGradient, delay: '-7.5s' },
];

const sparkles = [
  { top: '10%', left: '10%', size: '6px', delay: '0s' },
  { top: '20%', left: '80%', size: '4px', delay: '1s' },
  { top: '80%', left: '15%', size: '5px', delay: '1.5s' },
  { top: '75%', left: '85%', size: '4px', delay: '0.5s' },
  { top: '5%', left: '50%', size: '3px', delay: '2s' },
  { top: '90%', left: '45%', size: '5px', delay: '2.5s' },
];

export const Hero: React.FC<HeroProps> = ({ onLogin }) => {
  return (
    <section className="relative flex flex-col items-center text-center space-y-12 pt-10">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#5D4037] tracking-tight">
          A Trusted Platform for Hiring and Freelancing in India
        </h1>
        <p className="text-lg md:text-xl text-[#8D6E63] font-medium max-w-2xl mx-auto">
          Work in your comfortable language. Get paid in rupees. Keep more of what you earn.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-20 md:gap-32 py-10">
        {/* Find Work Circle */}
        <div className="relative group">
          <div className="absolute inset-0 bg-orange-200/30 rounded-full blur-2xl group-hover:bg-orange-300/40 transition-colors duration-500"></div>
          
          {sparkles.map((s, i) => (
            <div 
              key={`sparkle-fw-${i}`}
              className="absolute bg-amber-400 rounded-full animate-twinkle shadow-[0_0_10px_rgba(251,191,36,0.8)]"
              style={{ 
                top: s.top, 
                left: s.left, 
                width: s.size, 
                height: s.size, 
                animationDelay: s.delay 
              }}
            ></div>
          ))}

          {freelancerOrbits.map((orb, i) => (
            <div 
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 pointer-events-none"
              style={{ animation: `orbit-rotate 10s linear infinite`, animationDelay: orb.delay }}
            >
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 ${orb.color} rounded-full flex items-center justify-center text-lg border-2 backdrop-blur-sm`}>
                {orb.icon}
              </div>
            </div>
          ))}

          <button 
            onClick={() => onLogin?.(false)}
            className="relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#D85B1B] to-[#BF4F17] text-white font-bold rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 z-10 flex flex-col items-center justify-center border-4 border-white overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 -skew-y-12"></div>
            <span className="text-2xl md:text-3xl mb-1 drop-shadow-md">🔍</span>
            <span className="text-xs md:text-sm uppercase tracking-widest drop-shadow-sm">Find Work</span>
          </button>
        </div>

        {/* Hire Talent Circle */}
        <div className="relative group">
          <div className="absolute inset-0 bg-green-200/30 rounded-full blur-2xl group-hover:bg-green-300/40 transition-colors duration-500"></div>
          
          {sparkles.map((s, i) => (
            <div 
              key={`sparkle-ht-${i}`}
              className="absolute bg-amber-400 rounded-full animate-twinkle shadow-[0_0_10px_rgba(251,191,36,0.8)]"
              style={{ 
                top: s.top, 
                left: s.left, 
                width: s.size, 
                height: s.size, 
                animationDelay: `calc(${s.delay} + 0.3s)` 
              }}
            ></div>
          ))}

          {clientOrbits.map((orb, i) => (
            <div 
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 pointer-events-none"
              style={{ animation: `orbit-rotate 12s linear infinite reverse`, animationDelay: orb.delay }}
            >
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 ${orb.color} rounded-full flex items-center justify-center text-lg border-2 backdrop-blur-sm`}>
                {orb.icon}
              </div>
            </div>
          ))}

          <button 
            onClick={() => onLogin?.(true)}
            className="relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white font-bold rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 z-10 flex flex-col items-center justify-center border-4 border-white overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 -skew-y-12"></div>
            <span className="text-2xl md:text-3xl mb-1 drop-shadow-md">🤝</span>
            <span className="text-xs md:text-sm uppercase tracking-widest drop-shadow-sm">Hire Talent</span>
          </button>
        </div>
      </div>

      {/* Hero Video Container */}
      <div className="relative mt-8 w-full max-w-5xl mx-auto h-[350px] md:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/60 bg-[#1a1a1a]">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2021/04/12/70860-537446700_large.mp4" type="video/mp4" />
          <source src="https://cdn.pixabay.com/video/2024/05/26/213764_large.mp4" type="video/mp4" />
        </video>
        
        {/* Simple Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 hover:bg-black/20 transition-colors pointer-events-none">
           <button 
             onClick={(e) => {
               e.stopPropagation();
               onLogin?.(true);
             }}
             className="pointer-events-auto bg-[#268c5d] hover:bg-[#2eaa6e] hover:scale-105 text-white px-12 md:px-16 py-4 md:py-5 rounded-full font-bold text-xl md:text-2xl shadow-xl transition-all active:scale-95 border border-white/30"
           >
             Get started
           </button>
        </div>

        {/* Decorative corner borders */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-white/30 rounded-tl-xl pointer-events-none"></div>
        <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-xl pointer-events-none"></div>
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-white/30 rounded-bl-xl pointer-events-none"></div>
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-white/30 rounded-br-xl pointer-events-none"></div>
      </div>

      <style>{`
        @keyframes orbit-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};