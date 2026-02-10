import React, { useState } from 'react';
import { AppView } from '../App';

interface ClientDashboardProps {
  userName: string;
  onLogout: () => void;
  onViewChange: (view: AppView) => void;
}

const CLIENT_PHOTO = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop";

export const ClientDashboard: React.FC<ClientDashboardProps> = ({ userName, onLogout, onViewChange }) => {
  const [budget, setBudget] = useState(40000);
  const [notification, setNotification] = useState<string | null>(null);
  const [selectedProposal, setSelectedProposal] = useState<any | null>(null);

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    setNotification("Job Posted Successfully!");
    setTimeout(() => setNotification(null), 3000);
  };

  const showProposal = (freelancer: any) => {
    setSelectedProposal(freelancer);
  };

  const firstName = userName.split(' ')[0];

  return (
    <div className="min-h-screen bg-[#FDF9F3] text-[#5D4037] flex flex-col font-sans relative" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}>
      
      {/* Back Arrow for Client Dashboard */}
      <div className="absolute top-4 left-4 z-50">
        <button 
          onClick={() => onViewChange('landing')}
          className="p-2 hover:bg-[#F3EAD3] rounded-full transition-colors border border-[#E7D9C9] bg-white shadow-sm group"
          aria-label="Go Back to Home"
        >
          <span className="text-xl group-hover:-translate-x-0.5 transition-transform block">←</span>
        </button>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-20 right-8 z-[100] bg-[#425C3C] text-white px-6 py-3 rounded-xl shadow-2xl border border-white/20 flex items-center gap-3 animate-bounce">
          <span className="text-xl">✅</span>
          <span className="font-bold">{notification}</span>
        </div>
      )}

      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-12 py-4 border-b border-[#E7D9C9] bg-white/60 backdrop-blur-md sticky top-0 z-40 pl-16">
        <div className="flex items-center gap-6">
          <span className="text-4xl font-black text-[#B8860B] tracking-tighter">AXON</span>
          <span className="text-[#8D6E63] font-medium hidden lg:inline">Dashboard</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-[#F3EAD3] border border-[#DED0C1] px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold text-green-700 shadow-sm">
             <span className="text-sm">🛡️</span> Verified Business
          </div>
          <div className="relative cursor-pointer flex items-center gap-3" onClick={onLogout}>
            <div className="text-right hidden sm:block">
               <p className="text-xs font-bold leading-none">{userName}</p>
               <p className="text-[10px] text-orange-600 font-bold uppercase tracking-widest mt-1">Logout</p>
            </div>
            <div className="relative">
              <img src={CLIENT_PHOTO} className="w-10 h-10 rounded-full border-2 border-orange-200 shadow-sm object-cover" alt="User" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Welcome Section */}
        <section className="relative bg-[#F3EAD3]/30 p-8 rounded-3xl border border-[#E7D9C9] overflow-hidden">
           <div className="relative z-10 space-y-1 mb-8">
              <h2 className="text-3xl font-black text-[#5D4037]">Welcome back, {firstName}!</h2>
              <p className="text-lg text-[#8D6E63] font-medium">Post jobs and manage your talent pool effortlessly.</p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full relative z-10">
              <StatItem icon="💼" label="Active Jobs" val="3" />
              <StatItem icon="📥" label="Applications" val="30" />
              <StatItem icon="👨‍💻" label="Hired" val="12" />
              <StatItem icon="💰" label="Total Spent" val="₹ 1,00,500" />
           </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 space-y-8">
              {/* Quick Post Job Section */}
              <section className="bg-white/50 border border-[#E7D9C9] rounded-3xl shadow-sm p-8 space-y-6">
                 <h3 className="text-xl font-bold flex items-center gap-2 text-[#5D4037]">Quick Post Job</h3>
                 <form onSubmit={handlePostJob} className="space-y-6">
                    <input type="text" placeholder="Project Title" className="w-full bg-white border border-[#DED0C1] rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-100 text-black" required />
                    <textarea placeholder="Describe your project needs..." rows={4} className="w-full bg-white border border-[#DED0C1] rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-100 text-black"></textarea>
                    <button type="submit" className="bg-[#425C3C] text-white px-14 py-3.5 rounded-xl font-bold text-sm shadow-xl hover:bg-[#2E4229] transition-all">
                       Post Job
                    </button>
                 </form>
              </section>
           </div>
        </div>
      </main>
    </div>
  );
};

const StatItem: React.FC<{ icon: string; label: string; val: string }> = ({ icon, label, val }) => (
  <div className="bg-white/80 border border-[#E7D9C9] p-5 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm">
     <div className="w-12 h-12 bg-[#F5EFE6] rounded-2xl flex items-center justify-center text-2xl mb-3 shadow-inner">{icon}</div>
     <span className="text-[10px] font-bold text-[#8D6E63] uppercase tracking-wider mb-1 px-1">{label}</span>
     <span className="text-lg font-black text-[#5D4037]">{val}</span>
  </div>
);