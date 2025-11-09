'use client';

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from "react";
import { IoNotifications } from "react-icons/io5";
import { FaBook, FaSignOutAlt, FaChevronDown } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true); // Simuler des notifications
  const pathname = usePathname();
  const router = useRouter();
  const profileRef = useRef<HTMLDivElement>(null);

  // Fermer le menu profil quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      if (profileRef.current &&  event.target instanceof Node && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', (e)=>handleClickOutside(e));
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
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
                  ? 'text-[#1A4B84] border-b-2 border-[#1A4B84] pb-1' 
                  : 'text-[#1e293b] hover:text-[#1A4B84]'
              }`}
            >
              Accueil
            </Link>
            <Link 
              href="/dashboard/formations" 
              className={`font-semibold transition-colors ${
                pathname === '/dashboard/formations' 
                  ? 'text-[#1A4B84] border-b-2 border-[#1A4B84] pb-1' 
                  : 'text-[#1e293b] hover:text-[#1A4B84]'
              }`}
            >
              Formations
            </Link>
            <Link 
              href="/dashboard/podcasts" 
              className={`font-semibold transition-colors ${
                pathname === '/dashboard/podcasts' 
                  ? 'text-[#1A4B84] border-b-2 border-[#1A4B84] pb-1' 
                  : 'text-[#1e293b] hover:text-[#1A4B84]'
              }`}
            >
              Podcasts
            </Link>

            {/* Notification avec badge */}
            <Link href='/dashboard/notifications' className="relative">
              <IoNotifications className="scale-150 hover:text-[#1A4B84] transition-colors" />
              {hasNotifications && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
              )}
            </Link>

            {/* Menu déroulant Profil */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 hover:opacity-80 transition-all"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 hover:border-[#1A4B84] transition-colors">
                  <img src="/profile.png" alt="Profil" className="w-full h-full object-cover" />
                </div>
                <FaChevronDown className={`text-gray-600 text-sm transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-fadeIn">
                  {/* Header du profil */}
                  <div className="bg-gradient-to-r from-[#1A4B84] to-[#2563eb] p-4 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                        <img src="/profile.png" alt="Profil" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Utilisateur</p>
                        <p className="text-xs opacity-90">user@example.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    <Link
                      href="/dashboard"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <MdDashboard className="text-[#1A4B84] text-lg" />
                      <span className="text-gray-700 font-medium">Mon tableau de bord</span>
                    </Link>

                    <Link
                      href="/dashboard/formations"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <FaBook className="text-[#1A4B84] text-lg" />
                      <span className="text-gray-700 font-medium">Mes formations</span>
                    </Link>

                    <div className="border-t border-gray-200 my-2"></div>

                    <button
                      onClick={() => {
                        handleLogout();
                        setIsProfileOpen(false);
                      }}
                      className="flex items-center cursor-pointer gap-3 px-4 py-3 hover:bg-red-50 transition-colors w-full text-left"
                    >
                      <FaSignOutAlt className="text-red-600 text-lg" />
                      <span className="text-red-600 font-medium">Déconnexion</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Menu mobile */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 pb-6 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/dashboard" 
                className={`font-semibold py-2 transition-colors ${
                  pathname === '/dashboard' ? 'text-[#1A4B84]' : 'text-[#1e293b] hover:text-[#1A4B84]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/dashboard/formations" 
                className={`font-semibold py-2 transition-colors ${
                  pathname === '/dashboard/formations' ? 'text-[#1A4B84]' : 'text-[#1e293b] hover:text-[#1A4B84]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Formations
              </Link>
              <Link 
                href="/dashboard/podcasts" 
                className={`font-semibold py-2 transition-colors ${
                  pathname === '/dashboard/podcasts' ? 'text-[#1A4B84]' : 'text-[#1e293b] hover:text-[#1A4B84]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Podcasts
              </Link>

              {/* Notifications mobile */}
              <Link 
                href="/dashboard/notifications"
                className="flex items-center gap-2 font-semibold py-2 text-[#1e293b] hover:text-[#1A4B84] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <IoNotifications className="text-xl" />
                Notifications
                {hasNotifications && (
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </Link>

              {/* Profil mobile */}
              <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 py-2 text-[#1e293b] hover:text-[#1A4B84] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MdDashboard className="text-xl" />
                  <span className="font-medium">Mon tableau de bord</span>
                </Link>

                <Link
                  href="/dashboard/formations"
                  className="flex items-center gap-3 py-2 text-[#1e293b] hover:text-[#1A4B84] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaBook className="text-xl" />
                  <span className="font-medium">Mes formations</span>
                </Link>

                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="bg-[#1A4B84] text-white px-6 py-3 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all w-full flex items-center justify-center gap-2"
                >
                  <FaSignOutAlt />
                  Déconnexion
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;