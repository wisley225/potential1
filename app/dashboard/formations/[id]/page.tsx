// // 'use client';

// // import { useState, useEffect } from 'react';
// // import { CheckCircle2, Circle, Download, Trophy, Clock, PlayCircle, Star, Users, Award, BookOpen, ChevronRight, Target } from 'lucide-react';
// // import { Recommendation } from '../../../types/data';
// // import { FormationDetails } from '../../../types/data';

// // export default function FormationDetail() {
// //   const [completedChapters, setCompletedChapters] = useState([1, 2]);
// //   const [showQuiz, setShowQuiz] = useState<number>();
// // const [userProfile, setUserProfile] = useState<'freelance' | 'student' | 'reconversion'>('freelance');
// //  const [Recommendation, SetRecommandation]=useState<Recommendation[]>()
// //   const formation :FormationDetails = {
// //     id: "1",
// //     title: "Nuxt JS de A à Z",
// //     description: "Formation complète sur Nuxt.js pour créer des applications Vue.js performantes et optimisées.",
// //     difficulty: "Intermédiaire",
// //     technology: "Vue.js",
// //     category: "Développement Web",
// //     instructor: "Jonathan.B",
// //     instructorBio: "Expert Vue.js avec 8 ans d'expérience",
// //     rating: 4.9,
// //     studentsCount: "2.3k",
// //     totalDuration: "6h 30min",
// //     targetAudience: ["Débutants(es)", "Freelances", "Personnes en reconversion", "Étudiants(es)"],
// //     tools: ["Vue.js", "Nuxt.js", "JavaScript", "TypeScript"],
// //     detailedDescription: `Dans cette formation complète "Nuxt.js de A à Z", vous apprendrez à maîtriser ce framework Vue.js révolutionnaire pour créer des applications web modernes, performantes et optimisées.

// // Cette formation vous guidera à travers tous les aspects essentiels de Nuxt.js, de la configuration initiale aux déploiements en production. Vous découvrirez comment exploiter la puissance de l'architecture basée sur les fichiers, la gestion automatique des routes, et les différents modes de rendu (SSR, SSG, SPA).`,
// //     chapters: [
// //       {
// //         id: 1,
// //         title: "Introduction à la formation Nuxt JS",
// //         duration: "15:30",
// //         quizAvailable: true,
// //         resources: 3
// //       },
// //       {
// //         id: 2,
// //         title: "Installation et configuration",
// //         duration: "22:45",
// //         quizAvailable: true,
// //         resources: 5
// //       },
// //       {
// //         id: 3,
// //         title: "Architecture des fichiers",
// //         duration: "18:20",
// //         quizAvailable: true,
// //         resources: 2
// //       },
// //       {
// //         id: 4,
// //         title: "Routing automatique",
// //         duration: "25:10",
// //         quizAvailable: true,
// //         resources: 4
// //       },
// //       {
// //         id: 5,
// //         title: "Composants et layouts",
// //         duration: "31:15",
// //         quizAvailable: false,
// //         resources: 6
// //       },
// //       {
// //         id: 6,
// //         title: "Gestion d'état avec Pinia",
// //         duration: "28:40",
// //         quizAvailable: true,
// //         resources: 3
// //       },
// //       {
// //         id: 7,
// //         title: "API Routes et Server",
// //         duration: "35:20",
// //         quizAvailable: true,
// //         resources: 7
// //       }
// //     ],
// //     resources: {
// //       courseGuide: "Guide complet Nuxt.js (PDF - 45 pages)",
// //       cheatSheet: "Cheat Sheet Nuxt.js (PDF - 2 pages)",
// //       starterKit: "Starter Kit avec exemples",
// //       exerciseFiles: "Fichiers d'exercices"
// //     },
// //     similarFormationsByProfile: {
// //       freelance: [
// //         {
// //           id: 2,
// //           title: "Créer et vendre ses templates",
// //           description: "Monétisez vos compétences en créant des templates professionnels",
// //           difficulty: "Intermédiaire",
// //           technology: "Business",
// //           videoCount: 18,
// //           matchScore: 95
// //         },
// //         {
// //           id: 3,
// //           title: "Marketing pour développeurs",
// //           description: "Apprenez à promouvoir vos services efficacement",
// //           difficulty: "Facile",
// //           technology: "Marketing",
// //           videoCount: 22,
// //           matchScore: 88
// //         }
// //       ],
// //       student: [
// //         {
// //           id: 4,
// //           title: "Git et GitHub Mastery",
// //           description: "Maîtrisez le versioning et la collaboration en équipe",
// //           difficulty: "Facile",
// //           technology: "DevOps",
// //           videoCount: 15,
// //           matchScore: 92
// //         },
// //         {
// //           id: 5,
// //           title: "Créer son portfolio Dev",
// //           description: "Construisez un portfolio qui impressionne les recruteurs",
// //           difficulty: "Facile",
// //           technology: "Design",
// //           videoCount: 12,
// //           matchScore: 85
// //         }
// //       ],
// //       reconversion: [
// //         {
// //           id: 6,
// //           title: "JavaScript de Zéro",
// //           description: "Les fondamentaux JS expliqués simplement",
// //           difficulty: "Débutant",
// //           technology: "JavaScript",
// //           videoCount: 35,
// //           matchScore: 90
// //         },
// //         {
// //           id: 7,
// //           title: "Réussir sa reconversion Dev",
// //           description: "Tous les conseils pour réussir votre transition",
// //           difficulty: "Débutant",
// //           technology: "Carrière",
// //           videoCount: 20,
// //           matchScore: 94
// //         }
// //       ]
// //     }
// //   };

