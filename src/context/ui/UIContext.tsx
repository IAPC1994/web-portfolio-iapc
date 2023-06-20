
import { createContext } from 'react';


interface ContextProps {
    isNavbarOpen: boolean;

    //Methods
    toggleNavbar: () => void;
}

export const UIContext = createContext({} as ContextProps);
