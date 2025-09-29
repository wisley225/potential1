'use client';

import { useEffect, useState } from 'react';
import FormationModal from '../components/FormationModal';
import PodcastModal from '../components/PodcastModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type typage={
      id: number;
    title: string;
    description: string;
    difficulty: string;
    technology: string;
    videoCount: number;
    category: string;
    price: number;
    status: string;
    createdAt: string;

}



type typage2={
    id: number;
    title: string;
    description: string;
    duration: string;
    category: string;
    price: number;
    status: string;
    createdAt: string;
}
export default function ContentManagement() {
  const [activeTab, setActiveTab] = useState('formations');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'formation' ou 'podcast'
  const [editingItem, setEditingItem] = useState<typage|null>(null);
  const [editingItem2, setEditingItem2] = useState<typage2|null>(null);

  // Données des formations
  const [formations, setFormations] = useState<typage []>([
    {
      id: 1,
      title: "Application de prise de note",
      description: "Dans ce tutoriel complet, apprenez à créer une application de prise de notes moderne avec React Native, Expo et Firebase.",
      difficulty: "Facile",
      technology: "Next.js",
      videoCount: 33,
      category: "Développement Web",
      price: 45000,
      status: "publié",
      createdAt: "2024-03-15"
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
      status: "publié",
      createdAt: "2024-03-10"
    },
    {
      id: 3,
      title: "React Avancé",
      description: "Maîtrisez les concepts avancés de React : hooks, context, performance et bonnes pratiques.",
      difficulty: "Avancé",
      technology: "React",
      videoCount: 28,
      category: "Développement Web",
      price: 45000,
      status: "brouillon",
      createdAt: "2024-03-18"
    }
  ]);

  // Données des podcasts
  const [podcasts, setPodcasts] = useState<typage2 []>([
    {
      id: 1,
      title: "Monétiser ses compétences avec LeDevUltime",
      description: "Découvrez comment transformer vos compétences techniques en sources de revenus durables et intelligentes.",
      duration: "45 minutes",
      category: "Entrepreneuriat Tech",
      price: 25000,
      status: "publié",
      createdAt: "2024-03-12"
    },
    {
      id: 2,
      title: "Les secrets du développement full-stack",
      description: "Une conversation approfondie sur les meilleures pratiques pour devenir un développeur full-stack performant.",
      duration: "52 minutes",
      category: "Développement",
      price: 25000,
      status: "publié",
      createdAt: "2024-03-08"
    },
    {
      id: 3,
      title: "L'avenir du développement web",
      description: "Exploration des tendances et technologies émergentes dans le développement web moderne.",
      duration: "38 minutes",
      category: "Technologie",
      price: 25000,
      status: "brouillon",
      createdAt: "2024-03-20"
    }
  ]);

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

  const handleAddNew = (type:string) => {
    setModalType(type);
    setEditingItem(null);
    setShowModal(true);
  };

  const handleEdit = (item:typage, type:string) => {
    setModalType(type);
    setEditingItem(item);
    setShowModal(true);
  };

    const handleEdit2 = (item:typage2, type:string) => {
    setModalType(type);
    setEditingItem2(item);
    setShowModal(true);
  };


  const handleSaveFormation = (formationData:typage) => {
    if (editingItem) {
      setFormations(formations.map(f => f.id === editingItem.id ? formationData : f));
    }
    else if(editingItem2){
        setFormations(formations.map(f => f.id === editingItem2.id ? formationData : f));

    } 
    
    else {
      setFormations([...formations, formationData]);
    }
    setShowModal(false);
  };

  const handleSavePodcast = (podcastData:typage2) => {
    if (editingItem) {
      setPodcasts(podcasts.map(p => p.id === editingItem.id ? podcastData : p));
    } 
    else if(editingItem2){
       setPodcasts(podcasts.map(p => p.id === editingItem2.id ? podcastData : p));

    }
    
    else {
      setPodcasts([...podcasts, podcastData]);
    }
    setShowModal(false);
  };

  const handleDelete = (id: number, type:string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
      if (type === 'formation') {
        setFormations(formations.filter(f => f.id !== id));
      } else {
        setPodcasts(podcasts.filter(p => p.id !== id));
      }
    }
  };

  const toggleStatus = (id:number, type:string) => {
    if (type === 'formation') {
      setFormations(formations.map(f => 
        f.id === id ? { ...f, status: f.status === 'publié' ? 'brouillon' : 'publié' } : f
      ));
    } else {
      setPodcasts(podcasts.map(p => 
        p.id === id ? { ...p, status: p.status === 'publié' ? 'brouillon' : 'publié' } : p
      ));
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* En-tête */}
        <div className="mb-8 animate-on-scroll">
          <h1 className="text-3xl md:text-4xl font-['SUSE_Mono'] text-[#1e293b] mb-2">
            Gestion du Contenu
          </h1>
          <p className="text-[#475569]">
            Gérez vos formations et podcasts
          </p>
        </div>

        {/* Onglets */}
        <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-sm mb-8 animate-on-scroll">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('formations')}
              className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                activeTab === 'formations'
                  ? 'text-[#3b82f6] border-b-2 border-[#3b82f6] bg-[#f8fafc]'
                  : 'text-[#475569] hover:text-[#1e293b]'
              }`}
            >
              📚 Formations ({formations.length})
            </button>
            <button
              onClick={() => setActiveTab('podcasts')}
              className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                activeTab === 'podcasts'
                  ? 'text-[#3b82f6] border-b-2 border-[#3b82f6] bg-[#f8fafc]'
                  : 'text-[#475569] hover:text-[#1e293b]'
              }`}
            >
              🎧 Podcasts ({podcasts.length})
            </button>
          </div>

          {/* Contenu des onglets */}
          <div className="p-6">
            {activeTab === 'formations' && (
              <div>
                {/* En-tête des formations */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-[#1e293b]">Formations</h2>
                    <p className="text-[#475569]">Gérez vos formations et leur contenu</p>
                  </div>
                  <button
                    onClick={() => handleAddNew('formation')}
                    className="bg-[#10b981] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#059669] transition-colors flex items-center"
                  >
                    <FontAwesomeIcon icon="plus" className="w-5 h-5 mr-2" />
                    Nouvelle Formation
                  </button>
                </div>

                {/* Liste des formations */}
                <div className="grid gap-6">
                  {formations.map((formation, index) => (
                    <div key={formation.id} className="bg-[#f8fafc] rounded-xl p-6 border-2 border-gray-200 animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          {/* Image de la formation */}
                          <div className="w-24 h-16 rounded-lg overflow-hidden" style={{
                            backgroundImage: 'url(/logo.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}>
                            <div className="w-full h-full bg-gradient-to-br from-blue-600/70 to-purple-600/70"></div>
                          </div>
                          
                          {/* Informations */}
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-[#1e293b]">{formation.title}</h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                formation.status === 'publié' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {formation.status}
                              </span>
                            </div>
                            
                            <p className="text-[#475569] text-sm mb-3 line-clamp-2">{formation.description}</p>
                            
                            <div className="flex items-center space-x-4 text-sm text-[#475569]">
                              <span>📚 {formation.category}</span>
                              <span>🎯 {formation.difficulty}</span>
                              <span>💻 {formation.technology}</span>
                              <span>🎥 {formation.videoCount} vidéos</span>
                              <span>💰 {formation.price.toLocaleString()} FCFA</span>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => toggleStatus(formation.id, 'formation')}
                            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                              formation.status === 'publié'
                                ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                                : 'bg-green-100 text-green-800 hover:bg-green-200'
                            }`}
                          >
                            {formation.status === 'publié' ? 'Dépublier' : 'Publier'}
                          </button>
                          <button
                            onClick={() => handleEdit(formation, 'formation')}
                            className="text-[#3b82f6] hover:text-[#2563eb] transition-colors"
                            title="Modifier"
                          >
                            <FontAwesomeIcon icon="edit" className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(formation.id, 'formation')}
                            className="text-[#dc2626] hover:text-[#b91c1c] transition-colors"
                            title="Supprimer"
                          >
                            <FontAwesomeIcon icon="trash" className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'podcasts' && (
              <div>
                {/* En-tête des podcasts */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-[#1e293b]">Podcasts</h2>
                    <p className="text-[#475569]">Gérez vos podcasts et leur contenu</p>
                  </div>
                  <button
                    onClick={() => handleAddNew('podcast')}
                    className="bg-[#f59e0b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d97706] transition-colors flex items-center"
                  >
                    <FontAwesomeIcon icon="plus" className="w-5 h-5 mr-2" />
                    Nouveau Podcast
                  </button>
                </div>

                {/* Liste des podcasts */}
                <div className="grid gap-6">
                  {podcasts.map((podcast, index) => (
                    <div key={podcast.id} className="bg-[#f8fafc] rounded-xl p-6 border-2 border-gray-200 animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          {/* Image du podcast */}
                          <div className="w-24 h-16 rounded-lg overflow-hidden" style={{
                            backgroundImage: 'url(/logo.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}>
                            <div className="w-full h-full bg-gradient-to-br from-green-600/70 to-blue-600/70"></div>
                          </div>
                          
                          {/* Informations */}
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-[#1e293b]">{podcast.title}</h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                podcast.status === 'publié' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {podcast.status}
                              </span>
                            </div>
                            
                            <p className="text-[#475569] text-sm mb-3 line-clamp-2">{podcast.description}</p>
                            
                            <div className="flex items-center space-x-4 text-sm text-[#475569]">
                              <span>🎧 {podcast.category}</span>
                              <span>⏱️ {podcast.duration}</span>
                              <span>💰 {podcast.price.toLocaleString()} FCFA</span>
                              <span>📅 {new Date(podcast.createdAt).toLocaleDateString('fr-FR')}</span>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => toggleStatus(podcast.id, 'podcast')}
                            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                              podcast.status === 'publié'
                                ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                                : 'bg-green-100 text-green-800 hover:bg-green-200'
                            }`}
                          >
                            {podcast.status === 'publié' ? 'Dépublier' : 'Publier'}
                          </button>
                          <button
                            onClick={() => handleEdit2(podcast, 'podcast')}
                            className="text-[#3b82f6] hover:text-[#2563eb] transition-colors"
                            title="Modifier"
                          >
                            <FontAwesomeIcon icon="edit" className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(podcast.id, 'podcast')}
                            className="text-[#dc2626] hover:text-[#b91c1c] transition-colors"
                            title="Supprimer"
                          >
                            <FontAwesomeIcon icon="trash" className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      {showModal && modalType === 'formation' && (
        <FormationModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSave={handleSaveFormation}
          editingFormation={editingItem}
        />
      )}

      {showModal && modalType === 'podcast' && (
        <PodcastModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSave={handleSavePodcast}
          editingPodcast={editingItem}
        />
      )}
    </div>
  );
}
