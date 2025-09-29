'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  joinDate: string;
  lastLogin: string;
  formationsCount: number;
  podcastsCount: number;
};


export default function UsersManagement() {
  const [users, setUsers] = useState<UserType[]>([
    {
      id: 1,
      firstName: "Jean",
      lastName: "Dupont",
      email: "jean.dupont@email.com",
      status: "actif",
      joinDate: "2024-01-15",
      lastLogin: "2024-03-20",
      formationsCount: 3,
      podcastsCount: 5
    },
    {
      id: 2,
      firstName: "Marie",
      lastName: "Martin",
      email: "marie.martin@email.com",
      status: "actif",
      joinDate: "2024-02-03",
      lastLogin: "2024-03-19",
      formationsCount: 1,
      podcastsCount: 8
    },
    {
      id: 3,
      firstName: "Paul",
      lastName: "Durand",
      email: "paul.durand@email.com",
      status: "inactif",
      joinDate: "2024-01-28",
      lastLogin: "2024-02-15",
      formationsCount: 0,
      podcastsCount: 2
    },
    {
      id: 4,
      firstName: "Sophie",
      lastName: "Leroy",
      email: "sophie.leroy@email.com",
      status: "actif",
      joinDate: "2024-02-10",
      lastLogin: "2024-03-20",
      formationsCount: 2,
      podcastsCount: 3
    },
    {
      id: 5,
      firstName: "Thomas",
      lastName: "Moreau",
      email: "thomas.moreau@email.com",
      status: "actif",
      joinDate: "2024-03-01",
      lastLogin: "2024-03-18",
      formationsCount: 4,
      podcastsCount: 1
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('tous');
  // const [selectedUser, setSelectedUser] = useState<UserType | null>(null);

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

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'tous' || user.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleDeleteUser = (userId:number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  const toggleUserStatus = (userId:number) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === 'actif' ? 'inactif' : 'actif' }
        : user
    ));
  };

  const stats = {
    total: users.length,
    active: users.filter(u => u.status === 'actif').length,
    inactive: users.filter(u => u.status === 'inactif').length
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* En-tête */}
        <div className="mb-8 animate-on-scroll">
          <h1 className="text-3xl md:text-4xl font-['SUSE_Mono'] text-[#1e293b] mb-2">
            Gestion des Utilisateurs
          </h1>
          <p className="text-[#475569]">
            Gérez tous les utilisateurs de la plateforme
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm animate-on-scroll">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#1e293b]">{stats.total}</h3>
                <p className="text-[#475569] font-medium">Total Utilisateurs</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-xl flex items-center justify-center text-white">
                <FontAwesomeIcon icon="users" className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm animate-on-scroll">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#10b981]">{stats.active}</h3>
                <p className="text-[#475569] font-medium">Utilisateurs Actifs</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center text-white">
                <FontAwesomeIcon icon="user-check" className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm animate-on-scroll">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#dc2626]">{stats.inactive}</h3>
                <p className="text-[#475569] font-medium">Utilisateurs Inactifs</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-[#dc2626] to-[#b91c1c] rounded-xl flex items-center justify-center text-white">
                <FontAwesomeIcon icon="user-times" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Filtres et recherche */}
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm mb-8 animate-on-scroll">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher par nom ou email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3b82f6] focus:outline-none transition-colors"
                />
                <FontAwesomeIcon icon="search" className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
            
            <div className="md:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#3b82f6] focus:outline-none transition-colors"
              >
                <option value="tous">Tous les statuts</option>
                <option value="actif">Actifs</option>
                <option value="inactif">Inactifs</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tableau des utilisateurs */}
        <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-sm overflow-hidden animate-on-scroll">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f8fafc] border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1e293b]">Utilisateur</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1e293b]">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1e293b]">Statut</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1e293b]">Formations</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1e293b]">Podcasts</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1e293b]">Dernière Connexion</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1e293b]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredUsers.map((user, index) => (
                  <tr key={user.id} className="hover:bg-[#f8fafc] transition-colors animate-on-scroll" style={{animationDelay: `${index * 50}ms`}}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-full flex items-center justify-center text-white font-semibold mr-3">
                          {user.firstName[0]}{user.lastName[0]}
                        </div>
                        <div>
                          <div className="font-semibold text-[#1e293b]">
                            {user.firstName} {user.lastName}
                          </div>
                          <div className="text-sm text-[#475569]">
                            Inscrit le {new Date(user.joinDate).toLocaleDateString('fr-FR')}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-[#475569]">{user.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleUserStatus(user.id)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                          user.status === 'actif'
                            ? 'bg-green-100 text-green-800 hover:bg-green-200'
                            : 'bg-red-100 text-red-800 hover:bg-red-200'
                        }`}
                      >
                        {user.status === 'actif' ? 'Actif' : 'Inactif'}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-[#475569]">{user.formationsCount}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-[#475569]">{user.podcastsCount}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-[#475569]">
                        {new Date(user.lastLogin).toLocaleDateString('fr-FR')}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button
                          // onClick={() => setSelectedUser(user)}
                          className="text-[#3b82f6] hover:text-[#2563eb] transition-colors"
                          title="Voir les détails"
                        >
                          <FontAwesomeIcon icon="eye" className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-[#dc2626] hover:text-[#b91c1c] transition-colors"
                          title="Supprimer l'utilisateur"
                        >
                          <FontAwesomeIcon icon="trash" className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-between items-center animate-on-scroll">
          <div className="text-[#475569]">
            Affichage de {filteredUsers.length} utilisateur(s) sur {users.length}
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 border-2 border-gray-200 rounded-lg text-[#475569] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-colors">
              Précédent
            </button>
            <button className="px-3 py-2 bg-[#3b82f6] text-white rounded-lg">1</button>
            <button className="px-3 py-2 border-2 border-gray-200 rounded-lg text-[#475569] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-colors">
              2
            </button>
            <button className="px-3 py-2 border-2 border-gray-200 rounded-lg text-[#475569] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-colors">
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
