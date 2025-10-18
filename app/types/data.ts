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

