import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading/Loading';
import ApartmentCard from './ApartmentCard';
import { Link, useNavigate } from 'react-router';
import useAuth from '../hooks/UseAuth';
import Swal from 'sweetalert2';
import Button from '../UI/Button/Button';

const HomeApartment = () => {
  const { user } = useAuth()
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: apartments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['apartments'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_base_url}/apartments`);
      return res.data;
    },
  });

  // Filter: Available and Recent (assuming array order or using a simple slice)
  const availableApartments = apartments
    .filter(apt => apt.booking?.status !== 'checked' && apt.booking?.status !== 'pending')
    .slice(0, 4);

  // Submit agreement mutation
  const agreementMutation = useMutation({
    mutationFn: async (apt) => {
      const agreementData = {
        userName: user.displayName,
        userEmail: user.email,
        floor: apt.floor,
        block: apt.block,
        apartmentNo: apt.apartmentNo,
        rent: apt.rent,
        status: 'pending',
        bookingDate: new Date().toISOString(),
      };

      const res = await axios.post(`${import.meta.env.VITE_base_url}/apartments`, agreementData);
      return res.data;
    },
    onSuccess: () => {
      const isDark = document.querySelector('html').getAttribute('data-theme') === 'dark';
      Swal.fire({
        title: 'Success!',
        text: 'Your agreement request has been submitted.',
        icon: 'success',
        background: isDark ? '#111827' : '#fff',
        color: isDark ? '#f9fafb' : '#374151'
      });
      queryClient.invalidateQueries(['apartments']);
    },
    onError: (error) => {
      const isDark = document.querySelector('html').getAttribute('data-theme') === 'dark';
      if (error?.response?.status === 400) {
        Swal.fire({
          title: 'Already Booked!',
          text: error.response.data.message,
          icon: 'info',
          background: isDark ? '#111827' : '#fff',
          color: isDark ? '#f9fafb' : '#374151'
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong while submitting the agreement.',
          icon: 'error',
          background: isDark ? '#111827' : '#fff',
          color: isDark ? '#f9fafb' : '#374151'
        });
      }
    },
  });

  const handleAgreement = (apt) => {
    if (!user) return navigate('/login');

    const isDark = document.querySelector('html').getAttribute('data-theme') === 'dark';
    Swal.fire({
      title: 'Confirm Agreement',
      text: `Do you want to request Apartment ${apt.apartmentNo} in Block ${apt.block}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, request it!',
      background: isDark ? '#111827' : '#fff',
      color: isDark ? '#f9fafb' : '#374151'
    }).then((result) => {
      if (result.isConfirmed) {
        agreementMutation.mutate(apt);
      }
    });
  };

  if (isLoading) return <Loading />;

  return (
    <div className="py-12">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Available Apartments</h2>
        <div className="h-1.5 w-24 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {availableApartments.map((apt) => (
          <ApartmentCard
            key={apt._id}
            apt={apt}
            handleAgreement={handleAgreement}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link to="/apartment">
          <Button variant="outline" size="lg">
            See More Apartments
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeApartment;