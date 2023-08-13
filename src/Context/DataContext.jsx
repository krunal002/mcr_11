import { createContext } from "react";
export const DataContext = createContext();

export const DataContextHandler = ({ children }) => {
  return (
    <div>
      <DataContext.Provider value={{ product: 4 }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};
