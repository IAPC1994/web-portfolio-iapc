import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer } from './';


export interface UIState {
    isNavbarOpen: boolean;
    isDarkMode: boolean;
}

const UI_INITIAL_STATE:UIState = {
    isNavbarOpen: false,
    isDarkMode: true,
}

export const UIProvider:FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const toggleNavbar = () => {
        dispatch({type:'[UI] - Navbar Toggle'});
    }

    const toggleTheme = () => {
        dispatch({type:'[UI] - Theme Toggle'});
    }

    return(
       <UIContext.Provider value={{
            ...state,

            //Methods
            toggleNavbar,
            toggleTheme
       }}>
            { children }
       </UIContext.Provider>
    );
}