// //   const totalChapters = formation.chapters.length;
// //   const progressPercentage = Math.round((completedChapters.length / totalChapters) * 100);

// //   const toggleChapter = (chapterId:number) => {
// //     setCompletedChapters(prev => 
// //       prev.includes(chapterId) 
// //         ? prev.filter(id => id !== chapterId)
// //         : [...prev, chapterId]
// //     );
// //   };


// //   if (userProfile) {
// //       const getRecommendations  = () : Recommendation => {
// //     const profileMap  :Record<string, string>  = {
// //       'freelance': 'freelance',
// //       'student': 'student',
// //       'reconversion': 'reconversion'
// //     };

// //     return  formation.similarFormationsByProfile[profileMap[userProfile]] || formation.similarFormationsByProfile.freelance;
// //   };

// //     SetRecommandation(getRecommendations())
// //   }





// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
// //       <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
// //         {/* Header avec stats */}
// //         <div className="mb-8">
// //           <div className="flex flex-wrap items-center gap-3 mb-4">
// //             <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
// //               {formation.category}
// //             </span>
// //             <span className="bg-white border-2 border-gray-200 px-4 py-1.5 rounded-full text-sm font-medium text-gray-700">
// //               {formation.difficulty}
// //             </span>
// //             <span className="bg-white border-2 border-gray-200 px-4 py-1.5 rounded-full text-sm font-medium text-gray-700">
// //               👨‍🏫 {formation.instructor}
// //             </span>
// //           </div>

// //           <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
// //             {formation.title}
// //           </h1>

// //           {/* Stats en ligne */}
// //           <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
// //             <div className="flex items-center gap-2">
// //               <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
// //               <span className="font-semibold text-gray-900">{formation.rating}</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <Users className="w-5 h-5 text-blue-600" />
// //               <span className="font-semibold">{formation.studentsCount}</span>
// //               <span className="text-sm">étudiants</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <Clock className="w-5 h-5 text-purple-600" />
// //               <span className="font-semibold">{formation.totalDuration}</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <BookOpen className="w-5 h-5 text-green-600" />
// //               <span className="font-semibold">{totalChapters} chapitres</span>
// //             </div>
// //           </div>

// //           {/* Barre de progression globale */}
// //           <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
// //             <div className="flex items-center justify-between mb-3">
// //               <div className="flex items-center gap-2">
// //                 <Trophy className="w-6 h-6 text-yellow-500" />
// //                 <span className="font-bold text-gray-900 text-lg">Votre progression</span>
// //               </div>
// //               <span className="text-2xl font-bold text-blue-600">{progressPercentage}%</span>
// //             </div>
// //             <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
// //               <div 
// //                 className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-500"
// //                 style={{ width: `${progressPercentage}%` }}
// //               />
// //             </div>
// //             <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
// //               <span>{completedChapters.length} / {totalChapters} terminés</span>
// //               {progressPercentage === 100 && (
// //                 <span className="flex items-center gap-1 text-green-600 font-semibold">
// //                   <Award className="w-4 h-4" /> Formation terminée !
// //                 </span>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         <div className="grid lg:grid-cols-3 gap-8">
// //           {/* Contenu principal */}
// //           <div className="lg:col-span-2 space-y-6">
// //             {/* Vidéo de présentation */}
// //             <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
// //               <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600"></div>
// //               <div className="absolute inset-0 flex items-center justify-center">
// //                 <button className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
// //                   <PlayCircle className="w-12 h-12 text-blue-600" />
// //                 </button>
// //               </div>
// //               <div className="absolute bottom-4 left-4 right-4">
// //                 <div className="flex justify-between items-center bg-black/50 px-4 py-2 rounded-full text-xs font-semibold text-white backdrop-blur-sm">
// //                   <span>FRONT-END</span>
// //                   <span>TESTING</span>
// //                   <span>BACK-END</span>
// //                   <span>DEPLOYMENT</span>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Description */}
// //             <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
// //                 📚 À propos de cette formation
// //               </h2>
// //               <p className="text-gray-700 leading-relaxed mb-4">
// //                 {formation.description}
// //               </p>
// //               <p className="text-gray-700 leading-relaxed whitespace-pre-line">
// //                 {formation.detailedDescription}
// //               </p>

// //               <div className="mt-6 pt-6 border-t border-gray-200">
// //                 <h3 className="font-bold text-gray-900 mb-3">🎯 Public cible :</h3>
// //                 <div className="flex flex-wrap gap-2">
// //                   {formation.targetAudience.map((audience, index) => (
// //                     <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-sm font-medium">
// //                       {audience}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="mt-6 pt-6 border-t border-gray-200">
// //                 <h3 className="font-bold text-gray-900 mb-3">🛠️ Technologies utilisées :</h3>
// //                 <div className="flex flex-wrap gap-2">
// //                   {formation.tools.map((tool, index) => (
// //                     <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium">
// //                       {tool}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Chapitres interactifs */}
// //             <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
// //                 📖 Contenu de la formation
// //               </h2>
// //               <div className="space-y-3">
// //                 {formation.chapters.map((chapter) => {
// //                   const isCompleted = completedChapters.includes(chapter.id);
// //                   return (
// //                     <div 
// //                       key={chapter.id} 
// //                       className={`p-5 rounded-xl border-2 transition-all ${
// //                         isCompleted 
// //                           ? 'bg-green-50 border-green-300 shadow-sm' 
// //                           : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 hover:border-blue-400'
// //                       }`}
// //                     >
// //                       <div className="flex items-start gap-4">
// //                         <button
// //                           onClick={() => toggleChapter(chapter.id)}
// //                           className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
// //                             isCompleted 
// //                               ? 'bg-green-500 hover:bg-green-600' 
// //                               : 'bg-blue-600 hover:bg-blue-700'
// //                           }`}
// //                         >
// //                           {isCompleted ? (
// //                             <CheckCircle2 className="w-6 h-6 text-white" />
// //                           ) : (
// //                             <Circle className="w-6 h-6 text-white" />
// //                           )}
// //                         </button>
                        
