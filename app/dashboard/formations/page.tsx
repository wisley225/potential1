'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FormationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes les catégories');

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

  // Données de test pour les formations
  const formations = [
    {
      id: 1,
      title: "Application de prise de note",
      description: "Dans ce tutoriel complet, apprenez à créer une application de prise de notes moderne avec React Native, Expo et Firebase.",
      difficulty: "Facile",
      technology: "Next.js",
      videoCount: 33,
      category: "Développement Web"
    },
    {
      id: 2,
      title: "Nuxt JS de A à Z",
      description: "Formation complète sur Nuxt.js pour créer des applications Vue.js performantes et optimisées.",
      difficulty: "Intermédiaire",
      technology: "Vue.js",
      videoCount: 45,
      category: "Développement Web"
    },
    {
      id: 3,
      title: "React Avancé",
      description: "Maîtrisez les concepts avancés de React : hooks, context, performance et bonnes pratiques.",
      difficulty: "Avancé",
      technology: "React",
      videoCount: 28,
      category: "Développement Web"
    },
    {
      id: 4,
      title: "Node.js Backend",
      description: "Créez des APIs robustes avec Node.js, Express et MongoDB.",
      difficulty: "Intermédiaire",
      technology: "Node.js",
      videoCount: 52,
      category: "Backend"
    },
    {
      id: 5,
      title: "Python pour Data Science",
      description: "Apprenez Python, Pandas, NumPy et Matplotlib pour l'analyse de données.",
      difficulty: "Intermédiaire",
      technology: "Python",
      videoCount: 38,
      category: "Data Science"
    },
    {
      id: 6,
      title: "Flutter Mobile",
      description: "Développez des applications mobiles cross-platform avec Flutter.",
      difficulty: "Avancé",
      technology: "Flutter",
      videoCount: 41,
      category: "Mobile"
    }
  ];

  const categories = ["Toutes les catégories", "Développement Web", "Backend", "Data Science", "Mobile"];

  const filteredFormations = formations.filter(formation => {
    const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         formation.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Toutes les catégories' || formation.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* En-tête */}
        <div className="text-center mb-12 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl font-['SUSE_Mono'] text-[#1e293b] mb-4">
            Formations
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Découvrez nos tutoriels sur les langages et outils du web
          </p>
        </div>

        {/* Barre de recherche et filtres */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-on-scroll">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="rechercher une formation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ea494b] focus:border-transparent"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <span className="text-gray-400 text-xl">🔍</span>
              </div>
            </div>
          </div>
          <div className="md:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ea494b] focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category} {category !== 'Toutes les catégories' ? '↓' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grille des formations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredFormations.map((formation, index) => (
            <div key={formation.id} className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
              {/* Image 1 pour toutes les formations */}
              <div className="aspect-video rounded-xl mb-4 flex items-center justify-center relative overflow-hidden" style={{
                backgroundImage: 'url(/logo.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A4B84] to-purple-600/80"></div>
                <div className="relative z-10 text-center">
                  <div className="text-xs font-semibold text-white bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    {formation.category}
                  </div>
                </div>
                {/* Icônes représentant les étapes de développement */}
                <div className="absolute bottom-2 left-2 flex gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                {formation.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {formation.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#fed841] text-[#1e293b] px-3 py-1 rounded-full text-sm font-medium">
                  {formation.difficulty}
                </span>
                <span className="bg-[#1A4B84] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {formation.technology}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-lg">▶</span>
                  <span className="text-sm">{formation.videoCount} vidéos</span>
                </div>
                <Link 
                  href={`/dashboard/formations/${formation.id}`}
                  className="bg-[#1A4B84] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#175dad] transition-colors"
                >
                  →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Charger plus */}
        <div className="text-center">
          <button className="bg-[#1A4B84] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#175dad] cursor-pointer transition-colors">
            Charger plus
          </button>
        </div>

         <section className="bg-[#F8F9FB] py-16 px-5 md:px-10">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B84] mb-12">
      Témoignages d’apprenants
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
        name: "Moussa Traoré",
          avatar: "/w18.jpg",

          feedback:
            "Cette formation a complètement transformé ma façon d’aborder le développement web. Les explications sont claires et motivantes !",
          rating: 5,
        },
        {
          
            name: "Sarah Konan",
          avatar: "/w17.jpg",
          
          feedback:
            "Le formateur est excellent, j’ai adoré les projets pratiques. J’ai trouvé un stage dès la fin de la formation 💪",
          rating: 4,
        },
        {
          name: "Kouassi  N’Guessan",
          avatar: "/w19.jpg",
          feedback:
            "J’avais peur de me lancer dans la tech, mais cette formation m’a donné confiance. Merci pour la pédagogie et le suivi !",
          rating: 5,
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
        >
          <img
            src={item.avatar}
            alt={item.name}
            className="w-16 h-16 rounded-full mb-4 object-cover"
          />
          <p className="text-[#5A5A5A] italic mb-4">“{item.feedback}”</p>
          <div className="flex justify-center mb-2">
            {Array.from({ length: item.rating }).map((_, i) => (
              <span key={i} className="text-[#C9A646] text-lg">★</span>
            ))}
          </div>
          <h4 className="font-semibold text-[#1A4B84]">{item.name}</h4>
        </div>
      ))}
    </div>
  </div>
       </section>
      </div>
    </div>
  );
}
