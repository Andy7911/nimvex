import React,{createContext,useContext,useState,useEffect} from 'react';

const LoaderContext = createContext();

export function LoaderProvider({children}) {
    const [loadingCount, setLoadingCount] = useState(0);
      // Incrémenter le compteur de chargement
  const startLoading = () => setLoadingCount((prev) => prev + 1);

  // Décrémenter le compteur de chargement
  const stopLoading = () => setLoadingCount((prev) => Math.max(prev - 1, 0));

  const isLoading = loadingCount > 0;

  return (
    <LoaderContext.Provider value={{isLoading, startLoading, stopLoading }}>

        {children}
    </LoaderContext.Provider>

  )
}

export const useLoader = () => {
    const context = useContext(LoaderContext);
    if (!context) {
      throw new Error('useLoader must be used within a LoaderProvider');
    }
    return context;
  };