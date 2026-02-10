
import React from 'react';

const PROF_PHOTO = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=500&h=500&auto=format&fit=crop";

export const JobDetails: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-[#FDF9F3]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}>
      
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[10px] font-bold text-[#8D6E63] uppercase tracking-wider">
        <span className="cursor-pointer hover:text-orange-600 flex items-center gap-1">🕒 Browse Jobs</span>
        <span>▶</span>
        <span className="text-[#5D4037]">Custom Shopify Site & App Developer</span>
      </nav>

      {/* Main Job Header */}
      <section className="bg-white/40 border-b border-[#E7D9C9] pb-6 space-y-4">
        <div className="flex justify-between items-start">
           <div className="space-y-2">
              <div className="flex items-center gap-3">
                 <h1 className="text-3xl font-bold text-[#5D4037]">Custom Shopify Site & App Developer</h1>
                 <span className="text-xl cursor-pointer opacity-40">🔖</span>
              </div>
              <div className="flex items-center gap-6 text-sm font-bold text-[#5D4037]">
                 <span>₹15,000 - ₹25,000 / Hourly</span>
                 <span className="text-[#8D6E63]">📅 2 weeks</span>
              </div>
           </div>
        </div>
        <div className="flex flex-wrap gap-2">
           {['Shopify', 'React', 'API Integration'].map(tag => (
             <span key={tag} className="bg-[#F3EAD3] text-[#5D4037] px-3 py-1 rounded text-xs font-bold border border-[#DED0C1]">
               {tag}
             </span>
           ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Description & Form */}
        <div className="lg:col-span-2 space-y-10">
           
           {/* Description Section */}
           <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#5D4037] border-b border-[#E7D9C9] pb-2">Description</h3>
              <p className="text-sm text-[#5D4037] leading-relaxed">
                Looking for a skilled <span className="font-bold">Shopify</span> developer to create a custom website and mobile app for our business. The ideal candidate should have extensive experience with Shopify, React, and API Integration.
              </p>
              
              <div className="space-y-3">
                 <h4 className="font-bold text-sm">Requirements:</h4>
                 <ul className="text-xs space-y-2 text-[#5D4037] list-disc pl-5">
                    <li>Custom Shopify theme development and modifications</li>
                    <li>Developing a mobile app that integrates seamlessly with Shopify</li>
                    <li>Implementing API integrations for payment gateways and inventory management</li>
                    <li>Ensuring the site is responsive, fast, and SEO-friendly</li>
                 </ul>
              </div>
              
              <p className="text-sm text-[#5D4037]">
                Please share your portfolio of similar projects. Looking forward to working with dedicated freelancers.
              </p>
           </div>

           {/* Application Form Section */}
           <div className="space-y-6 pt-6">
              <h3 className="text-xl font-bold text-[#5D4037] border-b border-[#E7D9C9] pb-2">Application Form</h3>
              
              {/* AI Assistant Banner */}
              <div className="bg-[#EFE8D8] border border-[#DED0C1] rounded-2xl overflow-hidden shadow-sm">
                 <div className="flex justify-between items-center p-4 border-b border-[#DED0C1] bg-white/40">
                    <h4 className="font-bold text-sm text-[#5D4037]">AI Application Assistant</h4>
                    <div className="flex bg-[#DED0C1] rounded-lg p-0.5">
                      <button className="px-3 py-1 bg-white text-[10px] font-bold rounded shadow-sm">English</button>
                      <button className="px-3 py-1 text-[10px] font-bold opacity-60">हिंदी</button>
                    </div>
                 </div>
                 <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                       <span className="text-2xl">💡</span>
                       <div>
                          <p className="font-bold text-sm">Smart Proposal Generator</p>
                          <p className="text-xs text-[#8D6E63]">Our AI will generate a tailored proposal matching your skills and experience.</p>
                       </div>
                    </div>
                    <div className="bg-white/60 p-3 rounded-xl border border-[#DED0C1] text-center text-xs text-[#8D6E63] italic">
                       Our AI will generate a tailored proposal matching your skills and experience.
                    </div>
                 </div>
              </div>

              {/* AI Proposal Output */}
              <div className="space-y-4">
                 <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#425C3C] rounded-full flex items-center justify-center text-white text-xs">🤖</div>
                    <span className="bg-[#425C3C] text-white px-3 py-1 rounded-full text-[10px] font-bold">Your AI-Generated Proposal</span>
                 </div>
                 
                 <div className="bg-white rounded-3xl border border-[#E7D9C9] shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-[#F9F5EF] flex justify-end gap-2">
                       <div className="flex bg-[#F5EFE6] rounded-lg p-0.5 border border-[#DED0C1]">
                         <button className="px-3 py-1 text-[9px] font-bold opacity-60">English</button>
                         <button className="px-3 py-1 bg-[#F3EAD3] text-[9px] font-bold rounded border border-[#DED0C1]">हिंदी</button>
                       </div>
                       <span className="text-[10px] opacity-40 flex items-center">▼</span>
                    </div>
                    <div className="p-8 space-y-6 text-[#5D4037]">
                       <div className="space-y-4">
                          <p className="text-base font-bold">Hello Varun,</p>
                          <p className="text-sm">As a Shopify and React expert, I've successfully developed custom e-commerce sites and apps.</p>
                       </div>
                       
                       <div className="space-y-4">
                          <p className="font-bold text-sm flex items-center gap-2">For your project, I plan to: 💫</p>
                          <ul className="space-y-3">
                             <li className="flex items-center gap-3 text-xs font-bold">
                                <span className="text-green-600">✔️</span> Develop a custom Shopify theme tailored to your brand
                             </li>
                             <li className="flex items-center gap-3 text-xs font-bold">
                                <span className="text-green-600">✔️</span> Build a seamless mobile app integrating with Shopify
                             </li>
                             <li className="flex items-center gap-3 text-xs font-bold">
                                <span className="text-green-600">✔️</span> Implement API Integrations for payment processing and inventory
                             </li>
                          </ul>
                       </div>

                       <div className="pt-6 border-t border-[#F9F5EF] flex justify-between items-center">
                          <button className="text-[10px] font-bold text-[#8D6E63] flex items-center gap-2 hover:text-orange-600">
                             📄 Save All Comments
                          </button>
                          <button className="bg-[#425C3C] text-white px-10 py-2.5 rounded-lg font-bold shadow-md hover:bg-[#2E4229] transition-colors">
                             Submit Proposal
                          </button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Column: Client Info & Sidebar stuff */}
        <div className="space-y-6">
           
           {/* Client Info Card */}
           <section className="bg-white rounded-2xl border border-[#E7D9C9] p-6 shadow-sm space-y-4">
              <h3 className="font-bold text-sm border-b border-[#F9F5EF] pb-3">Client Info</h3>
              <div className="flex flex-col items-center text-center space-y-2 py-2">
                 <div className="relative">
                    <img src="https://i.pravatar.cc/100?u=varun" className="w-16 h-16 rounded-2xl border border-[#E7D9C9] shadow-sm" alt="Client" />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-[8px] border-2 border-white">✔️</div>
                 </div>
                 <div className="flex items-center gap-2">
                    <h4 className="font-bold text-base">Varun M.</h4>
                    <span className="text-xs">🇮🇳</span>
                 </div>
                 <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[9px] font-bold border border-green-200">Verified</span>
                 <p className="text-[10px] text-[#8D6E63] font-bold">Bengaluru, Karnataka</p>
                 <div className="flex text-yellow-500 text-[10px] py-1">
                    ⭐⭐⭐⭐⭐ <span className="text-[#8D6E63] ml-1 font-bold">4.7 (12 Reviews)</span>
                 </div>
              </div>
              <div className="space-y-2 border-t border-[#F9F5EF] pt-4">
                 <div className="flex justify-between items-center text-[10px] font-bold text-[#8D6E63]">
                    <span className="flex items-center gap-2">📄 12 Jobs posted</span>
                    <span className="text-[#5D4037]">86% Hire Rate</span>
                 </div>
                 <p className="text-[10px] font-bold text-[#8D6E63] flex items-center gap-2">
                    🕒 Avg Payment Time : 3 days
                 </p>
              </div>
              <button className="w-full bg-[#425C3C] text-white py-2.5 rounded-lg text-xs font-bold mt-4 shadow-sm hover:bg-[#2E4229]">
                 Send Message
              </button>
           </section>

           {/* Attachments Section */}
           <section className="bg-white rounded-2xl border border-[#E7D9C9] p-5 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                 <h3 className="font-bold text-sm">Attachments</h3>
                 <span className="text-[10px] opacity-30">▶</span>
              </div>
              <div className="space-y-3">
                 <div className="flex items-center justify-between p-3 bg-[#F9F5EF] border border-[#DED0C1] rounded-xl hover:bg-white cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                       <span className="text-lg">📄</span>
                       <div className="flex flex-col">
                          <span className="text-[11px] font-bold truncate max-w-[120px]">Mockup_Shopify_App.zip</span>
                          <span className="text-[9px] text-[#8D6E63]">3.2 MB</span>
                       </div>
                    </div>
                    <span className="text-[10px] opacity-20">▶</span>
                 </div>
                 <div className="flex items-center justify-between p-3 bg-[#F9F5EF] border border-[#DED0C1] rounded-xl hover:bg-white cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                       <span className="text-lg">📋</span>
                       <span className="text-[11px] font-bold truncate max-w-[120px]">API_Documentation.pdf</span>
                    </div>
                    <span className="text-[10px] opacity-20">▶</span>
                 </div>
              </div>
           </section>

           {/* Similar Jobs Section */}
           <section className="bg-white rounded-2xl border border-[#E7D9C9] p-5 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                 <h3 className="font-bold text-sm">Similar Jobs</h3>
                 <span className="text-[10px] opacity-30">▶</span>
              </div>
              <div className="space-y-4">
                 {[1, 2].map(n => (
                   <div key={n} className="flex gap-3 pb-3 border-b border-[#F9F5EF] last:border-0 last:pb-0 cursor-pointer hover:bg-[#FDF9F3] p-1 rounded-lg">
                      <img src="https://i.pravatar.cc/50?u=sneha" className="w-8 h-8 rounded-lg" alt="Similar Job" />
                      <div className="flex-1 space-y-1">
                         <p className="text-[10px] font-bold leading-tight">React Developer for E-Commerce Platform</p>
                         <p className="text-[9px] font-black">₹ 50,000 Fixed | 6 jobs posted</p>
                      </div>
                   </div>
                 ))}
                 <button className="w-full text-xs font-bold text-[#8D6E63] flex items-center justify-center gap-2 hover:text-[#5D4037]">
                    View All Recommended Jobs ▶
                 </button>
              </div>
           </section>
        </div>
      </div>
    </div>
  );
};
