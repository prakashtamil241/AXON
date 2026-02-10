import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { FeaturesBanner } from './components/FeaturesBanner';
import { ComparisonSection } from './components/ComparisonSection';
import { HowItWorks } from './components/HowItWorks';
import { CategoriesGrid } from './components/CategoriesGrid';
import { Footer } from './components/Footer';
import { Dashboard } from './components/Dashboard';
import { ClientDashboard } from './components/ClientDashboard';
import { LoginModal } from './components/LoginModal';
import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export type AppView = 'landing' | 'dashboard' | 'browse_jobs' | 'proposals' | 'active_projects' | 'earnings' | 'profile' | 'job_details' | 'client_dashboard' | 'settings';

export interface AppliedJob {
  id: string;
  title: string;
  clientName: string;
  budget: string;
  date: string;
}

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState<'freelancer' | 'client' | null>(null);
  const [currentView, setCurrentView] = useState<AppView>('landing');
  const [initializing, setInitializing] = useState(true);
  const [appliedJobs, setAppliedJobs] = useState<AppliedJob[]>([]);

  // Listen to Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserName(user.displayName || user.email?.split('@')[0] || 'User');
        setShowLoginModal(false);

        // Fetch user role from Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            setUserRole(data.role as 'freelancer' | 'client');
          }
        } catch (err) {
          console.error("Error fetching user data from Firestore:", err);
        }
      } else {
        setIsLoggedIn(false);
        setUserName('');
        setUserRole(null);
        if (currentView !== 'landing' || initializing) {
          setShowLoginModal(true);
        }
      }
      setInitializing(false);
    });

    return () => unsubscribe();
  }, [currentView, initializing]);

  const handleLoginSubmit = (name: string, isClient: boolean) => {
    setUserRole(isClient ? 'client' : 'freelancer');
    setIsLoggedIn(true);
    setShowLoginModal(false);
    setCurrentView('landing');
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setCurrentView('landing');
      setShowLoginModal(true);
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const handleViewChange = (view: AppView) => {
    setCurrentView(view);
  };

  const handleQuickApply = (job: AppliedJob) => {
    if (!appliedJobs.some(aj => aj.id === job.id)) {
      setAppliedJobs(prev => [job, ...prev]);
    }
  };

  const handleDirectLogin = (isClient: boolean) => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      setCurrentView(isClient ? 'client_dashboard' : 'dashboard');
    }
  };

  if (initializing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDF9F3]">
        <div className="text-4xl font-black text-[#B8860B] animate-pulse">AXON</div>
      </div>
    );
  }

  if (isLoggedIn && currentView !== 'landing') {
    if (currentView === 'client_dashboard') {
      return (
        <ClientDashboard 
          userName={userName}
          onLogout={handleLogout} 
          onViewChange={handleViewChange} 
        />
      );
    }
    return (
      <Dashboard 
        userName={userName}
        onLogout={handleLogout} 
        currentView={currentView} 
        onViewChange={handleViewChange}
        appliedJobs={appliedJobs}
        onQuickApply={handleQuickApply}
      />
    );
  }

  return (
    <div className={`min-h-screen flex flex-col items-center overflow-x-hidden bg-[#FDF9F3] ${showLoginModal ? 'overflow-hidden max-h-screen' : ''}`}>
      {showLoginModal && (
        <LoginModal 
          onLogin={handleLoginSubmit} 
          onClose={() => !isLoggedIn ? null : setShowLoginModal(false)} 
        />
      )}

      <div className="w-full h-1 bg-gradient-to-r from-orange-600 via-white to-green-600"></div>
      
      <nav className="w-full max-w-6xl px-4 py-6 flex justify-between items-center relative">
        <div className="flex items-center gap-2">
          <span className="text-4xl font-black text-[#B8860B] tracking-tighter cursor-pointer" onClick={() => setCurrentView('landing')}>AXON</span>
        </div>

        <div className="hidden md:flex items-center justify-center flex-1">
          <span className="text-sm font-black text-[#5D4037] uppercase tracking-[0.25em] font-space border-x border-[#E7D9C9] px-8 text-center">
            Designed for Indians, by Indians
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => handleViewChange(isLoggedIn ? (userRole === 'client' ? 'client_dashboard' : 'dashboard') : 'landing')}
            className="bg-white border border-[#DED0C1] text-[#5D4037] font-bold py-2 px-6 rounded-lg shadow-sm hover:bg-orange-50 transition-colors"
          >
            {isLoggedIn ? `Hi, ${userName.split(' ')[0]}` : 'Login / Sign Up'}
          </button>
        </div>
      </nav>

      <main className="w-full max-w-6xl px-4 py-8 space-y-12">
        <Hero onLogin={(isClient) => handleDirectLogin(isClient)} />
        <FeaturesBanner />
        <ComparisonSection />
        <HowItWorks />
        <CategoriesGrid />
        <Footer />
      </main>
    </div>
  );
};

export default App;