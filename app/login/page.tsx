// app/login/page.tsx
'use client'; 

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import Footer from '../components/Footer';


export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [redirectUrl, setRedirectUrl] = useState('/dashboard');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  interface User {
  email: string;
  password: string;
  role: 'user' | 'admin';
  name: string;
}

const testUsers: Record<string, User> = {
  'test@gmail.com': { email: 'test@gmail.com', password: 'test123', role: 'user', name: 'Utilisateur Test' },
  'admin@gmail.com': { email: 'admin@gmail.com', password: 'admin123', role: 'admin', name: 'Administrateur' },
};


  useEffect(() => {
    const redirect = searchParams.get('redirect');
    if (redirect) setRedirectUrl(redirect);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const user = testUsers[loginData.email];

    if (user && user.password === loginData.password) {
      setTimeout(() => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', 'true');
        router.push(user.role === 'admin' ? '/admin' : redirectUrl);
        setIsLoading(false);
      }, 500);
    } else {
      setError('Email ou mot de passe incorrect');
      setIsLoading(false);
    }
  };

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get('redirect');
  if (redirect) setRedirectUrl(redirect);
}, []);


  return (
    <div className="min-h-screen bg-[#fffff9] text-[#1e293b] flex flex-col">
      <header className="bg-[#fffff9]/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 py-5">
        <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="Potential's Reveal" width={40} height={40} className="rounded" />
            <h3 className="text-xl font-bold text-[#442604] leading-none">Potential&apos;s Reveal</h3>
          </Link>
          <nav className="flex gap-8">
            <Link href="/formations" className="text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors">Nos formations</Link>
            <Link href="/about" className="text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors">À propos</Link>
            <Link href="/contact" className="text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors">Contact</Link>
          </nav>
          <Link href="/login" className="bg-[#3b82f6] text-white px-6 py-3 rounded-xl font-bold hover:-translate-y-0.5 transition-all">Se connecter</Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-12 md:py-20">
        <div className="max-w-md w-full mx-4 md:mx-5">
          <div className="bg-white rounded-2xl p-6 md:p-8 border-3 border-[#171717] shadow-[8px_8px_0_#171717]">
            <div className="text-center mb-8">
              <Image src="/logo.jpg" alt="Potential's Reveal" width={60} height={60} className="rounded mx-auto mb-4" />
              <h1 className="text-3xl font-['SUSE_Mono'] text-[#442604] mb-2">Connexion</h1>
              <p>Connectez-vous à votre compte Potential&apos;s Reveal</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>}
              <input
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-[#442604] rounded-xl"
              />
              <input
                type="password"
                placeholder="Mot de passe"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-[#442604] rounded-xl"
              />
              <button type="submit" disabled={isLoading} className="w-full bg-[#3b82f6] text-white py-3 rounded-xl font-bold">
                {isLoading ? 'Connexion...' : 'Se connecter'}
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              Pas encore de compte ? <Link href="/register" className="text-[#3b82f6] font-semibold">Créer un compte</Link>
            </div>

            <div className="mt-4 text-xs text-gray-600 text-center">
              <p>Utilisateur de test : test@gmail.com / test123</p>
              <p>Admin de test : admin@gmail.com / admin123</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
