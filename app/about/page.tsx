'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    // Écouter le scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Vérifier au chargement

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fffff9] text-[#1e293b]">
      {/* Header */}
      <header className="bg-[#fffff9]/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 py-3 md:py-5">
        <div className="max-w-6xl mx-auto px-4 md:px-5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="Potential&apos;s Reveal" width={40} height={40} className="rounded" />
              <h3 className="text-lg md:text-xl font-bold text-[#1e293b] leading-none">
                Potential&apos;s <br /> Reveal
              </h3>
            </Link>
            
            {/* Bouton hamburger pour mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Ouvrir le menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-[#171717] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-[#171717] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-[#171717] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>

            {/* Navigation desktop */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex gap-8">
                <Link href="/formations" className="text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors text-base">
                  Nos formations
                </Link>
                <Link href="/about" className="text-[#3b82f6] font-semibold text-base">
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

          {/* Menu mobile */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pt-4 pb-2 border-t border-gray-200 mt-4">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/formations"
                  className="text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors text-base py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nos formations
                </Link>
                <Link 
                  href="/about" 
                  className="text-[#3b82f6] font-semibold text-base py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  À propos
                </Link>
                <Link 
                  href="/contact" 
                  className="text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors text-base py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
              <div className="pt-4 mt-4 border-t border-gray-200">
                <Link 
                  href="/login" 
                  className="bg-[#3b82f6] text-white px-6 py-3 rounded-xl font-bold text-base border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all inline-block w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Se connecter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Section Qui sommes-nous */}
        <section className="py-20 px-5">
          <div className="max-w-6xl mx-auto">
            <h1 className="animate-on-scroll text-6xl font-['SUSE_Mono'] text-[#1e293b] text-center mb-8">
              À propos de nous
            </h1>
            
            <div className="content-card bg-white rounded-2xl p-8 border-3 border-[#171717] shadow-[8px_8px_0_#171717] mb-12">
              <h2 className="text-4xl font-['SUSE_Mono'] text-[#1e293b] mb-6">
                Qui sommes-nous ?
              </h2>
            <p className="text-lg leading-relaxed text-dark">
              Potential&apos;s Reveal est né d&apos;une conviction simple : chaque talent mérite les moyens de grandir, de s&apos;exprimer et de contribuer à un avenir meilleur pour le continent africain.
            </p>
            </div>

            {/* Notre mission */}
            <div className="animate-on-scroll bg-[#fffceb] rounded-2xl p-8 border-3 border-[#171717] shadow-[8px_8px_0_#171717] mb-12">
              <h2 className="text-4xl font-['SUSE_Mono'] text-[#1e293b] mb-6">
                Notre mission
              </h2>
              <div className="grid md:grid-cols-1 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#fed841] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#1e293b] font-bold">✓</span>
                  </div>
                  <p className="text-lg text-dark">
                    Donner accès à des parcours de formation adaptés et innovants.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#fed841] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#1e293b] font-bold">✓</span>
                  </div>
                  <p className="text-lg text-dark">
                    Créer des opportunités concrètes à travers un réseau actif et solidaire.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#fed841] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#1e293b] font-bold">✓</span>
                  </div>
                  <p className="text-lg text-dark">
                    Soutenir les talents par un accompagnement personnalisé et des solutions financières adaptées.
                  </p>
                </div>
              </div>
            </div>

            {/* Nos valeurs */}
            <div className="content-card bg-white rounded-2xl p-8 border-3 border-[#171717] shadow-[8px_8px_0_#171717] mb-12">
              <h2 className="text-4xl font-['SUSE_Mono'] text-[#1e293b] mb-6">
                Nos valeurs
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#fffceb] p-6 rounded-xl">
                  <h3 className="text-2xl font-['SUSE_Mono'] text-[#1e293b] mb-3">
                    Excellence
                  </h3>
                  <p className="text-dark">
                    Viser le meilleur dans tout ce que nous entreprenons.
                  </p>
                </div>
                <div className="bg-[#fffceb] p-6 rounded-xl">
                  <h3 className="text-2xl font-['SUSE_Mono'] text-[#1e293b] mb-3">
                    Solidarité
                  </h3>
                  <p className="text-dark">
                    Grandir ensemble, en s&apos;appuyant sur la force du collectif.
                  </p>
                </div>
                <div className="bg-[#fffceb] p-6 rounded-xl">
                  <h3 className="text-2xl font-['SUSE_Mono'] text-[#1e293b] mb-3">
                    Innovation
                  </h3>
                  <p className="text-dark">
                    Proposer des formats et des solutions modernes, accessibles à tous.
                  </p>
                </div>
                <div className="bg-[#fffceb] p-6 rounded-xl">
                  <h3 className="text-2xl font-['SUSE_Mono'] text-[#1e293b] mb-3">
                    Impact
                  </h3>
                  <p className="text-dark">
                    Agir aujourd&apos;hui pour transformer demain.
                  </p>
                </div>
              </div>
            </div>

            {/* Notre ambition */}
            <div className="content-card bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] text-white rounded-2xl p-8 border-3 border-[#171717] shadow-[8px_8px_0_#171717] text-center">
              <h2 className="text-4xl font-['SUSE_Mono'] mb-6">
                Notre ambition
              </h2>
              <p className="text-xl leading-relaxed">
                Devenir la référence panafricaine pour le développement des talents et l&apos;employabilité, en Afrique et au-delà.
              </p>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="bg-[#fffceb] py-20 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-5xl font-['SUSE_Mono'] text-[#1e293b] mb-5">
              Rejoignez notre mission
            </h2>
            <p className="text-lg mb-10">
              Ensemble, construisons un avenir où chaque talent peut s&apos;épanouir et contribuer au développement de l&apos;Afrique.
            </p>
            <div className="cta-block">
              <Link href="/contact" className="bg-[#3b82f6] text-white px-9 py-4.5 rounded-xl font-bold text-lg border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all inline-block">
                Nous rejoindre
              </Link>
              <div className="flex justify-center gap-5 mt-4 text-sm">
                <span>✔ Communauté active</span>
                <span>✔ Impact réel</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
