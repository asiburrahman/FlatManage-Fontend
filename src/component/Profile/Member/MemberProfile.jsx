// MemberProfile.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/UseAuth';
import UseAxiosToken from '../../hooks/UseAxiosToken';
import Loading from '../../Loading/Loading';

const MemberProfile = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosToken();

  const { data: agreement = {}, isLoading } = useQuery({
    queryKey: ['member-agreement', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/agreements/user/${user.email}`);
      return data;
    },
  });

  console.log(agreement);
  

  const profileData = {
    name: user?.displayName,
    email: user?.email,
    image: user?.photoURL,
    agreementDate:
      agreement?.status === 'checked'
        ? new Date(agreement?.bookingDate).toLocaleDateString('en-GB')
        : 'N/A',
    apartmentInfo:
      agreement?.status === 'checked'
        ? {
            floor: agreement?.floor,
            block: agreement?.block,
            apartmentNo: agreement?.apartmentNo,
            rent: agreement.rent
          }
        : {
            floor: 'N/A',
            block: 'N/A',
            apartmentNo: 'N/A',
          },
  };

  if (isLoading) return <Loading></Loading>;

  const { name, email, image, agreementDate, apartmentInfo } = profileData;
  const { floor, block, apartmentNo, rent } = apartmentInfo || {};

  return (
   <div className="flex justify-center items-center min-h-screen bg-base-100 px-4">
  <div className="max-w-xl w-full bg-base-200 shadow-xl rounded-xl p-8">
    <h2 className="text-3xl font-bold text-center  mb-6">Member Profile</h2>
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover shadow"
      />
      <div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="">{email}</p>
      </div>
    </div>
    <div className="mt-6 border-t pt-4 space-y-3 ">
      <p>
        <span className="font-semibold">Agreement Date:</span>{' '}
        {agreementDate || 'N/A'}
      </p>
      <p>
        <span className="font-semibold">Rent:</span>{' '}
        {rent || 'N/A'}
      </p>
      <p>
        <span className="font-semibold">Floor:</span>{' '}
        {floor || 'N/A'}
      </p>
      <p>
        <span className="font-semibold">Block:</span>{' '}
        {block || 'N/A'}
      </p>
      <p>
        <span className="font-semibold">Apartment No:</span>{' '}
        {apartmentNo || 'N/A'}
      </p>
    </div>
  </div>
</div>
  );
};

export default MemberProfile;
