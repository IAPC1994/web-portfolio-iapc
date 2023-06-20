import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer } from './';


export interface UIState {
    isNavbarOpen: boolean;
}

const UI_INITIAL_STATE:UIState = {
    isNavbarOpen: false,
}

export const UIProvider:FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const toggleNavbar = () => {
        dispatch({type:'[UI] - Navbar Toggle'});
    }

    return(
       <UIContext.Provider value={{
            ...state,

            //Methods
            toggleNavbar
       }}>
            { children }
       </UIContext.Provider>
    );
}