import React, { useState } from 'react';
import { supabase, isSupabaseConfigured } from '../supabaseClient';

export default function Login({ onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    hotelName: '',
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
    setMessage('');
  };

  // Google OAuth Login / Signup via Supabase
  const handleGoogleSignIn = async () => {
    setError('');
    setMessage('');
    setIsGoogleLoading(true);

    if (!isSupabaseConfigured) {
      setTimeout(() => {
        setIsGoogleLoading(false);
        // Fallback demo mode if Supabase keys aren't added to .env yet
        onLoginSuccess('google.user@hotel.com');
      }, 800);
      return;
    }

    try {
      const { error: googleError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      });

      if (googleError) {
        throw googleError;
      }
    } catch (err) {
      setError(err.message || 'Failed to initialize Google authentication');
      setIsGoogleLoading(false);
    }
  };

  // Email / Password Form Submit via Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    if (!isSupabaseConfigured) {
      // Fallback demo mode when env vars aren't provided yet
      setTimeout(() => {
        setIsLoading(false);
        onLoginSuccess(formData.email);
      }, 800);
      return;
    }

    try {
      if (isSignUp) {
        // Supabase Built-in Signup
        const { data, error: signUpError } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              hotel_name: formData.hotelName,
            },
          },
        });

        if (signUpError) throw signUpError;

        if (data.session) {
          onLoginSuccess(data.user.email);
        } else {
          setMessage('Account created! Please check your email to confirm your signup.');
        }
      } else {
        // Supabase Built-in Login
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (signInError) throw signInError;

        if (data.user) {
          onLoginSuccess(data.user.email);
        }
      }
    } catch (err) {
      setError(err.message || 'Authentication error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center py-20 px-4 font-sans bg-[#06060c] overflow-hidden login-section">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-[420px] relative z-10">
        <div className="bg-[#0c0a1a]/40 backdrop-blur-md border border-purple-500/10 p-6 sm:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] login-card">
          
          {/* Config notification if Supabase keys aren't set in .env */}
          {!isSupabaseConfigured && (
            <div className="bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] rounded-xl p-3 mb-6 flex items-start gap-2">
              <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                <strong>Supabase Ready:</strong> Add your <code>VITE_SUPABASE_URL</code> & <code>VITE_SUPABASE_ANON_KEY</code> to <code>.env</code> to connect your live database project.
              </span>
            </div>
          )}

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-display font-extrabold text-white tracking-tight login-title">
              {isSignUp ? 'Create Client Account' : 'Client Portal Login'}
            </h2>
            <p className="text-xs text-slate-400 mt-2 login-subtitle">
              {isSignUp 
                ? 'Powered by Supabase Authentication' 
                : 'Access your IPTV management console & dashboard'}
            </p>
          </div>

          {/* Google OAuth Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isGoogleLoading}
            className="w-full py-2.5 px-4 mb-5 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center justify-center gap-3 transition-colors cursor-pointer login-google-btn"
          >
            {isGoogleLoading ? (
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <>
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Continue with Google</span>
              </>
            )}
          </button>

          {/* Divider */}
          <div className="relative flex items-center justify-center mb-5">
            <div className="border-t border-white/10 w-full"></div>
            <span className="bg-[#0c0a1a] px-3 text-[10px] text-slate-500 uppercase tracking-widest absolute divider-text">or</span>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl p-3 mb-5 text-center">
              {error}
            </div>
          )}

          {message && (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl p-3 mb-5 text-center">
              {message}
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
                'Create Account with Supabase'
              ) : (
                'Sign In with Supabase'
              )}
            </button>
          </form>

          {/* Toggle Mode */}
          <div className="text-center mt-6 pt-5 border-t border-white/5">
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError('');
                setMessage('');
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
