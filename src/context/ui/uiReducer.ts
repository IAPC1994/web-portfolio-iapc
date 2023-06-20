import { UIState } from './';

type UIActionType = 
   | { type: '[UI] - Navbar Toggle' }


export const uiReducer = ( state: UIState, action:UIActionType ):UIState => {

    switch(action.type){
        case '[UI] - Navbar Toggle':
            return{
                ...state,
                isNavbarOpen: !state.isNavbarOpen
            }

        default:
            return state;
    }
}