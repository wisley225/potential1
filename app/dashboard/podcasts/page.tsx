'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function PodcastsPage() {
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

  // Données de test pour les podcasts
  const podcasts = [
    {
      id: 1,
      title: "Monétiser ses compétences avec LeDevUltime",
      description: "Découvrez comment transformer vos compétences techniques en sources de revenus durables et intelligentes.",
      author: "Ange",
      date: "24 mars 2025",
      category: "Entrepreneuriat"
    },
    {
      id: 2,
      title: "Consultant dans la Tech",
      description: "Les secrets pour réussir en tant que consultant dans l'industrie technologique et développer votre activité.",
      author: "Ange",
      date: "11 juillet 2025",
      category: "Carrière"
    },
    {
      id: 3,
      title: "Freelance et Entrepreneuriat",
      description: "Comment passer du salariat au freelancing avec succès dans le domaine tech.",
      author: "Ange",
      date: "5 juillet 2025",
      category: "Freelance"
    },
    {
      id: 4,
      title: "Développement Web Moderne",
      description: "Les dernières tendances et technologies en développement web pour rester à la pointe.",
      author: "Jonathan.B",
      date: "28 juin 2025",
      category: "Technologie"
    },
    {
      id: 5,
      title: "Productivité du Développeur",
      description: "Outils et méthodes pour optimiser votre workflow de développement et votre productivité.",
      author: "Ange",
      date: "20 juin 2025",
      category: "Productivité"
    },
    {
      id: 6,
      title: "Intelligence Artificielle et Développement",
      description: "Comment intégrer l'IA dans vos projets de développement et les opportunités qu'elle offre.",
      author: "Jonathan.B",
      date: "15 juin 2025",
      category: "IA"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* En-tête */}
        <div className="text-center mb-12 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl font-['SUSE_Mono'] text-[#1e293b] mb-4">
            Podcast
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Découvrez nos podcasts
          </p>
        </div>

        {/* Grille des podcasts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {podcasts.map((podcast, index) => (
            <div key={podcast.id} className="bg-white rounded-2xl p-6 border-2 border-[#1A4B84] shadow-sm hover:shadow-md transition-shadow animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
              {/* Image 3 pour afficher tous les podcasts */}
              <div className="aspect-square rounded-xl mb-4 flex items-center justify-center relative overflow-hidden" style={{
                backgroundImage: 'url(/logo.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A4B84] to-blue-800/50"></div>
                <div className="relative z-10 text-center">
                  <div className="text-xs font-semibold text-white bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    {podcast.category}
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-[#1e293b] mb-2">
                {podcast.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {podcast.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-600">
                  <p className="font-medium">{podcast.author}</p>
                  <p>{podcast.date}</p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Link 
                  href={`/dashboard/podcasts/${podcast.id}`}
                  className="bg-[#1A4B84] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors shadow-lg"
                >
                  <span className="text-lg">▶</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Charger plus */}
        <div className="text-center">
          <button className="bg-[#1A4B84] cursor-pointer text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-colors">
            Charger plus
          </button>
        </div>


        <section className="bg-[#F8F9FB] py-16 px-6 md:px-12">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B84] mb-4">
      🎧 Nos Podcasts Inspirants
    </h2>
    <p className="text-gray-600 mb-10">
      Écoute les témoignages d’apprenants, les conseils de nos formateurs et des discussions inspirantes sur la réussite et l’apprentissage.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Réussir sa reconversion dans la tech",
          image: "/w17.jpg",
          link: "#",
        },
        {
          title: "Comment apprendre efficacement en ligne",
          image: "/w18.jpg",
          link: "#",
        },
        {
          title: "Les clés pour garder la motivation",
          image: "/w19.jpg",
          link: "#",
        },
      ].map((podcast, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
        >
          <img
            src={podcast.image}
            alt={podcast.title}
            className="w-full h-52 object-cover"
          />
          <div className="p-5">
            <h3 className="font-semibold text-lg mb-3 text-[#1A4B84]">
              {podcast.title}
            </h3>
            <button className="bg-[#1A4B84] text-white px-5 py-2 rounded-full hover:bg-[#163d6b] transition">
              Écouter 🎙️
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      </div>
    </div>
  );
}