// //                         <div className="flex-1">
// //                           <div className="flex items-start justify-between mb-2">
// //                             <h3 className="font-semibold text-gray-900 text-lg">
// //                               {chapter.id}. {chapter.title}
// //                             </h3>
// //                             {isCompleted && (
// //                               <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
// //                                 ✓ Terminé
// //                               </span>
// //                             )}
// //                           </div>
                          
// //                           <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
// //                             <span className="flex items-center gap-1">
// //                               <Clock className="w-4 h-4" /> {chapter.duration}
// //                             </span>
// //                             <span className="flex items-center gap-1">
// //                               <Download className="w-4 h-4" /> {chapter.resources} ressources
// //                             </span>
// //                           </div>

// //                           <div className="flex items-center gap-3">
// //                             <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
// //                               <PlayCircle className="w-4 h-4" />
// //                               {isCompleted ? 'Revoir' : 'Commencer'}
// //                             </button>
                            
// //                             {chapter.quizAvailable && (
// //                               <button 
// //                                 onClick={() => setShowQuiz(chapter.id)}
// //                                 className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
// //                               >
// //                                 <Target className="w-4 h-4" />
// //                                 Quiz
// //                               </button>
// //                             )}
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </div>

// //             {/* Formations recommandées selon profil */}
// //             <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
// //               <div className="flex items-center justify-between mb-6">
// //                 <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
// //                   🎯 Recommandé pour vous
// //                 </h2>
// //                 <select 
// //                   value={userProfile}
// //                   onChange={(e) => setUserProfile(e.target.value)}
// //                   className="bg-gray-100 border-2 border-gray-300 rounded-lg px-3 py-2 text-sm font-medium"
// //                 >
// //                   <option value="freelance">Freelance</option>
// //                   <option value="student">Étudiant</option>
// //                   <option value="reconversion">Reconversion</option>
// //                 </select>
// //               </div>

// //               <div className="grid md:grid-cols-2 gap-4">
// //                 { Recommendation && Recommendation.length >0 ? Recommendation.map((rec) => (
// //                   <div key={rec.id} className="border-2 border-gray-200 rounded-xl p-5 hover:border-purple-400 hover:shadow-lg transition-all group">
// //                     <div className="flex items-start justify-between mb-3">
// //                       <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg w-20 h-20 flex items-center justify-center">
// //                         <span className="text-3xl">🎓</span>
// //                       </div>
// //                       <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">
// //                         {rec.matchScore}% match
// //                       </div>
// //                     </div>
                    
// //                     <h3 className="font-bold text-gray-900 mb-2">
// //                       {rec.title}
// //                     </h3>
// //                     <p className="text-gray-600 text-sm mb-3 line-clamp-2">
// //                       {rec.description}
// //                     </p>
                    
// //                     <div className="flex items-center justify-between">
// //                       <div className="flex gap-2">
// //                         <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">
// //                           {rec.difficulty}
// //                         </span>
// //                         <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
// //                           {rec.videoCount} vidéos
// //                         </span>
// //                       </div>
// //                       <button className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
// //                         Voir <ChevronRight className="w-4 h-4" />
// //                       </button>
// //                     </div>
// //                   </div> 
// //                 )) : ""}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Sidebar */}
// //           <div className="lg:col-span-1">
// //             <div className="sticky top-8 space-y-6">
// //               {/* CTA Principal */}
// //               <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-6 shadow-2xl">
// //                 <div className="text-center mb-4">
// //                   <div className="text-5xl mb-3">🚀</div>
// //                   <h3 className="font-bold text-xl mb-2">
// //                     Accès complet
// //                   </h3>
// //                   <p className="text-sm text-white/90 mb-4">
// //                     Formation + Ressources + Certificat + Support Discord
// //                   </p>
// //                 </div>
                
// //                 <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-4">
// //                   <div className="flex items-center justify-center gap-2 mb-2">
// //                     <span className="line-through text-white/70">79€</span>
// //                     <span className="text-3xl font-bold">49€</span>
// //                   </div>
// //                   <p className="text-xs text-center text-white/80">Offre de lancement -38%</p>
// //                 </div>
                
// //                 <button className="w-full bg-white text-blue-600 font-bold py-4 rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-lg mb-3">
// //                   Commencer maintenant
// //                 </button>
// //                 <p className="text-xs text-center text-white/80">
// //                   ✓ Accès à vie • ✓ Garantie 30 jours
// //                 </p>
// //               </div>

