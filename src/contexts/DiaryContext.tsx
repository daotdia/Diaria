import React, { ReactNode, createContext, useState } from 'react';
import { Entry } from '../models/interfaces/Entry';  // Importa tu modelo Entry

interface DiaryContextProps {
  entries: Entry[];
  addEntry: (entry: Entry) => void;
  // Agrega más funciones según sea necesario...
}

export const DiaryContext = createContext<DiaryContextProps>({
  entries: [],
  addEntry: () => {},
  // Agrega más funciones por defecto aquí...
});

interface DiaryProviderProps {
    children: ReactNode;  // Define que children es una propiedad permitida
}

  
export const DiaryProvider: React.FC<DiaryProviderProps> = ({ children }) => {
    const [entries, setEntries] = useState<Entry[]>([]);
  
    const addEntry = (entry: Entry) => {
      setEntries([...entries, entry]);
      // Aquí puedes agregar la lógica para guardar la entrada en la base de datos...
    };
  
    // Agrega más funciones aquí...
  
    return (
      <DiaryContext.Provider value={{ entries, addEntry }}>
        {children}
      </DiaryContext.Provider>
    );
  };
