import { createContext, useState } from 'react';

type AuthContextType = {  
  token: string | null,
  linkFrame: (token: string, callback?: VoidFunction) => void;
  resetFrame: (callback?: VoidFunction) => void
};

export const AuthContext = createContext<AuthContextType>(null!);

type Props = {
  children: React.ReactNode
};

export default function AuthProvider({ children } : Props) {
  const [token, setToken] = useState(localStorage.getItem('auth_token'));

  const linkFrame = (token: string, callback?: VoidFunction) => {
    setToken(token);    
    localStorage.setItem('auth_token', token);        
    if (callback) {
      callback();
    }
  };

  const resetFrame = (callback?: VoidFunction) => {
    setToken(null);
    localStorage.removeItem('auth_token');
    if (callback) {
      callback();
    }
  };

  const value = { token, linkFrame, resetFrame };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

