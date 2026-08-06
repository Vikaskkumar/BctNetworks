import React, { useState } from 'react';

export default function Login({ onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    hotelName: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      if (isSignUp) {
        // Mock sign up success
        onLoginSuccess(formData.email);
      } else {
        // Mock credentials validation
        if (formData.email.toLowerCase() === 'admin@hotel.com' && formData.password === 'admin123') {
          onLoginSuccess(formData.email);
        } else if (formData.email && formData.password.length >= 6) {
          // Allow any realistic login for mock demo purposes but notify them
          onLoginSuccess(formData.email);
        } else {
          setError('Invalid credentials. Use admin@hotel.com / admin123 or any password > 6 characters.');
        }
      }
    }, 1000);
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20 px-4 font-sans bg-[#06060c] overflow-hidden login-section">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-[420px] relative z-10">
        <div className="bg-[#0c0a1a]/40 backdrop-blur-md border border-purple-500/10 p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] login-card">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-display font-extrabold text-white tracking-tight login-title">
              {isSignUp ? 'Create Client Account' : 'Client Portal Login'}
            </h2>
            <p className="text-xs text-slate-400 mt-2 login-subtitle">
              {isSignUp 
                ? 'Sign up to manage your hotel screens & IPTV templates' 
                : 'Access your IPTV management console & dashboard'}
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl p-3 mb-5 text-center">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div className="flex flex-col space-y-1.5">
                <label className="text-[11px] font-semibold text-slate-400 login-label">Hotel / Company Name</label>
                <input
                  type="text"
                  name="hotelName"
                  required
                  value={formData.hotelName}
                  onChange={handleChange}
                  placeholder="Grand Plaza Resort"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors login-input"
                />
              </div>
            )}

            <div className="flex flex-col space-y-1.5">
              <label className="text-[11px] font-semibold text-slate-400 login-label">Work Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="manager@hotel.com"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors login-input"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[11px] font-semibold text-slate-400 login-label">Password</label>
                {!isSignUp && (
                  <a href="#" className="text-[10px] text-purple-400 hover:underline">Forgot password?</a>
                )}
              </div>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors login-input"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 mt-4 rounded-full text-xs font-extrabold text-black bg-white hover:bg-slate-100 disabled:opacity-50 transition-colors cursor-pointer flex items-center justify-center login-submit-btn"
            >
              {isLoading ? (
                <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : isSignUp ? (
                'Create Account'
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Toggle Mode */}
          <div className="text-center mt-6 pt-5 border-t border-white/5">
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError('');
              }}
              className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {isSignUp ? 'Already have a client account? Sign In' : "Don't have an account? Sign Up"}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
