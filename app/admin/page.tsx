'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 1247,
    activeUsers: 892,
    totalFormations: 45,
    totalPodcasts: 23,
    monthlyRevenue: 1250000,
    todayVisits: 156,
    weeklyVisits: 1247,
    monthlyVisits: 4567
  });

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

  // Données pour les graphiques
  const visitsData = {
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    datasets: [
      {
        label: 'Visites',
        data: [120, 135, 98, 156, 142, 167, 189],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const revenueData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Revenus (k FCFA)',
        data: [850, 920, 780, 1100, 1250, 1400],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(34, 197, 94, 0.8)',
        ],
        borderColor: [
          'rgb(16, 185, 129)',
          'rgb(59, 130, 246)',
          'rgb(245, 158, 11)',
          'rgb(139, 92, 246)',
          'rgb(236, 72, 153)',
          'rgb(34, 197, 94)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const userDistributionData = {
    labels: ['Actifs', 'Inactifs'],
    datasets: [
      {
        data: [stats.activeUsers, stats.totalUsers - stats.activeUsers],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgb(16, 185, 129)',
          'rgb(239, 68, 68)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#475569',
          font: {
            size: 12,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(148, 163, 184, 0.1)',
        },
        ticks: {
          color: '#64748b',
        },
      },
      x: {
        grid: {
          color: 'rgba(148, 163, 184, 0.1)',
        },
        ticks: {
          color: '#64748b',
        },
      },
    },
  };

  const statCards = [
    {
      title: "Utilisateurs Totaux",
      value: stats.totalUsers.toLocaleString(),
      icon: "users",
      color: "from-blue-500 to-blue-600",
      change: "+12% ce mois"
    },
    {
      title: "Utilisateurs Actifs",
      value: stats.activeUsers.toLocaleString(),
      icon: "user-check",
      color: "from-green-500 to-green-600",
      change: "+8% cette semaine"
    },
    {
      title: "Formations",
      value: stats.totalFormations.toString(),
      icon: "book",
      color: "from-purple-500 to-purple-600",
      change: "3 nouvelles cette semaine"
    },
    {
      title: "Podcasts",
      value: stats.totalPodcasts.toString(),
      icon: "podcast",
      color: "from-orange-500 to-orange-600",
      change: "1 nouveau cette semaine"
    },
    {
      title: "Revenus Mensuels",
      value: `${(stats.monthlyRevenue / 1000).toLocaleString()}k FCFA`,
      icon: "dollar-sign",
      color: "from-yellow-500 to-yellow-600",
      change: "+23% ce mois"
    },
    {
      title: "Visites Aujourd'hui",
      value: stats.todayVisits.toLocaleString(),
      icon: "chart-line",
      color: "from-indigo-500 to-indigo-600",
      change: "+15% vs hier"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "user",
      message: "Nouvel utilisateur inscrit: Jean Dupont",
      time: "Il y a 5 minutes",
      icon: "user-plus"
    },
    {
      id: 2,
      type: "formation",
      message: "Formation 'React Avancé' achetée par Marie Martin",
      time: "Il y a 12 minutes",
      icon: "shopping-cart"
    },
    {
      id: 3,
      type: "podcast",
      message: "Podcast 'Monétisation' écouté 15 fois aujourd'hui",
      time: "Il y a 25 minutes",
      icon: "play"
    },
    {
      id: 4,
      type: "user",
      message: "Utilisateur Paul Durand s'est connecté",
      time: "Il y a 1 heure",
      icon: "sign-in-alt"
    },
    {
      id: 5,
      type: "formation",
      message: "Nouvelle formation 'Node.js' publiée",
      time: "Il y a 2 heures",
      icon: "plus-circle"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* En-tête */}
        <div className="mb-8 animate-on-scroll">
          <h1 className="text-3xl md:text-4xl font-['SUSE_Mono'] text-[#1e293b] mb-2">
            Dashboard Administration
          </h1>
          <p className="text-[#475569]">
            Vue d&apos;ensemble de l&apos;activité de la plateforme
          </p>
        </div>

        {/* Statistiques principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {statCards.map((card, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center text-white`}>
                  {/* <FontAwesomeIcon icon={card.icon} className="w-6 h-6" /> */}
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#10b981] font-semibold">
                    {card.change}
                  </div>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-1">
                {card.value}
              </h3>
              <p className="text-[#475569] font-medium">
                {card.title}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Graphique des visites */}
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm animate-on-scroll">
            <h2 className="text-xl font-['SUSE_Mono'] text-[#1e293b] mb-6">
              Affluence du Site
            </h2>
            
            <div className="space-y-6">
              {/* Visites aujourd'hui */}
              <div className="flex items-center justify-between p-4 bg-[#f1f5f9] rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-lg flex items-center justify-center text-white mr-4">
                    <FontAwesomeIcon icon="chart-bar" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1e293b]">Visites Aujourd&apos;hui</div>
                    <div className="text-sm text-[#475569]">Comparé à hier</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#3b82f6]">{stats.todayVisits}</div>
                  <div className="text-sm text-[#10b981]">+15%</div>
                </div>
              </div>

              {/* Visites cette semaine */}
              <div className="flex items-center justify-between p-4 bg-[#f1f5f9] rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-lg flex items-center justify-center text-white mr-4">
                    <FontAwesomeIcon icon="chart-line" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1e293b]">Cette Semaine</div>
                    <div className="text-sm text-[#475569]">Comparé à la semaine dernière</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#10b981]">{stats.weeklyVisits}</div>
                  <div className="text-sm text-[#10b981]">+22%</div>
                </div>
              </div>

              {/* Visites ce mois */}
              <div className="flex items-center justify-between p-4 bg-[#f1f5f9] rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#f59e0b] to-[#d97706] rounded-lg flex items-center justify-center text-white mr-4">
                    <FontAwesomeIcon icon="calendar-alt" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1e293b]">Ce Mois</div>
                    <div className="text-sm text-[#475569]">Comparé au mois dernier</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#f59e0b]">{stats.monthlyVisits}</div>
                  <div className="text-sm text-[#10b981]">+18%</div>
                </div>
              </div>
            </div>

            {/* Graphique Chart.js */}
            <div className="mt-6 p-4 bg-[#f8fafc] rounded-lg">
              <div className="text-sm font-semibold text-[#1e293b] mb-3">Évolution des 7 derniers jours</div>
              <div className="h-64">
                <Line data={visitsData} options={chartOptions} />
              </div>
            </div>
          </div>

          {/* Activités récentes */}
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm animate-on-scroll">
            <h2 className="text-xl font-['SUSE_Mono'] text-[#1e293b] mb-6">
              Activités Récentes
            </h2>
            
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4 p-4 bg-[#f1f5f9] rounded-lg hover:bg-[#e2e8f0] transition-colors">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    {/* <FontAwesomeIcon icon={activity.icon} className="w-5 h-5 text-[#3b82f6]" /> */}
                  </div>
                  <div className="flex-1">
                    <p className="text-[#1e293b] font-medium">
                      {activity.message}
                    </p>
                    <p className="text-sm text-[#475569] mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <button className="w-full bg-[#3b82f6] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#2563eb] transition-colors">
                Voir toutes les activités
              </button>
            </div>
          </div>
        </div>

        {/* Actions rapides */}
        <div className="mt-8 animate-on-scroll">
          <h2 className="text-xl font-['SUSE_Mono'] text-[#1e293b] mb-6">
            Actions Rapides
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center text-white mb-4">
                <FontAwesomeIcon icon="book" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#1e293b] mb-2">
                Nouvelle Formation
              </h3>
              <p className="text-[#475569] mb-4">
                Créer une nouvelle formation et la publier
              </p>
              <button className="w-full bg-[#10b981] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#059669] transition-colors">
                Créer
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-[#f59e0b] to-[#d97706] rounded-xl flex items-center justify-center text-white mb-4">
                <FontAwesomeIcon icon="podcast" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#1e293b] mb-2">
                Nouveau Podcast
              </h3>
              <p className="text-[#475569] mb-4">
                Ajouter un nouveau podcast à la plateforme
              </p>
              <button className="w-full bg-[#f59e0b] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#d97706] transition-colors">
                Créer
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-xl flex items-center justify-center text-white mb-4">
                <FontAwesomeIcon icon="users" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#1e293b] mb-2">
                Gérer Utilisateurs
              </h3>
              <p className="text-[#475569] mb-4">
                Voir et gérer tous les utilisateurs
              </p>
              <button className="w-full bg-[#3b82f6] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#2563eb] transition-colors">
                Gérer
              </button>
            </div>
          </div>
        </div>

        {/* Graphiques supplémentaires */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Graphique des revenus */}
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm animate-on-scroll">
            <h2 className="text-xl font-['SUSE_Mono'] text-[#1e293b] mb-6">
              Évolution des Revenus
            </h2>
            <div className="h-64">
              <Bar data={revenueData} options={chartOptions} />
            </div>
          </div>

          {/* Répartition des utilisateurs */}
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm animate-on-scroll">
            <h2 className="text-xl font-['SUSE_Mono'] text-[#1e293b] mb-6">
              Répartition des Utilisateurs
            </h2>
            <div className="h-64">
              <Doughnut 
                data={userDistributionData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom' as const,
                      labels: {
                        color: '#475569',
                        font: {
                          size: 12,
                        },
                        padding: 20,
                      },
                    },
                  },
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