// //               {/* Télécharger les ressources */}
// //               <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
// //                 <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
// //                   <Download className="w-5 h-5 text-blue-600" />
// //                   Ressources à télécharger
// //                 </h3>
// //                 <div className="space-y-3">
// //                   <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left flex items-center justify-between">
// //                     <span>📘 {formation.resources.courseGuide}</span>
// //                     <Download className="w-4 h-4" />
// //                   </button>
// //                   <button className="w-full bg-purple-50 hover:bg-purple-100 text-purple-700 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left flex items-center justify-between">
// //                     <span>📄 {formation.resources.cheatSheet}</span>
// //                     <Download className="w-4 h-4" />
// //                   </button>
// //                   <button className="w-full bg-green-50 hover:bg-green-100 text-green-700 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left flex items-center justify-between">
// //                     <span>💻 {formation.resources.starterKit}</span>
// //                     <Download className="w-4 h-4" />
// //                   </button>
// //                   <button className="w-full bg-orange-50 hover:bg-orange-100 text-orange-700 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left flex items-center justify-between">
// //                     <span>📁 {formation.resources.exerciseFiles}</span>
// //                     <Download className="w-4 h-4" />
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Support communauté */}
// //               <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
// //                 <h3 className="font-bold text-gray-900 mb-3">
// //                   💬 Besoin d'aide ?
// //                 </h3>
// //                 <p className="text-gray-600 text-sm mb-4">
// //                   Rejoignez notre communauté Discord active avec +3000 développeurs
// //                 </p>
// //                 <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-medium w-full transition-colors flex items-center justify-center gap-2">
// //                   Rejoindre Discord
// //                   <ChevronRight className="w-4 h-4" />
// //                 </button>
// //               </div>

// //               {/* Lives */}
// //               <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border-2 border-red-200">
// //                 <h3 className="font-bold text-gray-900 mb-3">
// //                   🔴 Lives hebdomadaires
// //                 </h3>
// //                 <p className="text-gray-700 text-sm mb-4">
// //                   Tous les vendredis à 21h30
// //                 </p>
// //                 <div className="flex gap-2">
// //                   <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex-1">
// //                     YouTube
// //                   </button>
// //                   <button className="bg-black hover:bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex-1">
// //                     TikTok
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Modal Quiz */}
// //       {showQuiz && (
// //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
// //           <div className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl">
// //             <h3 className="text-2xl font-bold text-gray-900 mb-4">
// //               🎯 Quiz - Chapitre {showQuiz}
// //             </h3>
// //             <p className="text-gray-600 mb-6">
// //               Testez vos connaissances sur ce chapitre ! 5 questions pour valider votre compréhension.
// //             </p>
// //             <div className="space-y-4 mb-6">
// //               <div className="p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
// //                 <p className="font-semibold text-gray-900 mb-3">
// //                   Question 1: Qu'est-ce que Nuxt.js ?
// //                 </p>
// //                 <div className="space-y-2">
// //                   <button className="w-full text-left p-3 bg-white hover:bg-blue-100 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-colors">
// //                     Un framework basé sur Vue.js
// //                   </button>
// //                   <button className="w-full text-left p-3 bg-white hover:bg-blue-100 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-colors">
// //                     Une librairie React
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="flex gap-3">
// //               <button 
// //                 onClick={() => setShowQuiz(null)}
// //                 className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-xl transition-colors"
// //               >
// //                 Fermer
// //               </button>
// //               <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors">
// //                 Valider le quiz
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { useParams } from 'next/navigation';
// import { useEffect,useRef , useState } from 'react';
// import { elements } from 'chart.js';

// export default function PodcastDetail() {

// const accordeonsRef=useRef<HTMLParagraphElement>(null)
// const [text, setReduireText]=useState<boolean>(true)
//   const params = useParams();
//   const podcastId = params.id;


//   const handleDescrption=()=>{
 
//  if (accordeonsRef.current) {
//        const description= accordeonsRef.current

//        if (description) {
//         description.classList.toggle('line-clamp-2')
//         setReduireText(!text)
//        }
  
//     }
// }

//   useEffect(() => {

//     handleDescrption()
//     // Animation simple au scroll
//     const animateOnScroll = () => {
//       const elements = document.querySelectorAll('.animate-on-scroll');
  
//       elements.forEach((element) => {
//         const elementTop = element.getBoundingClientRect().top;
//         const elementVisible = 150;
        
//         if (elementTop < window.innerHeight - elementVisible) {
//           element.classList.add('animated');
//         }
//       });
//     };

//     // Écouter le scroll
//     window.addEventListener('scroll', animateOnScroll);
//     animateOnScroll(); // Vérifier au chargement

//     return () => {
//       window.removeEventListener('scroll', animateOnScroll);
//     };


   

//   }, []);

//   // Données de test pour le podcast détaillé



//   const podcast = {
//     id: podcastId,
//     title: "Monétiser ses compétences avec LeDevUltime",
//     description: "Dans cet épisode riche en insights, nous discutons business et développement web avec LeDevUltime, et comment transformer ses compétences techniques en sources de revenus réelles, que ce soit en solo ou à plus grande échelle.",
//     author: "Ange",
//     date: "24 mars 2025",
//     category: "Entrepreneuriat",
//     duration: "1h 25min",
//     detailedDescription: `Dans cet épisode riche en insights, nous discutons business et développement web avec LeDevUltime, et comment transformer ses compétences techniques en sources de revenus réelles, que ce soit en solo ou à plus grande échelle.

// LeDevUltime partage son parcours, ses échecs, ses réussites et ses meilleurs conseils pour ceux qui veulent vivre différemment en tant que développeur en prenant le contrôle de leur parcours professionnel.

