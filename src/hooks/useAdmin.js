import { useEffect, useState } from "react";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://auto-parts-backend.vercel.app/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                    // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },

            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                    setIsAdminLoading(false);
                })
        }
    }, [user]);

    return [admin, isAdminLoading];
}

export default useAdmin;