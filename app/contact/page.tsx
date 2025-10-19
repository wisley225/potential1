'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


export default function Contact() {
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
    <div className="min-h-screen bg-[#fffff9] text-[#1e293b]">
    
    <Navbar/>
    <main>
        {/* Section Contact */}
        <section className="py-20 px-5">
          <div className="max-w-6xl mx-auto">
            <h1 className="animate-on-scroll text-6xl font-['SUSE_Mono'] text-[#1e293b] text-center mb-8">
              Contactez-nous
            </h1>
            
            <div className="animate-on-scroll bg-white rounded-2xl p-8 border-3 border-[#171717] shadow-[8px_8px_0_#171717] mb-12">
              <h2 className="text-4xl font-['SUSE_Mono'] text-[#1e293b] mb-6 text-center">
                Restons en contact
              </h2>
              <p className="text-lg text-center mb-12 text-dark">
                Une question, une idée ou une envie de collaborer ? Notre équipe est disponible pour échanger avec vous.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Informations de contact */}
                <div className="space-y-6">
                  <div className="contact-card bg-[#fffceb] rounded-xl p-6 border-2 border-[#442604]">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 bg-[#fed841] rounded-full flex items-center justify-center">
                        <span className="text-[#1e293b] text-lg">📧</span>
                      </div>
                      <h3 className="text-xl font-['SUSE_Mono'] text-[#1e293b]">
                        Email
                      </h3>
                    </div>
                    <a href="mailto:contact@potentialsreveal.com" className="text-dark hover:text-[#3b82f6] transition-colors">
                      contact@potentialsreveal.com
                    </a>
                  </div>

                  <div className="contact-card bg-[#fffceb] rounded-xl p-6 border-2 border-[#442604]">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 bg-[#fed841] rounded-full flex items-center justify-center">
                        <span className="text-[#1e293b] text-lg">📱</span>
                      </div>
                      <h3 className="text-xl font-['SUSE_Mono'] text-[#1e293b]">
                        Téléphone
                      </h3>
                    </div>
                    <div className="space-y-2">
                      <a href="tel:+2250768434143" className="block text-dark hover:text-[#3b82f6] transition-colors">
                        +225 07 68 43 41 43
                      </a>
                      <a href="tel:+2250151458512" className="block text-dark hover:text-[#3b82f6] transition-colors">
                        +225 01 51 45 85 12
                      </a>
                    </div>
                  </div>

                  <div className="contact-card bg-[#fffceb] rounded-xl p-6 border-2 border-[#442604]">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 bg-[#fed841] rounded-full flex items-center justify-center">
                        <span className="text-[#1e293b] text-lg">💬</span>
                      </div>
                      <h3 className="text-xl font-['SUSE_Mono'] text-[#1e293b]">
                        WhatsApp
                      </h3>
                    </div>
                    <p className="text-dark">
                      Lien sur demande
                    </p>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-['SUSE_Mono'] text-[#1e293b] mb-6">
                    Réseaux sociaux
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="contact-card bg-[#fffceb] rounded-xl p-6 border-2 border-[#442604] flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#3b5998] rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">f</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1e293b]">Facebook</h4>
                        <p className="text-dark text-sm">Suivez notre actualité</p>
                      </div>
                    </div>

                    <div className="contact-card bg-[#fffceb] rounded-xl p-6 border-2 border-[#442604] flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#0077b5] rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">in</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1e293b]">LinkedIn</h4>
                        <p className="text-dark text-sm">Connectez-vous avec nous</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="contact-card bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] text-white rounded-2xl p-8 border-3 border-[#171717] shadow-[8px_8px_0_#171717] text-center">
              <h2 className="text-4xl font-['SUSE_Mono'] mb-6">
                Écrivez-nous
              </h2>
              <p className="text-xl mb-8">
                N&apos;hésitez pas à nous faire part de vos questions ou de vos projets. Nous vous répondrons dans les plus brefs délais.
              </p>
              <a 
                href="mailto:contact@potentialsreveal.com"
                className="bg-white text-[#3b82f6] px-8 py-4 rounded-xl font-bold text-lg border-3 border-[#171717] shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all inline-block"
              >
                Envoyer un email
              </a>
            </div>
          </div>
        </section>

        {/* Section CTA finale */}
        <section className="bg-[#fffceb] py-20 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-5xl font-['SUSE_Mono'] text-[#1e293b] mb-5">
              Prêt à nous rejoindre ?
            </h2>
            <p className="text-lg mb-10">
              Rejoignez une communauté dynamique qui transforme les talents en leaders de demain.
            </p>
            <div className="cta-block">
              <Link href="/" className="bg-[#3b82f6] text-white px-9 py-4.5 rounded-xl font-bold text-lg border-3 border-white shadow-lg hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all inline-block">
                Découvrir nos services
              </Link>
              <div className="flex justify-center gap-5 mt-4 text-sm">
                <span>✔ Communauté active</span>
                <span>✔ Accompagnement personnalisé</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
