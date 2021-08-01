import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export function useLoading() {
  return useContext(LoadingContext);
}

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ setLoading }}>{children}</LoadingContext.Provider>
  );
}