// À écouter d'urgence si tu veux passer du code au cash de façon durable et intelligente !`,
//     program: [
//       {
//         icon: "♪",
//         title: "Créer son entreprise autour du code"
//       },
//       {
//         icon: "✔",
//         title: "Vendre ses services en freelance avec efficacité"
//       },
//       {
//         icon: "🚀",
//         title: "Lancer des produits numériques et des SaaS scalables"
//       },
//       {
//         icon: "💡",
//         title: "Mettre en place des stratégies pour se démarquer dans un marché compétitif"
//       },
//       {
//         icon: "🎯",
//         title: "Attirer les bons clients et construire une carrière rentable et épanouissante"
//       }
//     ],
//     leDevUltimeProfile: {
//       name: "LeDevUltime",
//       description: "Développeur expérimenté avec plus de 10 ans d'expérience, LeDevUltime est un véritable couteau-suisse du monde du dev : freelance, formateur, créateur de SaaS et entrepreneur passionné. Il partage son parcours, ses apprentissages et ses meilleures stratégies pour transformer ses compétences techniques en un véritable moteur de liberté professionnelle."
//     },
//     similarPodcasts: [
//       {
//         id: 1,
//         title: "Consultant dans la Tech",
//         description: "Les secrets pour réussir en tant que consultant dans l'industrie technologique.",
//         author: "Ange",
//         date: "11 juillet 2025"
//       },
//       {
//         id: 2,
//         title: "Freelance et Entrepreneuriat",
//         description: "Comment passer du salariat au freelancing avec succès dans le domaine tech.",
//         author: "Ange",
//         date: "5 juillet 2025"
//       },
//       {
//         id: 3,
//         title: "Développement Web Moderne",
//         description: "Les dernières tendances et technologies en développement web pour rester à la pointe.",
//         author: "Jonathan.B",
//         date: "28 juin 2025"
//       }
//     ]
//   };


//   return (
//     <div className="min-h-screen bg-[#F8F9FB] ">
//       <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
//         {/* En-tête */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-['SUSE_Mono'] text-[#1E1E1E ] mb-4">
//             {podcast.title}
//           </h1>
//           <p className="text-lg text-[#1E1E1E] max-w-3xl mx-auto">
//             Publié le {podcast.date} • Durée: {podcast.duration}
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Contenu principal */}
//           <div className="lg:col-span-2">
//             {/* Image 4 pour le détail du podcast */}
//             <div className="aspect-video rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden animate-on-scroll" style={{
//               backgroundImage: 'url(/logo.jpg)',
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundRepeat: 'no-repeat'
//             }}>
//               <div className="absolute inset-0 bg-gradient-to-br from-green-600/70 to-blue-600/70"></div>
//               <div className="relative z-10 text-center">
//                 <button className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
//                   <svg className="w-8 h-8 text-[#10b981] ml-1" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M8 5v14l11-7z"/>
//                   </svg>
//                 </button>
//                 <div className="text-lg font-bold text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
//                   {podcast.category}
//                 </div>
//               </div>
//             </div>

//             {/* Description du podcast */}
//             <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm mb-8 animate-on-scroll">
//               <h2 className="text-2xl font-['SUSE_Mono'] text-[#1e293b] mb-4">
//                 Description
//               </h2>
//               <p  ref={accordeonsRef} className="text-gray-700    leading-relaxed whitespace-pre-line">
//                 {podcast.description}
                
//               </p>
//               <span  onClick={handleDescrption}
//                   className='cursor-pointer text-[#1A4B84] transition-all'
//                 >{text ?  "voir moins ": "voir plus"}</span>
//             </div>

//             {/* Au programme */}
//             <div className="bg-white rounded-2xl p-8 border-2 border-[#3b82f6] shadow-sm mb-8">
//               <h2 className="text-2xl font-['SUSE_Mono'] text-[#1e293b] mb-6">
//                 Au programme :
//               </h2>
//               <div className="space-y-4">
//                 {podcast.program.map((item, index) => (
//                   <div key={index} className="flex items-start gap-4">
//                     <div className="w-8 h-8 bg-[#3b82f6] text-white rounded-full flex items-center justify-center flex-shrink-0">
//                       <span className="text-lg">{item.icon}</span>
//                     </div>
//                     <p className="text-gray-700 font-medium">{item.title}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Partage de LeDevUltime */}
//             <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm mb-8">
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 {podcast.leDevUltimeProfile.description}
//               </p>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 Que tu sois freelance, salarié en transition ou passionné d&apos;entrepreneuriat tech, cet épisode te donnera des clés concrètes pour rendre tes compétences fructueuses.
//               </p>
//               <p className="text-[#3b82f6] font-bold text-lg">
//                 À écouter d&apos;urgence si tu veux passer du code au cash de façon durable et intelligente !
//               </p>
//               <p className="text-gray-600 mt-4">
//                 Publié le {podcast.date}
//               </p>
//             </div>

//             {/* Podcasts similaires */}
//             <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm">
//               <h2 className="text-2xl font-['SUSE_Mono'] text-[#1e293b] mb-6">
//                 Podcasts similaires
//               </h2>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {podcast.similarPodcasts.map((similarPodcast) => (
//                   <div key={similarPodcast.id} className="border-2 border-gray-200 rounded-xl p-4 hover:border-[#3b82f6] transition-colors">
//                     <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-lg mb-3 flex items-center justify-center">
//                       <Image src="/logo.jpg" alt="Podcast" width={40} height={40} className="rounded" />
//                     </div>
//                     <h3 className="font-bold text-[#1e293b] mb-2 text-sm">
//                       {similarPodcast.title}
//                     </h3>
//                     <p className="text-gray-600 mb-3 text-xs leading-relaxed">
//                       {similarPodcast.description}
//                     </p>
//                     <div className="flex items-center justify-between">
//                       <div className="text-xs text-gray-600">
//                         <p className="font-medium">{similarPodcast.author}</p>
//                         <p>{similarPodcast.date}</p>
//                       </div>
//                       <Link 
//                         href={`/dashboard/podcasts/${similarPodcast.id}`}
//                         className="bg-[#3b82f6] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#1d4ed8] transition-colors"
//                       >
//                         ▶
//                       </Link>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="space-y-6">
//               {/* Profil LeDevUltime */}
//               <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
//                 <h3 className="font-bold text-[#1e293b] mb-3">
//                   {podcast.leDevUltimeProfile.name}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {podcast.leDevUltimeProfile.description}
//                 </p>
//               </div>

