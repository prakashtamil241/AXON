import React, { useState } from 'react';

type SettingsSection = 'ACCOUNT' | 'SECURITY' | 'PAYMENTS' | 'VERIFICATION';

interface SettingsProps {
  userName?: string;
}

export const Settings: React.FC<SettingsProps> = ({ userName = 'Sandeep Kumar' }) => {
  const [activeSection, setActiveSection] = useState<SettingsSection>('ACCOUNT');

  return (
    <div className="flex-1 bg-[#FDF9F3] text-[#5D4037] overflow-y-auto" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}>
      
      {/* Immersive Settings Header */}
      <section className="relative h-64 md:h-72 flex flex-col justify-end p-6 md:p-12 overflow-hidden border-b border-[#E7D9C9]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover opacity-10 grayscale" 
            alt="Cityscape" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDF9F3] via-[#FDF9F3]/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 space-y-4 max-w-6xl w-full mx-auto">
          <div className="flex items-center gap-4 text-xs font-bold text-[#8D6E63] uppercase tracking-[0.2em]">
            <span>Preferences</span>
            <span className="opacity-30">/</span>
            <span className="text-orange-800">Account Settings</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-space">Settings & Control</h1>
          <p className="text-sm md:text-base font-medium text-[#8D6E63]">Manage your identity, payments, and secure your Bharat freelance journey.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Navigation Tabs */}
        <div className="lg:col-span-3 space-y-2">
           <SettingsNavButton label="Account Information" icon="👤" active={activeSection === 'ACCOUNT'} onClick={() => setActiveSection('ACCOUNT')} />
           <SettingsNavButton label="Security & Privacy" icon="🛡️" active={activeSection === 'SECURITY'} onClick={() => setActiveSection('SECURITY')} />
           <SettingsNavButton label="Payments & UPI" icon="💳" active={activeSection === 'PAYMENTS'} onClick={() => setActiveSection('PAYMENTS')} />
           <SettingsNavButton label="Identity Verification" icon="🆔" active={activeSection === 'VERIFICATION'} onClick={() => setActiveSection('VERIFICATION')} />
        </div>

        {/* Middle: Content Section */}
        <div className="lg:col-span-6 space-y-8 animate-fade-in">
           {activeSection === 'ACCOUNT' && <AccountSettings userName={userName} />}
           {activeSection === 'SECURITY' && <SecuritySettings />}
           {activeSection === 'PAYMENTS' && <PaymentSettings userName={userName} />}
           {activeSection === 'VERIFICATION' && <VerificationSettings />}
        </div>

        {/* Right: Sidebar Status */}
        <div className="lg:col-span-3 space-y-6">
           <section className="bg-white rounded-[2rem] border border-[#E7D9C9] p-8 space-y-6 shadow-sm">
              <h3 className="font-bold text-xs uppercase tracking-widest text-[#8D6E63]">Account Health</h3>
              <div className="flex flex-col items-center gap-4 py-2">
                 <div className="relative w-24 h-24">
                    <svg className="w-full h-full transform -rotate-90">
                       <circle cx="48" cy="48" r="40" stroke="#F3EAD3" strokeWidth="8" fill="transparent" />
                       <circle 
                         cx="48" cy="48" r="40" 
                         stroke="#425C3C" strokeWidth="8" 
                         fill="transparent" 
                         strokeDasharray={2 * Math.PI * 40}
                         strokeDashoffset={2 * Math.PI * 40 * (1 - 0.85)}
                         className="transition-all duration-1000"
                       />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-black text-xl">85%</div>
                 </div>
                 <p className="text-[10px] font-bold text-center text-[#8D6E63]">Great! Complete Identity Verification to reach 100%.</p>
              </div>
           </section>

           <div className="bg-[#EFE8D8] border border-dashed border-[#DED0C1] p-6 rounded-[2rem] space-y-3">
              <div className="flex items-center gap-3">
                 <span className="text-xl">🤖</span>
                 <h4 className="font-black text-xs uppercase tracking-widest">AI Security Tip</h4>
              </div>
              <p className="text-[11px] italic text-[#5D4037]">"We noticed you haven't updated your password in 6 months. A quick refresh keeps your earnings safe!"</p>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const SettingsNavButton: React.FC<{ label: string; icon: string; active?: boolean; onClick: () => void }> = ({ label, icon, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all border ${active ? 'bg-white border-[#E7D9C9] shadow-sm font-bold text-[#5D4037]' : 'bg-transparent border-transparent text-[#8D6E63] hover:bg-white/50'}`}
  >
    <span className="text-xl">{icon}</span>
    <span className="text-sm">{label}</span>
  </button>
);

const AccountSettings: React.FC<{ userName: string }> = ({ userName }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-[2.5rem] border border-[#E7D9C9] p-8 space-y-6">
       <h3 className="text-xl font-black border-b border-[#F9F5EF] pb-4">Personal Details</h3>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
             <label className="text-[10px] font-bold uppercase tracking-widest text-[#8D6E63]">Full Name</label>
             <input type="text" defaultValue={userName} className="w-full bg-[#F9F5EF] border border-[#DED0C1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:bg-white transition-all text-black" />
          </div>
          <div className="space-y-2">
             <label className="text-[10px] font-bold uppercase tracking-widest text-[#8D6E63]">Professional Title</label>
             <input type="text" defaultValue="Freelance Web Developer" className="w-full bg-[#F9F5EF] border border-[#DED0C1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:bg-white transition-all text-black" />
          </div>
          <div className="space-y-2 md:col-span-2">
             <label className="text-[10px] font-bold uppercase tracking-widest text-[#8D6E63]">Email Address</label>
             <input type="email" defaultValue="sandeep.k@example.com" className="w-full bg-[#F9F5EF] border border-[#DED0C1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:bg-white transition-all text-black" />
          </div>
       </div>
       <button className="bg-[#425C3C] text-white px-8 py-3 rounded-xl font-bold text-xs shadow-md hover:bg-[#2E4229] transition-all">Save Changes</button>
    </div>

    <div className="bg-white rounded-[2.5rem] border border-[#E7D9C9] p-8 space-y-6">
       <h3 className="text-xl font-black border-b border-[#F9F5EF] pb-4">Language Preferences</h3>
       <p className="text-xs text-[#8D6E63]">Select the languages you're comfortable working in for AI job matching.</p>
       <div className="flex flex-wrap gap-3">
          <LanguageChip label="English" active />
          <LanguageChip label="Hindi" active />
          <LanguageChip label="Tamil" active />
          <LanguageChip label="Bengali" />
          <LanguageChip label="+ Add Language" dotted />
       </div>
    </div>
  </div>
);

const SecuritySettings: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-[2.5rem] border border-[#E7D9C9] p-8 space-y-6">
       <h3 className="text-xl font-black border-b border-[#F9F5EF] pb-4">Security Center</h3>
       <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-[#F9F5EF] rounded-2xl">
             <div className="space-y-1">
                <p className="text-sm font-bold">Two-Factor Authentication (2FA)</p>
                <p className="text-[10px] text-[#8D6E63]">Add an extra layer of security to your account via WhatsApp/SMS.</p>
             </div>
             <div className="w-12 h-6 bg-green-600 rounded-full relative cursor-pointer shadow-inner">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
             </div>
          </div>
          <div className="flex items-center justify-between p-4 border border-[#E7D9C9] rounded-2xl cursor-pointer hover:bg-orange-50 transition-colors">
             <p className="text-sm font-bold">Change Login Password</p>
             <span className="text-xl">➔</span>
          </div>
          <div className="flex items-center justify-between p-4 border border-[#E7D9C9] rounded-2xl cursor-pointer hover:bg-orange-50 transition-colors">
             <p className="text-sm font-bold">Manage Login Sessions</p>
             <span className="text-[10px] font-bold bg-[#F3EAD3] px-2 py-1 rounded">2 Active</span>
          </div>
       </div>
    </div>
  </div>
);

const PaymentSettings: React.FC<{ userName: string }> = ({ userName }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-[2.5rem] border border-[#E7D9C9] p-8 space-y-6">
       <div className="flex justify-between items-center border-b border-[#F9F5EF] pb-4">
          <h3 className="text-xl font-black">UPI & Bank Transfer</h3>
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-upi-2085056-1747946.png" className="h-4 object-contain grayscale opacity-50" alt="UPI" />
       </div>
       <div className="space-y-4">
          <div className="p-5 border border-[#E7D9C9] rounded-2xl flex justify-between items-center group relative overflow-hidden">
             <div className="relative z-10 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#F3EAD3] rounded-xl flex items-center justify-center text-xl">📱</div>
                <div>
                   <p className="text-sm font-black">{userName.toLowerCase().replace(' ', '.')}@okaxis</p>
                   <p className="text-[10px] font-bold text-green-700 uppercase tracking-widest">Primary UPI ID</p>
                </div>
             </div>
             <button className="text-[10px] font-black text-orange-700 underline relative z-10">Remove</button>
             <div className="absolute top-0 right-0 h-full w-24 bg-green-50/50 -skew-x-12 translate-x-12"></div>
          </div>
          <button className="w-full py-4 border-2 border-dashed border-[#DED0C1] rounded-2xl text-xs font-bold text-[#8D6E63] hover:border-[#425C3C] hover:text-[#425C3C] transition-all">
             + Add New UPI ID or Bank Account
          </button>
       </div>
    </div>
  </div>
);

const VerificationSettings: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-[2.5rem] border border-[#E7D9C9] p-8 space-y-6">
       <h3 className="text-xl font-black border-b border-[#F9F5EF] pb-4">Identity Verification</h3>
       <div className="space-y-4">
          <VerificationRow label="Aadhaar Verification" icon="🆔" status="VERIFIED" color="text-green-700" />
          <VerificationRow label="PAN Card Details" icon="📋" status="VERIFIED" color="text-green-700" />
          <VerificationRow label="PMKVY Skill Certification" icon="🎖️" status="PENDING" color="text-orange-700" />
       </div>
       <div className="p-6 bg-[#F9F5EF] rounded-3xl border border-[#DED0C1] space-y-3">
          <p className="text-xs font-bold leading-relaxed">Why verify? Verified freelancers earn <span className="text-orange-700">3x more invitations</span> and benefit from lower platform commission rates.</p>
          <button className="bg-[#425C3C] text-white px-6 py-2.5 rounded-xl text-[10px] font-black shadow-md">Complete PMKVY Verification</button>
       </div>
    </div>
  </div>
);

const LanguageChip: React.FC<{ label: string; active?: boolean; dotted?: boolean }> = ({ label, active, dotted }) => (
  <div className={`px-4 py-2 rounded-xl text-[10px] font-bold border transition-all cursor-pointer ${active ? 'bg-[#425C3C] text-white border-[#425C3C]' : dotted ? 'border-dashed border-[#DED0C1] text-[#8D6E63]' : 'bg-white border-[#E7D9C9] text-[#8D6E63]'}`}>
    {label}
  </div>
);

const VerificationRow: React.FC<{ label: string; icon: string; status: string; color: string }> = ({ label, icon, status, color }) => (
  <div className="flex items-center justify-between p-4 bg-white border border-[#E7D9C9] rounded-2xl shadow-sm">
     <div className="flex items-center gap-4">
        <span className="text-2xl">{icon}</span>
        <span className="text-sm font-bold">{label}</span>
     </div>
     <span className={`text-[10px] font-black tracking-widest ${color}`}>{status}</span>
  </div>
);