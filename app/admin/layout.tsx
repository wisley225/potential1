'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Ajouter les icônes à la bibliothèque
library.add(fas, fab);

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLogout = () => {
    // Simulation de déconnexion admin
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      {/* Sidebar */}
      <div 
        className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} fixed inset-y-0 left-0 z-50 w-64 shadow-xl border-r border-gray-700 transition-transform duration-300 ease-in-out`}
        style={{
          background: 'linear-gradient(to bottom, #1e293b, #0f172a)',
          minHeight: '100vh'
        }}
      >
        {/* Logo et titre */}
        <div className="p-6 border-b border-gray-700">
          <Link href="/admin" className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Potential's Reveal" width={40} height={40} className="rounded" />
            <div>
              <h3 className="text-lg font-bold text-white leading-none">
                Potential&apos;s <br /> Reveal
              </h3>
              <p className="text-xs text-white font-semibold">Administration</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          <Link 
            href="/admin" 
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-colors ${
              pathname === '/admin' 
                ? 'bg-[#3b82f6] text-white shadow-lg' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <FontAwesomeIcon icon="chart-dashboard" className="w-5 h-5" />
            Dashboard
          </Link>
          
          <Link 
            href="/admin/users" 
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-colors ${
              pathname === '/admin/users' 
                ? 'bg-[#3b82f6] text-white shadow-lg' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <FontAwesomeIcon icon="users" className="w-5 h-5" />
            Utilisateurs
          </Link>
          
          <Link 
            href="/admin/content" 
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-colors ${
              pathname === '/admin/content' 
                ? 'bg-[#3b82f6] text-white shadow-lg' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <FontAwesomeIcon icon="folder-open" className="w-5 h-5" />
            Contenu
          </Link>
        </nav>

        {/* Bouton de déconnexion */}
        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 bg-[#dc2626] text-white rounded-lg font-semibold hover:bg-[#b91c1c] transition-colors shadow-lg"
          >
            <FontAwesomeIcon icon="sign-out-alt" className="w-5 h-5" />
            Déconnexion
          </button>
        </div>
      </div>

      {/* Overlay mobile */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Header mobile */}
        <header className="md:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Ouvrir le menu"
          >
            <FontAwesomeIcon icon="bars" className="w-6 h-6 text-[#1e293b]" />
          </button>
        </header>

        {/* Contenu */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
