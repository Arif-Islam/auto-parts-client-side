import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Spinner from '../../Shared/Spinner';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <>
            <div className='mt-10'></div>
            <Spinner></Spinner>
        </>
    }
    if (!user || !admin) {
        signOut(auth);
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }

    return children;
};

export default RequireAdmin;