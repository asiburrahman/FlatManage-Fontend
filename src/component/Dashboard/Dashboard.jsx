import React from 'react';
import Role from '../hooks/Role';
import Loading from '../Loading/Loading';
import UserProfile from '../Profile/UserProfile';

const Dashboard = () => {
    
    const {role, isLoading} = Role()
    if (isLoading) return <Loading></Loading>
    if (!role) return <div>No role found</div>;
    if (role.role== "admin") return <p>Hi admin</p>
    if (role.role == "user") return <UserProfile></UserProfile>
        
    
        

};

export default Dashboard;