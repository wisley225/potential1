'use client';

// Import Suspense from React, as it's required for the boundary
import { Suspense, useEffect, useState } from 'react'; 
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// Define the User interface
interface User {
  email: string;
  password: string;
  role: 'user' | 'admin';
  name: string;
}

// Test users data
const testUsers: Record<string, User> = {
  'test@gmail.com': { email: 'test@gmail.com', password: 'test123', role: 'user', name: 'Utilisateur Test' },
  'admin@gmail.com': { email: 'admin@gmail.com', password: 'admin123', role: 'admin', name: 'Administrateur' },
};

/**
 * LoginContent is the component that contains all the login logic and UI,
 * including the use of useSearchParams(). It must be rendered inside a 
 * Suspense boundary to prevent the prerendering error.
 */
function LoginContent() {
  const router = useRouter();
  // useSearchParams is now safely used inside this component because 
  // its parent component (LoginWrapper, exported below) provides the Suspense boundary.
  const searchParams = useSearchParams();
  
  const [redirectUrl, setRedirectUrl] = useState('/dashboard');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Reading searchParams to determine redirect URL
    const redirect = searchParams.get('redirect');
    if (redirect) setRedirectUrl(redirect);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const user = testUsers[loginData.email];

    if (user && user.password === loginData.password) {
      setTimeout(() => {
        // Mock authentication success
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect based on role or the provided redirectUrl
        router.push(user.role === 'admin' ? '/admin' : redirectUrl);
        setIsLoading(false);
      }, 500);
    } else {
      setError('Email ou mot de passe incorrect');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffff9] text-[#1e293b] flex flex-col">
     <Navbar/>

      <main className="flex-grow flex items-center justify-center py-12 md:py-20">
        <div className="max-w-md w-full mx-4 md:mx-5">
          <div className="bg-white rounded-2xl p-6 md:p-8 border-3 border-[#171717] shadow-[8px_8px_0_#171717]">
            <div className="text-center mb-8">
              {/* Using a placeholder image for demonstration */}
              <Image src="/logo.jpg" alt="Potential's Reveal Logo" width={60} height={60} className="rounded mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-[#442604] mb-2">Connexion</h1>
              <p>Connectez-vous à votre compte Potential&apos;s Reveal</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl text-sm font-medium">{error}</div>}
              <input
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-[#442604] rounded-xl focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all"
              />
              <input
                type="password"
                placeholder="Mot de passe"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-[#442604] rounded-xl focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all"
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-xl font-bold transition-all  ${
                  isLoading
                    ? 'bg-[#1A4B84] text-white  cursor-pointer '
                    : 'bg-[#1A4B84] text-white hover:bg-blue-800 hover:shadow-lg cursor-pointer '
                }`}
              >
                {isLoading ? 'Connexion...' : 'Se connecter'}
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              Pas encore de compte ? <Link href="/register" className="text-[#3b82f6] font-semibold hover:underline">Créer un compte</Link>
            </div>

            <div className="mt-4 text-xs text-gray-600 text-center p-3 border border-dashed rounded-lg">
              <p className="font-semibold mb-1">Informations de connexion de test :</p>
              <p>Utilisateur : <code>test@gmail.com</code> / <code>test123</code></p>
              <p>Admin : <code>admin@gmail.com</code> / <code>admin123</code></p>
            </div>
          </div>
        </div>
      </main>

      {/* Assuming Footer is also imported and valid */}
      <Footer />
    </div>
  );
}

/**
 * This is the default exported Page component.
 * It acts as the Server Component root (even in a 'use client' file) 
 * and provides the necessary Suspense boundary.
 * The name is changed to LoginWrapper to emphasize its role.
 */
export default function LoginWrapper() {
  return (
    <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#fffff9]">
            <div className="text-xl font-semibold text-[#3b82f6]">
                Chargement de la page de connexion...
            </div>
        </div>
    }>
      <LoginContent />
    </Suspense>
  );
}
