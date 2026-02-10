import React, { useState } from 'react';

const PROF_PHOTO = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=500&h=500&auto=format&fit=crop";

type ProfileTab = 'OVERVIEW' | 'PORTFOLIO' | 'WORK HISTORY' | 'REVIEWS';

interface ProfileProps {
  userName: string;
}

export const Profile: React.FC<ProfileProps> = ({ userName }) => {
  const [activeTab, setActiveTab] = useState<ProfileTab>('OVERVIEW');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'PORTFOLIO':
        return <PortfolioContent />;
      case 'WORK HISTORY':
        return <WorkHistoryContent />;
      case 'REVIEWS':
        return <ReviewsContent />;
      case 'OVERVIEW':
      default:
        return <OverviewContent userName={userName} />;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-8 bg-[#FDF9F3]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}>
      
      {/* Profile Hero Header */}
      <section className="relative flex flex-col md:flex-row items-center gap-6 p-8 bg-white/40 border border-[#E7D9C9] rounded-3xl overflow-hidden shadow-sm">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Backdrop" />
        </div>
        
        <div className="relative">
          <img src={PROF_PHOTO} className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover" alt="Profile" />
          <div className="absolute bottom-2 right-2 bg-green-500 text-white p-1 rounded-full text-xs">✔️</div>
        </div>

        <div className="flex-1 text-center md:text-left space-y-3 z-10">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <h1 className="text-3xl font-bold text-[#5D4037]">{userName}</h1>
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold border border-green-200">Verified</span>
          </div>
          <p className="text-xl font-medium text-[#8D6E63]">Freelance Professional</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold">
             <div className="bg-[#425C3C] text-white px-3 py-1.5 rounded-lg flex items-center gap-2">
                🛡️ Verified Identity
             </div>
             <div className="bg-[#F3EAD3] border border-[#DED0C1] text-[#5D4037] px-3 py-1.5 rounded-lg flex items-center gap-2">
                ✉️ Email Verified
             </div>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium text-[#8D6E63] pt-2">
            <span>📍 Local Expert</span>
            <span>💰 ₹500 /hr</span>
          </div>
        </div>
      </section>

      {/* Profile Navigation Tabs */}
      <div className="border-b border-[#E7D9C9] flex flex-wrap justify-between items-center gap-4">
        <div className="flex gap-8">
           <TabItem label="OVERVIEW" active={activeTab === 'OVERVIEW'} onClick={() => setActiveTab('OVERVIEW')} />
           <TabItem label="PORTFOLIO" active={activeTab === 'PORTFOLIO'} onClick={() => setActiveTab('PORTFOLIO')} />
           <TabItem label="WORK HISTORY" active={activeTab === 'WORK HISTORY'} onClick={() => setActiveTab('WORK HISTORY')} />
           <TabItem label="REVIEWS" active={activeTab === 'REVIEWS'} onClick={() => setActiveTab('REVIEWS')} />
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-full px-4 py-2 flex items-center gap-3">
           <div className="w-32 h-2 bg-orange-200 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 w-[85%]"></div>
           </div>
           <span className="text-[10px] font-bold text-orange-800">85% Complete <span className="text-[9px] font-normal opacity-60">- Add video intro to reach 100</span></span>
        </div>
      </div>

      <div className="animate-fade-in">
        {renderTabContent()}
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

const TabItem: React.FC<{ label: ProfileTab; active?: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`pb-3 text-xs font-black tracking-widest transition-all outline-none ${active ? 'text-orange-800 border-b-2 border-orange-800' : 'text-[#8D6E63] hover:text-[#5D4037]'}`}
  >
    {label}
  </button>
);

const OverviewContent: React.FC<{ userName: string }> = ({ userName }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2 space-y-8">
      <section className="bg-white rounded-2xl border border-[#E7D9C9] p-6 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b border-[#F9F5EF] pb-3">
          <h3 className="font-bold text-lg">About Me</h3>
        </div>
        <p className="text-sm text-[#5D4037] leading-relaxed">
          Hello! I'm {userName}, a dedicated professional on Axon. I help businesses build high-quality solutions tailored to the Indian market. I'm passionate about delivering excellent work and helping my clients grow their business through modern technology and design.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-[#E7D9C9] p-6 shadow-sm flex flex-col items-center space-y-4">
           <div className="flex justify-between w-full">
              <h3 className="font-bold text-sm">Skills Radar</h3>
           </div>
           <div className="relative w-48 h-48 flex items-center justify-center">
              <div className="absolute inset-0 border border-gray-200 rounded-full opacity-50 scale-100"></div>
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-18">
                 <polygon points="50,10 90,40 80,85 20,85 10,40" fill="#425C3C" fillOpacity="0.2" stroke="#425C3C" strokeWidth="2" />
              </svg>
           </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#E7D9C9] p-6 shadow-sm space-y-4">
           <div className="flex justify-between items-center text-xs font-bold">
              <span>Availability Dashboard</span>
           </div>
           <div className="grid grid-cols-7 gap-1 text-center">
              {['M', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                <span key={i} className="text-[9px] font-bold text-[#8D6E63] pb-2">{d}</span>
              ))}
              {Array.from({length: 31}).map((_, i) => (
                <div key={i} className={`text-[10px] p-1.5 rounded-md font-bold ${[10,11,12,13,24,25,31].includes(i+1) ? 'bg-[#425C3C] text-white shadow-sm' : 'text-[#5D4037] hover:bg-[#F3EAD3]'}`}>
                  {i + 1}
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
    <div className="space-y-6">
      <section className="bg-white rounded-2xl border border-[#E7D9C9] p-5 shadow-sm space-y-4">
        <h3 className="font-bold text-sm">Verification Status</h3>
        <VerificationBadge label="Identity Verification" icon="🛡️" verified />
        <VerificationBadge label="Mobile Linked" icon="🆔" verified />
        <VerificationBadge label="Email Verified" icon="📧" verified />
      </section>
    </div>
  </div>
);

const PortfolioContent: React.FC = () => (
  <div className="space-y-8 pb-10">
    <div className="flex items-center justify-between">
      <h3 className="text-2xl font-bold text-[#5D4037]">Recent Work</h3>
      <button className="text-xs font-black text-orange-800 hover:underline">View All Projects</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PortfolioCard 
        title="Localized Campaign Design"
        image="https://images.unsplash.com/photo-1512428559083-a401a3389575?auto=format&fit=crop&q=80&w=400"
        tags={['Design', 'Marketing']}
        desc="A marketing campaign designed for local regional audience reach with multi-lingual support."
      />
      <PortfolioCard 
        title="E-Commerce Mobile App"
        image="https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=400"
        tags={['Shopify', 'React Native']}
        desc="A seamless shopping experience built for a growing retail brand in Mumbai."
      />
      <PortfolioCard 
        title="Corporate Identity System"
        image="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400"
        tags={['Branding', 'UI/UX']}
        desc="Comprehensive visual identity for a leading tech consultancy firm."
      />
      <PortfolioCard 
        title="Hindi Content Strategy"
        image="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=400"
        tags={['SEO', 'Content']}
        desc="Localization and SEO strategy that increased organic traffic by 45%."
      />
      <PortfolioCard 
        title="Wedding Photography Portfolio"
        image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400"
        tags={['Photography', 'Art']}
        desc="High-end digital albums capturing traditional Indian heritage weddings."
      />
      <PortfolioCard 
        title="SaaS Product Dashboard"
        image="https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=400"
        tags={['Dashboard', 'React']}
        desc="Minimalist and functional interface for a logistics management tool."
      />
    </div>
  </div>
);

const WorkHistoryContent: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h3 className="text-2xl font-bold text-[#5D4037]">Work History (24 Projects)</h3>
      <div className="flex gap-2">
         <button className="bg-[#425C3C] text-white px-3 py-1 rounded-lg text-[10px] font-bold">Newest First</button>
         <button className="bg-white border border-[#E7D9C9] text-[#8D6E63] px-3 py-1 rounded-lg text-[10px] font-bold">Top Rated</button>
      </div>
    </div>
    <div className="space-y-4">
      <WorkHistoryItem 
        title="Project Consultant"
        client="Bharat Tech Solutions"
        date="Jan 2024 - Mar 2024"
        feedback="Great delivery and understanding of the requirements. Highly recommended for Shopify tasks."
        rating={5}
        earned="₹ 1,20,000"
      />
      <WorkHistoryItem 
        title="Senior UI/UX Designer"
        client="Namaste Travels"
        date="Oct 2023 - Dec 2023"
        feedback="Excellent eye for detail. The localized mobile app design was exactly what we needed for our tier-2 audience."
        rating={5}
        earned="₹ 85,500"
      />
      <WorkHistoryItem 
        title="Full Stack Developer"
        client="Fintech Bharat"
        date="Jun 2023 - Sep 2023"
        feedback="Handled complex API integrations with ease. Communication was smooth and timely."
        rating={4}
        earned="₹ 2,10,000"
      />
      <WorkHistoryItem 
        title="Digital Content Lead"
        client="Desi Digital Media"
        date="Jan 2023 - May 2023"
        feedback="Creative strategist who understands the pulse of the Indian consumer. Very satisfied."
        rating={5}
        earned="₹ 1,45,000"
      />
    </div>
    <button className="w-full py-4 border border-dashed border-[#DED0C1] rounded-2xl text-xs font-bold text-[#8D6E63] hover:bg-white transition-colors">
       Load 12 More History Items
    </button>
  </div>
);

const ReviewsContent: React.FC = () => (
  <div className="space-y-8">
    <div className="flex flex-col md:flex-row gap-8 bg-white p-8 rounded-3xl border border-[#E7D9C9] shadow-sm">
      <div className="flex flex-col items-center justify-center p-6 bg-[#FDF9F3] rounded-2xl border border-[#E7D9C9] min-w-[200px]">
        <div className="text-5xl font-black text-[#5D4037]">4.9</div>
        <div className="text-yellow-500 text-xl py-2">⭐⭐⭐⭐⭐</div>
        <div className="text-xs font-bold text-[#8D6E63]">Based on 24 reviews</div>
      </div>
      <div className="flex-1 space-y-4">
         <h4 className="font-bold text-sm">Rating Breakdown</h4>
         <RatingBar stars={5} percentage={90} />
         <RatingBar stars={4} percentage={8} />
         <RatingBar stars={3} percentage={2} />
         <RatingBar stars={2} percentage={0} />
         <RatingBar stars={1} percentage={0} />
      </div>
    </div>
  </div>
);

const RatingBar: React.FC<{ stars: number; percentage: number }> = ({ stars, percentage }) => (
  <div className="flex items-center gap-4 text-[10px] font-bold">
    <span className="w-4">{stars} ★</span>
    <div className="flex-1 h-2 bg-[#F3EAD3] rounded-full overflow-hidden">
       <div className="h-full bg-yellow-500" style={{ width: `${percentage}%` }}></div>
    </div>
    <span className="w-8 text-right opacity-60">{percentage}%</span>
  </div>
);

const PortfolioCard: React.FC<{ title: string; image: string; tags: string[]; desc: string }> = ({ title, image, tags, desc }) => (
  <div className="bg-white rounded-2xl border border-[#E7D9C9] overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
    <div className="h-48 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
         <span className="bg-white text-xs font-black px-4 py-2 rounded-lg shadow-xl">View Details</span>
      </div>
    </div>
    <div className="p-5 space-y-3">
      <h4 className="font-bold text-lg text-[#5D4037]">{title}</h4>
      <p className="text-xs text-[#8D6E63] line-clamp-2">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(t => <span key={t} className="bg-[#F3EAD3] text-[#5D4037] px-2 py-0.5 rounded-[4px] text-[10px] font-bold">{t}</span>)}
      </div>
    </div>
  </div>
);

const WorkHistoryItem: React.FC<{ title: string; client: string; date: string; feedback: string; rating: number; earned: string }> = ({ title, client, date, feedback, rating, earned }) => (
  <div className="bg-white p-6 rounded-2xl border border-[#E7D9C9] shadow-sm flex flex-col md:flex-row gap-6 hover:border-orange-200 transition-colors">
    <div className="flex-1 space-y-2">
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-lg text-[#5D4037]">{title}</h4>
        <span className="text-sm font-black text-green-700">{earned}</span>
      </div>
      <div className="text-xs font-bold text-[#8D6E63]">{client} • {date}</div>
      <p className="text-sm italic text-[#5D4037] opacity-80">"{feedback}"</p>
      <div className="flex text-yellow-500 text-xs gap-0.5">
        {Array.from({length: 5}).map((_, i) => <span key={i}>{i < rating ? '★' : '☆'}</span>)}
      </div>
    </div>
  </div>
);

const VerificationBadge: React.FC<{ label: string; icon: string; verified?: boolean }> = ({ label, icon, verified }) => (
  <div className="flex items-center justify-between p-2.5 bg-[#F9F5EF] border border-[#DED0C1] rounded-xl">
    <div className="flex items-center gap-3">
       <span className="text-base">{icon}</span>
       <span className="text-xs font-bold text-[#5D4037]">{label}</span>
    </div>
    {verified && <span className="text-green-600 text-[10px] font-black">✔️</span>}
  </div>
);
