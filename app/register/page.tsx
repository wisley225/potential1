'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Register() {
  useEffect(() => {
    // Animation simple au scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fffff9] text-[#1e293b]">
    <Navbar/>

      <main className="flex items-center justify-center min-h-[calc(100vh-140px)] py-12 md:py-20">
        <div className="max-w-md w-full mx-4 md:mx-5">
          <div className="animate-on-scroll bg-white rounded-2xl p-6 md:p-8 border-3 border-[#171717] shadow-[8px_8px_0_#171717]">
            <div className="text-center mb-8">
              <Image src="/logo.jpg" alt="Potential's Reveal" width={60} height={60} className="rounded mx-auto mb-4" />
              <h1 className="text-3xl font-['SUSE_Mono'] text-[#442604] mb-2">
                Créer un compte
              </h1>
              <p className="text-dark">
                Rejoignez la communauté Potential&apos;s Reveal
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-dark mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border-2 border-[#442604] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ea494b] focus:border-transparent"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-dark mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border-2 border-[#442604] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ea494b] focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-[#442604] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ea494b] focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-dark mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full px-4 py-3 border-2 border-[#442604] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ea494b] focus:border-transparent"
                  placeholder="Minimum 8 caractères"
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
                  placeholder="Répétez votre mot de passe"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  className="rounded border-[#442604] text-[#3b82f6] focus:ring-[#3b82f6]"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-dark">
                  J&apos;accepte les{' '}
                  <Link href="/terms" className="text-[#3b82f6] hover:underline">
                    conditions d&apos;utilisation
                  </Link>{' '}
                  et la{' '}
                  <Link href="/privacy" className="text-[#3b82f6] hover:underline">
                    politique de confidentialité
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3b82f6] text-white py-3 rounded-xl font-bold text-lg border-3 border-[#171717] shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all"
              >
                Créer mon compte
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-dark">
                Déjà un compte ?{' '}
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
