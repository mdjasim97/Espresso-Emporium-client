import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "./firebase/firebase.config";

export const AuthContext = createContext()

const ProviderContext = ({ children }) => {


    const handleCreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        handleCreateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ProviderContext;