//               {/* Suivez-nous */}
//               <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
//                 <h3 className="font-bold text-[#1e293b] mb-4">
//                   Suivez-nous
//                 </h3>
//                 <div className="grid grid-cols-2 gap-3">
//                   <button className="bg-[#FF0000] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#CC0000] transition-colors flex items-center justify-center gap-2">
//                     <span>▶</span> YouTube
//                   </button>
//                   <button className="bg-[#000000] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#333333] transition-colors flex items-center justify-center gap-2">
//                     <span>♪</span> TikTok
//                   </button>
//                   <button className="bg-[#E4405F] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#D62976] transition-colors flex items-center justify-center gap-2">
//                     <span>📷</span> Instagram
//                   </button>
//                   <button className="bg-[#333333] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#555555] transition-colors flex items-center justify-center gap-2">
//                     <span>🐙</span> GitHub
//                   </button>
//                   <button className="bg-[#5865F2] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#4752C4] transition-colors flex items-center justify-center gap-2 col-span-2">
//                     <span>💬</span> Discord
//                   </button>
//                 </div>
//               </div>

//               {/* Écouter maintenant */}
//               <div className="bg-[#3BAE8C] text-white rounded-2xl p-6 text-center">
//                 <h3 className="font-bold text-lg mb-4">
                  
//                  Accès complet + bonus exclusifs (PDF, ressources...) 
//                 </h3>
//                 <Link href={`/dashboard/podcasts/${podcast.id}/payment`} className="bg-white text-[#10b981] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors w-full inline-block">
//                   ▶ Lancer le podcast
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

/**
 * Palette utilisée (hex) :
 * primary: #1A4B84
 * highlight/gold: #C9A646
 * bg: #F8F9FB
 * accent: #3BAE8C
 * text main: #1E1E1E
 * text secondary: #5A5A5A
 */

/* ----- Types ----- */
type ProgramItem = { icon: string; title: string; quizAvailable?: boolean };
type Recommendation = {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  videoCount?: number;
  matchScore?: number;
};

/* ----- Mock data (remplaçable par fetch backend) ----- */



