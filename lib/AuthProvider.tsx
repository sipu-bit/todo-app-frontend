"use client";

import React, { createContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";
import { setAuthToken } from "@/lib/authToken";

interface User {
  _id: string;
  username: string;
  email: string;
  phone?: string;
  age?: number;
  address?: string;
  profileImage?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      setLoading(false);
      return;
    }

    // set default axios header
    setAuthToken(token);

    axios
      .get("http://localhost:5000/api/verifyUser", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.valid && res.data.user) {
          setUser(res.data.user);
          localStorage.setItem("verifyUser", JSON.stringify(res.data.user));
        }
      })
      .catch(() => {
        handleLogout();
      })
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("verifyUser");
    setAuthToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
