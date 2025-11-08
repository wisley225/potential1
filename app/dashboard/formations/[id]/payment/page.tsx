// 'use client';

// import Link from 'next/link';
// import { useParams } from 'next/navigation';
// import { useEffect } from 'react';

// export default function FormationPayment() {
//   const params = useParams();
//   const formationId = params.id;

//   useEffect(() => {
//     // Animation simple au scroll
//     const animateOnScroll = () => {
//       const elements = document.querySelectorAll('.animate-on-scroll');
      
//       elements.forEach((element) => {
//         const elementTop = element.getBoundingClientRect().top;
//         const elementVisible = 150;
        
//         if (elementTop < window.innerHeight - elementVisible) {
//           element.classList.add('animated');
//         }
//       });
//     };

//     // Écouter le scroll
//     window.addEventListener('scroll', animateOnScroll);
//     animateOnScroll(); // Vérifier au chargement

//     return () => {
//       window.removeEventListener('scroll', animateOnScroll);
//     };
//   }, []);

//   // Données de la formation (en réalité, cela viendrait d'une API)
//   const formation = {
//     id: formationId,
//     title: "Nuxt JS de A à Z",
//     description: "Formation complète sur Nuxt.js pour créer des applications Vue.js performantes et optimisées.",
//     price: 45000, // Prix en francs CFA
//     duration: "15 heures",
//     level: "Intermédiaire",
//     language: "Français",
//     instructor: "John Doe",
//     features: [
//       "Accès à vie au contenu",
//       "Certificat de completion",
//       "Support communautaire",
//       "Mises à jour gratuites",
//       "Projets pratiques inclus",
//       "Téléchargement des ressources"
//     ]
//   };

//   const handlePayment = () => {
//     // Simulation du processus de paiement
//     alert('Redirection vers le système de paiement...');
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc]">
//       <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
//         {/* En-tête */}
//         <div className="text-center mb-12 animate-on-scroll">
//           <Link 
//             href={`/dashboard/formations/${formation.id}`}
//             className="inline-flex items-center text-[#3b82f6] hover:text-[#2563eb] transition-colors mb-4"
//           >
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//             Retour à la formation
//           </Link>
//           <h1 className="text-4xl md:text-5xl font-['SUSE_Mono'] text-[#1e293b] mb-4">
//             Accès Complet à la Formation
//           </h1>
//           <p className="text-lg text-[#475569] max-w-2xl mx-auto">
//             Débloquez tout le potentiel de cette formation avec un accès complet et permanent
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Informations de la formation */}
//           <div className="animate-on-scroll">
//             <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm mb-8">
//               <div className="aspect-video rounded-xl mb-6 flex items-center justify-center relative overflow-hidden" style={{
//                 backgroundImage: 'url(/logo.jpg)',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat'
//               }}>
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-purple-600/70"></div>
//                 <div className="relative z-10 text-center">
//                   <div className="text-lg font-bold text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
//                     Formation Premium
//                   </div>
//                 </div>
//               </div>

//               <h2 className="text-2xl md:text-3xl font-['SUSE_Mono'] text-[#1e293b] mb-4">
//                 {formation.title}
//               </h2>
              
//               <p className="text-[#475569] mb-6 leading-relaxed">
//                 {formation.description}
//               </p>

//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 <div className="bg-[#f1f5f9] rounded-lg p-4">
//                   <div className="text-sm font-semibold text-[#1e293b] mb-1">Durée</div>
//                   <div className="text-[#475569]">{formation.duration}</div>
//                 </div>
//                 <div className="bg-[#f1f5f9] rounded-lg p-4">
//                   <div className="text-sm font-semibold text-[#1e293b] mb-1">Niveau</div>
//                   <div className="text-[#475569]">{formation.level}</div>
//                 </div>
//                 <div className="bg-[#f1f5f9] rounded-lg p-4">
//                   <div className="text-sm font-semibold text-[#1e293b] mb-1">Langue</div>
//                   <div className="text-[#475569]">{formation.language}</div>
//                 </div>
//                 <div className="bg-[#f1f5f9] rounded-lg p-4">
//                   <div className="text-sm font-semibold text-[#1e293b] mb-1">Formateur</div>
//                   <div className="text-[#475569]">{formation.instructor}</div>
//                 </div>
//               </div>

//               <h3 className="text-xl font-['SUSE_Mono'] text-[#1e293b] mb-4">
//                 Ce que vous obtenez :
//               </h3>
//               <ul className="space-y-3">
//                 {formation.features.map((feature, index) => (
//                   <li key={index} className="flex items-center">
//                     <svg className="w-5 h-5 text-[#10b981] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     <span className="text-[#475569]">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Section de paiement */}
//           <div className="animate-on-scroll">
//             <div className="bg-white rounded-2xl p-8 border-2 border-[#3b82f6] shadow-lg sticky top-8">
//               <div className="text-center mb-8">
//                 <h3 className="text-2xl font-['SUSE_Mono'] text-[#1e293b] mb-4">
//                   Accès Complet
//                 </h3>
                
//                 <div className="mb-6">
//                   <div className="text-5xl font-bold text-[#3b82f6] mb-2">
//                     {formation.price.toLocaleString()} FCFA
//                   </div>
//                   <div className="text-[#475569]">
//                     Paiement unique • Accès à vie
//                   </div>
//                 </div>