export default function PodcastDetailPageClient() {
  const params = useParams();
  const podcastId = typeof params.id === "string" ? params.id : "";


const PODCAST = (id: string ) => ({
  id: id ?? "1",
  title: "Monétiser ses compétences avec LeDevUltime",
  description:
    "Dans cet épisode riche en insights, nous discutons business et développement web avec LeDevUltime, et comment transformer ses compétences techniques en sources de revenus réelles Dans cet épisode riche en insights, nous discutons business et développement web avec LeDevUltime, et comment transformer ses compétences techniques en sources de revenus réelles.",
  date: "24 mars 2025",
  duration: "1h 25min",
  category: "Entrepreneuriat",
  program: [
    { icon: "1", title: "Créer son entreprise autour du code", quizAvailable: true },
    { icon: "2", title: "Vendre ses services en freelance avec efficacité", quizAvailable: true },
    { icon: "3", title: "Lancer des produits numériques et des SaaS scalables", quizAvailable: true },
    { icon: "4", title: "Mettre en place des stratégies pour se démarquer", quizAvailable: false },
    { icon: "5", title: "Attirer les bons clients et construire une carrière rentable", quizAvailable: true }
  ] as ProgramItem[],
  host: { name: "LeDevUltime", bio: "Développeur & entrepreneur — 10+ ans d'expérience." }
});

const MOCK_RECOMMENDATIONS: Record<
  "freelance" | "student" | "reconversion",
  Recommendation[]
> = {
  freelance: [
    { id: 2, title: "Créer et vendre ses templates", description: "Monétise tes templates.", difficulty: "Intermédiaire", videoCount: 18, matchScore: 95 },
    { id: 3, title: "Marketing pour développeurs", description: "Promouvoir tes services.", difficulty: "Facile", videoCount: 22, matchScore: 88 }
  ],
  student: [
    { id: 4, title: "Git et GitHub Mastery", description: "Versioning et collaboration.", difficulty: "Facile", videoCount: 15, matchScore: 92 },
    { id: 5, title: "Créer son portfolio Dev", description: "Portfolio pour recruteurs.", difficulty: "Facile", videoCount: 12, matchScore: 85 }
  ],
  reconversion: [
    { id: 6, title: "JavaScript de Zéro", description: "Les fondamentaux JS.", difficulty: "Débutant", videoCount: 35, matchScore: 90 },
    { id: 7, title: "Réussir sa reconversion Dev", description: "Conseils pratiques.", difficulty: "Débutant", videoCount: 20, matchScore: 94 }
  ]
};

const podcast = PODCAST(podcastId);


  const storageKey = `podcast_completed_${podcast.id}`;

  const [completedChapters, setCompletedChapters] = useState<number[]>(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(storageKey) : null;
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [showQuizFor, setShowQuizFor] = useState<number | null>(null);
  const [showDownloadToast, setShowDownloadToast] = useState(false);
  const [userProfile, setUserProfile] = useState<"freelance" | "student" | "reconversion">(
    () => {
      try {
        const v = localStorage.getItem("user_profile_pref");
        if (v === "freelance" || v === "student" || v === "reconversion") return v;
      } catch {}
      return "freelance";
    }
  );

  const [recommendations, setRecommendations] = useState<Recommendation[]>(MOCK_RECOMMENDATIONS[userProfile]);

  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const [clamped, setClamped] = useState(true);


  

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(completedChapters));
    } catch {}
  }, [completedChapters, storageKey]);

  useEffect(() => {
    setRecommendations(MOCK_RECOMMENDATIONS[userProfile]);
    try {
      localStorage.setItem("user_profile_pref", userProfile);
    } catch {}
  }, [userProfile]);

  const total = podcast.program.length;
  const progress = Math.round((completedChapters.length / total) * 100);

  function toggleChapter(id: number, quizAvailable?: boolean) {
    setCompletedChapters((prev) => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter((n) => n !== id) : [...prev, id];
      if (!exists && quizAvailable) {
        setTimeout(() => setShowQuizFor(id), 250);
      }
      return next;
    });
  }

  function downloadGuide() {
    const content = `Guide du cours - Podcast: ${podcast.title}\n\nContenu ex: résumé, ressources, exercices.`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `guide-podcast-${podcast.id}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    setShowDownloadToast(true);
    setTimeout(() => setShowDownloadToast(false), 2500);
  }

  function closeQuiz() {
    setShowQuizFor(null);
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F9FB", color: "#1E1E1E" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold" style={{ color: "#1A4B84" }}>{podcast.title}</h1>
          <p className="text-sm mt-2" style={{ color: "#5A5A5A" }}>
            Publié le {podcast.date} • Durée: {podcast.duration}
          </p>

          <div className="mt-6 inline-flex items-center gap-4">
            <div className="text-sm font-semibold" style={{ color: "#1E1E1E" }}>{progress}% terminé</div>
            <div className="w-80 bg-[#e6eef8] rounded-full h-3 overflow-hidden" role="progressbar" aria-valuenow={progress}>
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%`, background: "linear-gradient(90deg,#1A4B84,#3B82F6)" }}
              />
            </div>
            <div className="text-sm text-[#5A5A5A]">{completedChapters.length} / {total}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
        
          <div className="lg:col-span-2 space-y-6">
          
            <div className="aspect-video rounded-2xl overflow-hidden relative shadow-lg">
              <div className="absolute inset-0" style={{
                backgroundImage: "linear-gradient(135deg, rgba(26,75,132,0.9), rgba(58,174,140,0.7))"
              }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#1A4B84" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z" /></svg>
                </button>
              </div>
              <div className="absolute bottom-4 left-4 text-white bg-black/30 px-3 py-1 rounded-full text-xs">{podcast.category}</div>
            </div>

            {/* Description with clamp */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-semibold mb-3" style={{ color: "#1A4B84" }}>Description</h2>
              <p ref={descriptionRef} className={`text-sm leading-relaxed ${clamped ? "line-clamp-3" : ""}`} >
                {podcast.description}
              </p>
              <button
                onClick={() => setClamped((s) => !s)}
                className="mt-3 text-sm font-medium"
                style={{ color: "#1A4B84" }}
              >
                {clamped ? "Voir plus" : "Voir moins"}
              </button>

              {/* CTA de telechargement guide */}
              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={downloadGuide}
                  className="px-4 py-2 bg-[#3BAE8C] text-[#ffffff] cursor-pointer hover:shadow-2xl rounded-lg font-semibold"
                
                >
                  ⬇️ Télécharger le guide du cours
                </button>

                <Link href={`/dashboard/podcasts/${podcast.id}/payment`} className="ml-2">
                  <div
                    className="px-4 py-2 bg-[#ffffff] border-[#1A4B84] text-[#1A4B84] rounded-lg font-semibold border"
                 
                  >
                    🔒 Accès complet
                  </div>
                </Link>
              </div>
            </div>

            {/* Program (interactive) */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#1A4B84" }}>Au programme</h3>
              <div className="space-y-3">
                {podcast.program.map((item, index) => {
                  const chapterId = index + 1;
                  const completed = completedChapters.includes(chapterId);
                  return (
                    <div key={chapterId} className={`p-4 rounded-lg flex items-start gap-4 transition-shadow ${completed ? "shadow-md bg-[#f0fff8]" : "hover:shadow-lg bg-white"}`}>
                      <button
                        onClick={() => toggleChapter(chapterId, !!item.quizAvailable)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${completed ? "bg-[#3BAE8C]" : "bg-[#1A4B84]"}`}
                        aria-pressed={completed}
                        title={completed ? "Marqué comme terminé" : "Marquer comme terminé"}
                      >
                        {completed ? "✓" : chapterId}
                      </button>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold" style={{ color: "#1E1E1E" }}>{item.title}</h4>
                          {item.quizAvailable && (
                            <span className="text-xs px-2 py-1 rounded-full text-[#C9A646] bg-[#FFF8E6] " >Quiz</span>
                          )}
                        </div>
                        <p className="text-sm mt-1 text-[#5A5A5A] " >
                          Courte description ou rappel — (ex: 10 min, 3 ressources)
                        </p>

                        <div className="mt-3 flex gap-2">
                          <button
                            className="px-3 py-2 rounded-lg text-sm font-medium"
                            style={{
                              backgroundColor: completed ? "#1A4B84" : "#E6F0FB",
                              color: completed ? "#FFFFFF" : "#1A4B84"
                            }}
                          >
                            ▶ Reprendre
                          </button>

                          {item.quizAvailable && (
                            <button
                              onClick={() => setShowQuizFor(chapterId)}
                              className="px-3 py-2 rounded-lg text-sm font-medium border border-[C9A646] text-[#1A4B84 bg-[#FFF9ED] "
                            
                            >
                              📝 Faire le quiz
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Host / Share */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-[#eaf3ff] rounded-full flex items-center justify-center text-xl font-bold" style={{ color: "#1A4B84" }}>L</div>
                <div>
                  <h4 className="font-semibold text-[#1E1E1E] " >{podcast.host.name}</h4>
                  <p className="text-sm text-[#5A5A5A] " >{podcast.host.bio}</p>
                </div>
              </div>
            </div>

            {/* Recommendations (bottom) */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#1A4B84] " >Formations recommandées selon ton profil</h3>
                <select
                  value={userProfile}
                  onChange={(e) => setUserProfile(e.target.value as "freelance" | "student" | "reconversion")}
                  className="border px-3 py-2 rounded-md text-[#e6eef8] "
                 
                >
                  <option value="freelance">Freelance</option>
                  <option value="student">Étudiant</option>
                  <option value="reconversion">Reconversion</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {recommendations.map((rec) => (
                  <div key={rec.id} className="p-4 rounded-xl border hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-[#FFF8E6] flex items-center justify-center" style={{ color: "#C9A646" }}>🎓</div>
                        <div>
                          <h4 className="font-bold text-[#1E1E1E] " >{rec.title}</h4>
                          <p className="text-xs text-[#5A5A5A] " >{rec.difficulty} • {rec.videoCount ?? "—"} vidéos</p>
                        </div>
                      </div>
                      <div className="text-sm font-bold text-[#3BAE8C]">{rec.matchScore}%</div>
                    </div>
                    <p className="text-sm mb-3" style={{ color: "#5A5A5A" }}>{rec.description}</p>
                    <div className="flex justify-between items-center">
                      <Link href={`/dashboard/formations/${rec.id}`} className="text-[#1A4B84] font-semibold">Voir</Link>
                      <button className="px-3 py-1 rounded bg-[#1A4B84] text-white text-sm">S'inscrire</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg text-center">
                <div className="mb-3">
                  <div className="text-3xl font-bold" style={{ color: "#C9A646" }}>🚀</div>
                </div>
                <div className="mb-3">
                  <div className="text-sm font-semibold" style={{ color: "#1E1E1E" }}>Accès complet</div>
                  <div className="text-xs" style={{ color: "#5A5A5A" }}>Formation + guide + ressources</div>
                </div>
                <div className="mb-4">
                  <div className="text-sm line-through" style={{ color: "#5A5A5A" }}>79€</div>
                  <div className="text-2xl font-bold" style={{ color: "#1A4B84" }}>49€</div>
                </div>
                <Link href={`/dashboard/podcasts/${podcast.id}/payment`}>
                  <div className="px-4 py-3 rounded-lg font-bold cursor-pointer" style={{ backgroundColor: "#3BAE8C", color: "#fff" }}>
                    Commencer maintenant
                  </div>
                </Link>
                <div className="text-xs mt-2" style={{ color: "#5A5A5A" }}>✓ Accès à vie • ✓ Garantie 30 jours</div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold" style={{ color: "#1E1E1E" }}>Ressource</div>
                </div>
                <button onClick={downloadGuide} className="w-full px-3 py-2 rounded-lg text-sm font-medium" style={{ backgroundColor: "#EAF8F2", color: "#1A4B84" }}>
                  ⬇ Télécharger le guide du cours
                </button>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                <div className="font-semibold mb-2" style={{ color: "#1E1E1E" }}>Rejoindre la communauté</div>
                <p className="text-xs mb-3" style={{ color: "#5A5A5A" }}>Support, questions et partages — Discord privé</p>
                <a href="#" className="block px-3 py-2 rounded-lg text-center" style={{ backgroundColor: "#1A4B84", color: "#fff" }}>Rejoindre Discord</a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Quiz Modal */}
      {showQuizFor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold" style={{ color: "#1A4B84" }}>Quiz rapide — Chapitre {showQuizFor}</h3>
              <button onClick={closeQuiz} className="text-sm text-[#5A5A5A]">Fermer</button>
            </div>

            <p className="text-sm mb-4" style={{ color: "#5A5A5A" }}>
              1 question pour vérifier rapidement ta compréhension.
            </p>

            <div className="p-4 bg-[#F8FAFF] rounded-lg mb-4">
              <p className="font-medium" style={{ color: "#1E1E1E" }}>Question : Que permet de faire une stratégie de monétisation efficace ?</p>
              <div className="mt-3 space-y-2">
                <button className="w-full text-left p-2 rounded-lg border" style={{ borderColor: "#e6eef8" }}>A. Générer des revenus récurrents</button>
                <button className="w-full text-left p-2 rounded-lg border" style={{ borderColor: "#e6eef8" }}>B. Augmenter uniquement le trafic</button>
                <button className="w-full text-left p-2 rounded-lg border" style={{ borderColor: "#e6eef8" }}>C. Remplacer les compétences techniques</button>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={closeQuiz} className="flex-1 bg-gray-200 py-2 rounded-lg text-sm">Annuler</button>
              <button onClick={() => { alert("Réponse soumise — 1/1 correct (mock) 🎉"); setShowQuizFor(null); }} className="flex-1 bg-[#3BAE8C] py-2 rounded-lg text-white">Soumettre</button>
            </div>
          </div>
        </div>
      )}

      {/* Download toast */}
      {showDownloadToast && (
        <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-lg px-4 py-2" style={{ borderLeft: "4px solid #3BAE8C" }}>
          <div className="text-sm" style={{ color: "#1E1E1E" }}>Guide téléchargé ✓</div>
        </div>
      )}
    </div>
  );
}
