import { createContext, useReducer} from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
    user:null,
    isFetching:false,
    error:false,
};

export const Context = createContext()

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

    return(
        <ContextProvider value={{
            user: state.user,
            isFetnching: state.isFetching,
            error: state.error,
            dispatch,
        }} >
            {children}
        </ContextProvider>
    )
}