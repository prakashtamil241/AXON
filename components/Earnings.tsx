import React, { useState } from 'react';

type WithdrawStep = 'AMOUNT' | 'UPI_SELECT' | 'PROCESSING' | 'SUCCESS';

export const Earnings: React.FC = () => {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawStep, setWithdrawStep] = useState<WithdrawStep>('AMOUNT');
  const [withdrawAmount, setWithdrawAmount] = useState('5000');
  const [selectedUPI, setSelectedUPI] = useState('sandeep.k@okaxis');
  const [transId, setTransId] = useState('');

  const availableBalance = 32850.40;

  const handleStartWithdraw = () => {
    setWithdrawStep('AMOUNT');
    setShowWithdrawModal(true);
  };

  const proceedToUPI = () => {
    const amt = parseFloat(withdrawAmount);
    if (isNaN(amt) || amt < 500 || amt > availableBalance) {
      alert("Please enter a valid amount (Min ₹500)");
      return;
    }
    setWithdrawStep('UPI_SELECT');
  };

  const finalizeWithdraw = () => {
    setWithdrawStep('PROCESSING');
    setTimeout(() => {
      setTransId('AXN' + Math.floor(Math.random() * 100000000));
      setWithdrawStep('SUCCESS');
    }, 2000);
  };

  const closeWithdraw = () => {
    setShowWithdrawModal(false);
  };

  return (
    <div className="flex-1 bg-[#FDF9F3] text-[#5D4037] overflow-y-auto" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}>
      
      {/* Withdrawal Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div 
            className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl border border-[#E7D9C9] p-8 space-y-6 animate-modal-pop relative overflow-hidden"
            style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-600 via-white to-green-600"></div>
            
            {withdrawStep !== 'PROCESSING' && withdrawStep !== 'SUCCESS' && (
              <button 
                onClick={closeWithdraw}
                className="absolute top-6 right-6 p-2 text-[#8D6E63] hover:text-[#5D4037] transition-colors"
              >
                ✕
              </button>
            )}

            {withdrawStep === 'AMOUNT' && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-black text-[#5D4037]">Enter Withdrawal Amount</h3>
                  <p className="text-[10px] font-bold text-[#8D6E63] uppercase tracking-widest">Balance: ₹{availableBalance.toLocaleString()}</p>
                </div>
                
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-black opacity-30">₹</span>
                  <input 
                    type="number" 
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    className="w-full bg-[#F9F5EF] border border-[#DED0C1] rounded-2xl py-5 pl-12 pr-6 text-2xl font-black focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all text-black"
                    placeholder="0.00"
                    autoFocus
                  />
                </div>

                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex items-center gap-3">
                   <span className="text-xl">💡</span>
                   <p className="text-[10px] font-bold text-orange-800 leading-tight">
                     Standard withdrawals are processed within 2-4 hours via IMPS/UPI.
                   </p>
                </div>

                <button 
                  onClick={proceedToUPI}
                  className="w-full bg-[#B8860B] text-white py-4 rounded-2xl font-black text-sm shadow-xl hover:bg-[#996515] transition-all active:scale-95"
                >
                  Confirm Amount
                </button>
              </div>
            )}

            {withdrawStep === 'UPI_SELECT' && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-black text-[#5D4037]">Select UPI Destination</h3>
                  <p className="text-[10px] font-bold text-[#8D6E63] uppercase tracking-widest">Withdrawing ₹{parseFloat(withdrawAmount).toLocaleString()}</p>
                </div>

                <div className="space-y-3">
                   <div 
                     onClick={() => setSelectedUPI('sandeep.k@okaxis')}
                     className={`p-4 border-2 rounded-2xl cursor-pointer transition-all flex items-center justify-between ${selectedUPI === 'sandeep.k@okaxis' ? 'border-orange-500 bg-orange-50/30' : 'border-[#E7D9C9] bg-white'}`}
                   >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white border border-[#E7D9C9] rounded-lg flex items-center justify-center text-xs font-bold text-orange-600 italic">UPI</div>
                        <span className="text-xs font-black">sandeep.k@okaxis</span>
                      </div>
                      {selectedUPI === 'sandeep.k@okaxis' && <span className="text-orange-600">●</span>}
                   </div>
                   <button className="w-full py-3 border border-dashed border-[#DED0C1] rounded-2xl text-[10px] font-bold text-[#8D6E63] hover:border-orange-500 hover:text-orange-600 transition-all">
                      + Add New UPI ID
                   </button>
                </div>

                <button 
                  onClick={finalizeWithdraw}
                  className="w-full bg-[#425C3C] text-white py-4 rounded-2xl font-black text-sm shadow-xl hover:bg-[#2E4229] transition-all active:scale-95"
                >
                  Withdraw to UPI
                </button>
              </div>
            )}

            {withdrawStep === 'PROCESSING' && (
              <div className="py-12 flex flex-col items-center justify-center space-y-6">
                <div className="w-20 h-20 border-4 border-[#F3EAD3] border-t-orange-600 rounded-full animate-spin"></div>
                <div className="text-center space-y-2">
                   <h3 className="text-lg font-black uppercase tracking-widest">Processing</h3>
                   <p className="text-xs font-bold text-[#8D6E63]">Communicating with secure payment node...</p>
                </div>
              </div>
            )}

            {withdrawStep === 'SUCCESS' && (
              <div className="space-y-6 animate-modal-pop">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-5xl mx-auto shadow-inner border border-green-100">
                  🎉
                </div>
                <div className="text-center space-y-2">
                   <h3 className="text-xl font-black text-green-800">Withdrawal Successful!</h3>
                   <p className="text-sm font-medium text-[#8D6E63]">₹{parseFloat(withdrawAmount).toLocaleString()} has been sent to your UPI ID.</p>
                </div>

                <div className="bg-[#F9F5EF] p-4 rounded-2xl space-y-2">
                   <div className="flex justify-between text-[10px] font-bold text-[#8D6E63]">
                      <span>Trans ID</span>
                      <span className="text-black">{transId}</span>
                   </div>
                   <div className="flex justify-between text-[10px] font-bold text-[#8D6E63]">
                      <span>Destination</span>
                      <span className="text-black">{selectedUPI}</span>
                   </div>
                </div>

                <button 
                  onClick={closeWithdraw}
                  className="w-full bg-[#5D4037] text-white py-4 rounded-2xl font-black text-sm shadow-xl transition-all active:scale-95"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Financial Hero Header */}
      <section className="relative h-72 md:h-80 flex flex-col justify-end p-6 md:p-12 overflow-hidden border-b border-[#E7D9C9] bg-[#F3EAD3]/30">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#B8860B]/5 to-transparent"></div>
          <img 
            src="https://images.unsplash.com/photo-1554224155-1696413575b9?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover opacity-10 grayscale" 
            alt="Finance" 
          />
        </div>
        
        <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs font-bold text-[#8D6E63] uppercase tracking-[0.2em]">
              <span>Wallet Management</span>
              <span className="opacity-30">/</span>
              <span className="text-orange-800">Earnings Dashboard</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-space">Financial Overview</h1>
            <p className="text-sm md:text-base font-medium text-[#8D6E63]">Secure payments powered by Bharat UPI & Escrow Protection.</p>
          </div>
          
          <div className="flex flex-col md:items-end gap-6">
            <div className="bg-[#425C3C] text-white p-6 rounded-[2rem] shadow-2xl min-w-[300px] border border-white/10 relative overflow-hidden group">
               <div className="relative z-10 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Available for Withdrawal</span>
                  <div className="text-3xl font-black">₹ 32,850.40</div>
                  <button 
                    onClick={handleStartWithdraw}
                    className="w-full mt-4 bg-white text-[#425C3C] py-2.5 rounded-xl font-bold text-xs shadow-md hover:bg-orange-50 transition-all active:scale-95"
                  >
                    Withdraw via UPI ➔
                  </button>
               </div>
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full group-hover:scale-110 transition-transform"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 space-y-10">
        
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           <FinanceStatCard label="In Escrow" value="₹ 12,500" icon="🛡️" color="text-blue-600" />
           <FinanceStatCard label="Pending Approval" value="₹ 4,200" icon="⏳" color="text-orange-600" />
           <FinanceStatCard label="Lifetime Earnings" value="₹ 1,45,200" icon="🏆" color="text-green-700" />
           <FinanceStatCard label="TDS Deducted" value="₹ 1,452" icon="📋" color="text-red-600" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           
           {/* Transaction History */}
           <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between border-b border-[#E7D9C9] pb-4">
                 <h2 className="text-2xl font-black">Transaction History</h2>
                 <div className="flex gap-2">
                    <HistoryTab label="All" active />
                    <HistoryTab label="Payments" />
                    <HistoryTab label="Tax/TDS" />
                 </div>
              </div>

              <div className="space-y-4">
                 <TransactionItem 
                   title="Milestone 2 - E-Commerce Redesign" 
                   date="May 24, 2024" 
                   amount="+ ₹ 15,000" 
                   status="Paid" 
                   type="Income"
                 />
                 <TransactionItem 
                   title="UPI Withdrawal - ID #88219" 
                   date="May 20, 2024" 
                   amount="- ₹ 10,000" 
                   status="Success" 
                   type="Withdrawal"
                 />
                 <TransactionItem 
                   title="Milestone 1 - Hindi Content" 
                   date="May 18, 2024" 
                   amount="+ ₹ 4,500" 
                   status="Paid" 
                   type="Income"
                 />
                 <TransactionItem 
                   title="Platform Fee (8%) - #8210" 
                   date="May 18, 2024" 
                   amount="- ₹ 360" 
                   status="Deducted" 
                   type="Fee"
                 />
                 <TransactionItem 
                   title="TDS (1%) - Govt. of India" 
                   date="May 18, 2024" 
                   amount="- ₹ 45" 
                   status="Deducted" 
                   type="Tax"
                 />
              </div>

              <button className="w-full py-4 bg-white border border-[#E7D9C9] rounded-2xl text-xs font-bold text-[#8D6E63] hover:bg-[#F3EAD3]/30 transition-colors">
                Load Older Transactions
              </button>
           </div>

           {/* Sidebar: Analytics & Tax */}
           <div className="lg:col-span-4 space-y-8">
              
              {/* Earnings Performance Mini-Chart Placeholder */}
              <section className="bg-white rounded-[2.5rem] border border-[#E7D9C9] p-8 space-y-6 shadow-sm">
                 <h3 className="font-bold text-sm uppercase tracking-widest text-[#8D6E63] border-b border-[#F9F5EF] pb-4">Monthly Performance</h3>
                 <div className="h-40 flex items-end justify-between gap-2 pt-4">
                    {[40, 60, 45, 90, 70, 85].map((h, i) => (
                      <div key={i} className="flex-1 bg-[#F3EAD3] rounded-t-lg relative group transition-all hover:bg-orange-200" style={{ height: `${h}%` }}>
                         <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-black opacity-0 group-hover:opacity-100">₹{h}k</div>
                      </div>
                    ))}
                 </div>
                 <div className="flex justify-between text-[8px] font-bold text-[#8D6E63] uppercase">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                 </div>
              </section>

              {/* Tax & Compliance Corner */}
              <section className="bg-[#1A365D] text-white rounded-[2.5rem] p-8 space-y-6 shadow-xl relative overflow-hidden">
                 <div className="relative z-10 space-y-4">
                    <h3 className="font-bold text-sm uppercase tracking-widest opacity-60">Tax & PAN Info</h3>
                    <div className="flex items-center justify-between">
                       <div className="space-y-1">
                          <p className="text-[10px] font-bold uppercase opacity-60">PAN Status</p>
                          <p className="text-lg font-black tracking-widest">ABCDE****F</p>
                       </div>
                       <span className="text-green-400">✔️ Verified</span>
                    </div>
                    <div className="p-4 bg-white/10 rounded-2xl border border-white/10 space-y-2">
                       <p className="text-[10px] font-bold">GST Registration (Optional)</p>
                       <p className="text-xs opacity-70">Add your GSTIN to claim Input Tax Credit on platform fees.</p>
                       <button className="text-[10px] font-black underline decoration-orange-400 decoration-2">Add GST Details</button>
                    </div>
                 </div>
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
              </section>

              {/* AI Financial Tip */}
              <div className="bg-white rounded-[2.5rem] border border-[#E7D9C9] p-8 space-y-4 shadow-sm border-b-4 border-green-600/20">
                 <div className="flex items-center gap-3">
                    <span className="text-2xl">🤖</span>
                    <h3 className="font-black text-sm uppercase tracking-widest">Axon Insight</h3>
                 </div>
                 <p className="text-xs text-[#5D4037] italic leading-relaxed">
                   "Your average project value has increased by 12% this month. Based on your current earnings, we recommend setting aside ₹2,000 for upcoming tax filings."
                 </p>
              </div>
           </div>
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

const FinanceStatCard: React.FC<{ label: string; value: string; icon: string; color: string }> = ({ label, value, icon, color }) => (
  <div className="bg-white border border-[#E7D9C9] p-6 rounded-[2rem] shadow-sm space-y-2 group hover:border-orange-200 transition-colors">
     <div className="flex justify-between items-center">
        <span className="text-2xl">{icon}</span>
        <span className="text-[10px] font-bold text-[#8D6E63] uppercase tracking-widest">{label}</span>
     </div>
     <div className={`text-xl font-black ${color}`}>{value}</div>
  </div>
);

const HistoryTab: React.FC<{ label: string; active?: boolean }> = ({ label, active }) => (
  <button className={`px-4 py-1.5 rounded-full text-[10px] font-bold border transition-all ${active ? 'bg-[#425C3C] text-white border-[#425C3C]' : 'bg-white text-[#8D6E63] border-[#E7D9C9]'}`}>
    {label}
  </button>
);

const TransactionItem: React.FC<{ title: string; date: string; amount: string; status: string; type: string }> = ({ title, date, amount, status, type }) => (
  <div className="bg-white border border-[#E7D9C9] p-5 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-all">
     <div className="flex gap-4 items-center">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
           type === 'Income' ? 'bg-green-50 text-green-700' : 
           type === 'Withdrawal' ? 'bg-blue-50 text-blue-700' : 
           'bg-orange-50 text-orange-700'
        }`}>
           {type === 'Income' ? '↓' : type === 'Withdrawal' ? '↑' : '−'}
        </div>
        <div>
           <h4 className="text-sm font-black">{title}</h4>
           <p className="text-[10px] font-bold text-[#8D6E63] uppercase tracking-widest">{date}</p>
        </div>
     </div>
     <div className="flex items-center gap-6 w-full md:w-auto justify-between">
        <div className="text-right">
           <div className={`text-sm font-black ${amount.startsWith('+') ? 'text-green-700' : 'text-orange-700'}`}>{amount}</div>
           <p className="text-[9px] font-bold uppercase tracking-tighter opacity-40">{type}</p>
        </div>
        <div className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${
           status === 'Paid' || status === 'Success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-orange-100 text-orange-700 border border-orange-200'
        }`}>
           {status}
        </div>
     </div>
  </div>
);
