import React, { useState } from 'react';
import { AppliedJob } from '../App';

interface BrowseJobsProps {
  onViewJob: () => void;
  onQuickApply: (job: AppliedJob) => void;
}

const JOBS_DATA = [
  {
    id: 'job-1',
    title: "Custom Shopify Site & App Developer",
    clientName: "Varun M.",
    location: "Bengaluru, Karnataka (30km)",
    match: "95%",
    rating: 4.7,
    reviews: 3,
    postedCount: 3,
    description: "Looking for a skilled Shopify developer to create a custom site and mobile app. Experience with API Integration is a must.",
    tags: ['Shopify', 'React', 'API Integration'],
    budget: "₹ 15,000 - ₹ 25,000 Hourly",
    duration: "2 weeks",
    time: "2 hours ago",
    verified: true
  },
  {
    id: 'job-2',
    title: "React Developer for E-Commerce Platform",
    clientName: "Sneha Designs.",
    location: "MSME",
    match: "92%",
    rating: 4.8,
    reviews: 3,
    postedCount: 5,
    description: "We need a React developer for a E-Commerce platform. Must have experience with Node.js and Firebase. Long-term collaboration possible.",
    tags: ['React', 'Node.js', 'Firebase'],
    budget: "₹ 50,000 Fixed",
    duration: "2 weeks",
    proposals: "8 proposals",
    time: "3 hours ago",
    verified: true
  },
  {
    id: 'job-3',
    title: "YouTube Video Editor Needed",
    clientName: "Rahul P.",
    location: "Indiranagar (300m)",
    match: "86%",
    rating: 4.6,
    reviews: 3,
    postedCount: 9,
    description: "Looking for an experienced video editor to edit and enhance YouTube videos. Thumbnails and captions required.",
    tags: ['Video Editing', 'Premiere Pro', 'Thumbnails'],
    budget: "₹ 8,000 Fixed",
    duration: "1 week",
    time: "3 hours ago",
    verified: true
  },
  {
    id: 'job-4',
    title: "Hindi Content Strategist",
    clientName: "Karan B.",
    location: "Mumbai, Remote",
    match: "89%",
    rating: 4.9,
    reviews: 7,
    postedCount: 15,
    description: "Need someone to localize our English tech blog to Hindi. Should understand technical terms and maintain a formal tone.",
    tags: ['Content Writing', 'Hindi', 'SEO'],
    budget: "₹ 12,000 Fixed",
    duration: "1 month",
    time: "4 hours ago",
    verified: true
  },
  {
    id: 'job-5',
    title: "Graphic Designer for Wedding Invites",
    clientName: "Priya S.",
    location: "Delhi, Remote",
    match: "91%",
    rating: 5.0,
    reviews: 12,
    postedCount: 2,
    description: "Creating premium digital wedding invites with traditional Indian aesthetic. Experience with floral and mandala art is preferred.",
    tags: ['Illustrator', 'Mandala Art', 'Branding'],
    budget: "₹ 5,000 Fixed",
    duration: "3 days",
    time: "5 hours ago",
    verified: true
  },
  {
    id: 'job-6',
    title: "Python Developer for Data Scraping",
    clientName: "Ankit J.",
    location: "Pune (10km)",
    match: "82%",
    rating: 4.4,
    reviews: 2,
    postedCount: 4,
    description: "Scrape product details from multiple e-commerce sites in India. Must use BeautifulSoup or Selenium.",
    tags: ['Python', 'Web Scraping', 'Data Engineering'],
    budget: "₹ 20,000 Fixed",
    duration: "1 week",
    time: "6 hours ago",
    verified: false
  },
  {
    id: 'job-7',
    title: "Mobile App Developer (Flutter)",
    clientName: "TechNova MSME",
    location: "Hyderabad, Remote",
    match: "93%",
    rating: 4.9,
    reviews: 21,
    postedCount: 30,
    description: "Develop a basic inventory management app for local retail stores. Clean UI and offline support are key.",
    tags: ['Flutter', 'Dart', 'Firebase'],
    budget: "₹ 1,00,000 Fixed",
    duration: "2 months",
    time: "8 hours ago",
    verified: true
  }
];

