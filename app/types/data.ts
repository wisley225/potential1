interface User {
  email: string;
  password: string;
  role: 'user' | 'admin';
  name: string;
}

export default User