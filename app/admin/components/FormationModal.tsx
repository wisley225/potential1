'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FormationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (formation: Formation) => void;
  editingFormation?: Formation;
}
type Chapter = {
  id: number;
  title: string;
  description: string;
  duration: string;
  videoUrl: string;
  videoFile: File | null;
  videoType: string;
};

interface Formation {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  technology: string;
  videoCount: number;
  category: string;
  price: number;
  status: string;
  coverImage: File | null;
  chapters: Chapter[];
  createdAt: string;
}

export default function FormationModal({ isOpen, onClose, onSave, editingFormation }: FormationModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    difficulty: 'Facile',
    technology: '',
    videoCount: 0,
    category: 'Développement Web',
    price: 45000,
    status: 'brouillon',
    coverImage: null as File | null
  });

  const [currentStep, setCurrentStep] = useState(1);



  const [chapters, setChapters] = useState<Chapter[]>([
    { id: 1, title: '', description: '', duration: '', videoUrl: '', videoFile: null, videoType: 'url' }
  ]);

  useEffect(() => {
    if (editingFormation) {
      setFormData({
        title: editingFormation.title || '',
        description: editingFormation.description || '',
        difficulty: editingFormation.difficulty || 'Facile',
        technology: editingFormation.technology || '',
        videoCount: editingFormation.videoCount || 0,
        category: editingFormation.category || 'Développement Web',
        price: editingFormation.price || 45000,
        status: editingFormation.status || 'brouillon',
        coverImage: null
      });
    }
  }, [editingFormation]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'videoCount' || name === 'price' ? parseInt(value) || 0 : value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, coverImage: file }));
    }
  };

  const handleChapterChange = (index: number, field: string, value: string | File | null) => {
    setChapters(prev => prev.map((chapter, i) => 
      i === index ? { ...chapter, [field]: value } : chapter
    ));
  };

  const handleVideoFileChange = (index: number, file: File | null) => {
    setChapters(prev => prev.map((chapter, i) => 
      i === index ? { ...chapter, videoFile: file, videoType: file ? 'upload' : 'url' } : chapter
    ));
  };

  const addChapter = () => {
    setChapters(prev => [...prev, { 
      id: prev.length + 1, 
      title: '', 
      description: '', 
      duration: '', 
      videoUrl: '', 
      videoFile: null, 
      videoType: 'url' 
    }]);
  };

  const removeChapter = (index: number) => {
    setChapters(prev => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    const formationData = {
      ...formData,
      id: editingFormation?.id || Date.now(),
      chapters,
      createdAt: editingFormation?.createdAt || new Date().toISOString().split('T')[0]
    };
    onSave(formationData);
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      difficulty: 'Facile',
      technology: '',
      videoCount: 0,
      category: 'Développement Web',
      price: 45000,
      status: 'brouillon',
      coverImage: null
    });
    setChapters([{ id: 1, title: '', description: '', duration: '', videoUrl: '', videoFile: null, videoType: 'url' }]);
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
              {editingFormation ? 'Modifier la Formation' : 'Nouvelle Formation'}
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
                      ? 'bg-[#3b82f6] text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  <span className={`ml-2 text-sm ${
                    currentStep >= step ? 'text-[#1e293b] font-semibold' : 'text-gray-500'
                  }`}>
                    {step === 1 ? 'Informations' : step === 2 ? 'Chapitres' : 'Paiement'}
                  </span>
                  {step < 3 && (
                    <div className={`w-8 h-0.5 mx-2 ${
                      currentStep > step ? 'bg-[#3b82f6]' : 'bg-gray-200'
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
                  onChange={handleImageChange}
                  className="hidden"
                  id="cover-image"
                />
                <label htmlFor="cover-image" className="cursor-pointer block">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#3b82f6] hover:bg-blue-50 transition-colors">
                    <FontAwesomeIcon icon="image" className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Cliquez pour télécharger une image</p>
                    <p className="text-sm text-gray-400 mt-1">ou glissez-déposez votre fichier ici</p>
                  </div>
                </label>
              </div>

              {/* Titre */}
              <div>
                <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                  Titre de la formation
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3b82f6] focus:outline-none transition-colors"
                  placeholder="Ex: React Avancé - Hooks et Performance"
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3b82f6] focus:outline-none transition-colors"
                  placeholder="Décrivez le contenu et les objectifs de la formation..."
                />
              </div>

              {/* Niveau et Technologie */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                    Niveau
                  </label>
                  <select
                    name="difficulty"
                    value={formData.difficulty}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3b82f6] focus:outline-none transition-colors"
                  >
                    <option value="Facile">Facile</option>
                    <option value="Intermédiaire">Intermédiaire</option>
                    <option value="Avancé">Avancé</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                    Technologie
                  </label>
                  <input
                    type="text"
                    name="technology"
                    value={formData.technology}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3b82f6] focus:outline-none transition-colors"
                    placeholder="Ex: React, Vue.js, Node.js"
                  />
                </div>
              </div>

              {/* Catégorie et Nombre de vidéos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                    Catégorie
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3b82f6] focus:outline-none transition-colors"
                  >
                    <option value="Développement Web">Développement Web</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Backend">Backend</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Design">Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                    Nombre de vidéos
                  </label>
                  <input
                    type="number"
                    name="videoCount"
                    value={formData.videoCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3b82f6] focus:outline-none transition-colors"
                    min="1"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#1e293b] mb-4">Chapitres et contenu</h3>
              
              {chapters.map((chapter, index) => (
                <div key={chapter.id} className="bg-[#f8fafc] rounded-lg p-4 border-2 border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-[#1e293b]">Chapitre {index + 1}</h4>
                    {chapters.length > 1 && (
                      <button
                        onClick={() => removeChapter(index)}
                        className="text-[#dc2626] hover:text-[#b91c1c] transition-colors"
                      >
                        <FontAwesomeIcon icon="trash" className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                        Titre du chapitre
                      </label>
                      <input
                        type="text"
                        value={chapter.title}
                        onChange={(e) => handleChapterChange(index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#3b82f6] focus:outline-none transition-colors"
                        placeholder="Ex: Introduction aux Hooks"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                        Durée
                      </label>
                      <input
                        type="text"
                        value={chapter.duration}
                        onChange={(e) => handleChapterChange(index, 'duration', e.target.value)}
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#3b82f6] focus:outline-none transition-colors"
                        placeholder="Ex: 15 minutes"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                      Description
                    </label>
                    <textarea
                      value={chapter.description}
                      onChange={(e) => handleChapterChange(index, 'description', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#3b82f6] focus:outline-none transition-colors"
                      placeholder="Décrivez ce qui sera couvert dans ce chapitre..."
                    />
                  </div>
                  
                  <div className="mt-4">
                    <label className="block text-sm font-semibold text-[#1e293b] mb-2">
                      Vidéo du chapitre
                    </label>
                    
                    {/* Type de vidéo */}
                    <div className="flex space-x-4 mb-3">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={`videoType-${index}`}
                          value="url"
                          checked={chapter.videoType === 'url'}
                          onChange={(e) => handleChapterChange(index, 'videoType', e.target.value)}
                          className="mr-2"
                        />
                        <span className="text-sm text-[#1e293b]">URL</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={`videoType-${index}`}
                          value="upload"
                          checked={chapter.videoType === 'upload'}
                          onChange={(e) => handleChapterChange(index, 'videoType', e.target.value)}
                          className="mr-2"
                        />
                        <span className="text-sm text-[#1e293b]">Upload</span>
                      </label>
                    </div>

                    {/* Input selon le type */}
                    {chapter.videoType === 'url' ? (
                      <input
                        type="url"
                        value={chapter.videoUrl}
                        onChange={(e) => handleChapterChange(index, 'videoUrl', e.target.value)}
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#3b82f6] focus:outline-none transition-colors"
                        placeholder="https://..."
                      />
                    ) : (
                      <div>
                        <input
                          type="file"
                          accept="video/*"
                          onChange={(e) => handleVideoFileChange(index, e.target.files?.[0] || null)}
                          className="hidden"
                          id={`video-file-${index}`}
                        />
                        <label htmlFor={`video-file-${index}`} className="cursor-pointer block">
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#3b82f6] hover:bg-blue-50 transition-colors">
                            <FontAwesomeIcon icon="video" className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-500">
                              {chapter.videoFile ? chapter.videoFile.name : 'Cliquez pour télécharger une vidéo'}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">MP4, AVI, MOV, etc.</p>
                          </div>
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              <button
                onClick={addChapter}
                className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-[#475569] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-colors flex items-center justify-center"
              >
                <FontAwesomeIcon icon="plus" className="w-5 h-5 mr-2" />
                Ajouter un chapitre
              </button>
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3b82f6] focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3b82f6] focus:outline-none transition-colors"
                  >
                    <option value="brouillon">Brouillon</option>
                    <option value="publié">Publié</option>
                  </select>
                </div>
              </div>

              <div className="bg-[#f8fafc] rounded-lg p-4">
                <h4 className="font-semibold text-[#1e293b] mb-3">Résumé de la formation</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Titre:</strong> {formData.title || 'Non défini'}</div>
                  <div><strong>Niveau:</strong> {formData.difficulty}</div>
                  <div><strong>Technologie:</strong> {formData.technology || 'Non défini'}</div>
                  <div><strong>Catégorie:</strong> {formData.category}</div>
                  <div><strong>Nombre de vidéos:</strong> {formData.videoCount}</div>
                  <div><strong>Nombre de chapitres:</strong> {chapters.length}</div>
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
                  className="px-6 py-3 bg-[#3b82f6] text-white rounded-lg font-semibold hover:bg-[#2563eb] transition-colors"
                >
                  Suivant
                </button>
              ) : (
                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-[#10b981] text-white rounded-lg font-semibold hover:bg-[#059669] transition-colors"
                >
                  {editingFormation ? 'Mettre à jour' : 'Créer la formation'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
