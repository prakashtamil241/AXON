
import React from 'react';

const Step: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-16 h-16 bg-[#F5EFE6] rounded-xl border border-[#DED0C1] flex items-center justify-center text-3xl shadow-sm">
      {icon}
    </div>
    <span className="text-sm font-bold text-[#5D4037]">{label}</span>
  </div>
);

const Arrow = () => <span className="text-[#DED0C1] font-bold text-xl mb-6">➔</span>;

export const HowItWorks: React.FC = () => {
  return (
    <section className="bg-[#F3EAD3] p-8 rounded-2xl border border-[#E7D9C9] space-y-8">
      <div className="flex items-center justify-center gap-4 text-[#8D6E63] font-bold">
        <span>◆</span>
        <h2 className="text-2xl md:text-3xl text-[#5D4037]">How It Works</h2>
        <span>◆</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* For Freelancers */}
        <div className="space-y-6">
          <h3 className="text-center font-bold text-lg text-[#5D4037]">For Freelancers</h3>
          <div className="flex justify-around items-center">
            <Step icon="📝" label="Sign Up" />
            <Arrow />
            <Step icon="👩‍💻" label="AI Match" />
            <Arrow />
            <Step icon="💼" label="Get Hired" />
          </div>
        </div>

        {/* For Clients */}
        <div className="space-y-6 border-t md:border-t-0 md:border-l border-[#DED0C1] pt-6 md:pt-0 md:pl-6">
          <h3 className="text-center font-bold text-lg text-[#5D4037]">For Clients</h3>
          <div className="flex justify-around items-center">
            <Step icon="🔍" label="Post Job" />
            <Arrow />
            <Step icon="🤝" label="Get Matches" />
            <Arrow />
            <Step icon="🏆" label="Hire" />
          </div>
        </div>
      </div>
    </section>
  );
};
