
import { createContext } from 'react';


interface ContextProps {
    isNavbarOpen: boolean;
    isDarkMode: boolean;

    //Methods
    toggleNavbar: () => void;
    toggleTheme: () => void;
}

export const UIContext = createContext({} as ContextProps);
