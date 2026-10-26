
import { createContext } from 'react';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const user = {
    name: 'Nada',
    age: 20,
    email: 'nada@gmail.com',
    role: 'Frontend'
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
