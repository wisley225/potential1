import Link from "next/link";
import Image from "next/image";

function Footer() {
    return ( 
        
      <footer className="bg-[#171717] text-white py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-white">
            <Image src="/logo.jpg" alt="Potential's Reveal" width={40} height={40} className="rounded" />
            <h3 className="text-lg md:text-xl font-bold leading-none text-white">
              Potential&apos;s <br /> Reveal
            </h3>
          </Link>
          <p className="text-white text-sm md:text-base">© 2025 Potential&apos;s Reveal. Tous droits réservés.</p>
        </div>
      </footer>
     );
}

export default Footer;