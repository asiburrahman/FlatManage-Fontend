import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../hooks/UseAuth';
import UseAxiosToken from '../hooks/UseAxiosToken';
import { formatDate } from '../API/utilities';

const UserProfile = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosToken();

  const { data: agreement = {}, isLoading } = useQuery({
    queryKey: ['userAgreement', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/agreements/user/${user.email}`);
      return data;
    },
  });

  if (isLoading) return <p className="text-center mt-10">Loading profile...</p>;

  const isApproved = agreement?.status === 'approved';
  const isPending = agreement?.status === 'pending';

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-base-200 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>
      <div className="flex flex-col items-center">
        <img src={user.photoURL} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
        <h3 className="text-lg font-semibold">{user.displayName}</h3>
        <p className="text-sm text-gray-600">{user.email}</p>
      </div>

      <div className="mt-6 space-y-2">
        <p><span className="font-semibold">Agreement Status:</span> {agreement?.status || 'none'}</p>
          <p><strong>Booking Date:</strong> {formatDate(agreement?.bookingDate)}</p>
        <p><strong>Accept Date:</strong> {formatDate(agreement?.acceptDate)}</p>
        <p><span className="font-semibold">Floor:</span> {isApproved ? agreement.floor : isPending ? agreement.floor + ' (Pending)' : 'none'}</p>
        <p><span className="font-semibold">Block:</span> {isApproved ? agreement.block : isPending ? agreement.block + ' (Pending)' : 'none'}</p>
        <p><span className="font-semibold">Apartment No:</span> {isApproved ? agreement.apartmentNo : isPending ? agreement.apartmentNo + ' (Pending)' : 'none'}</p>
      </div>
    </div>
  );
};

export default UserProfile;
