'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function FormationDetail() {
  const params = useParams();
  const formationId = params.id;

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

  // Données de test pour la formation détaillée
  const formation = {
    id: formationId,
    title: "Nuxt JS de A à Z",
    description: "Formation complète sur Nuxt.js pour créer des applications Vue.js performantes et optimisées. Cette formation couvre tous les aspects essentiels de Nuxt.js, de la configuration initiale aux déploiements en production.",
    difficulty: "Intermédiaire",
    technology: "Vue.js",
    videoCount: 45,
    category: "Développement Web",
    instructor: "Jonathan.B",
    targetAudience: ["Débutants(es)", "Freelances", "Personnes en reconversion", "Étudiants(es)"],
    tools: ["Vue.js", "Nuxt.js", "JavaScript"],
    detailedDescription: `Dans cette formation complète "Nuxt.js de A à Z", vous apprendrez à maîtriser ce framework Vue.js révolutionnaire pour créer des applications web modernes, performantes et optimisées.

Cette formation vous guidera à travers tous les aspects essentiels de Nuxt.js, de la configuration initiale aux déploiements en production. Vous découvrirez comment exploiter la puissance de l'architecture basée sur les fichiers, la gestion automatique des routes, et les différents modes de rendu (SSR, SSG, SPA).

Vous apprendrez également à structurer efficacement vos projets Nuxt.js, à intégrer des fonctionnalités courantes comme l'authentification, l'optimisation SEO, et la gestion des métadonnées. Cette formation est conçue pour vous donner toutes les clés pour devenir autonome avec Nuxt.js.`,
    chapters: [
      {
        id: 1,
        title: "Introduction à la formation Nuxt JS",
        duration: "15:30",
        completed: true
      },
      {
        id: 2,
        title: "Installation et configuration",
        duration: "22:45",
        completed: true
      },
      {
        id: 3,
        title: "Architecture des fichiers",
        duration: "18:20",
        completed: false
      },
      {
        id: 4,
        title: "Routing automatique",
        duration: "25:10",
        completed: false
      },
      {
        id: 5,
        title: "Composants et layouts",
        duration: "31:15",
        completed: false
      }
    ],
    similarFormations: [
      {
        id: 1,
        title: "Application de prise de note",
        description: "Dans ce tutoriel complet, apprenez à créer une application de prise de notes moderne avec React Native, Expo et Firebase.",
        difficulty: "Facile",
        technology: "Next.js",
        videoCount: 33
      },
      {
        id: 2,
        title: "React Avancé",
        description: "Maîtrisez les concepts avancés de React : hooks, context, performance et bonnes pratiques.",
        difficulty: "Avancé",
        technology: "React",
        videoCount: 28
      },
      {
        id: 3,
        title: "Vue.js Fondamentaux",
        description: "Apprenez les bases de Vue.js pour créer des interfaces utilisateur interactives.",
        difficulty: "Facile",
        technology: "Vue.js",
        videoCount: 35
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#fffff9]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2">
            {/* Image 2 pour le détail de la formation */}
            <div className="aspect-video rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden animate-on-scroll" style={{
              backgroundImage: 'url(/logo.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-purple-600/70"></div>
              <div className="relative z-10 text-center">
                <button className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-[#3b82f6] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
                <div className="text-lg font-bold text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  {formation.category}
                </div>
              </div>
              {/* Chemin de développement avec étapes */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-between items-center bg-black/50 px-4 py-2 rounded-full text-xs font-semibold text-white backdrop-blur-sm">
                  <span>FRONT-END</span>
                  <span>TESTING</span>
                  <span>BACK-END</span>
                  <span>MAINTENANCE</span>
                  <span>DEPLOYMENT</span>
                </div>
              </div>
            </div>

            {/* Informations de la formation */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm mb-8 animate-on-scroll">
              <h1 className="text-3xl md:text-4xl font-['SUSE_Mono'] text-[#1e293b] mb-6">
                {formation.title}
              </h1>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">33 vidéos</span> • 
                    <span className="font-semibold"> Niveau: {formation.difficulty.toLowerCase()}</span> • 
                    <span className="font-semibold"> Catégorie: {formation.technology}</span>
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-[#1e293b] mb-3">Outils utilisés :</h3>
                <div className="flex flex-wrap gap-2">
                  {formation.tools.map((tool, index) => (
                    <span key={index} className="bg-[#3b82f6] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="font-bold text-[#1e293b] mb-2">Formateur: {formation.instructor}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-[#1e293b] mb-3">Public cible :</h3>
                <div className="flex flex-wrap gap-2">
                  {formation.targetAudience.map((audience, index) => (
                    <span key={index} className="bg-[#3b82f6] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              <Link href={`/dashboard/formations/${formation.id}/payment`} className="bg-[#3b82f6] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#2563eb] transition-colors w-full inline-block text-center">
                Commencer la formation
              </Link>
            </div>

            {/* Description détaillée */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm mb-8">
              <h2 className="text-2xl font-['SUSE_Mono'] text-[#1e293b] mb-4">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {formation.detailedDescription}
              </p>
            </div>

            {/* Chapitres */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm mb-8">
              <h2 className="text-2xl font-['SUSE_Mono'] text-[#1e293b] mb-6">
                Chapitres
              </h2>
              <div className="space-y-3">
                {formation.chapters.map((chapter) => (
                  <div key={chapter.id} className={`p-4 rounded-xl border-2 ${
                    chapter.completed 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-[#fffceb] border-[#442604]'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          chapter.completed 
                            ? 'bg-green-500 text-white' 
                            : 'bg-[#442604] text-white'
                        }`}>
                          {chapter.completed ? '✓' : chapter.id}
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#1e293b]">
                            {chapter.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Durée: {chapter.duration}
                          </p>
                        </div>
                      </div>
                      {chapter.completed && (
                        <span className="text-green-600 font-semibold text-sm">
                          Terminé
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Formations similaires */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm">
              <h2 className="text-2xl font-['SUSE_Mono'] text-[#1e293b] mb-6">
                Vidéos similaires
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {formation.similarFormations.map((similarFormation) => (
                  <div key={similarFormation.id} className="border-2 border-gray-200 rounded-xl p-4 hover:border-[#3b82f6] transition-colors">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-3 flex items-center justify-center">
                      <Image src="/logo.jpg" alt="Formation" width={40} height={40} className="rounded" />
                    </div>
                    <h3 className="font-bold text-[#1e293b] mb-2 text-sm">
                      {similarFormation.title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-xs leading-relaxed">
                      {similarFormation.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      <span className="bg-[#fed841] text-[#1e293b] px-2 py-1 rounded-full text-xs font-medium">
                        {similarFormation.difficulty}
                      </span>
                      <span className="bg-[#3b82f6] text-white px-2 py-1 rounded-full text-xs font-medium">
                        {similarFormation.technology}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-gray-600">
                        <span className="text-sm">▶</span>
                        <span className="text-xs">{similarFormation.videoCount} vidéos</span>
                      </div>
                      <Link 
                        href={`/dashboard/formations/${similarFormation.id}`}
                        className="bg-[#3b82f6] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#1d4ed8] transition-colors"
                      >
                        →
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
              {/* Besoin d'aide */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="font-bold text-[#1e293b] mb-3">
                  Besoin d&apos;aide ?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Rejoignez notre communauté Discord de développeurs pour obtenir de l&apos;aide et échanger avec d&apos;autres apprenants.
                </p>
                <button className="bg-[#5865F2] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4752C4] transition-colors w-full">
                  Rejoindre Discord
                </button>
              </div>

              {/* Nos Lives */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="font-bold text-[#1e293b] mb-3">
                  Nos Lives
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Rejoignez-nous tous les vendredis soir à 21h30 pour des sessions de live coding et de questions-réponses.
                </p>
                <div className="flex gap-2">
                  <button className="bg-[#FF0000] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#CC0000] transition-colors flex-1 flex items-center justify-center gap-2">
                    <span>▶</span> YouTube
                  </button>
                  <button className="bg-[#000000] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#333333] transition-colors flex-1 flex items-center justify-center gap-2">
                    <span>♪</span> TikTok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
