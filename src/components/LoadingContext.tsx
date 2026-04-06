"use client";
import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface LoadingContextType {
  isLoaded: boolean;
  onLoadComplete: () => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoaded: false,
  onLoadComplete: () => {},
});

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const onLoadComplete = useCallback(() => setIsLoaded(true), []);
  return (
    <LoadingContext.Provider value={{ isLoaded, onLoadComplete }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}
