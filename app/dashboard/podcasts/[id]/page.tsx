'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function PodcastDetail() {
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

  // Données de test pour le podcast détaillé
  const podcast = {
    id: podcastId,
    title: "Monétiser ses compétences avec LeDevUltime",
    description: "Dans cet épisode riche en insights, nous discutons business et développement web avec LeDevUltime, et comment transformer ses compétences techniques en sources de revenus réelles, que ce soit en solo ou à plus grande échelle.",
    author: "Ange",
    date: "24 mars 2025",
    category: "Entrepreneuriat",
    duration: "1h 25min",
    detailedDescription: `Dans cet épisode riche en insights, nous discutons business et développement web avec LeDevUltime, et comment transformer ses compétences techniques en sources de revenus réelles, que ce soit en solo ou à plus grande échelle.

LeDevUltime partage son parcours, ses échecs, ses réussites et ses meilleurs conseils pour ceux qui veulent vivre différemment en tant que développeur en prenant le contrôle de leur parcours professionnel.

À écouter d'urgence si tu veux passer du code au cash de façon durable et intelligente !`,
    program: [
      {
        icon: "♪",
        title: "Créer son entreprise autour du code"
      },
      {
        icon: "✔",
        title: "Vendre ses services en freelance avec efficacité"
      },
      {
        icon: "🚀",
        title: "Lancer des produits numériques et des SaaS scalables"
      },
      {
        icon: "💡",
        title: "Mettre en place des stratégies pour se démarquer dans un marché compétitif"
      },
      {
        icon: "🎯",
        title: "Attirer les bons clients et construire une carrière rentable et épanouissante"
      }
    ],
    leDevUltimeProfile: {
      name: "LeDevUltime",
      description: "Développeur expérimenté avec plus de 10 ans d'expérience, LeDevUltime est un véritable couteau-suisse du monde du dev : freelance, formateur, créateur de SaaS et entrepreneur passionné. Il partage son parcours, ses apprentissages et ses meilleures stratégies pour transformer ses compétences techniques en un véritable moteur de liberté professionnelle."
    },
    similarPodcasts: [
      {
        id: 1,
        title: "Consultant dans la Tech",
        description: "Les secrets pour réussir en tant que consultant dans l'industrie technologique.",
        author: "Ange",
        date: "11 juillet 2025"
      },
      {
        id: 2,
        title: "Freelance et Entrepreneuriat",
        description: "Comment passer du salariat au freelancing avec succès dans le domaine tech.",
        author: "Ange",
        date: "5 juillet 2025"
      },
      {
        id: 3,
        title: "Développement Web Moderne",
        description: "Les dernières tendances et technologies en développement web pour rester à la pointe.",
        author: "Jonathan.B",
        date: "28 juin 2025"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#fffff9]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-['SUSE_Mono'] text-[#1e293b] mb-4">
            {podcast.title}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Publié le {podcast.date} • Durée: {podcast.duration}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2">
            {/* Image 4 pour le détail du podcast */}
            <div className="aspect-video rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden animate-on-scroll" style={{
              backgroundImage: 'url(/logo.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/70 to-blue-600/70"></div>
              <div className="relative z-10 text-center">
                <button className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#10b981] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
                <div className="text-lg font-bold text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  {podcast.category}
                </div>
              </div>
            </div>

            {/* Description du podcast */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm mb-8 animate-on-scroll">
              <h2 className="text-2xl font-['SUSE_Mono'] text-[#1e293b] mb-4">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {podcast.description}
              </p>
            </div>

            {/* Au programme */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#3b82f6] shadow-sm mb-8">
              <h2 className="text-2xl font-['SUSE_Mono'] text-[#1e293b] mb-6">
                Au programme :
              </h2>
              <div className="space-y-4">
                {podcast.program.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#3b82f6] text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <p className="text-gray-700 font-medium">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partage de LeDevUltime */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                {podcast.leDevUltimeProfile.description}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Que tu sois freelance, salarié en transition ou passionné d&apos;entrepreneuriat tech, cet épisode te donnera des clés concrètes pour rendre tes compétences fructueuses.
              </p>
              <p className="text-[#3b82f6] font-bold text-lg">
                À écouter d&apos;urgence si tu veux passer du code au cash de façon durable et intelligente !
              </p>
              <p className="text-gray-600 mt-4">
                Publié le {podcast.date}
              </p>
            </div>

            {/* Podcasts similaires */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm">
              <h2 className="text-2xl font-['SUSE_Mono'] text-[#1e293b] mb-6">
                Podcasts similaires
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {podcast.similarPodcasts.map((similarPodcast) => (
                  <div key={similarPodcast.id} className="border-2 border-gray-200 rounded-xl p-4 hover:border-[#3b82f6] transition-colors">
                    <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-lg mb-3 flex items-center justify-center">
                      <Image src="/logo.jpg" alt="Podcast" width={40} height={40} className="rounded" />
                    </div>
                    <h3 className="font-bold text-[#1e293b] mb-2 text-sm">
                      {similarPodcast.title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-xs leading-relaxed">
                      {similarPodcast.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-600">
                        <p className="font-medium">{similarPodcast.author}</p>
                        <p>{similarPodcast.date}</p>
                      </div>
                      <Link 
                        href={`/dashboard/podcasts/${similarPodcast.id}`}
                        className="bg-[#3b82f6] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#1d4ed8] transition-colors"
                      >
                        ▶
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Profil LeDevUltime */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="font-bold text-[#1e293b] mb-3">
                  {podcast.leDevUltimeProfile.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {podcast.leDevUltimeProfile.description}
                </p>
              </div>

              {/* Suivez-nous */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="font-bold text-[#1e293b] mb-4">
                  Suivez-nous
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-[#FF0000] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#CC0000] transition-colors flex items-center justify-center gap-2">
                    <span>▶</span> YouTube
                  </button>
                  <button className="bg-[#000000] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#333333] transition-colors flex items-center justify-center gap-2">
                    <span>♪</span> TikTok
                  </button>
                  <button className="bg-[#E4405F] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#D62976] transition-colors flex items-center justify-center gap-2">
                    <span>📷</span> Instagram
                  </button>
                  <button className="bg-[#333333] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#555555] transition-colors flex items-center justify-center gap-2">
                    <span>🐙</span> GitHub
                  </button>
                  <button className="bg-[#5865F2] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#4752C4] transition-colors flex items-center justify-center gap-2 col-span-2">
                    <span>💬</span> Discord
                  </button>
                </div>
              </div>

              {/* Écouter maintenant */}
              <div className="bg-gradient-to-br from-[#10b981] to-[#059669] text-white rounded-2xl p-6 text-center">
                <h3 className="font-bold text-lg mb-4">
                  Écouter maintenant
                </h3>
                <Link href={`/dashboard/podcasts/${podcast.id}/payment`} className="bg-white text-[#10b981] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors w-full inline-block">
                  ▶ Lancer le podcast
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