export const BrowseJobs: React.FC<BrowseJobsProps> = ({ onViewJob, onQuickApply }) => {
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const handleApply = (job: typeof JOBS_DATA[0]) => {
    onQuickApply({
      id: job.id,
      title: job.title,
      clientName: job.clientName,
      budget: job.budget,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    });
    setSuccessToast(`Applied to ${job.title} successfully!`);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  return (
    <div className="flex flex-1 overflow-hidden relative">
      {/* Success Toast */}
      {successToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-green-700 text-white px-8 py-3 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce border-2 border-white/20">
          <span className="text-xl">✅</span>
          <span className="font-bold text-sm">{successToast}</span>
        </div>
      )}

      {/* Left Sidebar: Smart Filters */}
      <aside className="w-64 border-r border-[#E7D9C9] flex flex-col bg-[#F9F5EF] p-4 space-y-6 hidden lg:flex overflow-y-auto">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-sm">Smart Filters</h3>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-white border border-[#DED0C1] rounded-lg py-2 pl-3 pr-8 text-xs focus:outline-none focus:ring-1 focus:ring-orange-200 text-black"
            />
            <span className="absolute right-3 top-2.5 text-xs opacity-50">🎙️</span>
          </div>

          <div className="flex bg-[#DED0C1] rounded-lg p-0.5">
            <button className="flex-1 bg-white text-[#5D4037] font-bold py-1.5 rounded-md text-[10px]">English</button>
            <button className="flex-1 text-[#5D4037] font-bold py-1.5 rounded-md text-[10px] opacity-60">हिंदी</button>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase text-[#8D6E63]">Location</label>
            <select className="w-full bg-white border border-[#DED0C1] rounded-lg py-2 px-2 text-xs text-black">
              <option>Bengaluru</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Remote</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase text-[#8D6E63]">Budget Range (₹)</label>
            <div className="flex gap-2">
              <input type="text" placeholder="Min" className="w-1/2 bg-white border border-[#DED0C1] rounded-lg py-2 px-2 text-xs text-black" />
              <input type="text" placeholder="Max" className="w-1/2 bg-white border border-[#DED0C1] rounded-lg py-2 px-2 text-xs text-black" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase text-[#8D6E63]">Project Type</label>
            <div className="space-y-1">
              <FilterCheckbox label="Fixed Price" checked />
              <FilterCheckbox label="Hourly" />
            </div>
          </div>

          <button className="w-full bg-[#425C3C] text-white py-2 rounded-lg text-xs font-bold mt-4 shadow-sm">
            Reset Filters
          </button>
        </div>
      </aside>

      {/* Main Content: Job Listings */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        <section className="relative bg-white rounded-2xl border border-[#E7D9C9] overflow-hidden shadow-sm flex min-h-[140px]">
          <div className="flex-1 p-8 space-y-2 z-10">
            <h2 className="text-3xl font-bold">Browse Jobs</h2>
            <p className="text-[#8D6E63] font-medium text-lg">Find top freelance jobs that match your skills.</p>
            <div className="bg-orange-100/50 border border-orange-200 inline-block px-3 py-1 rounded-full text-xs font-bold text-orange-800">
              Found {JOBS_DATA.length} relevant jobs
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover opacity-20" 
              alt="Background"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
          </div>
        </section>

        <div className="space-y-6 pb-12">
          {JOBS_DATA.map(job => (
            <JobListItem 
              key={job.id}
              title={job.title}
              clientName={job.clientName}
              location={job.location}
              match={job.match}
              rating={job.rating}
              reviews={job.reviews}
              postedCount={job.postedCount}
              description={job.description}
              tags={job.tags}
              budget={job.budget}
              duration={job.duration}
              proposals={job.proposals}
              time={job.time}
              verified={job.verified}
              onViewDetails={onViewJob}
              onQuickApply={() => handleApply(job)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

const FilterCheckbox: React.FC<{ label: string; checked?: boolean }> = ({ label, checked }) => (
  <label className="flex items-center gap-2 cursor-pointer group">
    <div className={`w-3.5 h-3.5 rounded border ${checked ? 'bg-[#425C3C] border-[#425C3C]' : 'bg-white border-[#DED0C1]'} flex items-center justify-center transition-colors`}>
      {checked && <span className="text-white text-[8px]">✓</span>}
    </div>
    <span className="text-[11px] font-medium text-[#5D4037] group-hover:text-orange-600">{label}</span>
  </label>
);

const JobListItem: React.FC<{
  title: string;
  clientName: string;
  location: string;
  match: string;
  rating: number;
  reviews: number;
  postedCount: number;
  description: string;
  tags: string[];
  budget: string;
  duration: string;
  proposals?: string;
  time: string;
  verified?: boolean;
  onViewDetails: () => void;
  onQuickApply: () => void;
}> = ({ title, clientName, location, match, rating, reviews, postedCount, description, tags, budget, duration, proposals, time, verified, onViewDetails, onQuickApply }) => (
  <div className="bg-white rounded-2xl border border-[#E7D9C9] p-6 shadow-sm hover:shadow-md transition-all relative group">
    <div className="flex justify-between items-start mb-2">
      <div className="flex gap-4">
        <img src={`https://i.pravatar.cc/100?u=${clientName}`} className="w-12 h-12 rounded-lg object-cover border border-[#E7D9C9]" alt="Client" />
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h4 className="text-lg font-bold group-hover:text-orange-800 transition-colors">{title}</h4>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-[#8D6E63]">
            <span className="flex items-center gap-1 text-green-700">✔️ {clientName}</span>
            <span>{verified ? 'Verified' : ''} | {location}</span>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐ {rating}</span>
            <span className="text-[#8D6E63]">💬 {reviews} | 📝 {postedCount} jobs posted</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="bg-[#425C3C] text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          {match} Match
        </div>
        <span className="text-xl cursor-pointer opacity-40 hover:opacity-100">🔖</span>
      </div>
    </div>

    <p className="text-xs text-[#5D4037] leading-relaxed mb-4 line-clamp-2">
      {description}
    </p>

    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map(tag => (
        <span key={tag} className="bg-[#F5EFE6] text-[#5D4037] px-2 py-0.5 rounded text-[10px] font-bold border border-[#DED0C1]">
          {tag}
        </span>
      ))}
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-[#F9F5EF]">
      <div className="flex items-center gap-6 text-[10px] font-black text-[#5D4037]">
        <div className="flex flex-col">
          <span className="text-[8px] text-[#8D6E63] uppercase tracking-wider">Budget</span>
          <span>{budget}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[8px] text-[#8D6E63] uppercase tracking-wider">Duration</span>
          <span>📅 {duration}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[8px] text-[#8D6E63] uppercase tracking-wider">Posted</span>
          <span>🕒 {time}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <button 
          onClick={onViewDetails}
          className="bg-[#F3EAD3] border border-[#DED0C1] text-[#5D4037] px-5 py-2 rounded-lg text-xs font-bold hover:bg-white"
        >
          View Details
        </button>
        <button 
          onClick={onQuickApply}
          className="bg-[#425C3C] text-white px-5 py-2 rounded-lg text-xs font-bold hover:bg-[#2E4229] shadow-sm active:scale-95 transition-transform"
        >
          Quick Apply
        </button>
      </div>
    </div>
  </div>
);