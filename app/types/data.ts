export interface User {
  email: string;
  password: string;
  role: 'user' | 'admin';
  name: string;
}



export interface Formation  {
    id: number;
    title: string;
    description: string;
    difficulty: string;
    technology: string;
    videoCount: number;
    category: string;
    price: number;
    originalPrice: number;
    duration: string;
    instructor: string;
    rating: number;
    students: number;
    badge?:boolean;
}[]


export  type formationsType= {
    id: number;
    title: string;
    description: string;
    difficulty: string;
    technology: string;
    videoCount: number;
    image: string;
  };




export type  podcastsType= {
    id: string;
    title: string;
    description: string;
    author: string;
    date: string;
    image: string;
  };







type UserProfile = 'freelance' | 'student' | 'reconversion';

type Chapter = {
  id: number;
  title: string;
  duration: string;
  quizAvailable: boolean;
  resources: number;
};

type ResourceFiles = {
  courseGuide: string;
  cheatSheet: string;
  starterKit: string;
  exerciseFiles: string;
};

 export type Recommendation = {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  technology: string;
  videoCount: number;
  matchScore: number;
};

 export type FormationDetails = {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  technology: string;
  category: string;
  instructor: string;
  instructorBio: string;
  rating: number;
  studentsCount: string;
  totalDuration: string;
  targetAudience: string[];
  tools: string[];
  detailedDescription: string;
  chapters: Chapter[];
  resources: ResourceFiles;
  similarFormationsByProfile: Record<UserProfile, Recommendation[]>;
};



