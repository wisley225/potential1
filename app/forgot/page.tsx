'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function Forgot() {
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
            <Link href="/formations" className="text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors">
              Nos formations
            </Link>
            <Link href="/about" className="text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors">
              Contact
            </Link>
          </nav>
          <Link href="/login" className="bg-[#3b82f6] text-white px-6 py-3 rounded-xl font-bold border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all">
            Se connecter
          </Link>
        </div>
      </header>

      <main className="flex items-center justify-center min-h-[calc(100vh-140px)] py-12 md:py-20">
        <div className="max-w-md w-full mx-4 md:mx-5">
          <div className="animate-on-scroll bg-white rounded-2xl p-6 md:p-8 border-3 border-[#171717] shadow-[8px_8px_0_#171717]">
            <div className="text-center mb-8">
              <Image src="/logo.jpg" alt="Potential's Reveal" width={60} height={60} className="rounded mx-auto mb-4" />
              <h1 className="text-3xl font-['SUSE_Mono'] text-[#442604] mb-2">
                Mot de passe oublié
              </h1>
              <p className="text-dark">
                Entrez votre adresse email pour recevoir un lien de réinitialisation
              </p>
            </div>

            <form className="space-y-6">
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

              <button
                type="submit"
                className="w-full bg-[#3b82f6] text-white py-3 rounded-xl font-bold text-lg border-3 border-[#171717] shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all"
              >
                Envoyer le lien de réinitialisation
              </button>
            </form>

            <div className="mt-6 text-center space-y-4">
              <p className="text-dark">
                Vous vous souvenez de votre mot de passe ?{' '}
                <Link href="/login" className="text-[#3b82f6] font-semibold hover:underline">
                  Se connecter
                </Link>
              </p>
              
              <p className="text-dark">
                Pas encore de compte ?{' '}
                <Link href="/register" className="text-[#3b82f6] font-semibold hover:underline">
                  Créer un compte
                </Link>
              </p>
            </div>

            <div className="mt-6 p-4 bg-[#fffceb] rounded-xl border-2 border-[#fed841]">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-semibold text-dark mb-1">Conseil</h3>
                  <p className="text-sm text-dark">
                    Vérifiez votre dossier spam si vous ne recevez pas l&apos;email dans les 5 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
