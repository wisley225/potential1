'use client';

import Link from 'next/link';
import Image from 'next/image';
import { formationsType, podcastsType } from '../types/data';
import { ReactNode, useEffect, useState } from 'react';

export default function DashboardHome() {
  const [elements, setElement] = useState<ReactNode[]>([]);
  const [Newformation, setNewFormation] = useState<formationsType[]>([]);
  const [Newpodcast, SetNewPodCast] = useState<podcastsType[]>([]);


  const formations: formationsType[] = [
    {
      id: 1,
      title: "Application de prise de note",
      description: "Apprenez à créer une app de notes moderne avec React Native, Expo et Firebase.",
      difficulty: "Facile",
      technology: "Next.js",
      videoCount: 33,
      image: "/images/formation-thumb.jpg",
    },
    {
      id: 2,
      title: "Nuxt JS de A à Z",
      description: "Formation complète sur Nuxt.js pour créer des apps Vue.js performantes.",
      difficulty: "Intermédiaire",
      technology: "Vue.js",
      videoCount: 45,
      image: "/images/formation-thumb.jpg",
    },
    {
      id: 3,
      title: "React Avancé",
      description: "Maîtrisez les hooks, context, performance et bonnes pratiques.",
      difficulty: "Avancé",
      technology: "React",
      videoCount: 28,
      image: "/images/formation-thumb.jpg",
    },
  ];

  const podcasts: podcastsType[] = [
    {
      id: "1",
      title: "Monétiser ses compétences avec LeDevUltime",
      description: "Comment transformer vos compétences techniques en sources de revenus.",
      author: "Ange",
      date: "24 mars 2025",
      image: "/images/podcast-thumb.jpg",
    },
    {
      id: "2",
      title: "Consultant dans la Tech",
      description: "Les secrets pour réussir en tant que consultant dans la tech.",
      author: "Ange",
      date: "11 juillet 2025",
      image: "/images/podcast-thumb.jpg",
    },
    {
      id: "3",
      title: "Freelance et Entrepreneuriat",
      description: "Passer du salariat au freelancing dans la tech.",
      author: "Ange",
      date: "5 juillet 2025",
      image: "/images/podcast-thumb.jpg",
    },
  ];

  useEffect(() => {
    setNewFormation(formations);
    SetNewPodCast(podcasts);
  }, []);


  useEffect(() => {
    const allElements: ReactNode[] = [];

    if (Newformation.length > 0) {
      allElements.push(
        ...Newformation.map((formation) => (
          <div
            key={`formation-${formation.id}`}
            className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4 flex items-center justify-center">
              <Image src="/logo.jpg" alt="Formation" width={60} height={60} className="rounded" />
            </div>
            <h3 className="text-xl font-bold text-[#1e293b] mb-3">{formation.title}</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{formation.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#fed841] text-[#442604] px-3 py-1 rounded-full text-sm font-medium">
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
                className="bg-[#1A4B84] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#1A4B84] transition-colors"
              >
                →
              </Link>
            </div>
          </div>
        ))
      );
    }

    if (Newpodcast.length > 0) {
      allElements.push(
        ...Newpodcast.map((podcast) => (
          <div
            key={`podcast-${podcast.id}`}
            className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-xl mb-4 flex items-center justify-center">
              <Image src="/logo.jpg" alt="Podcast" width={60} height={60} className="rounded" />
            </div>
            <h3 className="text-xl font-bold text-[#1e293b] mb-3">{podcast.title}</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{podcast.description}</p>
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-600">
                <p className="font-medium">{podcast.author}</p>
                <p>{podcast.date}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <Link
                href={`/dashboard/podcasts/${podcast.id}`}
                className="bg-[#1A4B84] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#1A4B84] transition-colors"
              >
                ▶
              </Link>
            </div>
          </div>
        ))
      );
    }

    setElement(allElements);
  }, [Newformation, Newpodcast]);

 
  const handleFiltrer = (texte: string) => {
  
    if (texte.trim() === "") {
      setNewFormation(formations);
      SetNewPodCast(podcasts);
      return;
    }

    const lower = texte.toLowerCase();

    const formationsFiltrees = formations.filter(
      (formation) =>
        formation.title.toLowerCase().includes(lower) ||
        formation.description.toLowerCase().includes(lower) ||
        formation.technology.toLowerCase().includes(lower)
    );

    const podcastsFiltres = podcasts.filter(
      (podcast) =>
        podcast.title.toLowerCase().includes(lower) ||
        podcast.description.toLowerCase().includes(lower) ||
        podcast.author.toLowerCase().includes(lower)
    );

    setNewFormation(formationsFiltrees);
    SetNewPodCast(podcastsFiltres);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto">
     <section className="banner-hero">
  <div className="background-accueil relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] px-5 sm:px-8 md:px-12 flex flex-col items-start justify-center space-y-5 mb-5 text-left">
    <h1 className="text-[#1E1E1E] text-2xl sm:text-3xl md:text-4xl lg:text-5xl dm-sans font-bold w-full sm:w-10/12 md:w-7/12 lg:w-5/12 leading-snug">
      Révèle ton potentiel. Construis ta carrière avec les meilleurs.
    </h1>

    <Link
      href="/login"
      className="bg-[#1A4B84] text-white px-5 sm:px-7 md:px-9 py-2.5 sm:py-3 md:py-4.5 rounded-xl font-bold text-sm sm:text-base md:text-lg border-2 border-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all inline-block"
    >
      Découvrir les formations
    </Link>
  </div>
</section>


        <section className="mb-16 px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 my-10 md:my-20 px-4 sm:px-6 lg:px-8">
  <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1e293b] font-bold">
    Formations récentes
  </h2>

  <div className="w-full md:w-auto flex flex-col sm:flex-row justify-start md:justify-evenly items-center gap-4 sm:gap-6">
    <div className="border-2 border-[#1A4B84] w-full sm:w-80 md:w-96 flex items-center px-3 py-1.5 rounded-lg bg-white">
      <input
        onChange={(e) => handleFiltrer(e.target.value)}
        type="search"
        className="w-full outline-none py-2 px-2 text-base sm:text-lg placeholder:text-gray-500 placeholder:text-sm sm:placeholder:text-base"
        placeholder="Recherche une formation ou un podcast"
      />
      <span className="text-xl ml-2">🔍</span>
    </div>

    <Link
      href="/dashboard/formations"
      className="bg-[#1A4B84] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base hover:bg-[#163b6c] transition-all shadow-md"
    >
      Voir plus
    </Link>
  </div>
</div>


          {elements.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{elements}</div>
          ) : (
            <p className="text-center text-gray-500">Aucun résultat trouvé...</p>
          )}
        </section>

        <section className="px-4 md:px-6 bg-[#1A4B84] text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Continuez votre apprentissage</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Explorez notre catalogue complet de formations et podcasts pour développer vos compétences.
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
              className="bg-[#C9A646] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#d2a528] transition-colors"
            >
              Écouter les podcasts
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
