import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/UseAuth';
import UseAxiosToken from '../../hooks/UseAxiosToken';
import { formatDate } from '../../API/utilities';
import Loading from '../../Loading/Loading';

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

  if (isLoading) return <Loading></Loading>

  const isPending = agreement?.status === 'pending';

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100 px-4">
  <div className="max-w-md w-full  shadow-xl rounded-xl p-8 bg-base-200">
    <h2 className="text-3xl font-bold text-center  mb-6">User Profile</h2>
    
    <div className="flex flex-col items-center">
      <img
        src={user.photoURL}
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover shadow mb-4"
      />
      <h3 className="text-xl font-semibold ">{user.displayName}</h3>
      <p className="text-sm ">{user.email}</p>
    </div>

    <div className="mt-6 space-y-3 border-t pt-4 ">
      <p>
        <span className="font-semibold">Agreement Status:</span>{' '}
        {agreement?.status || 'None'}
      </p>
      <p>
        <span className="font-semibold">Booking Date:</span>{' '}
        {formatDate(agreement?.bookingDate) || 'N/A'}
      </p>
      <p>
        <span className="font-semibold">Accept Date:</span>{' '}
        {formatDate(agreement?.acceptDate) || 'N/A'}
      </p>
      <p>
        <span className="font-semibold">Floor:</span>{' '}
        {isPending ? `${agreement.floor} (Pending)` : 'None'}
      </p>
      <p>
        <span className="font-semibold">Block:</span>{' '}
        {isPending ? `${agreement.block} (Pending)` : 'None'}
      </p>
      <p>
        <span className="font-semibold">Apartment No:</span>{' '}
        {isPending ? `${agreement.apartmentNo} (Pending)` : 'None'}
      </p>
    </div>
  </div>
</div>
  );
};

export default UserProfile;
