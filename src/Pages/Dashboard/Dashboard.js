import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Navbar from '../../Shared/Navbar/Navbar';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const navigate = useNavigate();
    const gotodashboard = () => {
        navigate('/dashboard');
    }
    const gotoaddreview = () => {
        navigate('addreview');
    }
    const gotomyprofile = () => {
        navigate('myprofile');
    }
    const goToMakeAdmin = () => {
        navigate('makeadmin');
    }
    const goToAddProduct = () => {
        navigate('addproduct');
    }
    const goManageProducts = () => {
        navigate('manageproducts');
    }
    const goManageOrders = () => {
        navigate('manageallorders');
    }
    return (
        <div>
            <Navbar></Navbar>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    {/* <p className='text-3xl font-semibold'>Dashboard</p> */}
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-64 bg-gray-200 text-base-content pt-8">
                        {
                            !admin && <>
                                <li><button onClick={gotodashboard} className="font-semibold">My Orders</button></li>
                                <li><button onClick={gotoaddreview} className="font-semibold">Add Review</button></li>
                                <li><button onClick={gotomyprofile} className="font-semibold">My Profile</button></li>
                            </>
                        }
                        {
                            admin && <>
                                <li><button onClick={goManageOrders} className="font-semibold">Manage All Orders</button></li>
                                <li><button onClick={goManageProducts} className="font-semibold">Manage Products</button></li>
                                <li><button onClick={goToAddProduct} className="font-semibold">Add Product</button></li>
                                <li><button onClick={goToMakeAdmin} className="font-semibold">Make Admin</button></li>
                                <li><button onClick={gotomyprofile} className="font-semibold">My Profile</button></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;