import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/UseAuth';
import UseAxiosToken from '../../hooks/UseAxiosToken';
import EditProfileModal from '../EditProfileModal';

const AdminProfile = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosToken();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: summary = {}, isLoading } = useQuery({
    queryKey: ['admin-summary'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin/summary');
      return res.data;
    }
  });

  if (isLoading) return <p className="text-center">Loading summary...</p>;

  return (
    <div className="w-9/12 mx-auto mt-20 p-6 space-y-6 bg-base-100 rounded shadow-md">
      {/* Admin Info */}
      <div className="flex justify-between items-start">
        <div className="text-center space-y-2 flex-grow">
          <img className="w-24 h-24 rounded-full mx-auto ring ring-primary ring-offset-2" src={user?.photoURL} alt="admin" />
          <h2 className="text-2xl font-bold">{user?.displayName}</h2>
          <p className="text-sm">{user?.email}</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="btn btn-sm btn-primary"
        >
          Edit Profile
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
        <div className="bg-base-200 p-4 rounded shadow">
          <h3 className="font-semibold">Total Apartments</h3>
          <p className="text-lg">{summary.totalRooms}</p>
        </div>
        <div className="bg-base-200 p-4 rounded shadow">
          <h3 className="font-semibold">Available Apartments</h3>
          <p className="text-lg">{summary.availableRooms} ({summary.availabilityPercent}%)</p>
        </div>
        <div className="bg-base-200 p-4 rounded shadow">
          <h3 className="font-semibold">Unavailable Apartments</h3>
          <p className="text-lg">{summary.agreedRooms} ({summary.agreementPercent}%)</p>
        </div>
        <div className="bg-base-200 p-4 rounded shadow">
          <h3 className="font-semibold">Total Users</h3>
          <p className="text-lg">{summary.users}</p>
        </div>
        <div className="bg-base-200 p-4 rounded shadow">
          <h3 className="font-semibold">Total Members</h3>
          <p className="text-lg">{summary.members}</p>
        </div>
      </div>
      <EditProfileModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default AdminProfile;
