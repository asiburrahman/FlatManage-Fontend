import React from 'react';
import Role from '../component/hooks/Role';
import Loading from '../component/Loading/Loading';
import { Navigate } from 'react-router';

const AdminProtectedRouts = ({children}) => {
    const {role, isLoading } = Role()

    if (isLoading) return <Loading></Loading>
    if (role.role==="admin") return children
    return <Navigate to='/' replace='true ' ></Navigate>
   
};

export default AdminProtectedRouts;