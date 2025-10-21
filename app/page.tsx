'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './components/Footer';
import {User} from './types/data';
import Navbar from './components/Navbar';



export default function Home() {
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
    <div className="min-h-screen  text-white">
     
     <Navbar/>
    
        {/* Section Héros */}
        <header className=" dm-sans background-formation  text-center    ">
          <div className=" backdrop-brightness-50 h-screen flex flex-col items-center justify-center py-5 ">
     <h1 className="text-3xl   text-white sm:text-4xl md:text-5xl lg:text-6xl   mb-4 md:mb-5 leading-tight px-4">
              {isLoggedIn ? (
                <>
                  Bienvenue {currentUser?.name || 'Utilisateur'} !<br />
                  {currentUser?.role === 'admin' ? 'Panneau d\'administration' : 'Votre espace personnel'}
                </>
              ) : (
                <>
                L’école sans murs qui transforme  les talents africains en leaders de demain.
                </>
              )}
            </h1>

             <p className="text-base text-white md:text-lg mb-8 md:mb-10 max-w-3xl mx-auto px-4">
              {isLoggedIn && (
                currentUser?.role === 'admin' ? (
                  'Gérez la plateforme, créez du contenu et accompagnez la communauté vers le succès.'
                ) : (
                  'Accédez à vos formations, participez à la communauté et développez vos compétences.'
                )
              )}
            </p>

            <div className="inline-flex  flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4  border-2 border-white px-3 sm:px-4 py-2 rounded-full mb-6 md:mb-8 ">
              <div className="flex">
                <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white -ml-2"></div>
                <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white -ml-2"></div>
                <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white -ml-2"></div>
                <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full border-2 border-white -ml-2"></div>
                <div className="w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full border-2 border-white -ml-2"></div>
              </div>
              <span className=" italic font-semibold text-sm text-white sm:text-base">⭐ +200 talents accompagnés</span>
            </div>

          

           

            <div className="  px-4">
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
                <Link href="/contact" className="bg-[#3b82f6] text-white px-6 hover:bg-blue-400 md:px-9 py-3 md:py-4.5 rounded-xl font-bold text-base md:text-lg border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all inline-block">
                 Commencer mon parcours
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
        </header>

        {/* Section Admin - Visible uniquement pour les administrateurs */}
        {isLoggedIn && currentUser?.role === 'admin' && (
          <section className="py-8 px-4 dm-sans md:px-5 bg-gradient-to-r from-red-50 to-orange-50 border-y-2 border-red-200">
            <div className="max-w-6xl mx-auto">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl dm-sans text-red-800 mb-4">
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
                <h2 className="text-2xl md:text-3xl  text-blue-800 mb-4">
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


       <section>
        <div className='text-black mx-10 mt-20  animate-on-scroll '>
        <p className='text-center max-lg:text-xl max-sm:text-sm  text-2xl font-bold text-[#475569] '>
          Potential’s Reveal accompagne les talents africains — étudiants, professionnels et entrepreneurs — à révéler leur potentiel, construire une carrière qui a du sens et accéder aux opportunités qui leur correspondent, grâce à des formations pratiques, des outils concrets et une communauté bienveillante
        </p>
      </div>
       </section>

        {/* Section Nos formations */}
        <section className="py-12 md:py-20   px-10 ">
          <div className="max-w-6xl mx-auto">
            <div className="animate-on-scroll flex flex-col lg:flex-row items-center gap-20   ">
              <div className="flex-1  max-lg:justify-center  text-center lg:text-left ">
                <h2 className="text-3xl  font-bold sm:text-4xl md:text-5xl  mb-4 md:mb-6">
              <span className=' bg-clip-text text-transparent bg-gradient-to-br from-[#3b82f6] to-[#10b981]'>Nos formations</span>    
                </h2>
                <p className="text-base md:text-lg text-[#475569] mb-6 leading-relaxed">
                  Accédez à un écosystème d’apprentissage conçu pour
renforcer vos compétences et accélérer votre carrière.
                </p>
                <ul className="space-y-3 md:space-y-4 text-[#475569] text-left">
                  <li className="flex items-center gap-3  max-lg:justify-center">
                    <span className="text-xl md:text-2xl">📹</span>
                    <span className="text-sm md:text-base">Vidéos pédagogiques interactives</span>
                  </li>
                  <li className="flex items-center gap-3  max-lg:justify-center">
                    <span className="text-xl md:text-2xl">📖</span>
                    <span className="text-sm md:text-base">E-books et guides pratiques</span>
                  </li>
                  <li className="flex items-center gap-3  max-lg:justify-center">
                    <span className="text-xl md:text-2xl">🎓</span>
                    <span className="text-sm md:text-base">Masterclass avec experts</span>
                  </li>
                  <li className="flex items-center gap-3  max-lg:justify-center">
                    <span className="text-xl md:text-2xl">🔄</span>
                    <span className="text-sm md:text-base">Programmes hybrides (en ligne + présentiel)</span>
                  </li>
                  <li className='max-lg:text-center'>
     <Link href="/contact" className="bg-[#3b82f6]  hover:bg-blue-400  text-white px-6 md:px-9 py-3 md:py-4.5 rounded-xl font-bold text-base md:text-lg border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all inline-block">
                 Découvrir nos formations
                </Link>
                  </li>
                    
                </ul>
             
              </div>
        

        <div className=' h-80 w-96  '>
        
        <video
         src="/v1.mp4"
         loop 
         autoPlay
         playsInline
         muted
         className='size-full object-cover rounded-xl '>
         se navigateur ne peut supporter cette video
        </video>
                </div> 
    

           
            </div>
          </div>
        </section>

        {/* Section Notre communauté */}
       <section className="py-16 dm-sans  md:py-24 px-4 md:px-8 bg-[#f1f5f9]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* --- Visuel rond à gauche --- */}
          <div className="flex-1 animate-on-scroll flex justify-center items-center  order-2 lg:order-1">
            <div className="h-80 w-96 relative   ">
              <Image
                src="/w4.jpg"
                alt="Communauté d'apprenants"
               fill
                className=" object-cover rounded-xl "
              />
            </div>
          </div>

          {/* --- Contenu texte à droite --- */}
          <div className="flex-1 dm-sans text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-4xl   text-[#1e293b] mb-4 md:mb-6 ">
            <span className='bg-clip-text font-bold text-transparent bg-gradient-to-br from-[#3b82f6] to-[#10b981]' > Ici, tu n’es pas seule : tu apprends, tu te connectes, tu évolues. </span>  </h2>

            <p className="text-base md:text-lg  text-[#475569] mb-6 ">
              Intègre une communauté de jeunes talents, mentors et
              professionnels qui s’entraident, partagent des opportunités et grandissent ensemble.
            </p>

            <ul className=" md:space-y-2 text-[#475569] text-left">
              <li className="flex items-center  max-lg:justify-center">
                <span className="text-xl md:text-2xl">💬</span>
                <span className="text-sm md:text-base">Espaces d’échange thématiques</span>
              </li>
              <li className="flex items-center  max-lg:justify-center">
                <span className="text-xl md:text-2xl">🌐</span>
                <span className="text-sm md:text-base">Networking et mise en relation</span>
              </li>
              <li className="flex items-center max-lg:justify-center ">
                <span className="text-xl md:text-2xl">🤝</span>
                <span className="text-sm md:text-base">Partenariats stratégiques</span>
              </li>
              <li className="flex items-center max-lg:justify-center ">
                <span className="text-xl md:text-2xl">📈</span>
                <span className="text-sm md:text-base">Accompagnement personnalisé</span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Témoignages --- */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-white animate-on-scroll  cursor-pointer  hover:scale-105 transition-all p-6 rounded-2xl shadow-md flex items-center gap-4">
            <div className=" size-15  relative shrink-0  ">
              <Image
                src="/w6.jpg"
                alt="Communauté d'apprenants"
                fill
                className=" object-cover object-center size-full rounded-full  shrink-0 "
              />
            </div>
            <p className="text-[#334155] text-sm italic">
              “Grâce à cette communauté, j’ai trouvé mon mentor et lancé mon premier projet freelance !”
              <br />
              <span className="font-semibold text-[#0f172a]">— Blanchar K.</span>
            </p>
          </div>

          <div className="bg-white animate-on-scroll cursor-pointer  hover:scale-105 transition-all p-6 rounded-2xl shadow-md flex items-center gap-4">
             <div className=" size-15  relative shrink-0  ">
              <Image
                src="/w5.jpg"
                alt="Communauté d'apprenants"
                fill
                className=" object-cover object-center size-full rounded-full  shrink-0 "
              />
            </div>
            <p className="text-[#334155] text-sm italic">
              “Une ambiance motivante et bienveillante, j’ai progressé plus vite que jamais.”
              <br />
              <span className="font-semibold text-[#0f172a]">— David L.</span>
            </p>
          </div>
        </div>

        {/* --- CTA secondaire --- */}
        <div className="text-center mt-12">
          <button className="px-6  py-3 border-2 hover:-translate-y-1 shadow-2xl border-white bg-[#3b82f6] cursor-pointer hover:bg-blue-400 text-white rounded-full text-lg font-semibold  transition">
            Rejoindre la communauté →
          </button>
        </div>

        
      </div>
    </section>

        {/* Section Impact durable */}
        <section className="py-12 md:py-20   md:px-10 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="animate-on-scroll flex flex-col justify-center lg:flex-row items-center gap-8 lg:gap-5">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl  sm:text-4xl md:text-5xl  text-[#1e293b] mb-4 md:mb-6">
                <span className='bg-clip-text font-bold text-transparent bg-gradient-to-br from-[#3b82f6] to-[#10b981]' >Impact durable</span>  
                </h2>
                <p className="text-base dm-sans md:text-lg text-[#475569] mb-6 leading-relaxed">
                  Chez Potential’s Reveal, nous croyons qu’aucun talent ne devrait
être freiné par ses moyens financiers. C’est pourquoi nous développons des bourses, des
partenariats et des programmes d’inclusion pour donner à chacun la chance de réussir.
                </p>
                <ul className="space-y-3 md:space-y-4 text-[#475569] text-left">
                  <li className="flex items-center gap-3 max-lg:justify-center">
                    <span className="text-xl md:text-2xl">💰</span>
                    <span className="text-sm md:text-base">Bourses d&apos;études et de formation</span>
                  </li>
                  <li className="flex items-center gap-3 max-lg:justify-center">
                    <span className="text-xl md:text-2xl">🤝</span>
                    <span className="text-sm md:text-base">Partenariats avec entreprises</span>
                  </li>
                  <li className="flex items-center gap-3 max-lg:justify-center">
                    <span className="text-xl md:text-2xl">🎯</span>
                    <span className="text-sm md:text-base">Accompagnement personnalisé</span>
                  </li>
                  <li className="flex items-center gap-3 max-lg:justify-center">
                    <span className="text-xl md:text-2xl">🌟</span>
                    <span className="text-sm md:text-base">Programmes d&apos;inclusion sociale</span>
                  </li>
                  <li className='max-lg:text-center'>
                    <Link href="/contact" className=" bg-[#3b82f6] hover:bg-blue-400   text-white px-6 md:px-9 py-3 md:py-4.5 rounded-xl font-bold text-base md:text-lg border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all inline-block">
                       Devenir partenaires
                </Link>
                  </li>
                
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                  <div className="h-80 w-96 relative   ">
              <Image
                src="/w8.jpg"
                alt="Communauté d'apprenants"
               fill
                className=" object-cover rounded-xl "
              />
            </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA finale */}
        <section className="bg-[#f1f5f9] text-black py-12 md:py-20 px-4 md:px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="animate-on-scroll  text-3xl sm:text-4xl md:text-5xl dm-sans text-[#1e293b] mb-4 md:mb-5">
           <span className='bg-clip-text font-bold text-transparent bg-gradient-to-br from-[#3b82f6] to-[#10b981]'>Et si c’était enfin le moment de révéler ton potentiel ?</span>  
            </h2>
            <p className="text-base italic  md:text-lg mb-8 md:mb-10 px-4">
                Rejoins une communauté qui croit en ton avenir et t’aide à le construire
                pas à pas.
            </p>
            <div className="cta-block px-4">
              <Link href="/contact" className=" bg-[#3b82f6] text-white hover:bg-blue-400  px-6 md:px-9 py-3 md:py-4.5 rounded-xl font-bold text-base md:text-lg border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all inline-block">
                Rejoindre la communauté
              </Link>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 mt-4 text-sm">
                <span>✔ Accès gratuit</span>
                <span>✔ Sans engagement</span>
              </div>
            </div>
          </div>
        </section>
    

      {/* Footer */}
      <Footer />
    </div>
  );
}