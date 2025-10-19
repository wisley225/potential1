
"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
const   PlanCarriere=() => {
  return (
    <div className="min-h-screen flex flex-col">
    
     <Navbar/>
      {/* HERO SECTION */}
      <section className="  background-carriere text-white  text-center">

<div className="h-[90vh] flex justify-center flex-col items-center backdrop-brightness-75 px-4 md:px-0">
  <h1 className="text-3xl text-white font-['SUSE_Mono'] mb-4 md:text-5xl text-center">
    Construis ton avenir, un plan à la fois.
  </h1>
  <p className="max-w-full md:max-w-xl text-white mx-auto mb-8 text-base md:text-xl text-center px-2 md:px-0">
    Avec Potential’s Reveal, découvre un plan de carrière personnalisé qui t’aide à clarifier tes objectifs, renforcer tes compétences et atteindre tes ambitions professionnelles.
  </p>

        <button className="bg-white rounded-lg px-8 py-4  shadow-lg hover:-translate-y-1 transition">
  <Link
          href="https://tally.so/r/w5RyJN"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white bg-clip-text text-transparent  bg-gradient-to-br from-[#3b82f6] to-[#10b981]  font-bold "
        >
          Créer mon plan de carrière &rarr;
        </Link>
        </button>
  <p className="mt-4 text-xs md:text-sm flex flex-col md:flex-row justify-center gap-2 md:gap-4 items-center text-white text-center">
    <span className=" text-white ">✔ Analyse personnalisée</span>
    <span className=" text-white ">✨ Résultats immédiats</span>
    <span className=" text-white ">💸 Accès gratuit</span>
  </p>
</div>

     
   

      </section>

      {/* Pourquoi un plan de carrière ? */}
      <section className="container mx-auto px-6 py-20 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-6">Pourquoi un plan de carrière ?</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Parce qu’un avenir clair commence par une direction précise. Notre plan de carrière t’aide à transformer tes ambitions en actions concrètes.
        </p>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-2 flex flex-col justify-evenly items-center space-y-5  hover:shadow-2xl rounded-lg shadow-lg transition-all cursor-pointer hover:bg-gradient-to-br from-[#3b82f6] to-[#10b981] hover:text-white">
            <h3 className="font-semibold text-xl mb-2">Clarté</h3>
            <p>Identifie tes forces et tes axes d’amélioration.</p>
             <Image
             src="/clarte.png"
             alt="image "
             width={50}
             height={50}
             className=""
            />
          </div>
          <div className="p-2 flex space-y-5 flex-col items-center justify-evenly  hover:shadow-2xl rounded-lg shadow-lg transition-all cursor-pointer hover:bg-gradient-to-br from-[#3b82f6] to-[#10b981] hover:text-white">
            <h3 className="font-semibold text-xl mb-2">Confiance</h3>
            <p>Redéfinis ton projet pro à ton image.</p>
            <Image
             src="/confiance.png"
             alt="image "
             width={50}
             height={50}
             className=""
            />
          </div>
          <div className="p-2 flex flex-col space-y-5 items-center justify-evenly   hover:shadow-2xl rounded-lg shadow-lg transition-all cursor-pointer hover:bg-gradient-to-br from-[#3b82f6] to-[#10b981] hover:text-white">
            <h3 className="font-semibold text-xl mb-2">Opportunités</h3>
            <p>Découvre des pistes de carrière adaptées à ton profil.</p>
               <Image
             src="/opportunite.png"
             alt="image "
             width={50}
             height={50}
            />
          </div>
          <div className="p-2 flex flex-col items-center space-y-5 justify-center  hover:shadow-2xl rounded-lg shadow-lg transition-all cursor-pointer hover:bg-gradient-to-br from-[#3b82f6] to-[#10b981] hover:text-white">
            <h3 className="font-semibold text-xl mb-2">Passage à l’action</h3>
            <p>Reçois des recommandations concrètes de formations et de mentors.</p>
              <Image
             src="/action.png"
             alt="image "
             width={50}
             height={50}
            />
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="/plan-exemple.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline"
          >
            Découvrir un exemple de plan &rarr;
          </a>
        </div>
      </section>

      {/* Comment ça marche ? */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
         
<div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8">
  {/* Étape 1 */}
  <div className="flex cursor-pointer hover:shadow-2xl transition-all p-2 bg-gradient-to-br space-y-10 from-[#3b82f6] to-[#10b981] rounded-xl  flex-col items-center text-center max-w-xs mx-auto md:mx-0">
    <div className="mb-4 p-4 rounded-full bg-white font-bold text-lg w-16 h-16 flex items-center justify-center">
      1
    </div>
    <h3 className="font-semibold mb-2 text-white">[translate:Évaluation de ton profil]</h3>
    <p className="text-white">[translate:Quiz / auto-diagnostic]</p>
  </div>
  {/* Étape 2 */}
  <div className="flex cursor-pointer hover:shadow-2xl transition-all bg-gradient-to-br space-y-10 from-[#3b82f6] to-[#10b981] flex-col rounded-xl p-2 items-center text-center max-w-xs mx-auto md:mx-0">
    <div className="mb-4 p-4 rounded-full bg-white font-bold text-lg w-16 h-16 flex items-center justify-center">
      2
    </div>
    <h3 className="font-semibold mb-2 text-white">[translate:Analyse de ton potentiel]</h3>
    <p className="text-white">[translate:Synthèse automatique]</p>
  </div>
  {/* Étape 3 */}
  <div className="flex cursor-pointer hover:shadow-2xl transition-all bg-gradient-to-br space-y-10 from-[#3b82f6] to-[#10b981] p-2 rounded-xl flex-col items-center text-center max-w-xs mx-auto md:mx-0">
    <div className="mb-4 p-4 rounded-full bg-white font-bold text-lg w-16 h-16 flex items-center justify-center">
      3
    </div>
    <h3 className="font-semibold mb-2 text-white">[translate:Plan de carrière personnalisé]</h3>
    <p className="text-white">[translate:Plan + recommandations Reveal]</p>
  </div>
  {/* Étape 4 */}
  <div className="flex cursor-pointer hover:shadow-2xl transition-all bg-gradient-to-br space-y-10 from-[#3b82f6] to-[#10b981] pt-2 rounded-xl flex-col items-center text-center max-w-xs mx-auto md:mx-0">
    <div className="mb-4 p-4 rounded-full bg-white font-bold text-lg w-16 h-16 flex items-center justify-center">
      4
    </div>
    <h3 className="font-semibold mb-2 text-white">[translate:Mise en action]</h3>
    <p className="text-white">[translate:Accès aux formations, défis et communauté]</p>
  </div>
</div>


          <div className="text-center mt-12">
            <a
              href="https://tally.so/r/w5RyJN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Commencer mon évaluation &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Témoignages */}
     <section className="mx-auto max-w-4xl py-20 px-6 text-center space-y-10">
  <h2 className="text-3xl font-bold mb-12">Ce qu’ils en disent</h2>
  <div className="flex flex-col md:flex-row items-center justify-center gap-10">
    <div className="border-l-4 space-y-5 border-blue-400 pl-6 text-gray-700 italic max-w-xl mx-auto">
      <div className="flex space-x-3 items-center justify-center">
        <div className="w-14 h-14 rounded-full relative overflow-hidden">
          <Image
            src="/w11.jpg"
            alt=""
            fill
            className="object-cover rounded-full"
          />
        </div>
        <span className="mt-2 font-semibold text-gray-900">— [translate:Prisca, Abidjan]</span>
      </div>
      <p>“[translate:Mon plan Reveal m’a permis de découvrir une voie que je n’aurais jamais imaginée.]”</p>
    </div>

    <div className="border-l-4 space-y-5 border-blue-400 pl-6 text-gray-700 italic max-w-xl mx-auto">
      <div className="flex space-x-3 items-center justify-center">
        <div className="w-14 h-14 rounded-full relative overflow-hidden">
          <Image
            src="/w12.jpg"
            alt=""
            fill
            className="object-cover rounded-full"
          />
        </div>
        <span className="mt-2 font-semibold text-gray-900">— [translate:Mahamane, Cotonou]</span>
      </div>
      <p>“[translate:C’est comme avoir un mentor digital à ses côtés.]”</p>
    </div>
  </div>

  {/* Note moyenne si disponible */}
  <div className=" font-bold text-2xl">
  <span className="text-yellow-400"> ★★★★★</span> <span> (95% de satisfaction)</span>  
  </div>
</section>



 
     <section className="bg-gradient-to-br   space-y-10 from-[#3b82f6] to-[#10b981]  text-white py-20 px-6 ">
       
    <div className="flex flex-col gap-10 md:flex-row justify-center items-center">
  <div className="w-full md:w-1/2">
    <h2 className="text-4xl font-extrabold mb-6 text-center md:text-left">
      Prêt·e à révéler ton potentiel et à tracer ton chemin ?
    </h2>
    <p className="max-w-xl mx-auto md:mx-0 mb-8 text-lg text-center md:text-left">
      Commence ton plan de carrière dès aujourd’hui.
    </p>

    <button className="bg-white rounded-lg px-8 py-4 shadow-lg hover:-translate-y-1 transition mx-auto md:mx-0 block">
      <Link
        href="https://tally.so/r/w5RyJN"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white bg-clip-text text-transparent bg-gradient-to-br from-[#3b82f6] to-[#10b981] font-bold"
      >
        Créer mon plan de carrière &rarr;
      </Link>
    </button>
  </div>

  <div className="w-full md:w-96 h-64 md:h-80 relative">
    <Image
      src="/w13.jpg"
      alt="Communauté d'apprenants"
      fill
      className="object-cover rounded-xl"
    />
  </div>
</div>

     
        <p className="mt-4 text-sm text-center">Gratuit, personnalisé, sans engagement.</p>
        
      </section> 

      <Footer/>
    </div>
  );
}

export default PlanCarriere;