//                 <div className="bg-[#f1f5f9] rounded-lg p-4 mb-6">
//                   <div className="text-sm text-[#475569] mb-2">
//                     <span className="line-through text-gray-400">75 000 FCFA</span>
//                     <span className="ml-2 text-[#10b981] font-semibold">-40% de réduction</span>
//                   </div>
//                   <div className="text-lg font-semibold text-[#1e293b]">
//                     Économisez 30 000 FCFA
//                   </div>
//                 </div>
//               </div>

//               <button 
//                 onClick={handlePayment}
//                 className="w-full bg-[#3b82f6] text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-[#2563eb]  mb-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
//               >
//                 Payer {formation.price.toLocaleString()} FCFA
//               </button>

//               <div className="text-center">
//                 <div className="text-sm text-[#475569] mb-2">
//                   🔒 Paiement sécurisé par
//                 </div>
//                 <div className="flex justify-center items-center space-x-4 text-sm text-[#475569]">
//                   <span>💳 Carte bancaire</span>
//                   <span>📱 Mobile Money</span>
//                   <span>🏦 Virement</span>
//                 </div>
//               </div>

//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <div className="text-xs text-[#475569] text-center leading-relaxed">
//                   En procédant au paiement, vous acceptez nos conditions d&apos;utilisation. 
//                   Vous recevrez un email de confirmation avec vos accès dans les 5 minutes suivant le paiement.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';

export default function FormationPayment() {
  const params = useParams();
  const formationId = params.id;

  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 150) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  const formation = {
    id: formationId,
    title: "Nuxt JS de A à Z",
    description: "Apprends à créer des applications Vue.js modernes et performantes avec Nuxt.js.",
    price: 45000,
    duration: "15 heures",
    level: "Intermédiaire",
    language: "Français",
    instructor: "John Doe",
    features: [
      "Accès à vie au contenu",
      "Certificat de réussite",
      "Support communautaire",
      "Mises à jour gratuites",
      "Projets pratiques inclus"
    ]
  };

  const handlePayment = () => alert('Redirection vers le paiement sécurisé...');

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#1E1E1E]">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <Link
            href={`/dashboard/formations/${formation.id}`}
            className="inline-flex items-center text-[#1A4B84] hover:text-[#C9A646] transition-colors mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à la formation
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A4B84] mb-4">
            Accède dès aujourd’hui à ton avenir professionnel
          </h1>
          <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto">
            Rejoins des milliers d’apprenants qui ont déjà transformé leur carrière grâce à cette formation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left - Formation Info */}
          <div className="bg-white rounded-2xl p-8 shadow-md animate-on-scroll border border-gray-200">
            <div
              className="aspect-video rounded-xl mb-6 relative overflow-hidden"
              style={{
                backgroundImage: 'url(/logo.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A4B84]/80 to-[#C9A646]/70 flex items-center justify-center">
                <span className="text-white font-semibold text-lg px-4 py-2 bg-black/40 rounded-full">
                  Formation Premium
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-3">{formation.title}</h2>
            <p className="text-[#5A5A5A] mb-6">{formation.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#F8F9FB] rounded-lg p-4">
                <p className="font-semibold text-[#1A4B84]">Durée</p>
                <p className="text-[#5A5A5A]">{formation.duration}</p>
              </div>
              <div className="bg-[#F8F9FB] rounded-lg p-4">
                <p className="font-semibold text-[#1A4B84]">Niveau</p>
                <p className="text-[#5A5A5A]">{formation.level}</p>
              </div>
              <div className="bg-[#F8F9FB] rounded-lg p-4">
                <p className="font-semibold text-[#1A4B84]">Langue</p>
                <p className="text-[#5A5A5A]">{formation.language}</p>
              </div>
              <div className="bg-[#F8F9FB] rounded-lg p-4">
                <p className="font-semibold text-[#1A4B84]">Formateur</p>
                <p className="text-[#5A5A5A]">{formation.instructor}</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">Ce que tu obtiens :</h3>
            <ul className="space-y-2">
              {formation.features.map((f, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-[#3BAE8C] mr-3">✔</span>
                  <span className="text-[#5A5A5A]">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Payment Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg animate-on-scroll border border-[#1A4B84]/30 sticky top-8">
            <h3 className="text-2xl font-bold text-[#1A4B84] text-center mb-4">Accès complet</h3>

            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-[#C9A646] mb-2">{formation.price.toLocaleString()} FCFA</div>
              <p className="text-[#5A5A5A]">Paiement unique • Accès à vie</p>
            </div>

            <button
              onClick={handlePayment}
              className="w-full bg-[#3BAE8C] text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-[#319877] transition-transform hover:scale-[1.02]"
            >
              Payer maintenant
            </button>

            <div className="mt-6 text-center text-[#5A5A5A] text-sm">
              <p className="mb-3 font-medium">✅ Paiement 100 % sécurisé</p>
              <div className=" relative  justify-center items-center gap-3">
                <Image src="/moov.png" alt="moov" width={40} height={40} />
                <Image src="/orange.png" alt="Orange Money" width={40} height={40} />
                <Image src="/wave.png" alt="wave" width={40} height={40} />
                <Image src="/visa.jpg" alt="Visa" width={40} height={40} />
            
              </div>
            </div>

            <p className="mt-8 text-center text-xs text-[#5A5A5A]">
              Une fois ton paiement validé, tu recevras immédiatement ton accès complet par email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
