// MemberProfile.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/UseAuth';
import UseAxiosToken from '../../hooks/UseAxiosToken';

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
          }
        : {
            floor: 'N/A',
            block: 'N/A',
            apartmentNo: 'N/A',
          },
  };

  if (isLoading) return <div className="text-center">Loading...</div>;

  const { name, email, image, agreementDate, apartmentInfo } = profileData;
  const { floor, block, apartmentNo } = apartmentInfo || {};

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
      <div className="mt-6 space-y-2">
        <p>
          <strong>Agreement Date:</strong> {agreementDate || 'N/A'}
        </p>
        <p>
          <strong>Floor:</strong> {floor || 'N/A'}
        </p>
        <p>
          <strong>Block:</strong> {block || 'N/A'}
        </p>
        <p>
          <strong>Apartment No:</strong> {apartmentNo || 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default MemberProfile;
