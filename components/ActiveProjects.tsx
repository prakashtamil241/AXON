import React from 'react';

export const ActiveProjects: React.FC = () => {
  return (
    <div className="flex-1 bg-[#FDF9F3] text-[#5D4037] overflow-y-auto" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}>
      
      {/* Dynamic Header Section */}
      <section className="relative h-64 md:h-80 flex flex-col justify-end p-6 md:p-12 overflow-hidden border-b border-[#E7D9C9]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover opacity-20 grayscale" 
            alt="Workspace" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDF9F3] via-[#FDF9F3]/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 space-y-4 max-w-6xl w-full mx-auto">
          <div className="flex items-center gap-4 text-xs font-bold text-[#8D6E63] uppercase tracking-[0.2em]">
            <span>Freelancer Hub</span>
            <span className="opacity-30">/</span>
            <span className="text-orange-800">My Active Projects</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-space">Workspace & Ongoing Jobs</h1>
          <p className="text-sm md:text-base font-medium text-[#8D6E63]">Managing 3 active collaborations across India.</p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <StatSmall icon="📁" label="Total Active" value="03" />
            <StatSmall icon="⏳" label="Milestones Due" value="02" />
            <StatSmall icon="🛡️" label="Escrow Secured" value="₹ 45,000" />
          </div>
        </div>
      </section>

      {/* Workspace Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Active Projects List */}
        <div className="lg:col-span-8 space-y-8">
          
          <div className="flex items-center justify-between border-b border-[#E7D9C9] pb-4">
             <h2 className="text-2xl font-black">Current Engagements</h2>
             <div className="flex gap-2">
                <StatusFilter label="All" active />
                <StatusFilter label="In Progress" />
                <StatusFilter label="Pending Payment" />
             </div>
          </div>

          <div className="space-y-10">
            <ProjectProgressCard 
              title="E-Commerce Website Redesign"
              client="Sandeep Khanna (Retail MSME)"
              progress={65}
              nextMilestone="Backend Integration"
              deadline="In 4 days"
              budget="₹ 30,000"
              status="Development phase"
              color="bg-orange-500"
            />

            <ProjectProgressCard 
              title="Hindi Content Strategy - Regional Expansion"
              client="Bhasha Tech Ltd."
              progress={40}
              nextMilestone="Content Approval (Round 2)"
              deadline="In 2 days"
              budget="₹ 15,000"
              status="Revision phase"
              color="bg-green-600"
            />
          </div>
        </div>

        {/* Right Sidebar: Intelligence & Calendar */}
        <div className="lg:col-span-4 space-y-8">
           
           {/* Escrow Status Monitor */}
           <section className="bg-[#425C3C] text-white rounded-[2.5rem] p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                 <h3 className="font-bold text-sm uppercase tracking-widest opacity-70">Axon Escrow Shield</h3>
                 <div className="flex items-center justify-between">
                    <span className="text-4xl font-black">₹ 45,000</span>
                    <span className="text-3xl">🛡️</span>
                 </div>
                 <p className="text-xs opacity-80 leading-relaxed">Your funds are verified and held securely until project milestones are approved.</p>
                 <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 py-2.5 rounded-xl text-xs font-bold transition-colors">
                    View Transaction History
                 </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
           </section>

           {/* Upcoming Deadlines */}
           <section className="bg-white/40 border border-[#E7D9C9] rounded-[2.5rem] p-6 space-y-6 shadow-sm">
              <div className="flex justify-between items-center border-b border-[#F3EAD3] pb-4">
                <h3 className="font-bold text-sm uppercase tracking-widest text-[#8D6E63]">Upcoming Deadlines</h3>
                <span className="text-[10px] opacity-30">▶</span>
              </div>
              <div className="space-y-5">
                 <DeadlineItem date="MAY 28" label="E-Commerce API Docs" priority="High" />
                 <DeadlineItem date="MAY 30" label="Content Draft - Part 2" priority="Medium" />
                 <DeadlineItem date="JUN 02" label="UI Polish & Feedback" priority="Low" />
              </div>
           </section>

           {/* AI Workspace Assistant */}
           <section className="bg-white rounded-[2.5rem] border border-[#E7D9C9] p-8 space-y-4 shadow-sm border-b-4 border-orange-500/20">
              <div className="flex items-center gap-3">
                 <span className="text-2xl">🤖</span>
                 <h3 className="font-black text-sm uppercase tracking-widest">AI Project Insight</h3>
              </div>
              <p className="text-xs text-[#5D4037] italic leading-relaxed">
                "Based on current velocity, you are 2 days ahead of schedule for 'E-Commerce Redesign'. Great job! Consider starting the 'Bhasha Tech' content audit early."
              </p>
           </section>
        </div>
      </div>
    </div>
  );
};

