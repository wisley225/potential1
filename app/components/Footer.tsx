import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-5 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.jpg" alt="Potential's Reveal" width={32} height={32} className="rounded" />
              <h3 className="text-lg font-bold">
                Potential&apos;s Reveal
              </h3>
            </div>
            <p className="text-gray-300 text-sm">
            Rejoins une communauté qui croit en ton avenir et t’aide à le construire pas à pas
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/formations" className="hover:text-white transition-colors">Nos formations</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>📧 operations@potentialsreveal.com </p>
              <p>📱 +225 05 86 15 06 96 </p>
              
            </div>
          </div>
        </div>
        <ul className='flex space-x-10 text-2xl'>
          <li> <FaLinkedinIn/></li>
          <li><FaInstagram/></li>
          <li><FaYoutube/></li>
          <li><FaWhatsapp/></li>
        </ul>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Potential&apos;s Reveal. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
