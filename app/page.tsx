'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './components/Footer';

// Types pour les utilisateurs
interface User {
  email: string;
  password: string;
  role: 'user' | 'admin';
  name: string;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Vérifier l'état de connexion au chargement
  useEffect(() => {
    const checkAuthStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const userData = localStorage.getItem('currentUser');
      
      if (loggedIn && userData) {
        setIsLoggedIn(true);
        setCurrentUser(JSON.parse(userData));
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

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

    // Animation initiale du héros
    setTimeout(() => {
      const heroElements = document.querySelectorAll('.social-proof, h1, .subtitle, .cta-block');
      heroElements.forEach((el, index) => {
        setTimeout(() => {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'translateY(0)';
        }, index * 200);
      });
    }, 100);

    // Écouter le scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Vérifier au chargement

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b]">
      {/* Header */}
      <header className="bg-[#f8fafc]/90 backdrop-blur-sm border-b border-[#e2e8f0] sticky top-0 z-50 py-3 md:py-5">
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
                        <span className={`block w-5 h-0.5 bg-[#1e293b] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                        <span className={`block w-5 h-0.5 bg-[#1e293b] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-5 h-0.5 bg-[#1e293b] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
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
                      {isLoggedIn ? (
                        <button 
                          onClick={handleLogout}
                          className="bg-[#dc2626] text-white px-6 py-3 rounded-xl font-bold text-base border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all"
                        >
                          Déconnexion ({currentUser?.name || 'Utilisateur'})
                        </button>
                      ) : (
                        <Link href="/login" className="bg-[#3b82f6] text-white px-6 py-3 rounded-xl font-bold text-base border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all">
                          Se connecter
                        </Link>
                      )}
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
                          className="text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors text-base py-2"
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
                        {isLoggedIn ? (
                          <button
                            onClick={() => {
                              handleLogout();
                              setIsMenuOpen(false);
                            }}
                            className="bg-[#dc2626] text-white px-6 py-3 rounded-xl font-bold text-base border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all inline-block w-full text-center"
                          >
                            Déconnexion ({currentUser?.name || 'Utilisateur'})
                          </button>
                        ) : (
                          <Link
                            href="/login"
                            className="bg-[#3b82f6] text-white px-6 py-3 rounded-xl font-bold text-base border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all inline-block w-full text-center"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Se connecter
                          </Link>
                        )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Section Héros */}
        <section className="text-center bg-gradient-to-br from-[#fffff9] to-[#fffceb] py-12 md:py-20 px-4 md:px-5">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 bg-white border-2 border-[#171717] px-3 sm:px-4 py-2 rounded-full mb-6 md:mb-8 shadow-[0_4px_0_#171717] social-proof">
              <div className="flex">
                <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white -ml-2"></div>
                <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white -ml-2"></div>
                <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white -ml-2"></div>
                <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full border-2 border-white -ml-2"></div>
                <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full border-2 border-white -ml-2"></div>
              </div>
              <span className="text-[#1e293b] font-semibold text-sm sm:text-base">⭐ +200 talents accompagnés</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['SUSE_Mono'] text-[#1e293b] mb-4 md:mb-5 leading-tight px-4">
              {isLoggedIn ? (
                <>
                  Bienvenue {currentUser?.name || 'Utilisateur'} !<br />
                  {currentUser?.role === 'admin' ? 'Panneau d\'administration' : 'Votre espace personnel'}
                </>
              ) : (
                <>
                  Révélez votre potentiel,<br />
                  construisez votre avenir.
                </>
              )}
            </h1>

            <p className="text-base md:text-lg mb-8 md:mb-10 max-w-3xl mx-auto px-4">
              {isLoggedIn ? (
                currentUser?.role === 'admin' ? (
                  'Gérez la plateforme, créez du contenu et accompagnez la communauté vers le succès.'
                ) : (
                  'Accédez à vos formations, participez à la communauté et développez vos compétences.'
                )
              ) : (
                'Potential\'s Reveal est une communauté qui accompagne les jeunes talents et professionnels dans leur croissance grâce à des formations, des ressources digitales et un réseau actif de soutien.'
              )}
            </p>

            <div className="cta-block px-4">
              {isLoggedIn ? (
                currentUser?.role === 'admin' ? (
                  <>
                    <Link href="/admin" className="bg-[#dc2626] text-white px-6 md:px-9 py-3 md:py-4.5 rounded-xl font-bold text-base md:text-lg border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all inline-block mr-4">
                      Panneau Admin
                    </Link>
                    <Link href="/dashboard" className="bg-[#3b82f6] text-white px-6 md:px-9 py-3 md:py-4.5 rounded-xl font-bold text-base md:text-lg border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all inline-block">
                      Dashboard
                    </Link>
                  </>
                ) : (
                  <Link href="/dashboard" className="bg-[#3b82f6] text-white px-6 md:px-9 py-3 md:py-4.5 rounded-xl font-bold text-base md:text-lg border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all inline-block">
                    Mon Dashboard
                  </Link>
                )
              ) : (
                <Link href="/contact" className="bg-[#3b82f6] text-white px-6 md:px-9 py-3 md:py-4.5 rounded-xl font-bold text-base md:text-lg border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all inline-block">
                  Rejoindre la communauté
                </Link>
              )}
              {!isLoggedIn && (
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 mt-4 text-sm">
                  <span>✔ Accès gratuit</span>
                  <span>✔ Sans engagement</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section Admin - Visible uniquement pour les administrateurs */}
        {isLoggedIn && currentUser?.role === 'admin' && (
          <section className="py-8 px-4 md:px-5 bg-gradient-to-r from-red-50 to-orange-50 border-y-2 border-red-200">
            <div className="max-w-6xl mx-auto">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-['SUSE_Mono'] text-red-800 mb-4">
                  🔧 Zone d&apos;Administration
                </h2>
                <p className="text-red-700 mb-6">
                  Vous avez accès aux outils d&apos;administration de la plateforme
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/admin" className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
                    Gérer le contenu
                  </Link>
                  <Link href="/admin/users" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors">
                    Gérer les utilisateurs
                  </Link>
                  <button className="bg-gray-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-700 transition-colors">
                    Statistiques
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section Utilisateur - Visible uniquement pour les utilisateurs normaux */}
        {isLoggedIn && currentUser?.role === 'user' && (
          <section className="py-8 px-4 md:px-5 bg-gradient-to-r from-blue-50 to-green-50 border-y-2 border-blue-200">
            <div className="max-w-6xl mx-auto">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-['SUSE_Mono'] text-blue-800 mb-4">
                  👋 Votre Espace Personnel
                </h2>
                <p className="text-blue-700 mb-6">
                  Accédez à vos formations et suivez votre progression
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                    Mes Formations
                  </Link>
                  <Link href="/dashboard/podcasts" className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
                    Mes Podcasts
                  </Link>
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors">
                    Mon Progrès
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section Nos formations */}
        <section className="py-12 md:py-20 px-4 md:px-5 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="animate-on-scroll flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-['SUSE_Mono'] text-[#1e293b] mb-4 md:mb-6">
                  Nos formations
                </h2>
                <p className="text-base md:text-lg text-[#475569] mb-6 leading-relaxed">
                  Accédez à un écosystème complet de formation conçu pour développer vos compétences et accélérer votre carrière.
                </p>
                <ul className="space-y-3 md:space-y-4 text-[#475569] text-left">
                  <li className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl">📹</span>
                    <span className="text-sm md:text-base">Vidéos pédagogiques interactives</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl">📖</span>
                    <span className="text-sm md:text-base">E-books et guides pratiques</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl">🎓</span>
                    <span className="text-sm md:text-base">Masterclass avec experts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl">🔄</span>
                    <span className="text-sm md:text-base">Programmes hybrides (en ligne + présentiel)</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#3b82f6] to-[#10b981] rounded-full flex items-center justify-center">
                  <Image src="/logo.jpg" alt="Formations" width={120} height={120} className="rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Notre communauté */}
        <section className="py-12 md:py-20 px-4 md:px-5 bg-[#f1f5f9]">
          <div className="max-w-6xl mx-auto">
            <div className="animate-on-scroll flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 flex justify-center order-2 lg:order-1">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#10b981] to-[#f59e0b] rounded-full flex items-center justify-center">
                  <Image src="/logo.jpg" alt="Communauté" width={120} height={120} className="rounded-full" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-['SUSE_Mono'] text-[#1e293b] mb-4 md:mb-6">
                  Notre communauté
                </h2>
                <p className="text-base md:text-lg text-[#475569] mb-6 leading-relaxed">
                  Rejoignez un réseau dynamique de talents et de professionnels qui partagent vos ambitions et vos valeurs.
                </p>
                <ul className="space-y-3 md:space-y-4 text-[#475569] text-left">
                  <li className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl">💬</span>
                    <span className="text-sm md:text-base">Espaces d&apos;échange thématiques</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl">🌐</span>
                    <span className="text-sm md:text-base">Networking et mise en relation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl">🤝</span>
                    <span className="text-sm md:text-base">Partenariats stratégiques</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl">📈</span>
                    <span className="text-sm md:text-base">Accompagnement personnalisé</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section Impact durable */}
        <section className="py-12 md:py-20 px-4 md:px-5 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="animate-on-scroll flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-['SUSE_Mono'] text-[#1e293b] mb-4 md:mb-6">
                  Impact durable
                </h2>
                <p className="text-base md:text-lg text-[#475569] mb-6 leading-relaxed">
                  Nous croyons que chaque talent mérite une chance de réussir, sans que les contraintes financières ne constituent un frein.
                </p>
                <ul className="space-y-3 md:space-y-4 text-[#475569] text-left">
                  <li className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl">💰</span>
                    <span className="text-sm md:text-base">Bourses d&apos;études et de formation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl">🤝</span>
                    <span className="text-sm md:text-base">Partenariats avec entreprises</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl">🎯</span>
                    <span className="text-sm md:text-base">Accompagnement personnalisé</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl md:text-2xl">🌟</span>
                    <span className="text-sm md:text-base">Programmes d&apos;inclusion sociale</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#f59e0b] to-[#1e293b] rounded-full flex items-center justify-center">
                  <Image src="/logo.jpg" alt="Impact" width={120} height={120} className="rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA finale */}
        <section className="bg-[#f1f5f9] py-12 md:py-20 px-4 md:px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-5xl font-['SUSE_Mono'] text-[#1e293b] mb-4 md:mb-5">
              Prêt à révéler votre potentiel ?
            </h2>
            <p className="text-base md:text-lg mb-8 md:mb-10 px-4">
              Rejoignez une communauté qui croit en votre avenir et vous donne les moyens de réussir.
            </p>
            <div className="cta-block px-4">
              <Link href="/contact" className="bg-[#3b82f6] text-white px-6 md:px-9 py-3 md:py-4.5 rounded-xl font-bold text-base md:text-lg border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all inline-block">
                Rejoindre la communauté
              </Link>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 mt-4 text-sm">
                <span>✔ Accès gratuit</span>
                <span>✔ Sans engagement</span>
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