const StatSmall: React.FC<{ icon: string; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="bg-white/60 border border-[#E7D9C9] px-6 py-4 rounded-2xl flex items-center gap-4 shadow-sm">
    <span className="text-2xl">{icon}</span>
    <div className="flex flex-col">
       <span className="text-[10px] font-bold text-[#8D6E63] uppercase tracking-wider">{label}</span>
       <span className="text-base font-black text-[#5D4037]">{value}</span>
    </div>
  </div>
);

const StatusFilter: React.FC<{ label: string; active?: boolean }> = ({ label, active }) => (
  <button className={`px-4 py-1.5 rounded-full text-[10px] font-bold border transition-all ${active ? 'bg-[#425C3C] text-white border-[#425C3C]' : 'bg-white text-[#8D6E63] border-[#E7D9C9]'}`}>
    {label}
  </button>
);

const ProjectProgressCard: React.FC<{
  title: string;
  client: string;
  progress: number;
  nextMilestone: string;
  deadline: string;
  budget: string;
  status: string;
  color: string;
}> = ({ title, client, progress, nextMilestone, deadline, budget, status, color }) => (
  <div className="bg-white rounded-[2.5rem] border border-[#E7D9C9] p-8 shadow-sm hover:shadow-lg transition-all space-y-8 group overflow-hidden relative">
    <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-full translate-x-12 -translate-y-12 opacity-50"></div>
    
    <div className="flex flex-col md:flex-row justify-between gap-6 relative z-10">
      <div className="space-y-1 flex-1">
        <h3 className="text-2xl font-black text-[#5D4037]">{title}</h3>
        <p className="text-sm font-medium text-[#8D6E63]">Client: {client}</p>
        <div className="flex items-center gap-3 pt-2">
           <span className="bg-orange-50 text-orange-800 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-orange-100">{status}</span>
           <span className="text-xs font-bold text-green-700">Budget Secured: {budget}</span>
        </div>
      </div>
      
      <div className="flex flex-col items-center md:items-end gap-2">
         <div className="relative w-20 h-20">
            <svg className="w-full h-full transform -rotate-90">
               <circle cx="40" cy="40" r="35" stroke="#F3EAD3" strokeWidth="6" fill="transparent" />
               <circle 
                 cx="40" 
                 cy="40" 
                 r="35" 
                 stroke="currentColor" 
                 strokeWidth="6" 
                 fill="transparent" 
                 strokeDasharray={2 * Math.PI * 35}
                 strokeDashoffset={2 * Math.PI * 35 * (1 - progress / 100)}
                 className={`text-${color.replace('bg-', '')}`}
               />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xs font-black">{progress}%</div>
         </div>
      </div>
    </div>

    {/* Milestone Steps */}
    <div className="space-y-4">
       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-[#8D6E63]">
          <span>Milestone: {nextMilestone}</span>
          <span>Target: {deadline}</span>
       </div>
       <div className="relative h-2 bg-[#F3EAD3] rounded-full overflow-hidden">
          <div className={`absolute top-0 left-0 h-full ${color} transition-all duration-1000`} style={{ width: `${progress}%` }}></div>
       </div>
       <div className="flex justify-between text-[10px] font-bold opacity-40">
          <span>Started</span>
          <span>Handoff</span>
       </div>
    </div>

    <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-[#F9F5EF]">
       <div className="flex gap-4">
          <ActionButton icon="💬" label="Chat" />
          <ActionButton icon="📂" label="Files" />
          <ActionButton icon="📹" label="Sync" />
       </div>
       <div className="flex gap-3">
          <button className="bg-white border border-[#DED0C1] text-[#5D4037] px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-orange-50 transition-colors">
            Log Hours
          </button>
          <button className="bg-[#425C3C] text-white px-8 py-2.5 rounded-xl text-xs font-bold shadow-md hover:bg-[#2E4229] transition-all active:scale-95">
            Submit Deliverable
          </button>
       </div>
    </div>
  </div>
);

const ActionButton: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <button className="flex flex-col items-center gap-1 group">
    <div className="w-10 h-10 bg-[#F3EAD3] rounded-xl flex items-center justify-center text-xl group-hover:bg-white group-hover:shadow-sm border border-transparent group-hover:border-[#E7D9C9] transition-all">
      {icon}
    </div>
    <span className="text-[9px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100">{label}</span>
  </button>
);

const DeadlineItem: React.FC<{ date: string; label: string; priority: string }> = ({ date, label, priority }) => (
  <div className="flex items-center gap-4 group cursor-default">
     <div className="w-12 text-center">
        <div className="text-[10px] font-black text-[#8D6E63]">{date.split(' ')[0]}</div>
        <div className="text-xl font-black">{date.split(' ')[1]}</div>
     </div>
     <div className="flex-1 space-y-1">
        <h4 className="text-xs font-bold group-hover:text-orange-700 transition-colors">{label}</h4>
        <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${priority === 'High' ? 'bg-red-50 text-red-600' : priority === 'Medium' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'}`}>
           {priority}
        </span>
     </div>
  </div>
);