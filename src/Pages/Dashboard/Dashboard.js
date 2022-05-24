import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';

const Dashboard = () => {
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
                    <ul class="menu p-4 overflow-y-auto w-64 bg-gray-200 text-base-content ">
                        <li><button onClick={gotodashboard} className="font-semibold">My Orders</button></li>
                        <li><button onClick={gotoaddreview} className="font-semibold">Add Review</button></li>
                        <li><button onClick={gotomyprofile} className="font-semibold">My Profile</button></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;