'use client';

import { useEffect, useState,useRef } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { Formation } from '../types/data';
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { FaFilter } from "react-icons/fa6";
import React, { ChangeEvent } from "react";

export default function FormationsPage() {
const [cours, setCours]=useState<Formation [] | null>()
const filterRef=useRef<HTMLDivElement>(null)
const [isClient, setIsClient] = useState(false);
  //Données des formations
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
      students: 1247,
      badge:true
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
      students: 892,

      badge:true

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
      students: 654,
      badge:false
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
      students: 423,
      badge:false
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
      students: 298,
      badge:false
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
      students: 567,
      badge:false
    }
  ];


  useEffect(() => {
 setIsClient(true);
    if (formations) {
      setCours(formations)
    }
    
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


  const handleSearch=(recherche:string , e?:ChangeEvent<HTMLInputElement>)=>{
   e && e.preventDefault()

  setCours(formations)
    if (cours && recherche !=='') {
   setCours(  cours.filter((formation)=>
    formation.title.toLowerCase().includes(recherche.toLowerCase()) ||
    formation.category.toLowerCase().includes(recherche.toLowerCase()) ||
     formation.description.toLowerCase().includes(recherche.toLowerCase())||
      formation.technology.toLowerCase().includes(recherche.toLowerCase())
     
  ))

  
}
else{
  setCours(formations)
}



  }

  

  const handleFormationClick = (formationId: number) => {
    window.location.href = `/login?redirect=/dashboard/formations/${formationId}`;
  };

  
const handleFiltrer=(filtre?:string)=>{

  if (filterRef.current) {
filterRef.current.classList.toggle("scale-100")

  }

    setCours(formations)
     if (filtre==='all') {
  setCours(formations)
  
}
    else if (cours && filtre) {
  
    setCours(  cours.filter((formation)=>
    formation.difficulty.toLowerCase().includes(filtre.toLowerCase()) 
     
  ))

  
}



}

  return (
    <div className="min-h-screen dm-sans bg-[#F8F9FB] text-[#1e293b]">
      <Navbar/>

      {/* Hero Section */}
      <section className="py-16  bg-[#1A4B84] text-white">
        <div className="">
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-12 px-4 md:px-8 py-10">
  
 
  <div className="relative w-full md:w-2/5 h-64 md:h-96 flex justify-center">
    <Image
      src="/laptop.png"
      alt="laptop"
      fill
      className="object-contain"
    />
  </div>

  <div className="w-full md:w-1/2 text-center md:text-left">
    <h1 className="text-2xl font-bold sm:text-3xl md:text-5xl dm-sans mb-4 md:mb-6 animate-on-scroll leading-snug">
      Développez les compétences qui façonneront votre avenir professionnel.
    </h1>
    <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90 animate-on-scroll">
      Découvrez des formations complètes et accessibles, conçues pour renforcer vos compétences, 
      accélérer votre carrière et révéler votre potentiel.
    </p>
  </div>

</div>

       
          <ul className="flex italic flex-wrap justify-center gap-4 animate-on-scroll">
            <li 
    
            className="bg-white/40  hover:bg-white/70 cursor-pointer hover:-translate-y-1 transition-all flex space-x-2 items-center backdrop-blur-sm rounded-lg px-4 py-2">
           <Image
           src="/formation.png"
            alt="formateurs"
            width={24}
            height={24}
            className=" "
        
           />   <span className="font-semibold">  { formations.length} Formations</span>
            </li>
            <li className="bg-white/40 hover:bg-white/70 cursor-pointer hover:-translate-y-1 transition-all space-x-2 flex items-center backdrop-blur-sm rounded-lg px-4 py-2">
              <Image
           src="/groupe.png"
            alt="formateurs"
            width={24}
            height={24}
            className=" "
        
           />   
              <span className="font-semibold"> +5,000 Étudiants</span>

            </li>
            <li
            data-tooltip-id="formations-tooltip"
            data-tooltip-content="Basé sur les évaluations des apprenants Reveal."
          
          className="bg-white/40 hover:bg-white/70 cursor-pointer hover:-translate-y-1 transition-all backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">4.8/5 ⭐</span>
            </li>
          </ul>
        </div>

        
      {isClient && (

        <>
            <Tooltip
          id="formations-tooltip"
          place="top"
          style={{
            backgroundColor: "#111",
            color: "#fff",
            borderRadius: "6px",
            padding: "5px 10px",
            fontSize: "13px",
          }}
        />

            <Tooltip
          id="filtre"
          place="top"
          style={{
            backgroundColor: "#111",
            color: "#fff",
            borderRadius: "6px",
            padding: "5px 10px",
            fontSize: "13px",
          }}
        />
        </>
    

        
      )}
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-5">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl text-[#1E1E1E]   md:text-5xl  font-bold mb-4">
              Toutes nos formations
            </h2>
            <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto">
Des formations interactives et pratiques pour développer vos 
compétences techniques et humaines.  
            </p>
          </div>

          
<div className='flex rounded-xl  items-center justify-end space-x-4 mb-10 '  > 
  <div className='space-x-3'>
    <form>
   <input 
    onChange={(e)=>handleSearch(e.target.value.trim() , e )}
     type="text"  placeholder='Recherche ' className='  pl-2 border border-[#1A4B84] rounded-xl outline-none py-1 ' />
    </form>
 
   </div> 
  
   <FaFilter
    onClick={()=>handleFiltrer(undefined)}
 data-tooltip-id="filtre"
 data-tooltip-content="flitre par nivaux de difficulté"
 className='text-xl outline-none   transition-all cursor-pointer shadow-black hover:animate-bounce'/> </div>
 <div  ref={filterRef}  className=" min-w-80 border border-green-700  scale-0 transition-all  p-4   w-3/12 bg-slate-50     rounded-lg  absolute z-20   ">
    <ul className='space-y-2'> 
      <li className="text-xl font-bold mb-4  bg-clip-text text-transparent  bg-gradient-to-br from-[#3b82f6] to-[#10b981] " > categories</li>
      <li onClick={()=>handleFiltrer('all')} 
      className=" border hover:text-white hover:bg-gradient-to-br from-[#3b82f6] to-[#10b981]   py-2 pl-5  rounded-md cursor-pointer transition-all hover:transition-all text-lgy  text-neutral-600">
        all</li>
      <li onClick={()=>handleFiltrer("facile")}
       className="border hover:text-white hover:bg-green-400 py-2 pl-5  rounded-md cursor-pointer transition-all hover:transition-all text-lgy  text-neutral-600 ">
      Facile
      </li>
      <li onClick={()=>handleFiltrer("intermédiaire")}
       className="border hover:text-white  hover:bg-[#C9A646] py-2 pl-5  rounded-md cursor-pointer transition-all hover:transition-all text-lgy  text-neutral-600 ">
        Intermediaire</li>
      <li onClick={()=>handleFiltrer("Avancé")} className="border hover:text-white hover:bg-red-400  py-2 pl-5  rounded-md cursor-pointer transition-all hover:transition-all text-lgy  text-neutral-600 ">
        Avancé</li>
      
    </ul>
   
</div> 


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
           cours && cours.length >= 0 ?

            <>
          {   cours.map((formation, index) => (
              <div key={formation.id} className="bg-white  rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all  hover:-translate-y-1 animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
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
                 
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A4B84] to-purple-600/70"></div>
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
                       <Image
                      src="/nouveau.png"
                      alt='badge'
                      width={24}
                      height={24}
                      className={`absolute bottom-1 animate-bounce right-1 ${formation.badge ? '' : 'hidden'}`}
                      
                    />
                  </div>
                </div>

                {/* Contenu de la formation */}
                <div className="p-2">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-[#10b981] bg-green-100 px-3 py-1 rounded-full">
                      {formation.category}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <span className="text-sm font-semibold mr-1">⭐ {formation.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl  text-[#1e293b] mb-3 line-clamp-2">
                    {formation.title}
                  </h3>

                  <p className="text-[#475569] text-sm mb-4 line-clamp-3">
                    {formation.description}
                  </p>


                  <button
                   onClick={() => handleFormationClick(formation.id)}
                    className="w-full cursor-pointer bg-[#1A4B84] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#175dad]  transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                   
                >
                    Voir les détails
                  </button>

                    <div className='relative size-10 mt-3 ml-auto  '>
             
             <Image
              src="/logo.jpg"
              alt='logo potentials rivals'
              fill
              className=''
             />
            </div>
                </div>
              
              </div>
            ))}
            </> :


<div className="text-center text-gray-600 bg-white/40 backdrop-blur-sm rounded-lg p-4 shadow-sm">
  <p className="font-semibold text-lg">Aucun cours disponible pour l’instant</p>
  <p className="text-sm text-gray-500">
    Nos formateurs préparent de nouvelles formations passionnantes... reste connecté 🚀
  </p>
</div>
           
            
            
            }
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#1A4B84]  text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold  mb-6 animate-on-scroll">
            Prêt à transformer ton avenir ? Rejoins des
            milliers d’apprenants qui ont déjà fait le premier pas vers une carrière épanouie.”
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-on-scroll">
            Rejoignez des milliers d&apos;étudiants qui transforment leur carrière avec nos formations
          </p>
          <button className='bg-white animate-on-scroll  hover:shadow-xl px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:transform hover:-translate-y-0.5  transition-all duration-300'>
<Link
            href="/login "
            className="inline-block text-[#1A4B84] italic     "
          >
            Commencer maintenant
          </Link>
          </button>
          
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
