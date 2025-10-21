'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div className="min-h-screen dm-sans bg-[#fffff9] text-[#1e293b]">
   
   <Navbar/>

    <main className="text-gray-800">

      {/* SECTION 1 : Qui sommes-nous ? */}
      <section className="py-20 bg-gray-50   px-6">
       <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
  <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
    {/* Texte */}
    <div className="w-full md:w-1/2 text-center md:text-left animate-on-scroll">
      <h2 className="text-6xl    max-md:text-3xl bg-clip-text text-transparent bg-gradient-to-br from-[#3b82f6] to-[#10b981] font-bold mb-4 maw-sm:mb-6">
        Qui sommes-nous ?
      </h2>
      <p className="text-base sm:text-lg leading-8 sm:leading-10">
        <span>Potential’s Reveal est né d’une </span>
        <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-br from-[#3b82f6] to-[#10b981]">
          conviction
        </span>
        <span> simple : aucun talent africain ne devrait être perdu. </span>
        Nous croyons en une{" "}
        <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-br from-[#3b82f6] to-[#10b981]">
          Afrique
        </span>{" "}
        où chaque jeune a les moyens de grandir, de s’exprimer et de contribuer
        à un{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#3b82f6] to-[#10b981]">
          avenir
        </span>{" "}
        meilleur pour le continent.
      </p>
    </div>

    {/* Image */}
    <div className="relative w-full sm:w-80 md:w-96 h-60 sm:h-72 md:h-80 mt-6 md:mt-0 animate-on-scroll">
      <Image
        src="/w14.jpg"
        alt="Équipe Potential's Reveal"
        fill
        className="object-cover rounded-xl"
      />
    </div>
  </div>
</div>

      </section>

      {/* SECTION 2 : Notre mission */}
      <section className="py-20  bg-gradient-to-br from-[#3b82f6] to-[#10b981]  text-white  px-6 ">
        <div className="max-w-5xl mx-auto text-center ">
          <h2 className="text-4xl font-bold  mb-10 italic">
            Notre mission
          </h2>

          <div className="space-y-4 text-lg animate-on-scroll">
            <p>✨ Donner accès à des parcours de formation innovants et accessibles.</p>
            <p>🤝 Créer des opportunités concrètes grâce à un réseau actif et solidaire.</p>
            <p>💡 Accompagner chaque talent avec un soutien personnalisé et des solutions adaptées.</p>
          </div>

<button className='inline-block  mt-10 bg-white text-indigo-500 font-semibold px-8 py-3 rounded-full shadow hover:shadow-lg hover:scale-105 transition' >
   <Link
            href="#programmes"
            className=" bg-clip-text text-transparent bg-gradient-to-br from-[#3b82f6] to-[#10b981] "

>
            Découvrir nos programmes →
          </Link>
</button>
       
        </div>
      </section>

      {/* SECTION 3 : Nos valeurs */}
      <section className="py-20 bg-white ">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl italic font-bold mb-12 bg-gradient-to-br bg-clip-text text-transparent from-[#3b82f6] to-[#10b981] ">
            Nos valeurs
          </h2>

          <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-6">
            {/* Valeur 1 */}
            <div className="bg-white/80 animate-on-scroll p-6 flex flex-col items-center justify-center cursor-pointer rounded-2xl text-center hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
             
             <Image
              src="/service.png"
              alt=''
              height={50}
              width={50}
             />
              <h3 className="font-semibold text-lg">Excellence</h3>
            </div>

            {/* Valeur 2 */}
            <div className="bg-white/80 animate-on-scroll p-6 flex flex-col items-center justify-center cursor-pointer rounded-2xl text-center hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
             <Image
              src="/solidarite.png"
              alt=''
              height={50}
              width={50}
             />
              <h3 className="font-semibold text-lg">Solidarité</h3>
            </div>

            {/* Valeur 3 */}
            <div className="bg-white/80 animate-on-scroll p-6 flex flex-col items-center justify-center cursor-pointer rounded-2xl text-center hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
              <Image
              src="/w15.png"
              alt=''
              height={50}
              width={50}
             />
              <h3 className="font-semibold text-lg">Innovation</h3>
            </div>

            {/* Valeur 4 */}
            <div className="bg-white/80 animate-on-scroll p-6 flex flex-col items-center justify-center cursor-pointer rounded-2xl text-center hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
              <Image
              src="/cible.png"
              alt=''
              height={50}
              width={50}
             />
              <h3 className="font-semibold text-lg">Impact</h3>
            </div>

            {/* Valeur 5 */}
            <div className="bg-white/80 animate-on-scroll p-6 flex flex-col items-center justify-center cursor-pointer rounded-2xl text-center hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
               <Image
              src="/authenticite.png"
              alt=''
              height={50}
              width={50}
             />
              <h3 className="font-semibold text-lg">Authenticité</h3>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 : Notre ambition */}


  <section className="bg-gradient-to-br from-[#3b82f6] to-[#10b981] text-white py-16 px-4 sm:px-8 md:px-16">
  <div className="max-w-5xl mx-auto text-center animate-fadeIn animate-on-scroll">
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 leading-snug">
      Devenir la référence panafricaine pour le développement des talents,
      l’employabilité et la formation continue en Afrique et au-delà.
    </h2>

    <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
      Nous rêvons d’une génération d’Africains formés, confiants et connectés à leurs ambitions.
    </p>
  </div>
</section>



  {/* SECTION 6 : Rejoignez notre mission */}
 

      <section className="py-20 bg-gray-50  px-6">
       <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
  <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
   <div className="relative w-full sm:w-80 md:w-96 h-60 sm:h-72 md:h-80 mt-6 md:mt-0 animate-on-scroll">
      <Image
        src="/w14.jpg"
        alt="Équipe Potential's Reveal"
        fill
        className="object-cover rounded-xl"
      />
    </div>

    {/* Texte */}
    <div className="w-full md:w-1/2  animate-on-scroll ">
         <h2 className="text-5xl max-lg:text-3xl font-bold mb-4 "> <span className=' bg-clip-text text-transparent bg-gradient-to-br from-[#3b82f6] to-[#10b981]'>Rejoignez notre mission</span> </h2>
          <p className="text-lg mb-3">
            Ensemble, construisons un avenir où chaque talent africain peut s’épanouir, apprendre et impacter son environnement.
          </p>
          <p className="text-md mb-8 opacity-90">
            Rejoignez un mouvement qui croit en la puissance du potentiel africain.
          </p>

<div className='text-end animate-on-scroll max-lg:text-center'>
<a
            href="#"
            className="inline-block bg-clip-text text-transparent  bg-gradient-to-br from-[#3b82f6] to-[#10b981] font-semibold px-8 py-3 rounded-full shadow hover:shadow-lg hover:scale-105 transition"
          >
            Nous rejoindre
          </a>

          <p className="mt-3 text-sm opacity-80">
            ✔ Communauté active ✔ Impact réel
          </p>
</div>
          
    </div>

    {/* Image */}
 
  </div>
</div>

      </section>

      {/* SECTION 5 : Contactez-nous */}
      <section className="bg-white py-20 px-6 sm:px-10 md:px-20 text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    {/* Titre */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold  mb-6">
    <span className='bg-clip-text text-transparent bg-gradient-to-br from-[#3b82f6] to-[#10b981] italic'>Contactez-nous</span>  
    </h2>

    {/* Texte d’intro */}
    <p className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-700 leading-relaxed">
      Une question, une collaboration, ou simplement envie d’en savoir plus sur Potential’s Reveal ?  
      Notre équipe est à votre écoute.
    </p>

    {/* Coordonnées */}
    <div className="mb-10 space-y-2 text-gray-700 animate-on-scroll">
      <p>📍 Cocody, Abidjan – Côte d’Ivoire</p>
      <p>📧 <a href="mailto:contact@potentialsreveal.com" className="text-blue-600 hover:underline">contact@potentialsreveal.com</a></p>
      <p>📞 +225 07 07 07 07 07</p>
    </div>

    {/* Réseaux sociaux */}
    <div className="flex justify-center gap-6 mb-12 animate-on-scroll">
      <Link
        href="https://www.linkedin.com/company/potentialsreveal"
        target="_blank"
        rel="noopener noreferrer"
        className=" size-10 place-content-center place-items-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110"
      >
              <FaLinkedinIn className='text-xl shrink-0 ' />

      </Link>
      <Link
        href="https://www.facebook.com/potentialsreveal"
        target="_blank"
        rel="noopener noreferrer"
        className=" place-content-center place-items-center size-10 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
      >
        <FaFacebook className='text-xl shrink-0 ' />
      </Link>
    </div>

    {/* Formulaire Tally */}
    <div className=' animate-on-scroll'>
<a
            href="#"
            className="inline-block bg-clip-text text-transparent  bg-gradient-to-br from-[#3b82f6] to-[#10b981] font-semibold px-8 py-3 rounded-full shadow hover:shadow-lg hover:scale-105 transition"
          >
            Nous rejoindre
          </a>
    
    </div>



        

  </div>
     </section>


    
    </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
