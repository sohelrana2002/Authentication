import { createContext, useContext, useReducer } from "react"

// ====create contect======
const AuthContext = createContext();

// ====create provider====
const AuthProvider = ({ children }) =>{

    // ======store token in local storage====
    const storeTokenInLS = (serverToken) =>{
        return localStorage.setItem('token', serverToken)
    }


    const value = {
        storeTokenInLS,
    }
    return(
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
};

// =====custom hook========
const useAuthContext = () =>{
    return useContext(AuthContext);
};

export { AuthProvider, useAuthContext }