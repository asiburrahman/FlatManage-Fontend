import React from 'react';
import Role from '../hooks/Role';
import Loading from '../Loading/Loading';
import UserProfile from '../Profile/User/UserProfile';
import AdminProfile from '../Profile/Admin/AdminProfile';
import MemberProfile from '../Profile/Member/MemberProfile';

const Dashboard = () => {
    
    const {role, isLoading} = Role()
    if (isLoading) return <Loading></Loading>
    if (!role) return <div>No role found</div>;
    if (role?.role== "admin") return <AdminProfile></AdminProfile>
    if (role?.role == "user") return <UserProfile></UserProfile>
    if (role?.role == "member") return <MemberProfile></MemberProfile>
        
    
        

};

export default Dashboard;