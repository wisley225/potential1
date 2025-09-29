'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import Footer from '../components/Footer';

// Types pour les utilisateurs
interface User {
  email: string;
  password: string;
  role: 'user' | 'admin';
  name: string;
}

// Utilisateurs de test
const testUsers: Record<string, User> = {
  'test@gmail.com': {
    email: 'test@gmail.com',
    password: 'test123',
    role: 'user',
    name: 'Utilisateur Test'
  },
  'admin@gmail.com': {
    email: 'admin@gmail.com',
    password: 'admin123',
    role: 'admin',
    name: 'Administrateur'
  }
};

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('/dashboard');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  // Récupérer le paramètre redirect depuis l'URL
  useEffect(() => {
    const redirect = searchParams.get('redirect');
    if (redirect) setRedirectUrl(redirect);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const user = testUsers[loginData.email];

    if (user && user.password === loginData.password) {
      setTimeout(() => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', 'true');

        const targetUrl = user.role === 'admin' ? '/admin' : redirectUrl;
        router.push(targetUrl);
        setIsLoading(false);
      }, 1000);
    } else {
      setError('Email ou mot de passe incorrect');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) el.classList.add('animated');
      });
    };
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fffff9] text-[#1e293b]">
      {/* Header */}
      <header className="bg-[#fffff9]/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 py-5">
        <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="Potential's Reveal" width={40} height={40} className="rounded" />
            <h3 className="text-xl font-bold text-[#442604] leading-none">
              Potential&apos;s <br /> Reveal
            </h3>
          </Link>
          <nav className="flex gap-8">
            <Link href="/formations" className="text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors">Nos formations</Link>
            <Link href="/about" className="text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors">À propos</Link>
            <Link href="/contact" className="text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors">Contact</Link>
          </nav>
          <Link href="/login" className="bg-[#3b82f6] text-white px-6 py-3 rounded-xl font-bold border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all">
            Se connecter
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex items-center justify-center min-h-[calc(100vh-140px)] py-12 md:py-20">
        <div className="max-w-md w-full mx-4 md:mx-5">
          <div className="animate-on-scroll bg-white rounded-2xl p-6 md:p-8 border-3 border-[#171717] shadow-[8px_8px_0_#171717]">
            <div className="text-center mb-8">
              <Image src="/logo.jpg" alt="Potential's Reveal" width={60} height={60} className="rounded mx-auto mb-4" />
              <h1 className="text-3xl font-['SUSE_Mono'] text-[#442604] mb-2">Connexion</h1>
              <p className="text-dark">Connectez-vous à votre compte Potential&apos;s Reveal</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>}
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">Adresse email</label>
                <input
                  type="email"
                  id="email"
                  value={loginData.email}
                  onChange={e => setLoginData({...loginData, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 border-2 border-[#442604] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ea494b] focus:border-transparent"
                  placeholder="test@gmail.com ou admin@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-dark mb-2">Mot de passe</label>
                <input
                  type="password"
                  id="password"
                  value={loginData.password}
                  onChange={e => setLoginData({...loginData, password: e.target.value})}
                  required
                  className="w-full px-4 py-3 border-2 border-[#442604] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ea494b] focus:border-transparent"
                  placeholder="test123 ou admin123"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-[#442604] text-[#3b82f6] focus:ring-[#3b82f6]" />
                  <span className="ml-2 text-sm text-dark">Se souvenir de moi</span>
                </label>
                <Link href="/forgot" className="text-sm text-[#3b82f6] hover:underline">Mot de passe oublié ?</Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#3b82f6] text-white py-3 rounded-xl font-bold text-lg border-3 border-[#171717] shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Connexion...' : 'Se connecter'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-dark">
                Pas encore de compte ?{' '}
                <Link href="/register" className="text-[#3b82f6] font-semibold hover:underline">Créer un compte</Link>
              </p>
            </div>

            {/* Section utilisateurs de test */}
            <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-700 mb-2 text-center">Utilisateurs de test</h3>
              <div className="text-xs text-gray-600 space-y-1">
                <p><strong>Utilisateur :</strong> test@gmail.com / test123</p>
                <p><strong>Admin :</strong> admin@gmail.com / admin123</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
