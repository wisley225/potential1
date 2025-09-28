'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    // Simulation de déconnexion
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header Dashboard */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="Potential's Reveal" width={40} height={40} className="rounded" />
              <div>
                <h1 className="text-xl font-bold text-[#442604] leading-none">
                  Potential&apos;s Reveal
                </h1>
                <p className="text-sm text-gray-600">Tableau de bord</p>
              </div>
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
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                href="/dashboard" 
                className={`font-semibold transition-colors ${
                  pathname === '/dashboard' 
                    ? 'text-[#3b82f6] border-b-2 border-[#3b82f6] pb-1' 
                    : 'text-[#1e293b] hover:text-[#3b82f6]'
                }`}
              >
                Accueil
              </Link>
              <Link 
                href="/dashboard/formations" 
                className={`font-semibold transition-colors ${
                  pathname === '/dashboard/formations' 
                    ? 'text-[#3b82f6] border-b-2 border-[#3b82f6] pb-1' 
                    : 'text-[#1e293b] hover:text-[#3b82f6]'
                }`}
              >
                Formations
              </Link>
              <Link 
                href="/dashboard/podcasts" 
                className={`font-semibold transition-colors ${
                  pathname === '/dashboard/podcasts' 
                    ? 'text-[#3b82f6] border-b-2 border-[#3b82f6] pb-1' 
                    : 'text-[#1e293b] hover:text-[#3b82f6]'
                }`}
              >
                Podcasts
              </Link>
              <button
                onClick={handleLogout}
                className="bg-[#3b82f6] text-white px-6 py-3 rounded-xl font-bold text-base border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all"
              >
                Déconnexion
              </button>
            </nav>
          </div>

          {/* Menu mobile */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pt-4 pb-6 border-t border-gray-200">
              <nav className="flex flex-col gap-4">
                <Link 
                  href="/dashboard" 
                  className={`font-semibold py-2 transition-colors ${
                    pathname === '/dashboard' ? 'text-[#3b82f6]' : 'text-[#1e293b] hover:text-[#3b82f6]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
                <Link 
                  href="/dashboard/formations" 
                  className={`font-semibold py-2 transition-colors ${
                    pathname === '/dashboard/formations' ? 'text-[#3b82f6]' : 'text-[#1e293b] hover:text-[#3b82f6]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Formations
                </Link>
                <Link 
                  href="/dashboard/podcasts" 
                  className={`font-semibold py-2 transition-colors ${
                    pathname === '/dashboard/podcasts' ? 'text-[#3b82f6]' : 'text-[#1e293b] hover:text-[#3b82f6]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Podcasts
                </Link>
              </nav>
              <div className="pt-4 mt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="bg-[#3b82f6] text-white px-6 py-3 rounded-xl font-bold text-base border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all w-full"
                >
                  Déconnexion
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#171717] text-white py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-white">
            <Image src="/logo.jpg" alt="Potential's Reveal" width={40} height={40} className="rounded" />
            <h3 className="text-lg md:text-xl font-bold leading-none text-white">
              Potential&apos;s <br /> Reveal
            </h3>
          </Link>
          <p className="text-white text-sm md:text-base">© 2025 Potential&apos;s Reveal. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
