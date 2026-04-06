"use client";
import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface LoadingContextType {
  /** True when loading screen STARTS exit — use for above-fold content (Hero, Navbar) */
  isLoaded: boolean;
  /** True when loading screen has FULLY exited — use for below-fold / later sections */
  isFullyLoaded: boolean;
  onLoadComplete: () => void;
  onFullyLoaded: () => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoaded: false,
  isFullyLoaded: false,
  onLoadComplete: () => {},
  onFullyLoaded: () => {},
});

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);
  const onLoadComplete = useCallback(() => setIsLoaded(true), []);
  const onFullyLoaded = useCallback(() => setIsFullyLoaded(true), []);
  return (
    <LoadingContext.Provider value={{ isLoaded, isFullyLoaded, onLoadComplete, onFullyLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}
