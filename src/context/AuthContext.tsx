/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { loginUser, registerUser, logoutUser } from "@/api/authApi";
import { getUserInfo } from "@/api/userApi";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  userRole: "guest" | "user" | "admin";
  conversionsUsed: number;
  planLimit: number | "Unlimited";
  isLoading: boolean;
  isAuthenticated: boolean;
  fetchUserInfo: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<"guest" | "user" | "admin">("guest");
  const [conversionsUsed, setConversionsUsed] = useState<number>(0);
  const [planLimit, setPlanLimit] = useState<number | "Unlimited">(50); // 50MB for guests
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // ✅ Load user on component mount (via cookie)
  useEffect(() => {
    const initializeAuth = async () => {
      setIsLoading(true);
      try {
        await fetchUserInfo();
      } catch (error) {
        console.error("❌ Failed to initialize auth:", error);
        setUserRole("guest");
        setConversionsUsed(0);
        setPlanLimit(50); // 50MB for guests
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const userInfo = await getUserInfo();
      console.log("👤 User info from backend:", userInfo);

      // ✅ Get authentication status from backend response
      const authenticated = userInfo.role && userInfo.role !== "guest";
      setIsAuthenticated(authenticated);

      if (authenticated && userInfo.user) {
        setUser(userInfo.user);
        setUserRole(userInfo.role);
        setConversionsUsed(userInfo.conversionsUsed || 0);

        // ✅ Use planLimit from backend if provided, otherwise use default
        setPlanLimit(userInfo.planLimit || "Unlimited");
      } else {
        setUser(null);
        setUserRole("guest");
        setConversionsUsed(0);
        setPlanLimit(50); // Default guest limit from your backend
      }
    } catch (error) {
      console.error("❌ Failed to fetch user info:", error);
      setUser(null);
      setUserRole("guest");
      setConversionsUsed(0);
      setPlanLimit(50);
      setIsAuthenticated(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      console.log("🔐 Starting login...");

      const res = await loginUser(email, password);
      console.log("✅ Login response:", res);

      // ✅ TEST: Immediately fetch user info after login
      console.log("🔄 Testing cookie/auth...");
      const userInfo = await getUserInfo();
      console.log("✅ User info after login:", userInfo);

      if (userInfo.role !== "guest") {
        setUser(res.user);
        setIsAuthenticated(true);
        await fetchUserInfo();
      } else {
        console.error("❌ Login succeeded but auth failed!");
      }
    } catch (error) {
      console.error("❌ Login failed:", error);
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const res = await registerUser(name, email, password);
      if (res.user) {
        setUser(res.user);
        setIsAuthenticated(true);
        await fetchUserInfo();
      }
    } catch (error) {
      console.error("❌ Registration failed:", error);
      setIsAuthenticated(false);
      throw error;
    }
  };

  const logout = async () => {
    try {
      console.log("🚪 Logging out user...");
      await logoutUser();
    } catch (error) {
      console.error(
        "Logout API call failed, but clearing frontend state:",
        error
      );
    } finally {
      // Always clear frontend state
      setUser(null);
      setUserRole("guest");
      setConversionsUsed(0);
      setPlanLimit(50); // 50MB for guests
      setIsAuthenticated(false);
      console.log("✅ User logged out successfully");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userRole,
        conversionsUsed,
        planLimit,
        isLoading,
        isAuthenticated,
        fetchUserInfo,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
