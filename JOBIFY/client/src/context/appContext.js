import React, {useReducer, useContext} from "react";
import reducer from "./reducer";
import { DISPLAY_ALERT, CLEAR_ALERT } from "./actions";

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: "",
    alertType: ''
}

const AppContext = React.createContext()
const AppProvider = ({children}) => {
 const[state, dispath] = useReducer(reducer, initialState)

 const displayAlert = () => {
    dispath({type: DISPLAY_ALERT })
    clearAlert()
 }
 const clearAlert = (() => {
   dispath({type: CLEAR_ALERT })
 }, 3000)

    return <AppContext.Provider value={{...state, displayAlert}}>
     {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext)
}

export {AppProvider, initialState, useAppContext}