import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/auth";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setCheckingAuth(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    logout,
  };

  // ⚠️ NO BLOQUEAMOS LA APP
  return (
    <AuthContext.Provider value={value}>
      {!checkingAuth && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
