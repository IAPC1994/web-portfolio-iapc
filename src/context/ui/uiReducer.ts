import { UIState } from './';

type UIActionType = 
   | { type: '[UI] - Navbar Toggle' }
   | { type: '[UI] - Theme Toggle' }


export const uiReducer = ( state: UIState, action:UIActionType ):UIState => {

    switch(action.type){
        case '[UI] - Navbar Toggle':
            return{
                ...state,
                isNavbarOpen: !state.isNavbarOpen
            }
        case '[UI] - Theme Toggle':
            return{
                ...state,
                isDarkMode: !state.isDarkMode
            }

        default:
            return state;
    }
}