'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation de réinitialisation
    setTimeout(() => {
      // Ici vous pourriez rediriger vers une page de confirmation
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#fffff9] text-[#1e293b]">
      {/* Header */}
      <header className="bg-[#fffff9]/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 py-3 md:py-5">
        <div className="max-w-6xl mx-auto px-4 md:px-5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="Potential&apos;s Reveal" width={40} height={40} className="rounded" />
              <h3 className="text-lg md:text-xl font-bold text-[#442604] leading-none">
                Potential&apos;s <br /> Reveal
              </h3>
            </Link>
            
            {/* Bouton hamburger pour mobile */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="block w-5 h-0.5 bg-[#171717] -translate-y-1"></span>
                <span className="block w-5 h-0.5 bg-[#171717]"></span>
                <span className="block w-5 h-0.5 bg-[#171717] translate-y-1"></span>
              </div>
            </button>

            {/* Navigation desktop */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex gap-8">
                <Link href="/formations" className="text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors text-base">
                  Nos formations
                </Link>
                <Link href="/about" className="text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors text-base">
                  À propos
                </Link>
                <Link href="/contact" className="text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors text-base">
                  Contact
                </Link>
              </nav>
              <Link href="/login" className="bg-[#3b82f6] text-white px-6 py-3 rounded-xl font-bold text-base border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all">
                Se connecter
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex items-center justify-center min-h-[calc(100vh-140px)] py-12 md:py-20">
        <div className="max-w-md w-full mx-4 md:mx-5">
          <div className="bg-white rounded-2xl p-6 md:p-8 border-3 border-[#171717] shadow-[8px_8px_0_#171717]">
            <div className="text-center mb-8">
              <Image src="/logo.jpg" alt="Potential&apos;s Reveal" width={60} height={60} className="rounded mx-auto mb-4" />
              <h1 className="text-3xl font-['SUSE_Mono'] text-[#442604] mb-2">
                Nouveau mot de passe
              </h1>
              <p className="text-dark">
                Définissez votre nouveau mot de passe
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-dark mb-2">
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full px-4 py-3 border-2 border-[#442604] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ea494b] focus:border-transparent"
                  placeholder="Votre nouveau mot de passe"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-dark mb-2">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  className="w-full px-4 py-3 border-2 border-[#442604] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ea494b] focus:border-transparent"
                  placeholder="Confirmez votre nouveau mot de passe"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#3b82f6] text-white py-3 rounded-xl font-bold text-lg border-3 border-[#171717] shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Réinitialisation...' : 'Réinitialiser le mot de passe'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-dark">
                Vous vous souvenez de votre mot de passe ?{' '}
                <Link href="/login" className="text-[#3b82f6] font-semibold hover:underline">
                  Se connecter
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}