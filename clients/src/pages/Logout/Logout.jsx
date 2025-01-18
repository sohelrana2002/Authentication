import { useEffect } from 'react'
import { useAuthContext } from '../../context/AuthContext';
import { Navigate } from "react-router-dom"

const Logout = () => {
    const { logOutUser } = useAuthContext();
    

    useEffect(() =>{
        logOutUser();
    }, [logOutUser])


  return <Navigate to="/" />
}

export default Logout