import { IUser } from 'interfaces';
import { createContext, useState } from 'react';

export const authContext = createContext<any>(null);

function AuthContext({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<IUser>({
    loading: null,
    id: null,
    email: null,
  });

  return (
    <authContext.Provider value={[auth, setAuth]}>
      {children}
    </authContext.Provider>
  );
}

export default AuthContext;
