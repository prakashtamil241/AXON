import React, { useState } from 'react';
import { AppliedJob } from '../App';

interface ProposalsPageProps {
  appliedJobs: AppliedJob[];
}

export const ProposalsPage: React.FC<ProposalsPageProps> = ({ appliedJobs }) => {
  const [showOptimizeModal, setShowOptimizeModal] = useState(false);

  return (
    <div className="flex-1 bg-[#FDF9F3] text-[#5D4037] overflow-y-auto" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}>
      
      {/* Premium Optimization Modal */}
      {showOptimizeModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div 
            className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl border border-[#E7D9C9] p-8 space-y-6 text-center animate-modal-pop relative overflow-hidden"
            style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-600 via-white to-green-600"></div>
            
            <div className="space-y-4 pt-2">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-4xl mx-auto shadow-inner border border-orange-100">
                ✨
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-[#5D4037]">Premium Optimization</h3>
              <p className="text-sm font-medium text-[#8D6E63] leading-relaxed">
                Upgrade for premium optimization and unlock AI-powered profile enhancements to stand out from the crowd.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button 
                onClick={() => setShowOptimizeModal(false)}
                className="w-full bg-[#B8860B] text-white py-3.5 rounded-2xl font-black text-sm shadow-xl hover:bg-[#996515] transition-all active:scale-95"
              >
                Upgrade Now
              </button>
              <button 
                onClick={() => setShowOptimizeModal(false)}
                className="w-full bg-white border border-[#DED0C1] text-[#5D4037] py-3.5 rounded-2xl font-bold text-sm hover:bg-[#F3EAD3]/30 transition-all active:scale-95"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Immersive Header Section */}
      <section className="relative h-64 md:h-80 flex flex-col justify-end p-6 md:p-12 overflow-hidden border-b border-[#E7D9C9]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover opacity-20 grayscale" 
            alt="Indian Heritage" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDF9F3] via-[#FDF9F3]/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 space-y-4 max-w-6xl w-full mx-auto">
          <div className="flex items-center gap-4 text-xs font-bold text-[#8D6E63] uppercase tracking-[0.2em]">
            <span>My Career</span>
            <span className="opacity-30">/</span>
            <span className="text-orange-800">Proposals Management</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-space">Proposals & Applications</h1>
          <p className="text-sm md:text-base font-medium text-[#8D6E63]">Track all your sent proposals and active bids in one place.</p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <StatPill icon="💼" label="Active Bids" value={appliedJobs.length.toString()} />
            <StatPill icon="🏷️" label="Avg Rate" value="₹ 15k" />
            <StatPill icon="⚡" label="Invitations" value="02" />
          </div>
        </div>
      </section>

      {/* Main Dashboard Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left/Main Column: Proposals List */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Recent Applications Section */}
          {appliedJobs.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E7D9C9] pb-4">
                 <h2 className="text-2xl font-black">Recent Applications</h2>
                 <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-1 rounded-lg uppercase tracking-widest">New</span>
              </div>
              <div className="space-y-4">
                {appliedJobs.map((job) => (
                  <AppliedJobRow key={job.id} job={job} />
                ))}
              </div>
            </div>
          )}

          {/* Empty State if no applications */}
          {appliedJobs.length === 0 && (
            <div className="bg-white/60 border border-dashed border-[#E7D9C9] rounded-[2rem] p-12 text-center space-y-4">
              <span className="text-6xl">📥</span>
              <h3 className="text-xl font-bold">No active applications yet</h3>
              <p className="text-sm text-[#8D6E63]">Browse jobs and use 'Quick Apply' to start your journey!</p>
            </div>
          )}

          {/* AI Comparison Banner (Mockup/Informational) */}
          <div className="bg-white/60 border border-[#E7D9C9] rounded-[2rem] p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm group hover:shadow-md transition-shadow">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">🤖</div>
              <div className="space-y-1">
                <h3 className="text-lg font-black">AI Profile Optimizer</h3>
                <p className="text-xs text-[#8D6E63] font-medium italic">Our AI suggests you could increase your bid acceptance by 20% with a portfolio update.</p>
              </div>
            </div>
            <button 
              onClick={() => setShowOptimizeModal(true)}
              className="bg-[#425C3C] text-white px-8 py-3 rounded-xl font-bold text-sm shadow-xl hover:bg-[#2E4229] whitespace-nowrap active:scale-95 transition-all"
            >
              Optimize Profile
            </button>
          </div>
        </div>

        {/* Right Sidebar: Analytics & Intelligence */}
        <div className="lg:col-span-4 space-y-8">
           <section className="bg-white/40 border border-[#E7D9C9] rounded-[2.5rem] p-6 space-y-6 shadow-sm">
              <div className="flex justify-between items-center border-b border-[#F3EAD3] pb-4">
                <h3 className="font-bold text-sm uppercase tracking-widest text-[#8D6E63]">Application Insights</h3>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-white rounded-xl border border-[#E7D9C9] space-y-1">
                    <p className="text-[11px] font-black">Profile Views</p>
                    <p className="text-xl font-black text-orange-700">14</p>
                    <p className="text-[9px] font-bold text-[#8D6E63]">+5 this week</p>
                 </div>
                 <div className="p-3 bg-white rounded-xl border border-[#E7D9C9] space-y-1">
                    <p className="text-[11px] font-black">Response Rate</p>
                    <p className="text-xl font-black text-green-700">88%</p>
                    <p className="text-[9px] font-bold text-[#8D6E63]">Top 5% of freelancers</p>
                 </div>
              </div>
           </section>

           <section className="bg-[#1A365D] text-white rounded-[2.5rem] p-8 space-y-4 shadow-xl relative overflow-hidden">
              <h3 className="font-bold text-xs uppercase tracking-widest opacity-60">Success Tips</h3>
              <p className="text-xs italic opacity-80 leading-relaxed">"Jobs with Hindi requirements usually have 40% fewer applicants. Apply to more regional language jobs to stand out!"</p>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-white/5 rounded-full"></div>
           </section>
        </div>
      </div>

      <style>{`
        @keyframes modal-pop {
          0% { opacity: 0; transform: scale(0.9) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-modal-pop {
          animation: modal-pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const AppliedJobRow: React.FC<{ job: AppliedJob }> = ({ job }) => (
  <div className="bg-white rounded-2xl border border-[#E7D9C9] p-6 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="flex gap-4 items-center flex-1">
       <div className="w-12 h-12 bg-[#F3EAD3] rounded-xl flex items-center justify-center text-2xl">💼</div>
       <div>
          <h4 className="font-black text-base">{job.title}</h4>
          <p className="text-xs font-bold text-[#8D6E63]">Client: {job.clientName} ● Applied on {job.date}</p>
       </div>
    </div>
    <div className="flex items-center gap-6">
       <div className="text-right">
          <p className="text-[10px] font-bold text-[#8D6E63] uppercase tracking-widest">Bid Price</p>
          <p className="text-lg font-black text-green-700">{job.budget.split('-')[0]}</p>
       </div>
       <div className="bg-orange-50 text-orange-700 border border-orange-100 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
         Pending
       </div>
    </div>
  </div>
);

const StatPill: React.FC<{ icon: string; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="bg-white/60 border border-[#E7D9C9] px-6 py-4 rounded-2xl flex items-center gap-4 shadow-sm min-w-[160px]">
    <span className="text-2xl">{icon}</span>
    <div className="flex flex-col">
       <span className="text-[10px] font-bold text-[#8D6E63] uppercase tracking-wider">{label}</span>
       <span className="text-sm font-black text-[#5D4037]">{value}</span>
    </div>
  </div>
);