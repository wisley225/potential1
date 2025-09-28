'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function PodcastPayment() {
  const params = useParams();
  const podcastId = params.id;

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

  // Données du podcast (en réalité, cela viendrait d'une API)
  const podcast = {
    id: podcastId,
    title: "Monétiser ses compétences avec LeDevUltime",
    description: "Découvrez comment transformer vos compétences techniques en sources de revenus durables et intelligentes.",
    price: 25000, // Prix en francs CFA
    duration: "45 minutes",
    category: "Entrepreneuriat Tech",
    date: "15 Mars 2024",
    language: "Français",
    host: "LeDevUltime",
    features: [
      "Accès à vie au podcast",
      "Transcription complète incluse",
      "Ressources bonus téléchargeables",
      "Support communautaire",
      "Qualité audio HD",
      "Disponible hors ligne"
    ]
  };

  const handlePayment = () => {
    // Simulation du processus de paiement
    alert('Redirection vers le système de paiement...');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        {/* En-tête */}
        <div className="text-center mb-12 animate-on-scroll">
          <Link 
            href={`/dashboard/podcasts/${podcast.id}`}
            className="inline-flex items-center text-[#10b981] hover:text-[#059669] transition-colors mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au podcast
          </Link>
          <h1 className="text-4xl md:text-5xl font-['SUSE_Mono'] text-[#1e293b] mb-4">
            Accès Complet au Podcast
          </h1>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Débloquez l&apos;accès complet à ce podcast premium avec des ressources exclusives
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Informations du podcast */}
          <div className="animate-on-scroll">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm mb-8">
              <div className="aspect-video rounded-xl mb-6 flex items-center justify-center relative overflow-hidden" style={{
                backgroundImage: 'url(/logo.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/70 to-blue-600/70"></div>
                <div className="relative z-10 text-center">
                  <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#10b981] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                  <div className="text-lg font-bold text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                    Podcast Premium
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-['SUSE_Mono'] text-[#1e293b] mb-4">
                {podcast.title}
              </h2>
              
              <p className="text-[#475569] mb-6 leading-relaxed">
                {podcast.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#f1f5f9] rounded-lg p-4">
                  <div className="text-sm font-semibold text-[#1e293b] mb-1">Durée</div>
                  <div className="text-[#475569]">{podcast.duration}</div>
                </div>
                <div className="bg-[#f1f5f9] rounded-lg p-4">
                  <div className="text-sm font-semibold text-[#1e293b] mb-1">Catégorie</div>
                  <div className="text-[#475569]">{podcast.category}</div>
                </div>
                <div className="bg-[#f1f5f9] rounded-lg p-4">
                  <div className="text-sm font-semibold text-[#1e293b] mb-1">Date</div>
                  <div className="text-[#475569]">{podcast.date}</div>
                </div>
                <div className="bg-[#f1f5f9] rounded-lg p-4">
                  <div className="text-sm font-semibold text-[#1e293b] mb-1">Animateur</div>
                  <div className="text-[#475569]">{podcast.host}</div>
                </div>
              </div>

              <h3 className="text-xl font-['SUSE_Mono'] text-[#1e293b] mb-4">
                Ce que vous obtenez :
              </h3>
              <ul className="space-y-3">
                {podcast.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-[#10b981] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#475569]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section de paiement */}
          <div className="animate-on-scroll">
            <div className="bg-white rounded-2xl p-8 border-2 border-[#10b981] shadow-lg sticky top-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-['SUSE_Mono'] text-[#1e293b] mb-4">
                  Accès Complet
                </h3>
                
                <div className="mb-6">
                  <div className="text-5xl font-bold text-[#10b981] mb-2">
                    {podcast.price.toLocaleString()} FCFA
                  </div>
                  <div className="text-[#475569]">
                    Paiement unique • Accès à vie
                  </div>
                </div>

                <div className="bg-[#f1f5f9] rounded-lg p-4 mb-6">
                  <div className="text-sm text-[#475569] mb-2">
                    <span className="line-through text-gray-400">40 000 FCFA</span>
                    <span className="ml-2 text-[#10b981] font-semibold">-37% de réduction</span>
                  </div>
                  <div className="text-lg font-semibold text-[#1e293b]">
                    Économisez 15 000 FCFA
                  </div>
                </div>
              </div>

              <button 
                onClick={handlePayment}
              className="w-full bg-[#10b981] text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-[#059669]  mb-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Payer {podcast.price.toLocaleString()} FCFA
              </button>

              <div className="text-center">
                <div className="text-sm text-[#475569] mb-2">
                  🔒 Paiement sécurisé par
                </div>
                <div className="flex justify-center items-center space-x-4 text-sm text-[#475569]">
                  <span>💳 Carte bancaire</span>
                  <span>📱 Mobile Money</span>
                  <span>🏦 Virement</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-xs text-[#475569] text-center leading-relaxed">
                  En procédant au paiement, vous acceptez nos conditions d&apos;utilisation. 
                  Vous recevrez un email de confirmation avec vos accès dans les 5 minutes suivant le paiement.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
