import React from 'react';
import Loading from '../component/Loading/Loading';
import { Navigate } from 'react-router';
import Role from '../component/hooks/Role';

const MemberProtectedRouts = ({children}) => {
     const {role, isLoading } = Role()

    if (isLoading) return <Loading></Loading>
    if (role.role==="member") return children
    return <Navigate to='/' replace='true ' ></Navigate>
};

export default MemberProtectedRouts;