'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function DashboardHome() {
  // Données de test pour les formations récentes
  const recentFormations = [
    {
      id: 1,
      title: "Application de prise de note",
      description: "Dans ce tutoriel complet, apprenez à créer une application de prise de notes moderne avec React Native, Expo et Firebase.",
      difficulty: "Facile",
      technology: "Next.js",
      videoCount: 33,
      image: "/images/formation-thumb.jpg" // Image 1 pour les formations
    },
    {
      id: 2,
      title: "Nuxt JS de A à Z",
      description: "Formation complète sur Nuxt.js pour créer des applications Vue.js performantes et optimisées.",
      difficulty: "Intermédiaire",
      technology: "Vue.js",
      videoCount: 45,
      image: "/images/formation-thumb.jpg"
    },
    {
      id: 3,
      title: "React Avancé",
      description: "Maîtrisez les concepts avancés de React : hooks, context, performance et bonnes pratiques.",
      difficulty: "Avancé",
      technology: "React",
      videoCount: 28,
      image: "/images/formation-thumb.jpg"
    }
  ];

  // Données de test pour les podcasts récents
  const recentPodcasts = [
    {
      id: 1,
      title: "Monétiser ses compétences avec LeDevUltime",
      description: "Découvrez comment transformer vos compétences techniques en sources de revenus durables.",
      author: "Ange",
      date: "24 mars 2025",
      image: "/images/podcast-thumb.jpg" // Image 3 pour les podcasts
    },
    {
      id: 2,
      title: "Consultant dans la Tech",
      description: "Les secrets pour réussir en tant que consultant dans l'industrie technologique.",
      author: "Ange",
      date: "11 juillet 2025",
      image: "/images/podcast-thumb.jpg"
    },
    {
      id: 3,
      title: "Freelance et Entrepreneuriat",
      description: "Comment passer du salariat au freelancing avec succès dans le domaine tech.",
      author: "Ange",
      date: "5 juillet 2025",
      image: "/images/podcast-thumb.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fffff9]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* En-tête de bienvenue */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-['SUSE_Mono'] text-[#442604] mb-4">
            Bienvenue sur votre tableau de bord
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Découvrez nos dernières formations et podcasts pour continuer votre apprentissage et développer vos compétences.
          </p>
        </div>

        {/* Formations récentes */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-['SUSE_Mono'] text-[#442604]">
              Formations récentes
            </h2>
            <Link 
              href="/dashboard/formations"
              className="bg-[#3b82f6] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1d4ed8] transition-colors"
            >
              Voir plus
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentFormations.map((formation) => (
              <div key={formation.id} className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4 flex items-center justify-center">
                  <Image src="/logo.jpg" alt="Formation" width={60} height={60} className="rounded" />
                </div>
                
                <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                  {formation.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {formation.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#fed841] text-[#442604] px-3 py-1 rounded-full text-sm font-medium">
                    {formation.difficulty}
                  </span>
                  <span className="bg-[#3b82f6] text-white px-3 py-1 rounded-full text-sm font-medium">
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
                    className="bg-[#3b82f6] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#1d4ed8] transition-colors"
                  >
                    →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Podcasts récents */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-['SUSE_Mono'] text-[#442604]">
              Podcasts récents
            </h2>
            <Link 
              href="/dashboard/podcasts"
              className="bg-[#3b82f6] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1d4ed8] transition-colors"
            >
              Voir plus
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPodcasts.map((podcast) => (
              <div key={podcast.id} className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-xl mb-4 flex items-center justify-center">
                  <Image src="/logo.jpg" alt="Podcast" width={60} height={60} className="rounded" />
                </div>
                
                <h3 className="text-xl font-bold text-[#1e293b] mb-3">
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
                    className="bg-[#3b82f6] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#1d4ed8] transition-colors"
                  >
                    ▶
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section CTA */}
        <section className="bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-['SUSE_Mono'] mb-4">
            Continuez votre apprentissage
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Explorez notre catalogue complet de formations et podcasts pour développer vos compétences et atteindre vos objectifs professionnels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/dashboard/formations"
              className="bg-white text-[#3b82f6] px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              Voir toutes les formations
            </Link>
            <Link 
              href="/dashboard/podcasts"
              className="bg-[#fed841] text-[#442604] px-8 py-3 rounded-xl font-bold hover:bg-[#f0d835] transition-colors"
            >
              Écouter les podcasts
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
