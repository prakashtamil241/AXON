import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

interface LoginModalProps {
  onLogin: (name: string, isClient: boolean) => void;
  onClose?: () => void;
}

type ModalStep = 'IDENTITY' | 'REGISTER' | 'LOGIN';

export const LoginModal: React.FC<LoginModalProps> = ({ onLogin, onClose }) => {
  const [step, setStep] = useState<ModalStep>('IDENTITY');
  const [name, setName] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name to continue');
      return;
    }
    setError('');
    setStep('REGISTER');
  };

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !phone.trim() || !password.trim()) {
      setError('Please fill in all registration details');
      return;
    }
    
    setLoading(true);
    setError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: name
      });

      // Save to Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        name,
        email,
        phone,
        role: isClient ? 'client' : 'freelancer',
        createdAt: new Date().toISOString()
      });

      onLogin(name, isClient);
    } catch (err: any) {
      setError(err.message || 'Failed to register');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please enter your credentials');
      return;
    }
    
    setLoading(true);
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Fetch role to determine which dashboard to show via callback
      const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
      let fetchedIsClient = isClient; // fallback to toggle if doc missing
      if (userDoc.exists()) {
          fetchedIsClient = userDoc.data().role === 'client';
      }

      const displayName = userCredential.user.displayName || userCredential.user.email?.split('@')[0] || 'User';
      onLogin(displayName, fetchedIsClient);
    } catch (err: any) {
      setError(err.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // Check if user exists in Firestore
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      
      let finalRoleIsClient = isClient;

      if (!userDoc.exists()) {
        // First time Google Sign In - save defaults or current selection
        await setDoc(userDocRef, {
          name: user.displayName || 'User',
          email: user.email,
          role: isClient ? 'client' : 'freelancer',
          createdAt: new Date().toISOString()
        });
      } else {
        finalRoleIsClient = userDoc.data().role === 'client';
      }

      const displayName = user.displayName || user.email?.split('@')[0] || 'User';
      onLogin(displayName, finalRoleIsClient);
    } catch (err: any) {
      setError(err.message || 'Failed to sign in with Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#FDF9F3]/40 backdrop-blur-md">
      <div 
        className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl border border-[#E7D9C9] p-8 md:p-10 space-y-6 animate-modal-pop relative overflow-hidden"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}
      >
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-600 via-white to-green-600"></div>
        
        {step !== 'LOGIN' && (
          <div className="flex justify-center gap-2 mb-2">
            <div className={`h-1.5 w-8 rounded-full transition-all ${step === 'IDENTITY' ? 'bg-[#B8860B]' : 'bg-[#E7D9C9]'}`}></div>
            <div className={`h-1.5 w-8 rounded-full transition-all ${step === 'REGISTER' ? 'bg-[#B8860B]' : 'bg-[#E7D9C9]'}`}></div>
          </div>
        )}

        <div className="text-center space-y-2">
          <h2 className="text-4xl font-black text-[#B8860B] tracking-tighter">AXON</h2>
          <p className="text-[#8D6E63] font-bold text-xs uppercase tracking-widest">
            {step === 'IDENTITY' ? 'Namaste! Let\'s get started' : step === 'REGISTER' ? 'Create Your Bharat Account' : 'Welcome Back'}
          </p>
        </div>

        <div className="space-y-4">
          <button 
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-white border border-[#DED0C1] py-3.5 rounded-2xl font-bold text-sm text-black shadow-sm hover:bg-orange-50 transition-all active:scale-[0.98] disabled:opacity-50"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
            <span>Continue with Google</span>
          </button>
          
          <div className="relative flex items-center justify-center">
            <div className="border-t border-[#F1E6D8] w-full"></div>
            <span className="absolute bg-white px-4 text-[10px] font-bold text-[#8D6E63] uppercase tracking-widest">or</span>
          </div>
        </div>

        {step === 'IDENTITY' && (
          <form onSubmit={handleNextStep} className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-[#8D6E63] tracking-widest">What should we call you?</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => {setName(e.target.value); setError('');}}
                placeholder="e.g. Rahul Sharma" 
                className={`w-full bg-[#F9F5EF] border ${error ? 'border-red-400' : 'border-[#DED0C1]'} rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all font-medium text-black`}
                autoFocus
              />
              {error && <p className="text-[10px] text-red-500 font-bold ml-1">{error}</p>}
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase text-[#8D6E63] tracking-widest text-center block">I am looking to...</label>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  type="button"
                  onClick={() => setIsClient(false)}
                  className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all ${!isClient ? 'bg-[#425C3C] text-white border-[#425C3C] shadow-lg' : 'bg-white text-[#8D6E63] border-[#E7D9C9]'}`}
                >
                  Find Work 💻
                </button>
                <button 
                  type="button"
                  onClick={() => setIsClient(true)}
                  className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all ${isClient ? 'bg-[#2E7D32] text-white border-[#2E7D32] shadow-lg' : 'bg-white text-[#8D6E63] border-[#E7D9C9]'}`}
                >
                  Hire Talent 🤝
                </button>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-[#D85B1B] text-white py-4 rounded-2xl font-black text-sm shadow-xl hover:bg-[#BF4F17] transform transition-all active:scale-95 hover:shadow-orange-200 disabled:opacity-50"
            >
              Continue to Sign Up
            </button>
            
            <div className="text-center">
              <button 
                type="button"
                onClick={() => {setStep('LOGIN'); setError('');}}
                className="text-[11px] font-bold text-[#8D6E63] hover:text-[#5D4037] transition-colors"
              >
                Already have an account? <span className="text-[#B8860B] underline">Login</span>
              </button>
            </div>
          </form>
        )}

        {step === 'REGISTER' && (
          <form onSubmit={handleRegistrationSubmit} className="space-y-4 animate-slide-up">
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-[#8D6E63] tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com" 
                  className="w-full bg-[#F9F5EF] border border-[#DED0C1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-100 font-medium text-black"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-[#8D6E63] tracking-widest">Mobile Number</label>
                <div className="flex gap-2">
                  <div className="bg-[#F3EAD3] border border-[#DED0C1] px-3 py-3 rounded-xl text-sm font-bold text-[#5D4037]">🇮🇳 +91</div>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9876543210" 
                    className="flex-1 bg-[#F9F5EF] border border-[#DED0C1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-100 font-medium text-black"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-[#8D6E63] tracking-widest">Create Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-[#F9F5EF] border border-[#DED0C1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-100 font-medium text-black"
                  required
                />
              </div>
            </div>

            {error && <p className="text-[10px] text-red-500 font-bold text-center">{error}</p>}

            <div className="pt-2 space-y-3">
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#425C3C] text-white py-4 rounded-2xl font-black text-sm shadow-xl hover:bg-[#2E4229] transform transition-all active:scale-95 disabled:opacity-50"
              >
                {loading ? 'Registering...' : 'Register & Enter Axon'}
              </button>
              <div className="flex flex-col gap-2 items-center">
                <button 
                  type="button"
                  onClick={() => setStep('IDENTITY')}
                  className="text-[10px] font-bold text-[#8D6E63] uppercase tracking-widest hover:text-[#5D4037]"
                >
                  ← Back to Previous Step
                </button>
                <button 
                  type="button"
                  onClick={() => {setStep('LOGIN'); setError('');}}
                  className="text-[11px] font-bold text-[#8D6E63] hover:text-[#5D4037]"
                >
                  Already have an account? <span className="text-[#B8860B] underline">Login</span>
                </button>
              </div>
            </div>
          </form>
        )}

        {step === 'LOGIN' && (
          <form onSubmit={handleLoginSubmit} className="space-y-5 animate-slide-up">
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-[#8D6E63] tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com" 
                  className="w-full bg-[#F9F5EF] border border-[#DED0C1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-100 font-medium text-black"
                  required
                />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold uppercase text-[#8D6E63] tracking-widest">Password</label>
                  <button type="button" className="text-[9px] font-bold text-[#B8860B] uppercase tracking-tighter hover:underline">Forgot?</button>
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-[#F9F5EF] border border-[#DED0C1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-100 font-medium text-black"
                  required
                />
              </div>
              <div className="space-y-2 pt-2">
                <label className="text-[10px] font-bold uppercase text-[#8D6E63] tracking-widest text-center block">I want to login as...</label>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    type="button"
                    onClick={() => setIsClient(false)}
                    className={`py-2 px-4 rounded-xl text-[10px] font-bold border transition-all ${!isClient ? 'bg-[#425C3C] text-white border-[#425C3C]' : 'bg-white text-[#8D6E63] border-[#E7D9C9]'}`}
                  >
                    Freelancer 💻
                  </button>
                  <button 
                    type="button"
                    onClick={() => setIsClient(true)}
                    className={`py-2 px-4 rounded-xl text-[10px] font-bold border transition-all ${isClient ? 'bg-[#2E7D32] text-white border-[#2E7D32]' : 'bg-white text-[#8D6E63] border-[#E7D9C9]'}`}
                  >
                    Client 🤝
                  </button>
                </div>
              </div>
            </div>

            {error && <p className="text-[10px] text-red-500 font-bold text-center">{error}</p>}

            <div className="space-y-3 pt-2">
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#B8860B] text-white py-4 rounded-2xl font-black text-sm shadow-xl hover:bg-[#996515] transform transition-all active:scale-95 disabled:opacity-50"
              >
                {loading ? 'Logging in...' : 'Login to Axon'}
              </button>
              <div className="text-center">
                <button 
                  type="button"
                  onClick={() => {setStep('IDENTITY'); setError('');}}
                  className="text-[11px] font-bold text-[#8D6E63] hover:text-[#5D4037]"
                >
                  New to Axon? <span className="text-[#B8860B] underline">Create an account</span>
                </button>
              </div>
            </div>
          </form>
        )}

        <p className="text-[10px] text-center text-[#8D6E63] font-medium px-4 pt-4 border-t border-[#F9F5EF]">
          By continuing, you agree to Axon's <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
        </p>

        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-orange-100/30 rounded-full blur-xl"></div>
        <div className="absolute -top-8 -right-8 w-24 h-24 bg-green-100/30 rounded-full blur-xl"></div>
      </div>

      <style>{`
        @keyframes modal-pop {
          0% { opacity: 0; transform: scale(0.9) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateX(-10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-modal-pop {
          animation: modal-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};