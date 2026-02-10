import React, { useState } from 'react';
import { AppView, AppliedJob } from '../App';
import { BrowseJobs } from './BrowseJobs';
import { Profile } from './Profile';
import { JobDetails } from './JobDetails';
import { ProposalsPage } from './ProposalsPage';
import { ActiveProjects } from './ActiveProjects';
import { Earnings } from './Earnings';
import { Settings } from './Settings';

interface DashboardProps {
  userName: string;
  onLogout: () => void;
  currentView: AppView;
  onViewChange: (view: AppView) => void;
  appliedJobs: AppliedJob[];
  onQuickApply: (job: AppliedJob) => void;
}

const PROF_PHOTO = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=500&h=500&auto=format&fit=crop";

export const Dashboard: React.FC<DashboardProps> = ({ 
  userName, 
  onLogout, 
  currentView, 
  onViewChange,
  appliedJobs,
  onQuickApply
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavClick = (view: AppView) => {
    onViewChange(view);
    setIsMobileMenuOpen(false);
  };

  const handleBack = () => {
    if (currentView === 'job_details') {
      onViewChange('browse_jobs');
    } else if (['browse_jobs', 'profile', 'proposals', 'active_projects', 'earnings', 'settings'].includes(currentView)) {
      onViewChange('dashboard');
    } else if (currentView === 'dashboard') {
      onViewChange('landing');
    }
  };

  const firstName = userName.split(' ')[0];

  return (
    <div className="min-h-screen bg-[#FDF9F3] text-[#5D4037] flex flex-col font-sans relative" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}>
      
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] lg:hidden"
          onClick={toggleMobileMenu}
        >
          <aside 
            className="w-72 h-full bg-[#F9F5EF] shadow-2xl p-6 flex flex-col space-y-6 animate-slide-in-left"
            style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-3xl font-black text-[#B8860B] tracking-tighter">AXON</span>
              <button onClick={toggleMobileMenu} className="text-2xl">✕</button>
            </div>
            
            <nav className="flex flex-col gap-2">
              <SidebarItem icon="🏠" label="Dashboard" active={currentView === 'dashboard'} onClick={() => handleNavClick('dashboard')} />
              <SidebarItem icon="🔍" label="Browse Jobs" hasArrow active={currentView === 'browse_jobs' || currentView === 'job_details'} onClick={() => handleNavClick('browse_jobs')} />
              <SidebarItem icon="📄" label="My Proposals" active={currentView === 'proposals'} onClick={() => handleNavClick('proposals')} />
              <SidebarItem icon="💼" label="Active Projects" hasArrow active={currentView === 'active_projects'} onClick={() => handleNavClick('active_projects')} />
              <SidebarItem icon="💰" label="Earnings" active={currentView === 'earnings'} onClick={() => handleNavClick('earnings')} />
              <SidebarItem icon="👤" label="Profile" active={currentView === 'profile'} onClick={() => handleNavClick('profile')} />
              <SidebarItem icon="⚙️" label="Settings" active={currentView === 'settings'} onClick={() => handleNavClick('settings')} />
            </nav>

            <div className="mt-auto border-t border-[#E7D9C9] pt-6">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E7D9C9] space-y-3">
                <div className="flex items-center gap-3">
                  <img src={PROF_PHOTO} className="w-10 h-10 rounded-lg shadow-sm object-cover" alt="User" />
                  <div className="flex flex-col">
                    <span className="font-bold text-xs">{userName} 🇮🇳</span>
                    <span className="text-[9px] text-[#8D6E63]">Freelance Professional</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={onLogout}
                className="w-full mt-4 text-orange-600 font-bold text-sm border border-orange-200 py-2 rounded-lg hover:bg-orange-50"
              >
                Logout
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-[#E7D9C9] bg-white/60 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleBack}
            className="p-2 hover:bg-[#F3EAD3] rounded-full transition-colors border border-[#E7D9C9] bg-white shadow-sm group"
            aria-label="Go Back"
          >
            <span className="text-xl group-hover:-translate-x-0.5 transition-transform block">←</span>
          </button>

          {currentView === 'dashboard' && (
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 hover:bg-[#F3EAD3] rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-0.5 bg-[#5D4037] mb-1"></div>
              <div className="w-5 h-0.5 bg-[#5D4037] mb-1"></div>
              <div className="w-5 h-0.5 bg-[#5D4037]"></div>
            </button>
          )}

          <div className="flex items-center gap-2">
            <span className="text-3xl font-black text-[#B8860B] tracking-tighter">AXON</span>
            <span className="text-[#8D6E63] font-medium ml-4 hidden lg:inline capitalize">
              {currentView.replace('_', ' ')}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <div className="bg-[#F3EAD3] border border-[#DED0C1] px-2 md:px-3 py-1.5 rounded-lg flex items-center gap-1 md:gap-2 text-[10px] md:text-xs font-bold text-green-700 shadow-sm">
             <span className="text-sm">🛡️</span> <span className="hidden sm:inline">Verified Identity</span>
          </div>
          <div className="relative cursor-pointer flex items-center gap-3" onClick={onLogout}>
            <div className="text-right hidden sm:block">
               <p className="text-xs font-bold leading-none">{firstName}</p>
               <p className="text-[10px] text-orange-600 font-bold">Logout</p>
            </div>
            <div className="relative">
              <img src={PROF_PHOTO} className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-orange-200 shadow-sm object-cover" alt="User" />
            </div>
          </div>
        </div>
      </header>

      {/* View Content Logic */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-[#E7D9C9] flex flex-col bg-[#F9F5EF] p-4 space-y-6 hidden lg:flex">
          <nav className="flex flex-col gap-1">
            <SidebarItem icon="🏠" label="Dashboard" active={currentView === 'dashboard'} onClick={() => handleNavClick('dashboard')} />
            <SidebarItem icon="🔍" label="Browse Jobs" hasArrow active={currentView === 'browse_jobs' || currentView === 'job_details'} onClick={() => handleNavClick('browse_jobs')} />
            <SidebarItem icon="📄" label="My Proposals" active={currentView === 'proposals'} onClick={() => handleNavClick('proposals')} />
            <SidebarItem icon="💼" label="Active Projects" hasArrow active={currentView === 'active_projects'} onClick={() => handleNavClick('active_projects')} />
            <SidebarItem icon="💰" label="Earnings" active={currentView === 'earnings'} onClick={() => handleNavClick('earnings')} />
            <SidebarItem icon="👤" label="Profile" active={currentView === 'profile'} onClick={() => handleNavClick('profile')} />
            <SidebarItem icon="⚙️" label="Settings" active={currentView === 'settings'} onClick={() => handleNavClick('settings')} />
          </nav>

          <div className="mt-auto pt-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E7D9C9] space-y-3">
              <div className="flex items-center gap-3">
                <img src={PROF_PHOTO} className="w-10 h-10 rounded-lg shadow-sm object-cover" alt="User" />
                <div className="flex flex-col">
                  <span className="font-bold text-xs">{userName} 🇮🇳</span>
                  <span className="text-[9px] text-[#8D6E63]">Freelance Professional</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Dynamic View Rendering */}
        <div className="flex-1 overflow-y-auto">
          {currentView === 'dashboard' && (
            <div className="p-4 md:p-6 space-y-6">
              <section className="relative bg-white rounded-2xl border border-[#E7D9C9] overflow-hidden shadow-sm flex min-h-[140px] md:min-h-[160px]">
                <div className="flex-1 p-6 md:p-8 space-y-2 z-10">
                  <h2 className="text-2xl md:text-3xl font-bold">Welcome back, {firstName}!</h2>
                  <p className="text-[#8D6E63] font-medium text-base md:text-lg">Here are jobs picked just for you.</p>
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-1/2">
                  <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-15" alt="Banner" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
                </div>
              </section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <StatCardNew title="Total Earnings" value="₹ 65,800" subValue="+ ₹1,500 today" image="https://cdn-icons-png.flaticon.com/512/2613/2613204.png" />
                <StatCardNew title="Success Rate" value="92%" subValue="22 projects ago" image="https://cdn-icons-png.flaticon.com/512/10043/10043015.png" />
              </div>
            </div>
          )}
          {currentView === 'browse_jobs' && <BrowseJobs onViewJob={() => onViewChange('job_details')} onQuickApply={onQuickApply} />}
          {currentView === 'proposals' && <ProposalsPage appliedJobs={appliedJobs} />}
          {currentView === 'active_projects' && <ActiveProjects />}
          {currentView === 'earnings' && <Earnings />}
          {currentView === 'settings' && <Settings userName={userName} />}
          {currentView === 'profile' && <Profile userName={userName} />}
          {currentView === 'job_details' && <JobDetails />}
        </div>
      </div>

      <style>{`
        @keyframes slide-in-left {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

const SidebarItem: React.FC<{ icon: string; label: string; active?: boolean; hasArrow?: boolean; onClick?: () => void }> = ({ icon, label, active, hasArrow, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-[#F3EAD3] text-[#5D4037] font-bold shadow-sm' : 'text-[#8D6E63] hover:bg-white/50'}`}
  >
    <div className="flex items-center gap-3">
      <span className="text-xl">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
    {hasArrow && <span className="text-[10px] opacity-30">▶</span>}
  </div>
);

const StatCardNew: React.FC<{ title: string; value: string; subValue: string; image: string }> = ({ title, value, subValue, image }) => (
  <div className="bg-white rounded-2xl border border-[#E7D9C9] p-5 md:p-6 shadow-sm flex justify-between items-center group hover:border-orange-200 transition-colors">
    <div className="space-y-1">
      <span className="text-[10px] md:text-[11px] font-bold text-[#8D6E63] uppercase tracking-wider">{title}</span>
      <div className="text-2xl md:text-3xl font-black">{value}</div>
      <div className="flex items-center gap-2">
         <span className="text-[10px] md:text-[11px] text-[#8D6E63] font-bold">{subValue}</span>
         <span className="text-green-600 text-[10px]">✔</span>
      </div>
    </div>
    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
       <img src={image} className="w-full h-full object-contain opacity-80" alt={title} />
    </div>
  </div>
);