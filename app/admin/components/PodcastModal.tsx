'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PodcastModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (podcast: any) => void;
  editingPodcast?: any;
}

export default function PodcastModal({ isOpen, onClose, onSave, editingPodcast }: PodcastModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    category: 'Entrepreneuriat Tech',
    price: 25000,
    status: 'brouillon',
    coverImage: null as File | null,
    audioFile: null as File | null
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [program, setProgram] = useState([
    { time: '00:00', topic: 'Introduction' },
    { time: '05:00', topic: 'Présentation du sujet' },
    { time: '15:00', topic: 'Développement principal' },
    { time: '35:00', topic: 'Questions et réponses' },
    { time: '45:00', topic: 'Conclusion' }
  ]);

  const [leDevUltimeProfile] = useState({
    name: "LeDevUltime",
    description: "Expert en développement et entrepreneuriat tech, accompagnant les développeurs dans leur croissance professionnelle.",
    socialLinks: {
      twitter: "@LeDevUltime",
      linkedin: "linkedin.com/in/ledevultime",
      github: "github.com/ledevultime"
    }
  });

  useEffect(() => {
    if (editingPodcast) {
      setFormData({
        title: editingPodcast.title || '',
        description: editingPodcast.description || '',
        duration: editingPodcast.duration || '',
        category: editingPodcast.category || 'Entrepreneuriat Tech',
        price: editingPodcast.price || 25000,
        status: editingPodcast.status || 'brouillon',
        coverImage: null,
        audioFile: null
      });
    }
  }, [editingPodcast]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseInt(value) || 0 : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'coverImage' | 'audioFile') => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, [type]: file }));
    }
  };

  const handleProgramChange = (index: number, field: 'time' | 'topic', value: string) => {
    setProgram(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    ));
  };

  const addProgramItem = () => {
    setProgram(prev => [...prev, { time: '', topic: '' }]);
  };

  const removeProgramItem = (index: number) => {
    setProgram(prev => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    const podcastData = {
      ...formData,
      id: editingPodcast?.id || Date.now(),
      program,
      leDevUltimeProfile,
      date: editingPodcast?.date || new Date().toLocaleDateString('fr-FR'),
      createdAt: editingPodcast?.createdAt || new Date().toISOString().split('T')[0]
    };
    onSave(podcastData);
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      duration: '',
      category: 'Entrepreneuriat Tech',
      price: 25000,
      status: 'brouillon',
      coverImage: null,
      audioFile: null
    });
    setProgram([
      { time: '00:00', topic: 'Introduction' },
      { time: '05:00', topic: 'Présentation du sujet' },
      { time: '15:00', topic: 'Développement principal' },
      { time: '35:00', topic: 'Questions et réponses' },
      { time: '45:00', topic: 'Conclusion' }
    ]);
    setCurrentStep(1);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* En-tête */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-['SUSE_Mono'] text-[#1e293b]">
              {editingPodcast ? 'Modifier le Podcast' : 'Nouveau Podcast'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FontAwesomeIcon icon="times" className="w-6 h-6" />
            </button>
          </div>
          
          {/* Indicateur de progression */}
          <div className="flex items-center mt-4">
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep >= step 
                      ? 'bg-[#f59e0b] text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  <span className={`ml-2 text-sm ${
                    currentStep >= step ? 'text-[#1e293b] font-semibold' : 'text-gray-500'
                  }`}>
                    {step === 1 ? 'Informations' : step === 2 ? 'Programme' : 'Paiement'}
                  </span>
                  {step < 3 && (
                    <div className={`w-8 h-0.5 mx-2 ${
                      currentStep > step ? 'bg-[#f59e0b]' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contenu du modal */}
        <div className="p-6">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#1e293b] mb-4">Informations de base</h3>
              
              {/* Photo de couverture */}
              <div>
                <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                  Photo de couverture
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'coverImage')}
                  className="hidden"
                  id="cover-image"
                />
                <label htmlFor="cover-image" className="cursor-pointer block">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#f59e0b] hover:bg-orange-50 transition-colors">
                    <FontAwesomeIcon icon="image" className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Cliquez pour télécharger une image</p>
                    <p className="text-sm text-gray-400 mt-1">ou glissez-déposez votre fichier ici</p>
                  </div>
                </label>
              </div>

              {/* Fichier audio */}
              <div>
                <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                  Fichier audio
                </label>
                <input
                  type="file"
                  accept="audio/*"
                  onChange={(e) => handleFileChange(e, 'audioFile')}
                  className="hidden"
                  id="audio-file"
                />
                <label htmlFor="audio-file" className="cursor-pointer block">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#f59e0b] hover:bg-orange-50 transition-colors">
                    <FontAwesomeIcon icon="music" className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Cliquez pour télécharger le fichier audio</p>
                    <p className="text-sm text-gray-400 mt-1">ou glissez-déposez votre fichier ici</p>
                  </div>
                </label>
              </div>

              {/* Titre */}
              <div>
                <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                  Titre du podcast
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f59e0b] focus:outline-none transition-colors"
                  placeholder="Ex: Monétiser ses compétences avec LeDevUltime"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f59e0b] focus:outline-none transition-colors"
                  placeholder="Décrivez le contenu et les sujets abordés dans ce podcast..."
                />
              </div>

              {/* Durée et Catégorie */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                    Durée
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f59e0b] focus:outline-none transition-colors"
                    placeholder="Ex: 45 minutes"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                    Catégorie
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f59e0b] focus:outline-none transition-colors"
                  >
                    <option value="Entrepreneuriat Tech">Entrepreneuriat Tech</option>
                    <option value="Développement">Développement</option>
                    <option value="Technologie">Technologie</option>
                    <option value="Carrière">Carrière</option>
                    <option value="Innovation">Innovation</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#1e293b] mb-4">Programme du podcast</h3>
              
              <div className="bg-[#f8fafc] rounded-lg p-4">
                <h4 className="font-semibold text-[#1e293b] mb-4">Plan du podcast</h4>
                
                {program.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 mb-3 p-3 bg-white rounded-lg border border-gray-200">
                    <div className="w-20">
                      <input
                        type="text"
                        value={item.time}
                        onChange={(e) => handleProgramChange(index, 'time', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm focus:border-[#f59e0b] focus:outline-none"
                        placeholder="00:00"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={item.topic}
                        onChange={(e) => handleProgramChange(index, 'topic', e.target.value)}
                        className="w-full px-3 py-1 border border-gray-200 rounded text-sm focus:border-[#f59e0b] focus:outline-none"
                        placeholder="Sujet du segment"
                      />
                    </div>
                    {program.length > 1 && (
                      <button
                        onClick={() => removeProgramItem(index)}
                        className="text-[#dc2626] hover:text-[#b91c1c] transition-colors"
                      >
                        <FontAwesomeIcon icon="trash" className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
                
                <button
                  onClick={addProgramItem}
                  className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-[#475569] hover:border-[#f59e0b] hover:text-[#f59e0b] transition-colors flex items-center justify-center mt-4"
                >
                  <FontAwesomeIcon icon="plus" className="w-4 h-4 mr-2" />
                  Ajouter un segment
                </button>
              </div>

              {/* Profil LeDevUltime */}
              <div className="bg-[#f8fafc] rounded-lg p-4">
                <h4 className="font-semibold text-[#1e293b] mb-3">Profil de l&apos;animateur</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-semibold text-[#1e293b] mb-1">Nom</label>
                    <input
                      type="text"
                      value={leDevUltimeProfile.name}
                      className="w-full px-3 py-2 border border-gray-200 rounded bg-white"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1e293b] mb-1">Description</label>
                    <textarea
                      value={leDevUltimeProfile.description}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-200 rounded bg-white"
                      disabled
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-[#1e293b] mb-1">Twitter</label>
                      <input
                        type="text"
                        value={leDevUltimeProfile.socialLinks.twitter}
                        className="w-full px-3 py-2 border border-gray-200 rounded bg-white"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1e293b] mb-1">LinkedIn</label>
                      <input
                        type="text"
                        value={leDevUltimeProfile.socialLinks.linkedin}
                        className="w-full px-3 py-2 border border-gray-200 rounded bg-white"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1e293b] mb-1">GitHub</label>
                      <input
                        type="text"
                        value={leDevUltimeProfile.socialLinks.github}
                        className="w-full px-3 py-2 border border-gray-200 rounded bg-white"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#1e293b] mb-4">Informations de paiement</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                    Prix (FCFA)
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f59e0b] focus:outline-none transition-colors"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                    Statut
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f59e0b] focus:outline-none transition-colors"
                  >
                    <option value="brouillon">Brouillon</option>
                    <option value="publié">Publié</option>
                  </select>
                </div>
              </div>

              <div className="bg-[#f8fafc] rounded-lg p-4">
                <h4 className="font-semibold text-[#1e293b] mb-3">Résumé du podcast</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Titre:</strong> {formData.title || 'Non défini'}</div>
                  <div><strong>Catégorie:</strong> {formData.category}</div>
                  <div><strong>Durée:</strong> {formData.duration || 'Non définie'}</div>
                  <div><strong>Nombre de segments:</strong> {program.length}</div>
                  <div><strong>Prix:</strong> {formData.price.toLocaleString()} FCFA</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Pied du modal */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-2xl">
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentStep === 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 text-[#1e293b] hover:bg-gray-300'
              }`}
            >
              Précédent
            </button>
            
            <div className="flex space-x-3">
              <button
                onClick={onClose}
                className="px-6 py-3 border-2 border-gray-200 text-[#475569] rounded-lg font-semibold hover:border-gray-300 transition-colors"
              >
                Annuler
              </button>
              
              {currentStep < 3 ? (
                <button
                  onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
                  className="px-6 py-3 bg-[#f59e0b] text-white rounded-lg font-semibold hover:bg-[#d97706] transition-colors"
                >
                  Suivant
                </button>
              ) : (
                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-[#10b981] text-white rounded-lg font-semibold hover:bg-[#059669] transition-colors"
                >
                  {editingPodcast ? 'Mettre à jour' : 'Créer le podcast'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
