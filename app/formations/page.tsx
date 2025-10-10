'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navrbar';
export default function FormationsPage() {

  // Données des formations
  const formations = [
    {
      id: 1,
      title: "Application de prise de note",
      description: "Dans ce tutoriel complet, apprenez à créer une application de prise de notes moderne avec React Native, Expo et Firebase.",
      difficulty: "Facile",
      technology: "Next.js",
      videoCount: 33,
      category: "Développement Web",
      price: 45000,
      originalPrice: 75000,
      duration: "15 heures",
      instructor: "LeDevUltime",
      rating: 4.8,
      students: 1247
    },
    {
      id: 2,
      title: "Nuxt JS de A à Z",
      description: "Formation complète sur Nuxt.js pour créer des applications Vue.js performantes et optimisées.",
      difficulty: "Intermédiaire",
      technology: "Vue.js",
      videoCount: 45,
      category: "Développement Web",
      price: 45000,
      originalPrice: 75000,
      duration: "20 heures",
      instructor: "LeDevUltime",
      rating: 4.9,
      students: 892
    },
    {
      id: 3,
      title: "React Avancé - Hooks et Performance",
      description: "Maîtrisez les concepts avancés de React : hooks, context, performance et bonnes pratiques.",
      difficulty: "Avancé",
      technology: "React",
      videoCount: 28,
      category: "Développement Web",
      price: 45000,
      originalPrice: 75000,
      duration: "18 heures",
      instructor: "LeDevUltime",
      rating: 4.7,
      students: 654
    },
    {
      id: 4,
      title: "Node.js et Express",
      description: "Apprenez à créer des APIs robustes avec Node.js et Express, de la base aux concepts avancés.",
      difficulty: "Intermédiaire",
      technology: "Node.js",
      videoCount: 35,
      category: "Backend",
      price: 45000,
      originalPrice: 75000,
      duration: "22 heures",
      instructor: "LeDevUltime",
      rating: 4.6,
      students: 423
    },
    {
      id: 5,
      title: "Docker et DevOps",
      description: "Maîtrisez Docker et les concepts DevOps pour déployer vos applications de manière professionnelle.",
      difficulty: "Avancé",
      technology: "Docker",
      videoCount: 25,
      category: "DevOps",
      price: 45000,
      originalPrice: 75000,
      duration: "16 heures",
      instructor: "LeDevUltime",
      rating: 4.9,
      students: 298
    },
    {
      id: 6,
      title: "TypeScript pour Débutants",
      description: "Découvrez TypeScript et ses avantages pour créer des applications JavaScript plus robustes.",
      difficulty: "Facile",
      technology: "TypeScript",
      videoCount: 20,
      category: "Développement Web",
      price: 45000,
      originalPrice: 75000,
      duration: "12 heures",
      instructor: "LeDevUltime",
      rating: 4.5,
      students: 567
    }
  ];

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

  const handleFormationClick = (formationId: number) => {
    // Rediriger vers login avec un paramètre pour savoir quelle formation accéder après
    window.location.href = `/login?redirect=/dashboard/formations/${formationId}`;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b]">
      <Navbar/>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#3b82f6] to-[#10b981] text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-5 text-center">
          <h1 className="text-4xl md:text-6xl font-['SUSE_Mono'] mb-6 animate-on-scroll">
            Nos Formations
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-on-scroll">
            Découvrez nos formations complètes pour maîtriser les technologies modernes
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">{formations.length} Formations</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">+5,000 Étudiants</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">4.8/5 ⭐</span>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-5">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-['SUSE_Mono'] text-[#1e293b] mb-4">
              Toutes nos formations
            </h2>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              Des formations complètes et pratiques pour développer vos compétences techniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map((formation, index) => (
              <div key={formation.id} className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
                {/* Image de la formation */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: 'url(/logo.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-purple-600/70"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        formation.difficulty === 'Facile' ? 'bg-green-500 text-white' :
                        formation.difficulty === 'Intermédiaire' ? 'bg-yellow-500 text-white' :
                        'bg-red-500 text-white'
                      }`}>
                        {formation.difficulty}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {formation.videoCount} vidéos
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contenu de la formation */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-[#10b981] bg-green-100 px-3 py-1 rounded-full">
                      {formation.category}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <span className="text-sm font-semibold mr-1">⭐ {formation.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-['SUSE_Mono'] text-[#1e293b] mb-3 line-clamp-2">
                    {formation.title}
                  </h3>

                  <p className="text-[#475569] text-sm mb-4 line-clamp-3">
                    {formation.description}
                  </p>


                  <button
                    onClick={() => handleFormationClick(formation.id)}
                    className="w-full bg-gradient-to-r from-[#3b82f6] to-[#10b981] text-white py-3 px-4 rounded-lg font-semibold hover:from-[#2563eb] hover:to-[#059669] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Voir les détails
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#3b82f6] to-[#10b981] text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-['SUSE_Mono'] mb-6 animate-on-scroll">
            Prêt à commencer votre apprentissage ?
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-on-scroll">
            Rejoignez des milliers d&apos;étudiants qui transforment leur carrière avec nos formations
          </p>
          <Link
            href="/login"
            className="inline-block bg-white text-[#3b82f6] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 animate-on-scroll"
          >
            Commencer maintenant
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
