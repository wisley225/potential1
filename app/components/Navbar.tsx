import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { User } from "../types/data";
const  Navbar=()=> {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
   const [menuActif, setMenuActif] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

   const handleLogout = () => {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('isLoggedIn');
      setCurrentUser(null);
      setIsLoggedIn(false);
    };

    

  
const ClickNavLink = (menuItem: string) => {
  
  setMenuActif(menuItem);

 
}


    return ( <>
    
       {/* bar de navigation */}
      <nav className="bg-[#f8fafc]/90  backdrop-blur-sm border-b border-[#e2e8f0] sticky top-0 z-50 py-3 md:py-5">
        <div className="max-w-6xl mx-auto px-4 md:px-5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex  items-center gap-2">
              <Image src="/logo.jpg" alt="Potential Reveal" width={40} height={40} className="rounded" />
                      <h3 className="text-lg md:text-xl font-bold text-[#1e293b] leading-none">
                Potential's <br /> Reveal
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
              <nav  className="flex gap-8">
                        <Link onClick={()=>ClickNavLink("formation")} href="/formations" 
                        className= {`${menuActif==="formation" &&'text-[#3b82f6] underline ' } text-[#1e293b]  transition-all  font-semibold hover:text-[#3b82f6]  text-base`}>
                  Nos formations
                </Link>
                        <Link href="/carriere"
                        onClick={()=>ClickNavLink("carriere")}
                        className= {`${menuActif === "carriere" && 'text-[#3b82f6] underline' } text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors text-base`}>
                  Plan de carrière
                </Link>     
                
                <Link href="/about"
                 onClick={()=>ClickNavLink("contact")}
                 className= {`${menuActif === "contact" && 'text-[#3b82f6] underline' } text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors text-base`}>
                  À propos
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
                        <Link href="/login" className="bg-[#3b82f6] hover:bg-blue-400 text-white px-6 py-3 rounded-xl font-bold text-base border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all">
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
                          href="/carriere"
                          className="text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors text-base py-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                  Plan de carriere
                </Link>
                        <Link
                          href="/about"
                          className="text-[#1e293b] font-semibold hover:text-[#3b82f6] transition-colors text-base py-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                  A Propos
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
      </nav>
    </>
        
     );
}

export default Navbar;